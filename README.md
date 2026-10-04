# CXGRD Website

CXGRD is an AI-native architectural guardrail system that helps engineering teams understand system change impact before code is written or merged. This repository contains the public website and app shell that supports the CXGRD product experience: marketing pages, auth flows, billing, GitHub integration, and team-facing dashboards.

This app complements the CLI and core analysis engine in the broader monorepo, providing the UI for onboarding, pricing, product education, and secure authentication with GitHub and team systems.

## What this app does

The website is responsible for:

- Presenting the CXGRD product and value proposition
- Handling auth flows for the CLI and GitHub OAuth
- Managing billing and subscription-related web flows
- Exposing team, dashboard, and product configuration pages
- Serving API endpoints used by the CLI and integration layer
- Integrating analytics, email, and webhook-based automation

## Core features

- Next.js 16 application with TypeScript
- Dark, product-focused UI built with Tailwind CSS
- GitHub OAuth login and CLI auth session flow
- Team and billing management surfaces
- Resend-based email handling and webhook processing
- Supabase-backed authentication and data plumbing
- PostHog analytics integration
- Route-level API layer for auth, billing, and team operations

## Tech stack

- Framework: Next.js 16
- UI: React 19 + TypeScript
- Styling: Tailwind CSS
- Database/client utilities: Supabase + PostgreSQL
- Email: Resend
- Auth: GitHub OAuth + custom JWT/session flow
- Monitoring: PostHog
- Deployment target: Vercel-friendly app structure

## Local development

### Prerequisites

- Node.js 20+
- npm
- A local `.env.local` file with the required values

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Environment variables

Create a `.env.local` file in this folder and add the required variables. Example:

```env
# Core app config
SITE_URL=http://localhost:3000
GITHUB_ORG_LINK=https://github.com/cxgrd

# Auth
CXGRD_AUTH_TOKEN_SECRET=your_secret_here
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
GITHUB_REDIRECT_URI=http://localhost:3000/api/auth/github/callback
GITHUB_WEBHOOK_SECRET=your_github_webhook_secret
GITHUB_APP_ID=your_github_app_id
GITHUB_APP_CLIENT_ID=your_github_app_client_id
GITHUB_APP_CLIENT_SECRET=your_github_app_client_secret
GITHUB_APP_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"

# Database / Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Billing / email
RESEND_API_KEY=re_your_key_here
OWNER_EMAIL=team@cxgrd.com
DODO_API_KEY=your_dodo_api_key
DODO_WEBHOOK_SECRET=your_dodo_webhook_secret
NEXT_PUBLIC_DODO_CXGRD_TEAM_KEY=your_team_product_key

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

> Keep secrets out of source control. The project includes environment-driven configuration for local and production usage.

## Important app areas

### App routes

Key user-facing routes include:

- `/` — marketing homepage
- `/pricing` — product pricing and plans
- `/team` — team onboarding and invite flow
- `/dashboard` — authenticated team dashboard
- `/auth/cli` — CLI onboarding entry page
- `/auth/github` — GitHub auth UI flow
- `/auth/success` and `/auth/error` — post-auth outcomes
- `/billing` — billing surfaces and subscription management
- `/legal` — privacy, terms, and refund policy pages
- `/status` — app health/status pages

### API routes

The app exposes server routes under `app/api` for:

- `auth` — GitHub OAuth, CLI auth polling, cookie/JWT auth state
- `billing` — subscription and billing portal operations
- `check` — verification and entitlement checks
- `teams` — team creation, member sync, install state, merge policy support
- `webhooks` — GitHub and Dodo webhook handlers
- `subscribe` — legacy email signup route

## Project structure

```text
website/
├── app/
│   ├── api/                    # Server routes and backend endpoints
│   ├── auth/                   # Auth UI pages and flows
│   ├── billing/                # Billing and subscription pages
│   ├── changelog/              # Release notes and changelog views
│   ├── dashboard/              # Team dashboard pages
│   ├── legal/                  # Legal pages
│   ├── pricing/                # Pricing pages
│   ├── status/                 # Health/status pages
│   ├── team/                   # Team setup and invite flows
│   ├── globals.css             # Global styling and theme foundation
│   ├── layout.tsx              # App shell and global layout
│   ├── page.tsx                # Homepage entry
│   └── home-client.tsx         # Homepage client component
├── components/                 # Reusable UI components
├── lib/                        # Database, auth, GitHub, billing, and utility logic
├── public/                     # Static assets
├── .env.local                  # Local environment config (not committed)
├── .env                        # Example or shared env file if present
├── package.json                # Project scripts and dependencies
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript config
├── ROUTES.md                   # API route documentation
├── SETUP.md                    # Setup and troubleshooting guide
├── SUMMARY.md                  # Project summary or operational notes
├── README.md                   # This file
└── ...
```

## Typical development workflow

1. Install dependencies.
2. Create `.env.local` with required secrets.
3. Run the app locally with `npm run dev`.
4. Use the local auth and billing flows during implementation.
5. Validate route behavior and UI changes in the browser.
6. Run `npm run build` before deployment to catch config/runtime issues.

## Deployment notes

This app is designed to work well in a Vercel-style deployment environment. Common production requirements include:

- Valid environment variables for auth, billing, and analytics
- Proper GitHub OAuth configuration
- Database connectivity for team and auth state
- Secure webhook validation for GitHub and payment events
- Correct `SITE_URL` and redirect configuration
