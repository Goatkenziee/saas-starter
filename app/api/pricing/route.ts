import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["1 project", "Basic analytics", "Community support"],
      priceId: null,
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Custom domains",
        "Team members",
      ],
      priceId: process.env.STRIPE_PRO_PRICE_ID || null,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large scale operations",
      features: [
        "Everything in Pro",
        "SSO & SAML",
        "Dedicated support",
        "SLA guarantee",
        "Custom integrations",
        "Audit logs",
      ],
      priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || null,
      popular: false,
    },
  ];

  return NextResponse.json({ plans });
}
