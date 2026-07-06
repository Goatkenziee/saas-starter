# BRAIN.md

## What this app does
Build me a SaaS starter with auth, Stripe subscriptions, a Postgres database, dashboard, and a polished landing page.

## Current state
The AI provider was unavailable during this run (server error). Any files written to your workspace were saved. Please try again in a few minutes — the build will resume from your workspace files.

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
✅ All 4 issues fixed in PASS 3/3:
1. ✅ Env vars are deploy-time settings — code handles missing vars gracefully, no change needed.
2. ✅ Prisma schema validation — added placeholder DATABASE_URL to .env for local dev.
3. ✅ Stripe API version — changed "2024-11-20.acacia" → "2024-04-10" in lib/stripe.ts.
4. ✅ Build passes — `npm run build` exits 0, all pages compile successfully.

## What's still pending
- Deploy to Vercel (needs Vercel integration reconnected).

## User preferences detected
- Keep changes focused, modern, and production-ready.

## Run notes
- Last updated: 2026-07-06T00:15:45.084Z
- Autonomous iteration: 24
