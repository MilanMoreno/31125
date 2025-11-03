# Fractal Traders Landing Page - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from professional fintech and SaaS products:
- **Stripe**: Clean professionalism, trust-building through simplicity
- **Linear**: Sharp typography, restrained color usage
- **Robinhood**: Financial data presentation, dark mode aesthetics
- **Trading platforms**: Chart-focused, data-driven visual hierarchy

**Design Principles**:
- Professional credibility and trust
- Clear value communication
- Minimal distraction for conversion focus
- Trading-appropriate dark aesthetic

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (financial/trading context):
- Background: 220 15% 8% (deep navy-black)
- Surface: 220 15% 12% (elevated cards)
- Border: 220 10% 20% (subtle divisions)

**Brand Colors**:
- Primary: 210 100% 55% (professional blue - trust and stability)
- Accent: 142 76% 45% (success green for CTAs and positive metrics)
- Warning: 25 95% 53% (orange for risk disclaimers)

**Text Colors**:
- Primary text: 0 0% 98%
- Secondary text: 220 10% 65%
- Muted text: 220 8% 45%

### B. Typography

**Font Stack**:
- Primary: Inter (via Google Fonts CDN) - clean, professional sans-serif
- Headings: 600-700 weight
- Body: 400-500 weight

**Scale**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section titles: text-3xl md:text-4xl, font-semibold
- Subsection titles: text-xl md:text-2xl, font-semibold
- Body text: text-base md:text-lg
- Small text: text-sm (disclaimers, pricing details)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8, gap-12

**Container Strategy**:
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 md:px-6
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

**Grid Usage**:
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing: grid-cols-1 md:grid-cols-3 (side-by-side comparison)
- Stats/Metrics: grid-cols-2 md:grid-cols-4

### D. Component Library

**Navigation**:
- Sticky dark header with blur backdrop
- Logo left, navigation center, CTA button right
- Mobile: Hamburger menu with slide-out drawer

**Hero Section** (h-screen with content vertically centered):
- Large headline with gradient text effect on "FRACTAL TRADERS"
- Subtitle below in muted color
- Dual CTA buttons (primary + secondary outline)
- Background: Large trading chart/screen imagery with dark overlay (opacity-60)

**Feature Cards**:
- Dark surface background (220 15% 12%)
- Icon top-left (from Heroicons - chart, academic-cap, users, document-text)
- Title and rich description
- Hover: subtle lift (translate-y-1) and border glow

**Pricing Cards**:
- Three-column comparison grid
- Highlight "Monthly" as recommended (border-2 border-primary)
- Price prominent with large text
- Feature checkmarks list
- CTA button at bottom of each card

**FAQ Section**:
- Accordion-style with chevron indicators
- Six questions expanded by default or click to reveal
- Answers in secondary text color

**Team Section**:
- Centered layout featuring Yhair Mejorado
- Professional headshot (circular, border with primary color)
- Name, role, brief bio

**Footer**:
- Multi-column grid: Company info, Quick links, Social media, Newsletter signup
- Legal links and risk disclaimer at bottom
- Dark background slightly lighter than body

### E. Animations

**Minimal, Professional Motion**:
- Smooth scroll behavior
- Hover states: translate-y-1, opacity changes
- NO complex scroll-triggered animations
- Button interactions: scale-95 on active

## Images

**Hero Background**:
- Large, high-quality image of trading screens/charts in dark environment
- Apply dark overlay (bg-black/60) for text readability
- Alternative: Abstract financial data visualization or candlestick charts

**Feature Section Icons**:
- Use Heroicons via CDN (chart-bar, academic-cap, users-group, document-text, lightning-bolt, shield-check)

**Team Photo**:
- Professional headshot of Yhair Mejorado (circular crop, 200x200px minimum)
- Placeholder: Initials in colored circle if photo unavailable

**No other imagery needed** - keep focus on content and conversion.

## Page Structure

1. **Navigation** - Sticky header
2. **Hero** - Full viewport with CTA
3. **Features Overview** - 4-column grid on desktop
4. **Live Trading Access** - Two-column: text + visual
5. **Educational Sessions** - Highlighted card section
6. **Community** - Testimonial-style layout
7. **Resources** - Icon grid
8. **Pricing** - Three-tier comparison
9. **FAQ** - Accordion (6 questions)
10. **Team** - Centered profile
11. **Risk Disclaimer** - Warning-styled section
12. **Footer** - Multi-column comprehensive

**Conversion Focus**: Primary CTA repeated in hero, pricing, and footer. Secondary CTAs in feature sections.