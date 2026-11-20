# Analytics

The site sends analytics to the **karlshouler.com** project in PostHog (US cloud,
organization "Florence Ventures LLC").

## Current setup

- `instrumentation-client.ts` initializes `posthog-js` once for every page.
- `.env.production` holds `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and
  `NEXT_PUBLIC_POSTHOG_HOST`. Only `next build` loads it, so `npm run deploy`
  builds send events and `npm run dev` sends nothing. The token is PostHog's
  public, write-only browser key, so it is committed.
- Events:
  - `$pageview`, including client-side navigations.
  - `$pageleave`, with time on page and scroll depth.
  - `$autocapture` clicks.
  - `booking_link_clicked`: clicks on Fantastical booking links.
  - `outbound_link_clicked`: clicks on any other link that leaves the site.

  Both link events carry `link_url`, `link_domain` and `link_text`.

## Planned: managed reverse proxy

**Why:** Events currently go straight to `us.i.posthog.com`, and ad blockers drop
them. PostHog estimates a proxy recovers 10–30% of events, and likely more for a
technical audience. The fix is to send events through a subdomain of
karlshouler.com.

**Approach:** Use PostHog's managed reverse proxy. It is free on PostHog Cloud,
and the plan allows 10 proxies (none are in use yet). It needs no new
infrastructure: no CloudFront or S3 changes and nothing to maintain. PostHog
runs the proxy through Cloudflare and handles TLS itself.

### Steps

1. **Pick a subdomain.** Pick something neutral, for example `e.karlshouler.com`.
   Avoid `analytics`, `tracking`, `telemetry`, `posthog` and `ph`, because ad
   blockers target those words.
2. **Create the proxy in PostHog.** Go to Organization settings → Proxy
   (<https://us.posthog.com/settings/organization-proxy>), click **New managed
   proxy** and enter the subdomain. PostHog generates a target like
   `<id>.proxy-us.posthog.com`.
3. **Add the CNAME record at Hover**, which hosts the DNS (`ns1/ns2.hover.com`):
   - Name: the subdomain part only, for example `e`
   - Target: the `*.proxy-us.posthog.com` value from step 2
4. **Wait for the proxy to go live.** Its status in PostHog moves from
   **waiting** to **issuing** to **live**. That usually takes 2–5 minutes, and up
   to 30 minutes if DNS is slow. If it stays in **issuing** for longer than that,
   use **Diagnose** or **Retry** on the proxy.
5. **Update the code:**
   - In `.env.production`, set
     `NEXT_PUBLIC_POSTHOG_HOST=https://e.karlshouler.com`, using your subdomain.
   - In `instrumentation-client.ts`, add `ui_host: 'https://us.posthog.com'` to
     `posthog.init`. This keeps links back to PostHog, such as the toolbar,
     pointing at the PostHog app instead of the proxy.
6. **Build and deploy** with `npm run build && npm run shipit`.
7. **Verify.** Load the site and check the browser's network tab: requests
   should go to the new subdomain, not `us.i.posthog.com`. In PostHog, new
   `$pageview` events should carry `$lib_custom_api_host`. Once they do, the
   "No reverse proxy" health check clears.

### Alternative considered

Proxying through the existing CloudFront distribution, under a path on
karlshouler.com, would be slightly harder for blockers to detect than a
subdomain. It needs:

- two new origins, `us.i.posthog.com` and `us-assets.i.posthog.com`;
- two cache behaviors with caching disabled, POST allowed and query strings
  forwarded;
- a CloudFront Function to strip the path prefix.

That is about an hour of AWS console work, lives outside the repo and has to be
maintained, so the managed proxy is the better fit for this site.

References: <https://posthog.com/docs/advanced/proxy>,
<https://posthog.com/docs/advanced/proxy/cloudfront>
