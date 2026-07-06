# BRAIN.md

## What this app does
Build me a SaaS starter with auth, Stripe subscriptions, a Postgres database, dashboard, and a polished landing page.

## Current state
PASS 2/3 complete: All 5 deploy-time env vars (DATABASE_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRO_PRICE_ID, STRIPE_ENTERPRISE_PRICE_ID) set as managed secrets on the app. NODE_ENV is auto-provided by Vercel — no action needed. Code handles missing vars gracefully with fallbacks/clear errors. Ready for PASS 3/3 (Vercel deploy).

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
- [✓] PASS 2/3: Set all 5 deploy-time env vars as managed secrets. NODE_ENV is auto-provided by Vercel.

## What's still pending
- PASS 3/3: Vercel deploy — needs Vercel integration token refreshed (expired). Reconnect at Settings → Integrations → Vercel.

## User preferences detected
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-07-06T00:00:23.305Z
- Autonomous iteration: 24
