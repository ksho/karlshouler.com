import posthog from 'posthog-js'

// Next.js runs this file in the browser before the app hydrates, so PostHog is
// initialized exactly once for every page. With `defaults`, pageviews are also
// captured on client-side navigations (history changes), and pageleave events
// record time on page and scroll depth.
//
// The token and host come from .env.production, which `next build` loads and
// `next dev` does not, so local development sends nothing.
const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN

if (token) {
    posthog.init(token, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        // Once api_host points at the reverse proxy, this keeps links back to
        // PostHog (such as the toolbar) pointing at the PostHog app.
        ui_host: 'https://us.posthog.com',
        defaults: '2026-08-30',
        // No logins on this site, so only create person profiles for visitors
        // who are explicitly identified (none are).
        person_profiles: 'identified_only',
    })

    document.addEventListener('click', trackLinkClick, { capture: true })
}

// Booking links are the site's main call to action.
const BOOKING_HOSTS = ['fantastical.app']

// Records clicks on links that leave the site: booking links as
// `booking_link_clicked`, everything else as `outbound_link_clicked`.
function trackLinkClick(event: MouseEvent) {
    const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
    if (!anchor) return

    let url: URL
    try {
        url = new URL(anchor.href, window.location.href)
    } catch {
        return
    }
    if (url.host === window.location.host || !url.protocol.startsWith('http')) return

    const properties = {
        link_url: url.href,
        link_domain: url.hostname.replace(/^www\./, ''),
        link_text: anchor.textContent?.trim().slice(0, 200),
    }
    const isBooking = BOOKING_HOSTS.some((h) => url.hostname === h || url.hostname.endsWith(`.${h}`))

    // sendBeacon survives the page unloading when the link opens in this tab.
    posthog.capture(isBooking ? 'booking_link_clicked' : 'outbound_link_clicked', properties, {
        transport: 'sendBeacon',
    })
}
