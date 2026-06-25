import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10" as any,
  typescript: true,
});

export const PLANS = {
  FREE: {
    name: "Free",
    priceId: null,
    price: 0,
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
  },
  PRO: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID || "price_pro",
    price: 29,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
      "Team members (5)",
    ],
  },
  ENTERPRISE: {
    name: "Enterprise",
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || "price_enterprise",
    price: 99,
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "SSO / SAML",
      "Dedicated support",
      "Custom integrations",
      "99.99% SLA",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;
