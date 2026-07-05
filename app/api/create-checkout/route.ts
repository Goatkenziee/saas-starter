import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { priceId } = await req.json();
  if (!priceId) {
    return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
  }

  let user = await prisma.user.findUnique({ where: { clerkId: userId } });

  if (!user) {
    user = await prisma.user.create({
      data: { clerkId: userId, email: "" },
    });
  }

  const session = await stripe().checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    customer: user.stripeCustomerId || undefined,
    customer_email: user.email || undefined,
    metadata: { clerkId: userId },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
