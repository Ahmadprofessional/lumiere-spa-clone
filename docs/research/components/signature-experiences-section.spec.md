# SignatureExperiences Section Specification

## Overview
- **Target file:** `src/components/SignatureExperiences.tsx` (heading block + 4 `TreatmentCard`s in a 2x2 grid)
- **Interaction model:** static

## DOM Structure
Centered heading block, then a grid of 4 treatment cards (2 columns desktop, 1 column mobile), each card built from the shared `TreatmentCard` component.

## Computed Styles

### Section wrapper
- max content width matches header/footer container (~1345px content area within 1440px viewport, i.e. site container with side padding)
- vertical spacing: generous padding above heading and between heading block and grid (~ py-16/py-20 equivalent)

### Heading block (centered)
- H2 "SIGNATURE EXPERIENCES": fontFamily Cormorant Garamond, fontSize 45px, fontWeight 500, color #000000, textTransform uppercase, centered
- H2 "CURATED RITUALS FOR MIND, BODY & SOUL" (subtitle): fontFamily Montserrat, fontSize 18px, fontWeight 500, color #000000, textTransform uppercase, centered, margin-top small gap below main heading

### Grid
- 2 columns x 2 rows desktop, `gap: 20px` both directions
- 1 column mobile (stacks below 768px, matches header breakpoint)

## TreatmentCard sub-component
- **Target file:** `src/components/TreatmentCard.tsx`
- border: `0.8px solid #C89A5B`, no border-radius, no box-shadow
- image: square (581x581 natural), full width of card, `object-fit: cover`, no radius
- heading: fontFamily Cormorant Garamond, fontSize 24px, fontWeight 600, color #000, textTransform uppercase, padding-top ~small gap under image
- price line(s): fontFamily Montserrat, fontSize 18px, fontWeight 500, color #000, textTransform uppercase — one line per duration/price pair, stacked (use `<br/>`-equivalent, i.e. one line per array item)
- description: fontFamily Montserrat, fontSize 18px, fontWeight 400, color #000
- "Book Now" button: background #C89A5B, color #fff, border-radius 3px, padding `12px 24px`, fontFamily Montserrat, fontSize 20px, fontWeight 600, no hover transform (hover keeps white text — treat as static, cursor pointer only)
- inner content (heading/price/description/button) has horizontal padding matching the image's alignment (image is flush to border edges, text has ~small inset)

## Text Content (verbatim, per card)

1. **Back, Neck & Shoulder Escape** — image `/images/treatment-back-neck-shoulder.avif`
   - Price: `30 Minutes | £45`
   - Description: "Melt away everyday stress with a focused massage targeting tension in the back, neck and shoulders."
2. **Swedish Relaxation Massage** — image `/images/treatment-swedish.avif`
   - Prices: `45 Minutes | £75`, `60 Minutes | £90`, `90 Minutes | £120`
   - Description: "A timeless massage using flowing movements and gentle kneading to soothe body and mind."
3. **Aromatherapy Massage** — image `/images/treatment-aromatherapy.avif`
   - Prices: `45 Minutes | £80`, `60 Minutes | £90`, `90 Minutes | £120`
   - Description: "Relaxation" (verbatim from source — short/placeholder copy on the live site, kept as-is)
4. **Deep Tissue Massage** — image `/images/treatment-deep-tissue.avif`
   - Prices: `45 Minutes | £75`, `60 Minutes | £90`, `90 Minutes | £120`
   - Description: "Escape into deep relaxation with premium aromatherapy oils, carefully selected to enhance your wellbeing." (verbatim from source, despite mentioning aromatherapy oils on the Deep Tissue card)

All 4 "Book Now" buttons: text "Book Now", href → `/book-your-appointment/` (placeholder, matches footer CTA target)

## Responsive Behavior
- **Desktop (≥768px):** 2x2 grid, cards ~647px wide each
- **Mobile (<768px):** 1 column, full width cards
- **Breakpoint:** 768px (matches header)
