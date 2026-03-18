# Auto-Designed Website Package - Shalom Day Spa

## 1) Assumptions and Inputs Used

- Business Name: Shalom Day Spa
- Business Type: Spa and wellness center
- Location: Adama, Ethiopia
- Primary Audience: Busy women professionals with stress and fatigue
- Secondary Audience: Adults seeking regular relaxation and skin-body wellness
- Core Services: Massage Therapy, Facial Treatments, Body Treatments
- Price Positioning: Premium-accessible
- Primary Goal: Online bookings
- Secondary Goal: Quick consultation calls
- Trust Assets: Experienced therapists, repeat clients, comfort-first process, hygienic setting
- Constraints: No medical guarantees, no fake urgency, no exaggerated claims

## 2) Creative Direction

### Style Archetype

Calm Editorial Luxury with modern conversion-focused structure.

### Visual Mood Statement

A refined spa aesthetic blending warm neutral tones, copper accents, rounded cards, and soft layered depth. The interface should feel serene, trustworthy, and high-end while remaining practical for local customers who need fast booking.

### Why This Direction Fits This Business

- Spa category requires emotional safety and visual calm.
- Premium-accessible positioning benefits from elegant typography and clean spacing.
- Booking-first objective requires strong CTA contrast and low-friction form UX.

## 3) UX Architecture

### Home Page IA

1. Sticky conversion header

- Goal: keep booking action visible at all times
- Components: brand, page nav, compact CTA

1. Hero split section

- Goal: communicate value proposition in first viewport
- Left: headline, sub-headline, dual CTA
- Right: weekly booking panel and quick metrics

1. Service quick cards

- Goal: scanability and service intent confirmation
- Components: three cards with short promise each

1. Differentiator band

- Goal: explain why Shalom is not generic
- Components: problem-to-outcome narrative + trust bullets

1. FAQ + Tone panel

- Goal: reduce hesitation and showcase tone adaptability
- Components: accordion FAQ + tone switcher output panel

1. Footer CTA

- Goal: final booking push
- Components: concise booking link and location signal

### Services Page IA

1. Services hero

- Goal: page context and promise

1. Three conversion service cards

- Goal: deep understanding per service
- Components: positioning line, what-you-get summary, outcome bullets, CTA

1. Booking process strip

- Goal: remove complexity
- Components: step 1 choose service, step 2 confirm, step 3 attend session

1. Footer CTA

- Goal: route to booking page

### Booking/Contact Page IA

1. Booking hero

- Goal: urgency + clarity

1. Booking layout (2-column)

- Left: structured booking form
- Right: urgency and trust side panel

1. Smart form microcopy

- Goal: reduce friction and reassure users

1. Submission feedback state

- Goal: immediate confirmation and expectation setting

## 4) Design System Tokens

### Colors

- --base-950: #1c2325 (primary text)
- --base-800: #2d3b3f (secondary text)
- --base-700: #415257 (muted/support)
- --cream-100: #f9f3eb (page background)
- --cream-200: #f0e3d3 (panel background)
- --cream-300: #e8d3bb (support surface)
- --accent-500: #b56e43 (primary action)
- --accent-600: #985733 (accent text)
- --line: rgba(28, 35, 37, 0.14)
- --card: rgba(255, 251, 245, 0.88)

### Typography

- Display/Headings: Cormorant Garamond
- Body/UI: Plus Jakarta Sans
- Heading style: high contrast serif for premium tone
- Body style: clean sans for modern readability

### Spacing and Layout

- Max width: 1140px / 92vw
- Section vertical rhythm: 1.25rem to 2.3rem
- Card padding: 1rem to 2rem responsive
- Radius scale: 16px and 24px

### Components

- Header: rounded sticky glass bar
- Buttons:
  - Primary gradient pill
  - Outline accent pill
- Cards: soft blur-like panel with subtle shadow
- Tabs: tone switch chips with active state
- Form fields: rounded 12px with clear focus ring

## 5) Conversion Copy Set

### Home

- Headline: Restore Your Energy in a Calm, Personalized Spa Experience
- Sub-headline: Shalom Day Spa in Adama helps busy women and professionals reduce stress, ease body tension, and feel renewed through treatments tailored to their real needs.
- Primary CTA: Book Your Session
- Secondary CTA: Call for Quick Consultation

### Services

- Massage: targeted relief for stress-heavy days
- Facial: personalized skin care for glow and confidence
- Body: full-body renewal and deep relaxation

### CTA Library (Final Placement)

- Header CTA: Reserve Slot
- Hero primary: Book Your Session
- Hero secondary: Call for Quick Consultation
- Services CTA: Book/Reserve per service card
- Contact page CTA: Send Booking Request
- Footer CTA: Book your personalized spa session in Adama today

## 6) Motion and Interaction Specs

- Reveal animation:
  - translateY from 16px to 0
  - opacity 0 to 1
  - duration ~520ms
- Hover micro-interaction:
  - button translateY(-1px)
  - gentle shadow/contrast shift
- Sticky header:
  - blur backdrop + rounded shell
- Tone switcher:
  - tab active state and dynamic content panel
- Booking form:
  - prevent default submit in static mode
  - show success feedback text instantly

## 7) Mode B: Builder Prompt (Lovable/Framer)

Create a premium spa website for Shalom Day Spa (Adama) with a calm editorial luxury style. Use warm neutrals, copper accents, a serif display font and clean sans body font. Build three pages: Home, Services, Book. On Home, include sticky rounded header with CTA, hero split layout, service quick cards, differentiator story band, FAQ accordion, and tone switcher panel. On Services, use three detailed service cards plus simple process strip. On Book, use two-column layout with a structured form and trust/urgency side panel. Keep the conversion goal focused on bookings and consultation calls. Ensure mobile-first responsiveness, clear focus states, and polished motion under 250ms for hover with subtle section reveal on load.

## 8) Mode C: Developer Handoff

### HTML Structure Plan

- index.html
  - header.site-header
  - section.hero-shell
  - section.service-quick
  - section.story-band
  - section.dual-panels (faq + tone)
  - footer.site-footer

- services.html
  - header.site-header
  - section.hero-shell.compact
  - section.service-grid
  - section.process-strip
  - footer.site-footer

- contact.html
  - header.site-header
  - section.hero-shell.compact
  - section.booking-layout (form-panel + contact-panel)
  - footer.site-footer

### CSS Plan

- Base: root tokens, reset, typography
- Layout: wrap, page-stack, responsive grids
- Components: header, buttons, cards, tabs, forms
- Utilities: muted, tag, num, reveal
- Media query at 980px for one-column collapse

### JS Behavior Plan

- Tone switch render map for 4 voice styles
- Active tab state management
- Booking form submit intercept and confirmation message

### Accessibility Checklist

- Semantic headings in descending order
- Descriptive labels on all form fields
- Keyboard-focus visible for form and buttons
- Color contrast maintained for text and action controls
- Touch target sizing adequate on mobile

## 9) Final QA Summary

- Design direction is premium and non-generic.
- Conversion flow is visible on every page.
- Mobile behavior is explicitly defined.
- Implementation mapping is complete for HTML/CSS/JS handoff.
