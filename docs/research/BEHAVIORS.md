# Behaviors — lumierespa.co.uk (homepage)

## Header / Nav
- **Position**: `static` — no shrink, no background change, no shadow on scroll.
- **Active link indicator**: `.elementor-item-active::after` — `position:absolute; bottom:0; left:0; height:3px; width:<text width>; background:#C89A5B; transition:0.3s cubic-bezier(0.58,.3,.005,1)`. Only rendered under the current page's link (Home on the homepage); does not follow hover on other links (verified: hovering "About Us" leaves the underline under "Home" unchanged).
- **Mobile nav** (viewport ≤767px): hamburger button (`.elementor-menu-toggle`, 33x33px, bg `#D09F47`, white icon, `border-radius:3px`) toggles a `position:absolute; width:100%; background:#fff` dropdown containing the same 6 links stacked vertically. Click-driven, INTERACTION MODEL: click-to-toggle, no transition observed on open/close (instant).

## Scroll-to-top button
- `#ast-scroll-top`, `display:none` by default, becomes visible after the page is scrolled down past Astra's default threshold. Fixed bottom-right, arrow icon. Click → smooth scroll to top. INTERACTION MODEL: scroll-driven visibility + click action.

## Cards (treatment cards)
- No hover transform/shadow/scale detected in stylesheet rules scoped to the card containers.
- "Book Now" button hover rule (`.elementor-button:hover`) only re-asserts `color:#fff` — i.e., no visible hover change beyond default cursor. Treat as static.

## Responsive breakpoint
- Nav switches to hamburger and card rows wrap to a single column at **≤767px** (tested 768px = still desktop layout, 767px = mobile layout). No intermediate tablet-specific layout was observed between 768px and 1440px.

## No client-side interactivity found
- No tabs, accordions, carousels, modals, or IntersectionObserver-driven animations on this page.
- No smooth-scroll library (Lenis/Locomotive) — native scrolling.
- No scroll-snap.
- No parallax layers.
