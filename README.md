
# Sophia Foundation — Next.js App

Elegant, fast website for the Sophia Foundation with:
- **Donate** via Stripe Checkout or Payment Link
- **Impact** page that totals donations using the Stripe API (server-side)
- **For Families (AI)** assistant powered by OpenAI
- **About DIPG** informational page
- **Contact**

## Quick Start

```bash
npm i
cp .env.example .env.local
# Fill in your keys in .env.local
npm run dev
```

## Stripe Setup

1. Create a **Price** in Stripe (or use a **Payment Link** if you prefer).
2. Put `STRIPE_SECRET_KEY` and either `STRIPE_PRICE_ID` (Checkout) or `STRIPE_PAYMENT_LINK` (Payment Link) in `.env.local`.
3. For Checkout mode, set `STRIPE_CHECKOUT_MODE=checkout`.
4. (Optional) Set `STRIPE_PRODUCT_IDS` or `STRIPE_PRICE_IDS` to limit which payments contribute to the **Impact** totals.
5. (Optional) Add a **Webhook** (`/api/stripe-webhook`) if you want to extend post‑payment behavior.

## Deploy (Vercel)

1. Push this folder to a **GitHub repo**.
2. Go to **Vercel → New Project → Import** your repo.
3. Add environment variables from `.env.example` in **Vercel → Settings → Environment Variables**.
4. Deploy. Your site URL will look like `https://<project-name>.vercel.app`.

## OpenAI Setup

- Add `OPENAI_API_KEY` in `.env.local` (and Vercel env).
- The Families page calls `/api/chat` which streams answers from OpenAI.
- For web search augmentation, plug any search API in `/app/api/chat/route.ts` (see TODO comment).

## Customization

- Colors are set in `tailwind.config.ts` and `.btn` utility classes.
- Navigation in `components/NavBar.tsx`.
- Pages live in `app/`.

---

