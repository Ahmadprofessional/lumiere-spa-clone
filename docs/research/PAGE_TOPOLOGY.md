# Page Topology — lumierespa.co.uk (homepage)

Source: WordPress + Elementor (Astra theme). Homepage is a single flat page, no client-side routing.

## Layout
- Single scroll container (native browser scroll, no Lenis/smooth-scroll library detected)
- No scroll-snap
- Header is `position: static` (NOT sticky — does not change on scroll)
- A scroll-to-top button (`#ast-scroll-top`) is hidden by default (`display:none`) and appears after the user scrolls down some threshold (Astra theme default behavior), fixed bottom-right, arrow icon, smooth-scrolls to top on click.

## Sections (top to bottom)

1. **Header** (`<header>`, height ~184px desktop)
   - Logo image (Lumière wordmark + "Luxury Wellness & Spa" subtext, single AVIF image, centered)
   - Horizontal nav below logo, centered: Home / About Us / Treatments / Contact Us / Training / Gift Voucher
   - Active page ("Home") has an animated gold underline (`::after`, 3px tall, width = text width, transition 0.3s cubic-bezier(0.58,.3,.005,1))
   - Below 768px: nav collapses to a gold hamburger button (top-right of logo) that toggles a full-width white dropdown list of the same 6 links

2. **Signature Experiences heading block**
   - H2 "SIGNATURE EXPERIENCES" — Cormorant Garamond, 45px/500, uppercase, black, centered
   - H2 "CURATED RITUALS FOR MIND, BODY & SOUL" — Montserrat 18px/500, uppercase, black, centered (subtitle)

3. **Treatment cards grid** — 2 rows x 2 columns (desktop), each row is its own flex container with `gap:20px`, wraps to 1-column stack below 768px
   - Row 1: "Back, Neck & Shoulder Escape", "Swedish Relaxation Massage"
   - Row 2: "Aromatherapy Massage", "Deep Tissue Massage"
   - Each card: thin gold border (0.8px solid #C89A5B), square image (581x581 desktop) on top, heading, price line(s), description paragraph, gold "Book Now" button

4. **Footer** (`<footer>`, dark, background image `Footer-Image-of-lumiere.webp` + `rgba(0,0,0,0.79)` black overlay)
   - 3 columns:
     - Col 1: footer logo (round), Westminster training-partner logo, "Social Links:" heading, Facebook + Instagram icon buttons (white circular, 40x40)
     - Col 2: "Massage Availability" heading (gold) + "Open: **Monday To Sunday**" (cream text)
     - Col 3: "Book Your Appointment" heading (gold) + "Indulge in luxury. You deserve it." + gold "Book Now" button → /book-your-appointment/

## Interaction model per section
- Header nav: static positioning, no scroll-driven behavior. Mobile nav: click-driven (hamburger toggles dropdown, no animation observed beyond instant show/hide).
- Cards: static, no hover transform detected (button hover keeps white text, no other visible change in the button/card CSS rules).
- Footer: static.
- Global: scroll-to-top button is scroll-driven (appears after threshold), click scrolls to top.

## Breakpoints observed
- **768px** (actually flips at ≤767px): nav → hamburger; card rows wrap to single column
- No distinct behavior change spotted between 768px and 1440px (nav/cards stay in desktop layout across that range)
