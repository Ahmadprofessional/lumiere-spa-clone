# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
`<footer>` with a full-bleed background image + dark overlay, containing a 3-column row (stacks to 1 column on mobile).

## Computed Styles

### Footer wrapper
- background-image: `/images/footer-bg.webp`, `background-size: cover`, `background-position: center`
- overlay: `linear-gradient(rgba(0,0,0,0.79), rgba(0,0,0,0.79))` composited over the image (i.e. a dark scrim so text is legible)
- text color base: cream/white tones (not black — this section is dark)
- generous vertical padding (~64-80px), 3 columns with gap

### Column 1 — Brand / Social
- footer logo image `/images/footer-logo.png` (round, ~130-160px displayed size, source is 500x500)
- Westminster training-partner logo `/images/westminster-logo.png` (white horizontal logo, source 1024x341, displayed narrower, e.g. ~180-210px wide)
- "Social Links:" heading — fontFamily Cormorant Garamond, fontSize 22px, fontWeight 500, color #D09F47, textTransform uppercase
- 2 icon buttons (Facebook, Instagram): white circle/rounded-square (`border-radius: 10%`), 40x40px, icon color `#69727D` (gray), icons from `icons.tsx` (`FacebookIcon`, `InstagramIcon`), links are placeholders (`#`)

### Column 2 — Massage Availability
- "Massage Availability" heading — Cormorant Garamond, 26px, fontWeight 500, color #D09F47, uppercase
- Body: "Open:" (Montserrat, 24px, bold, color #FFF7E8) then "Monday To Sunday" (Montserrat, 16px, bold, color #FFF7E8) on the next line

### Column 3 — Book Your Appointment
- "Book Your Appointment" heading — Cormorant Garamond, 26px, fontWeight 600, color #D09F47, uppercase
- Body paragraph: "Indulge in luxury. You deserve it." — Montserrat, 18px, fontWeight 300, color #F3E7D1
- "Book Now" button — background #C89A5B, color #fff, border-radius 3px, padding `12px 24px`, Montserrat 20px/500, href `/book-your-appointment/`

## Text Content (verbatim)
- Social Links:
- Massage Availability / Open: **Monday To Sunday**
- Book Your Appointment / Indulge in luxury. You deserve it. / Book Now

## Responsive Behavior
- **Desktop (≥768px):** 3 columns side by side
- **Mobile (<768px):** columns stack vertically, centered
- **Breakpoint:** 768px (matches header/grid)
