# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static position (no scroll behavior); mobile nav is click-driven

## DOM Structure
`<header>` > centered logo image > `<nav>` with 6 links, centered below logo. On mobile, logo + hamburger button in a row, hamburger toggles a full-width dropdown of the same links.

## Computed Styles

### Header container
- position: static (no shadow/bg-change on scroll)
- background: transparent (white page bg shows through)
- padding: 0 (header height ~184px desktop, driven by logo + nav row heights)

### Logo image
- source: `/images/logo.avif` (single image containing wordmark "LUMIÈRE" + "LUXURY WELLNESS & SPA" subtext, gold serif + gold sans)
- desktop rendered width: ~351px, height: ~88px (aspect ratio preserved, natural 833x209)
- centered horizontally

### Nav (desktop, ≥768px)
- display: flex, centered, gap via link padding
- link: fontFamily Cormorant Garamond, fontSize 22px, fontWeight 700, color #C89A5B, padding 13px 20px, textTransform none
- active link ("Home" on homepage): same color, plus `::after` — position absolute, bottom:0, left:0, height:3px, width:100% of link text, background #C89A5B, transition `0.3s cubic-bezier(0.58,.3,.005,1)`

### Nav (mobile, <768px)
- hamburger button: 33x33px, background #D09F47, color white, border-radius 3px, centered icon (use `MenuIcon` from icons.tsx)
- toggled dropdown: position absolute, width 100%, background #ffffff, stacked links same font styles as desktop, full-width padding 13px 20px each
- click-driven: clicking hamburger toggles dropdown open/closed; clicking a link or outside closes it

## Text Content (verbatim)
Nav items: Home, About Us, Treatments, Contact Us, Training, Gift Voucher
(hrefs: /, /about-us/, /treatments/, /contact-us/, /training/, /gift-voucher/ — use `/` for Home since this is a homepage clone; other links can point to `#` placeholders since only the homepage is in scope)

## Responsive Behavior
- **Desktop (≥768px):** logo centered on its own row, nav centered on the row below, all 6 links inline
- **Mobile (<768px):** logo left-aligned (or centered, matches source), hamburger button appears top-right, nav becomes toggleable dropdown
- **Breakpoint:** 768px (tested: 768px = still desktop nav, 767px = hamburger)
