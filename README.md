# SaaS Starter

A modern SaaS starter template with:

- **Authentication** — Clerk (email, Google, GitHub OAuth)
- **Payments** — Stripe subscriptions (Free / Pro / Enterprise)
- **Database** — Prisma + PostgreSQL (Neon)
- **UI** — Tailwind CSS + shadcn/ui components
- **Dashboard** — Protected route with subscription info

## Getting Started

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npm run db:push` to sync the schema
5. Run `npm run dev`

## Environment Variables

See `.env.example` for all required variables. You'll need:
- Clerk publishable + secret keys
- Database URL (Neon / Supabase)
- Stripe secret + publishable keys
- Stripe price IDs for Pro and Enterprise plans
