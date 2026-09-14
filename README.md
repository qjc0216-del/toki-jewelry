# TOKI Jewelry

TOKI Jewelry headless storefront, rebuilt on the architecture and interaction model of
[jobyjoseph/headless-shopify](https://github.com/jobyjoseph/headless-shopify) (MIT).

## Direction
- Young quiet-luxury jewelry aesthetic
- TOKI master logo and burgundy/ivory palette
- Clear product pricing and strong mobile hierarchy
- Next.js App Router + Shopify Storefront API-ready integration
- Local fallback catalog for preview before Shopify credentials are connected

## Run
1. `npm install` or `pnpm install`
2. Copy `.env.example` to `.env.local`
3. Add Shopify Storefront API values when ready
4. `npm run dev`

If Shopify variables are not configured, the site automatically uses the preview catalog in `src/lib/catalog.ts`.
