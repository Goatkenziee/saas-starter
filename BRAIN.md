# BRAIN.md

## What this app does
Build me a SaaS starter with auth, Stripe subscriptions, a Postgres database, dashboard, and a polished landing page.

## Current state
VERIFICATION FIX PASS 1/3 complete. The verifier flagged 6 server-side env vars (DATABASE_URL, NODE_ENV, STRIPE_ENTERPRISE_PRICE_ID, STRIPE_PRO_PRICE_ID, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET) as "must be configured in Vercel." 

**Assessment: This is a deploy-time/env config warning, not a code bug.** All 6 vars are server-side-only (no `NEXT_PUBLIC_` prefix), meaning they're meant to be set in Vercel's environment variables dashboard. The code handles every case gracefully:
- `lib/db.ts` returns a mock Prisma proxy if `DATABASE_URL` is missing (throws only on actual queries)
- `lib/stripe.ts` throws a clear error if `STRIPE_SECRET_KEY` is missing
- `app/api/pricing/route.ts` falls back to `null` for price IDs
- `app/api/webhooks/stripe/route.ts` returns 500 if `STRIPE_WEBHOOK_SECRET` is missing
- `NODE_ENV` is auto-set by Vercel/Next.js

No code changes needed — this is purely an env config task in the Vercel dashboard.

All 9 managed secrets were already set in the previous run. The only blocker to deploy is the expired Vercel integration token.

## Tech stack and why
- Next.js 14 (App Router) — React framework
- Clerk — Auth (ready to use)
- Stripe — Payments/subscriptions
- Prisma + PostgreSQL — Database
- Tailwind CSS — Styling
- Framer Motion — Animations
- Lucide React — Icons

## What has been built
31 files total — all source code for a complete SaaS starter:
- Landing page with hero, features, CTA
- Pricing page (fetches plans from server API)
- Dashboard page (post-auth landing)
- Auth pages (sign-in, sign-up via Clerk)
- API routes: create-checkout, create-portal, pricing, stripe webhooks
- UI components: Button, Card
- Lib: stripe client, stripe server, Prisma DB client, utils
- Prisma schema (User + Subscription models)
- Middleware (Clerk auth)
- Config: next.config, tailwind, postcss, tsconfig, package.json

## Latest verification
- [x] TypeScript compiles ✓
- [x] Build succeeds ✓
- [x] GitHub repo pushed ✓
- [x] Pricing page uses server API (no client-side NEXT_PUBLIC_STRIPE_* vars) ✓
- [x] All 9 managed secrets set ✓
- [x] eslint + eslint-config-next in devDependencies ✓
- [x] postinstall handles missing DATABASE_URL gracefully ✓
- [ ] Vercel deploy — BLOCKED: Vercel integration token expired

## What's still pending
- Reconnect Vercel integration → deploy
- The 6 server env vars flagged by the verifier are deploy-time settings, not code bugs — no code changes needed

## User preferences detected
- Keep changes focused, modern, and production-ready.
- Surgical edits only — never rewrite working code.

## Run notes
- Last updated: 2026-07-05T22:07:26.848Z
- Autonomous iteration: 2
