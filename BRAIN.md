# BRAIN.md

## What this app does
Build me a SaaS starter with auth, Stripe subscriptions, a Postgres database, dashboard, and a polished landing page.

## Current state
VERIFICATION FIX PASS 1/3 complete. All 6 server env vars (DATABASE_URL, NODE_ENV, STRIPE_ENTERPRISE_PRICE_ID, STRIPE_PRO_PRICE_ID, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET) set as managed secrets via set_app_secret. No code changes needed — these are deploy-time settings, not code bugs. The app correctly reads them via `process.env.X` on the server side only.

## Tech stack and why
Detected from workspace files; preserve this stack unless the user asks to change it.

## What has been built
- .env
- .env.example
- .env.local
- .gitignore
- CRITERIA.md
- PROJECT_STATE.json
- app/api/create-checkout/route.ts
- app/api/create-portal/route.ts
- app/api/pricing/route.ts
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

## Latest verification
- [x] All 6 server env vars set as managed secrets (DATABASE_URL, NODE_ENV, STRIPE_ENTERPRISE_PRICE_ID, STRIPE_PRO_PRICE_ID, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET)

## What's still pending
- Vercel deploy — blocked by expired integration token. User needs to reconnect at Settings → Integrations → Vercel.

## User preferences detected
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-07-05T22:10:00.000Z
- Verification fix pass: 1/3
