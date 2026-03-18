# Auto-Designed Website Package: Shalom Day Spa (Modern Stack)

## 1) Assumptions and Inputs Used

- **BUSINESS_NAME:** Shalom Day Spa
- **BUSINESS_TYPE:** Luxury Spa & Wellness Retreat
- **LOCATION:** Metro Area (Local Business)
- **TARGET_AUDIENCE_PRIMARY:** Affluent professionals seeking deep relaxation and premium self-care.
- **CORE_SERVICES:** Signature Massages, Advanced Facials, Bridal Packages, Holistic Body Treatments.
- **PRICE_POSITIONING:** Premium / High-End
- **BRAND_PERSONALITY_WORDS:** Sophisticated, Calming, Elevated, Restorative.
- **PRIMARY_GOAL:** Drive high-ticket service bookings.
- **TECH TARGET:** Next.js, TailwindCSS, Shadcn UI, Framer Motion.

## 2) Creative Direction

### Style Archetype

Modern Editorial Luxury (Bento & Glass)

### Visual Mood Statement

A serene, high-end digital sanctuary. The UI trades rigid traditional blocks for an asymmetrical, editorial flow. Hero sections feature large, rounded-arch masked imagery with frosted, floating "glassmorphism" badges (e.g., "✦ Expert Care"). Service listings use an elegant Bento Box grid to break up monotony, utilizing warm cream backgrounds (`bg-stone-50`), soft copper typography, and deep indigo or warm slate contrast layers to create depth.

### Why This Direction Fits This Business

Standard boxy templates make a spa look like a clinical utility. By applying modern software paradigms—Tailwind's fluid bento grids, overlapping elements, and soft backdrop blurs—the website feels like a highly curated, premium app experience. It visually translates the feeling of layered luxury and expert care before the user even books.

## 3) UX Architecture

### Home Page IA

1. **Glassmorphism Hero:** Full-viewport or asymmetrical split-screen. Soft arch-masked image. Floating blurred pills: `(✦ Top Rated Spa)` over the image. H1 statement. Primary `Reserve Slot` CTA + secondary `View Menu` text link.
2. **Trust & Vibe Strip:** A soft, continuous ticker or minimalist flex row of logos/press, plus a "4.9/5 Average Rating" floating card.
3. **Bento Box Service Preview (CSS Grid):** A 3x2 bento grid. Large card for "Signature Massage" (spans 2 cols), accompanied by smaller square cards for "Facials" and "Aromatherapy". Each features a hover-scale image.
4. **The "Layered" About Section:** Overlapping images of the spa interior with an offset white card detailing the "Shalom Philosophy."
5. **Modern Testimonial Carousel:** Framer Motion-powered sliding cards with translucent borders.
6. **Footer & Final CTA:** Deep colored background (`bg-stone-900`) with a massive, elegant Serif CTA: "Your Retreat Awaits."

### Services Page IA

1. **Minimalist Header:** Soft gradient background fading into white.
2. **Filterable Service List:** Shadcn UI `Tabs` component to filter between [Massages] [Facials] [Packages].
3. **Immersive Service Cards:** Each item uses a staggered layout. Instead of tabular pricing, use modern cards with subtle drop shadows (`shadow-xl shadow-stone-200/50`) and an integrated "Book" icon button.
4. **FAQ Accordions:** Shadcn `Accordion` component for pre-booking questions.

### Booking/Contact Page IA

1. **Split-Screen Layout:**
   - Left side: Sticky sticky column with contact details, floating geometric shapes, and a softly blurred location map.
   - Right side: Clean, multi-step Shadcn UI Form to capture booking requests cleanly, avoiding long scrolling forms.

## 4) Design System Tokens (Tailwind + Shadcn)

### Colors (Tailwind Config extends)

- **Backgrounds:** `bg-stone-50` (warm off-white), `bg-white` (surface)
- **Primary Accent:** `text-amber-700` / `bg-amber-700` (soft warm copper/gold for CTAs)
- **Secondary Accent:** `bg-indigo-900` (deep contrast for footer and alternative sections)
- **Text Base:** `text-stone-800` (primary headings), `text-stone-500` (body copy)
- **Glassmorphism:** `bg-white/60 backdrop-blur-md border border-white/20`

### Typography

- **Display/Headings:** `font-serif` (e.g., Cormorant Garamond or Playfair Display). Applied via `text-5xl md:text-7xl tracking-tight`.
- **Body/UI:** `font-sans` (e.g., Plus Jakarta Sans or Inter). Applied via `text-base md:text-lg font-light`.

### Spacing and Layout (Bento & Grids)

- **Bento Grid:** `grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6`
- **Masks:** `rounded-[2rem]` (Soft curves) or custom `[clip-path:ellipse(...)]` for high-end organic shapes.
- **Section Padding:** `py-24 md:py-32` for breathing room.

### Components (Shadcn Mappings)

- **Button:** `variant="default"` (Amber rounded-full), `variant="outline"` (Ghost button with copper border).
- **Cards:** Custom Shadcn Card with stripped-back borders and added `shadow-stone-200/50`.
- **Badges:** `rounded-full px-4 py-2 text-sm bg-white/80 backdrop-blur-md`

## 5) Conversion Copy Set

### Home

- **Hero H1:** "Luxury Care For Body & Mind."
- **Hero Subtext:** "A refined wellness experience in a calming space, combining expert care with thoughtful design."
- **Bento Title 1:** "Complete Total Relaxation" (Card copy: "Tailored treatments to refresh your body and uplift your mood.")
- **Bento Title 2:** "Personalized Beauty"

### Services

- **Headline:** "Treatments Chosen For Your Comfort."
- **Value Prop:** "From our signature hot stone therapies to bespoke botanical facials, every moment is crafted for you."

### CTA Library

- **Primary Target:** `Reserve Your Moment` or `Book Appointment` (Solid Amber, Pill shape)
- **Secondary Target:** `Explore Our Menu` (Text link with an arrow `group-hover:translate-x-1` via Tailwind)
- **Trust Elements:** "Rated 5 Stars by 100+ Locals"

## 6) Motion and Interaction Specs (Framer Motion)

- **Hero Reveals:** Staggered load. H1 fades up `y: 20, opacity: 0` -> `y: 0, opacity: 1` over `0.6s`.
- **Bento Box Hover:** `hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out`. Imgages inside bento boxes `hover:scale-105 duration-700`.
- **Floating Badges:** Gentle continuous levitation `animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}`.
- **Navigation:** Shadcn UI Navigation Menu with smooth animated indicator pill sliding behind active links.
