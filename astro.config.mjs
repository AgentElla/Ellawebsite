// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// Standalone one-page personal-brand site.
//
// Output is fully static: there are no server routes, no forms posting back to
// an API, and nothing that needs to run per-request. Static ships plain HTML to
// Cloudflare's edge with no Worker invocation, which is the fastest possible
// path for the mobile Core Web Vitals this build is optimised for. Deployment
// is via wrangler.jsonc `assets`, so this stays Cloudflare-native without the
// SSR adapter the multi-page site needs for its contact endpoint.
export default defineConfig({
  site: 'https://www.itsellasiew.com',
  output: 'static',
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: true,
      policy: [{ userAgent: '*', allow: '/' }],
    }),
  ],
});
