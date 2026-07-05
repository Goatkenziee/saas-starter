import Stripe from "stripe";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set — configure it in your environment variables."
    );
  }
  return new Stripe(key, {
    apiVersion: "2025-02-24.acacia",
    typescript: true,
  });
}

let _stripe: Stripe | null = null;
export function stripe(): Stripe {
  if (!_stripe) _stripe = getStripe();
  return _stripe;
}

export const PLANS = {
  free: {
    name: "Free",
    priceId: null,
    price: 0,
    features: ["1 project", "Basic analytics", "Community support"],
  },
  pro: {
    name: "Pro",
    priceId: process.env.STRIPE_PRO_PRICE_ID || "price_pro",
    price: 29,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Custom domains",
    ],
  },
  enterprise: {
    name: "Enterprise",
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || "price_enterprise",
    price: 99,
    features: [
      "Everything in Pro",
      "SSO",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
    ],
  },
} as const;

export type PlanKey = keyof typeof PLANS;
