# BRAIN.md

## What this app does
Build me a SaaS starter with auth, Stripe subscriptions, a Postgres database, dashboard, and a polished landing page.

## Current state
All 3 verification issues fixed. Build passes cleanly. App is ready for deployment.

## Tech stack and why
- Next.js 14.2 + TypeScript + Tailwind CSS — fast, modern, Vercel-native
- Clerk — auth (SignIn/SignUp buttons, middleware, user hooks)
- Stripe — subscriptions via lazy-init pattern (stripe() function)
- Prisma + PostgreSQL — database ORM
- Framer Motion — animations
- Lucide React — icons

## What has been built
- .env.local
- .gitignore
- CRITERIA.md
- PROJECT_STATE.json
- app/api/create-checkout/route.ts
- app/api/create-portal/route.ts
- app/api/webhooks/stripe/route.ts
- app/dashboard/page.tsx
- app/globals.css
- app/layout.tsx
- app/page.tsx
- app/pricing/page.tsx
- app/sign-in/[[...sign-in]]/page.tsx
- app/sign-up/[[...sign-up]]/page.tsx
- components/ui/button.tsx
- components/ui/card.tsx
- lib/db.ts
- lib/stripe-client.ts
- lib/stripe.ts
- lib/utils.ts
- middleware.ts
- next.config.mjs
- package.json
- postcss.config.js
- prisma/schema.prisma
- tailwind.config.ts
- tsconfig.json

## Latest verification (PASS 1/3 — ALL ISSUES FIXED)
- [1] FIXED: Server env vars (NODE_ENV, STRIPE_*, DATABASE_URL) set as managed app secrets. They auto-inject into previews and deploys.
- [2] FIXED: Prisma DATABASE_URL set as app secret — Prisma schema resolves correctly during build.
- [3] FIXED: Build crashed on `/api/webhooks/stripe` because `stripe` was imported as a value at module scope but env vars weren't set yet. Changed `lib/stripe.ts` to export a lazy `stripe()` function that only initializes Stripe when called. Updated all 3 API routes to call `stripe()` instead of referencing `stripe` directly.

## What's still pending
- Deploy to Vercel (needs GitHub repo + Vercel project)
- Configure real Stripe keys in Vercel dashboard
- Configure real Clerk publishable/secret keys in Vercel dashboard
- Provision a real Postgres database and update DATABASE_URL

## User preferences detected
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-07-05T21:46:30.000Z
- Autonomous iteration: 1
