# CaseDelta Landing Page - A/B Testing Variants

World-class landing page mockup with 4 standalone variants for A/B testing.

## 🚀 Live URLs

**Development:** http://localhost:3002

### 4 Independent Variants:

1. **Light + Side Layout** → `/light/side`
2. **Light + Bottom Layout** → `/light/bottom`
3. **Dark + Side Layout** → `/dark/side`
4. **Dark + Bottom Layout** → `/dark/bottom`

**Variant Selector** → `/` (internal use only)

---

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for scroll-triggered animations

---

## Design Inspiration

Inspired by the best-in-class design patterns from:

- **Harvey** - Layout, spacing, professional typography
- **Rogo** - Whitespace, element positioning, rectangles
- **Sierra** - Progressive background darkening, clean organization
- **OpenAI** - Minimalist aesthetic, brand spacing
- **Cohere** - Visual-driven design, rounded rectangles

---

## Features

### ✅ 4 Standalone Variants for A/B Testing
Each variant is a completely independent page with locked theme and layout:

| Variant | Theme | Hero Layout | URL |
|---------|-------|-------------|-----|
| **A** | Light | Side | `/light/side` |
| **B** | Light | Bottom | `/light/bottom` |
| **C** | Dark | Side | `/dark/side` |
| **D** | Dark | Bottom | `/dark/bottom` |

### ✅ Top Navigation Bar
- Professional navbar with CaseDelta branding
- Navigation links (Features, Pricing, About)
- CTA buttons (Sign In, Get Started)
- Fixed position with backdrop blur
- Consistent across all variants

### ✅ Progressive Background Darkening
Four value proposition sections with progressively darkening backgrounds:
- **Section 1:** AI-Powered Client Reminders
- **Section 2:** Document Verification
- **Section 3:** Built for Legal Workflows
- **Section 4:** Save Hours Every Week

### ✅ Scroll-Triggered Animations
- Fade-in and slide-up effects on scroll
- Staggered list item animations
- Smooth page load transitions
- Respects `prefers-reduced-motion`

### ✅ CaseDelta Brand System
Implements the complete design system:
- 14px base font size (not 16px)
- Grayscale-first color palette
- 4px grid spacing system
- Tight letter spacing (-0.011em)
- Professional minimalism

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open the URL shown in terminal (typically http://localhost:3000)

Visit `/` to see the variant selector, then choose a variant to preview.

---

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Variant selector (internal use)
│   ├── globals.css             # Design tokens as CSS variables
│   ├── light/
│   │   ├── side/page.tsx       # Variant A: Light + Side
│   │   └── bottom/page.tsx     # Variant B: Light + Bottom
│   └── dark/
│       ├── side/page.tsx       # Variant C: Dark + Side
│       └── bottom/page.tsx     # Variant D: Dark + Bottom
├── components/
│   ├── Navbar.tsx              # Top navigation component
│   ├── Hero.tsx                # Hero section with layout variants
│   ├── ValuePropSection.tsx    # Reusable value prop section
│   ├── LandingContent.tsx      # Main landing page content
│   └── PageWrapper.tsx         # Theme wrapper component
├── BRAND_GUIDELINES.md         # Complete design system docs
├── DESIGN_REFERENCES.md        # What we took from each reference site
└── design-tokens.json          # Machine-readable design tokens
```

---

## A/B Testing Setup

### For Production A/B Testing:

1. **Deploy all 4 variants** to production
2. **Set up URL routing** in your A/B testing tool:
   - Variant A → `/light/side`
   - Variant B → `/light/bottom`
   - Variant C → `/dark/side`
   - Variant D → `/dark/bottom`

3. **Split traffic** equally (25% each) or customize distribution
4. **Track conversions** on "Get Started" and "Start Free Trial" CTAs
5. **Measure:**
   - Click-through rate on primary CTA
   - Scroll depth
   - Time on page
   - Form submissions

### Example A/B Test Hypotheses:

- **Theme:** Does light or dark convert better for legal professionals?
- **Layout:** Does video beside or below hero increase engagement?
- **Combination:** Which of the 4 combinations drives most signups?

---

## Design Tokens

All design values are defined as CSS custom properties in `app/globals.css`:

```css
/* Typography */
var(--font-size-hero)
var(--font-weight-semibold)
var(--letter-spacing-tight)

/* Colors */
var(--color-background)
var(--color-text-primary)
var(--color-button-primary)

/* Spacing */
var(--spacing-4)
var(--spacing-6)

/* Animation */
var(--duration-normal)
var(--easing-out)
```

Both light and dark themes use the same variable names with different values.

---

## Theme Differences

### Light Theme
```css
--color-background: #f3f3f3
--color-surface: #ffffff
--color-surface-secondary: #ededed
--color-surface-tertiary: #dfdfdf
--color-text-primary: #282828
--color-button-primary: #212121
```

### Dark Theme
```css
--color-background: #0d0d0d
--color-surface: #181818
--color-surface-secondary: #212121
--color-surface-tertiary: #282828
--color-text-primary: #ffffff
--color-button-primary: #ffffff
```

---

## Next Steps

### To Refine the Mockup:

1. **Replace Placeholders**
   - Add real product demo video
   - Create/add feature illustrations
   - Add screenshots or mockups

2. **Add Real Fonts**
   - Identify exact fonts from reference sites
   - Consider purchasing or licensing if needed
   - Or use high-quality Google Fonts alternatives

3. **Enhanced Animations**
   - Consider adding Rive for complex interactive animations
   - Add hover effects and micro-interactions
   - Implement scroll-based parallax effects

4. **Additional Sections**
   - Customer testimonials
   - Pricing tiers
   - FAQ section
   - Trust badges / security certifications

5. **Mobile Optimization**
   - Test on mobile devices
   - Add hamburger menu for nav
   - Optimize touch targets
   - Test animations on mobile

6. **Performance**
   - Optimize images
   - Add proper font loading strategy
   - Implement lazy loading
   - Minimize bundle size

---

## Build for Production

```bash
npm run build
npm start
```

---

## Notes

- Each variant is **completely independent** (no theme toggle)
- Base font size is **14px** (CaseDelta standard), not 16px
- Design uses **grayscale-first** approach with minimal accent colors
- All spacing follows a **4px grid system**
- Animations are **subtle and purposeful** (150ms default)
- Navbar is **fixed** at top with 64px height
- All variants maintain the **same visual hierarchy and spacing**

---

## Deployment Checklist

- [ ] Replace video placeholder with actual product demo
- [ ] Add feature illustrations/screenshots
- [ ] Update copy with final messaging
- [ ] Set up analytics tracking on CTAs
- [ ] Test all 4 variants on mobile
- [ ] Verify scroll animations work smoothly
- [ ] Ensure navbar works on all screen sizes
- [ ] Set up A/B testing tool integration
- [ ] Configure conversion tracking
- [ ] Test page load performance

---

**Version**: 2.0
**Last Updated**: December 30, 2025
**Ready for A/B Testing**: ✅
