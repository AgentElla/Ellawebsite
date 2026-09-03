## Project status (as of 2026-09-03)

`main` is the **only** source of the production site — a single-page Astro
site, built at the repo root (not nested under a subfolder). There is no
other production source: no Vercel project, no archived multi-page site
branch. Do not treat any other branch, folder, or deployment as production.

**Hosting / deploy pipeline**
- Repo: `AgentElla/Ellawebsite` on GitHub (this repo's `origin`), default
  branch `main`.
- Cloudflare Workers project `ella-siew-onepage` (static assets, no SSR
  Worker script) is connected to `main` via Cloudflare's Git integration
  (Workers & Pages → `ella-siew-onepage` → Settings → Build). Every push to
  `main` auto-builds (`npm run build`) and auto-deploys
  (`npx wrangler deploy`) — verified working with multiple real commits.
- Domains `itsellasiew.com` (apex) and `www.itsellasiew.com` are bound as
  Cloudflare Workers **Custom Domains** (not Workers Routes, not Pages)
  directly to this Worker. DNS lives on Cloudflare nameservers
  (`*.ns.cloudflare.com`); email-related DNS records were preserved during
  the Namecheap → Cloudflare nameserver move. Cloudflare Web Analytics is
  enabled for this domain.
- The apex domain 301-redirects to the `www` canonical via a Cloudflare
  **Redirect Rule** on the `itsellasiew.com` zone ("Redirect from root to
  WWW"), preserving path and query string. "Always Use HTTPS" is enabled on
  the zone so plain-HTTP apex requests reach the same redirect. `www` is the
  canonical host everywhere (canonical tag, sitemap, structured data).
- **Vercel is no longer used for this site in any way.** The old Vercel
  project, its domain associations, and the Vercel GitHub App's access to
  this repo have been removed. Do not recreate a Vercel project or
  deployment for this site, and do not add back a `vercel.json` or `.vercel`
  config.
- `public/_redirects` 301-redirects every route the old multi-page site had
  (`/about`, `/contact`, `/services`, `/services/*`, `/locations`,
  `/locations/*`) to `/`, since the one-page site has no equivalent routes.

**Content / integration notes**
- `src/data/brand.ts` is the single source of truth for contact info and
  copy. Current contact email: `hello@consultproservices.com`. Registered
  company name: `Consultpro Services Limited`.
- Booking is an **inline** Cal.com embed (`src/components/Booking.astro`),
  not an element-click popup. The section lives at `#booking` near the
  bottom of the homepage, and every "Book a call" control site-wide is a
  plain `<a href="#booking">` (the site's existing global
  `scroll-behavior: smooth` handles the jump and already respects
  `prefers-reduced-motion`). The Cal.com embed script is lazy-loaded via
  `IntersectionObserver` when the section nears the viewport, and the
  container reserves a fixed `min-height` up front to avoid layout shift.
  The Cal.com link itself (`consultpro/booking`) is unchanged from before.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
