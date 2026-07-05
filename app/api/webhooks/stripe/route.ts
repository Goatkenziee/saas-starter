import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const body = await req.text();
  const signature = (await headers()).get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  switch (event.type) {
    case "checkout.session.completed": {
      const clerkId = session.metadata?.clerkId;
      if (!clerkId) break;

      const user = await prisma.user.findUnique({ where: { clerkId } });
      if (!user) break;

      // Period dates come via customer.subscription.updated webhook
      await prisma.subscription.upsert({
        where: { userId: user.id },
        update: {
          stripeSubscriptionId: session.subscription as string,
          status: "active",
          plan: "pro",
        },
        create: {
          userId: user.id,
          stripeSubscriptionId: session.subscription as string,
          status: "active",
          plan: "pro",
        },
      });
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      const user = await prisma.user.findFirst({
        where: { stripeCustomerId: customerId },
      });
      if (!user) break;

      await prisma.subscription.update({
        where: { userId: user.id },
        data: {
          status:
            subscription.status === "active" ||
            subscription.status === "trialing"
              ? "active"
              : "inactive",
          currentPeriodStart: new Date(
            subscription.current_period_start * 1000
          ),
          currentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      });
      break;
    }
  }

  return NextResponse.json({ received: true });
}
