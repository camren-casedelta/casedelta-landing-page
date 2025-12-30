# Design Reference Analysis

This document outlines which design patterns and elements were adopted from each reference website.

## Harvey (https://www.harvey.ai/)

### What We Adopted:
- **Layout Pattern**: Clean, structured sections with generous spacing
- **Typography Hierarchy**: Large, bold headlines with secondary subtext
- **Rectangular Sections**: Value prop cards with clear borders and contained content
- **Professional Spacing**: Consistent padding and margins throughout
- **Dark Theme Inspiration**: Used for our dark mode variant

### Implementation:
- Hero section with large headline + supporting text
- Value prop sections with bordered containers
- Consistent vertical rhythm (40px+ between sections)

---

## Rogo (https://www.rogo.ai/)

### What We Adopted:
- **Whitespace Usage**: Generous breathing room between elements
- **Element Positioning**: Careful alignment and balance
- **Layout Organization**: Alternating left/right content sections
- **Typography**: Similar clean, professional typeface approach

### Implementation:
- Alternating `reverse` prop on value sections
- Increased spacing between sections
- Clean grid-based layouts

---

## Sierra (https://sierra.ai/)

### What We Adopted:
- **Progressive Darkening**: Backgrounds that gradually darken as you scroll
- **Video Placement**: Prominent video viewport in hero
- **White Background Foundation**: Starting with light, clean aesthetic
- **Section Organization**: Clear, distinct sections with visual separation

### Implementation:
- 4 value prop sections with progressively darker backgrounds:
  - Section 1: `var(--color-background)` (lightest)
  - Section 2: `var(--color-surface)`
  - Section 3: `var(--color-surface-secondary)`
  - Section 4: `var(--color-surface-tertiary)` (darkest)
- Hero with video placeholder
- Clean white starting point

---

## OpenAI (https://openai.com/)

### What We Adopted:
- **Brand Reference**: Minimalist, spacious, "airy" design aesthetic
- **Typography**: Clean sans-serif, generous line heights
- **Spacing Philosophy**: "Less is more" approach
- **Animation Style**: Subtle, purposeful transitions
- **Color Palette**: Restrained use of color

### Implementation:
- Minimal color palette (grayscale-first)
- Generous spacing throughout (using 4px grid system)
- Subtle 150ms animations
- No decorative elements or visual noise
- High contrast text for readability

---

## Cohere (https://cohere.com/)

### What We Adopted:
- **Rounded Rectangles**: Soft, approachable corners on containers
- **Simplicity**: Not too much text, let visuals breathe
- **Visual-Driven**: Emphasis on images/videos over copy
- **Spaciousness**: Clean, uncluttered layouts

### Implementation:
- 12px border radius on all cards/sections (`var(--radius-lg)`)
- Concise copy with emphasis on visuals
- Large placeholder areas for illustrations
- Minimal text per section

---

## Cross-Site Patterns

### What We Adopted from ALL References:

1. **Headline Positioning**
   - Large, attention-grabbing H1 in hero
   - Clear visual hierarchy (H1 → H2 → body text)
   - Consistent alignment and spacing

2. **Animations**
   - Scroll-triggered fade-ins
   - Staggered list item reveals
   - Subtle hover states
   - Smooth page transitions

3. **Whitespace**
   - Generous padding in hero (80px+ vertical)
   - Clear separation between sections (60-100px)
   - Breathing room around text blocks

4. **Professional Polish**
   - High-quality typography
   - Consistent spacing system
   - Smooth transitions
   - Attention to detail

---

## CaseDelta Brand Integration

While inspired by these reference sites, all implementations use CaseDelta's design system:

- **Colors**: Grayscale-first palette from `design-tokens.json`
- **Typography**: 14px base, tight letter spacing, semibold headings
- **Spacing**: 4px grid system
- **Animations**: 150ms ease-out transitions
- **Accessibility**: WCAG AAA contrast ratios

---

## Key Differences from References

1. **Base Font Size**: 14px (CaseDelta) vs. 16px (most sites)
2. **Color Approach**: Pure grayscale vs. brand colors
3. **Button Style**: Flat design vs. shadows/gradients
4. **Animation Duration**: Faster (150ms) vs. slower (300ms+)
5. **Border Radius**: Moderate (8-12px) vs. more rounded

---

## Next Steps for Refinement

To get even closer to the reference sites:

1. **Identify Exact Fonts**: Use DevTools on reference sites to find font families
2. **Add Rive Animations**: Harvey and Rogo use Rive for interactive elements
3. **Video Integration**: Replace placeholders with actual product videos
4. **Micro-interactions**: Add hover effects, button states, etc.
5. **Performance**: Optimize for production deployment

---

**Document Version**: 1.0
**Created**: December 30, 2025
