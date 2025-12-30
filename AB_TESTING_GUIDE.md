# A/B Testing Guide

This document explains how to use the 4 landing page variants for A/B testing.

---

## The 4 Variants

| Variant | Theme | Hero Layout | URL | Description |
|---------|-------|-------------|-----|-------------|
| **A** | Light | Side | `/light/side` | Light background, video beside hero text |
| **B** | Light | Bottom | `/light/bottom` | Light background, video below hero text |
| **C** | Dark | Side | `/dark/side` | Dark background, video beside hero text |
| **D** | Dark | Bottom | `/dark/bottom` | Dark background, video below hero text |

---

## Testing Strategy

### Phase 1: Theme Test (2 variants)

**Hypothesis:** Legal professionals prefer either light or dark themes for conversion.

**Setup:**
- Variant A (Light + Side) vs. Variant C (Dark + Side)
- 50/50 traffic split
- Focus on theme preference while keeping layout constant

**Metrics:**
- Primary CTA click rate ("Get Started Free")
- Scroll depth (% reaching bottom CTA)
- Time on page
- Form submission rate

**Duration:** 2 weeks or 1,000 conversions per variant

---

### Phase 2: Layout Test (2 variants)

**Hypothesis:** Video placement (side vs. bottom) affects engagement.

**Setup:**
- Use winning theme from Phase 1
- Test side vs. bottom layout
- 50/50 traffic split

**Metrics:**
- Video play rate
- Scroll depth (do users scroll past hero more with bottom layout?)
- Primary CTA click rate
- Time in hero section

**Duration:** 2 weeks or 1,000 conversions per variant

---

### Alternative: Full 4-Way Test

**Hypothesis:** One specific theme + layout combination will significantly outperform others.

**Setup:**
- All 4 variants simultaneously
- 25/25/25/25 traffic split
- Requires higher traffic volume

**Metrics:**
- Primary CTA click rate
- Secondary CTA click rate ("Watch Demo")
- Scroll depth
- Conversion to signup

**Duration:** 4 weeks or 1,000 conversions per variant (4,000 total)

**Statistical Note:** Requires more traffic due to 4-way split. Ensure statistical significance.

---

## Implementation

### Option 1: Client-Side A/B Testing (Google Optimize, VWO, etc.)

```javascript
// Pseudo-code for client-side tool
if (variant === 'A') {
  window.location.href = '/light/side';
} else if (variant === 'B') {
  window.location.href = '/light/bottom';
} else if (variant === 'C') {
  window.location.href = '/dark/side';
} else if (variant === 'D') {
  window.location.href = '/dark/bottom';
}
```

### Option 2: Server-Side A/B Testing (Next.js Middleware)

Create `middleware.ts`:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only run on root path
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.next();
  }

  // Check for existing variant cookie
  let variant = request.cookies.get('ab_variant')?.value;

  if (!variant) {
    // Assign new variant (25% each)
    const random = Math.random();
    if (random < 0.25) variant = 'light-side';
    else if (random < 0.5) variant = 'light-bottom';
    else if (random < 0.75) variant = 'dark-side';
    else variant = 'dark-bottom';
  }

  // Redirect to variant URL
  const url = request.nextUrl.clone();
  url.pathname = `/${variant.replace('-', '/')}`;

  const response = NextResponse.redirect(url);

  // Set cookie to persist variant assignment
  response.cookies.set('ab_variant', variant, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}

export const config = {
  matcher: '/',
};
```

### Option 3: CDN/Edge A/B Testing (Vercel, Cloudflare, etc.)

Use edge functions to redirect at the CDN level for fastest performance.

---

## Analytics Setup

### Google Analytics 4 Events

Track these events on each variant:

```javascript
// Primary CTA Click
gtag('event', 'cta_click', {
  variant: 'light-side', // or light-bottom, dark-side, dark-bottom
  cta_type: 'primary',
  cta_location: 'hero',
  cta_text: 'Get Started Free'
});

// Secondary CTA Click
gtag('event', 'cta_click', {
  variant: 'light-side',
  cta_type: 'secondary',
  cta_location: 'hero',
  cta_text: 'Watch Demo'
});

// Scroll Depth
gtag('event', 'scroll_depth', {
  variant: 'light-side',
  depth_percentage: 50
});

// Video Play (if video is added)
gtag('event', 'video_play', {
  variant: 'light-side',
  video_location: 'hero'
});
```

### Key Metrics to Track

1. **Conversion Rate**
   - Primary: "Get Started Free" clicks → signups
   - Secondary: "Watch Demo" clicks → video views

2. **Engagement**
   - Scroll depth (25%, 50%, 75%, 100%)
   - Time on page
   - Bounce rate

3. **User Behavior**
   - Video play rate
   - Click depth (how many sections clicked)
   - Navigation clicks

4. **Device/Context**
   - Mobile vs. Desktop performance by variant
   - Time of day effects
   - Geographic differences

---

## Statistical Significance

### Minimum Sample Size

For 95% confidence level, 80% power, 20% baseline conversion rate, detecting 25% relative change:

- **Minimum per variant:** ~1,000 conversions
- **For 2-way test:** 2,000 total conversions
- **For 4-way test:** 4,000 total conversions

### Calculator

Use this formula or an online calculator:

```
n = (Z_α/2 + Z_β)² × (p₁(1-p₁) + p₂(1-p₂)) / (p₁ - p₂)²
```

Where:
- `Z_α/2` = 1.96 (for 95% confidence)
- `Z_β` = 0.84 (for 80% power)
- `p₁` = baseline conversion rate
- `p₂` = expected improved conversion rate

### Tools

- [Optimizely Sample Size Calculator](https://www.optimizely.com/sample-size-calculator/)
- [AB Test Guide Calculator](https://abtestguide.com/calc/)
- [Evan Miller's Calculator](https://www.evanmiller.org/ab-testing/sample-size.html)

---

## Expected Results

### Hypotheses to Test

1. **Theme Preference**
   - **Light:** Professional, accessible, familiar for legal industry
   - **Dark:** Modern, sophisticated, differentiates from competitors
   - **Prediction:** 55/45 split, but depends on target audience

2. **Layout Preference**
   - **Side:** More content above fold, feels complete
   - **Bottom:** More focus on copy, clearer hierarchy
   - **Prediction:** Side layout may perform better on desktop, bottom on mobile

3. **Combination Effects**
   - **Light + Side:** Traditional, professional, "safe choice"
   - **Light + Bottom:** Clean, modern, emphasizes messaging
   - **Dark + Side:** Bold, confident, tech-forward
   - **Dark + Bottom:** Striking, different, memorable
   - **Prediction:** One variant will win by 15-30%

---

## Decision Framework

### How to Choose a Winner

After collecting sufficient data:

1. **Check Statistical Significance**
   - Use chi-square test or Z-test
   - Ensure p-value < 0.05
   - Don't call it early

2. **Analyze by Segment**
   - Mobile vs. Desktop
   - Traffic source (paid vs. organic)
   - Geographic region
   - Time of day

3. **Consider Secondary Metrics**
   - Don't just look at clicks
   - Check quality of conversions
   - Review user feedback/surveys

4. **Make the Call**
   - Choose the variant with highest conversion rate
   - If no clear winner, test again with refinements
   - If tie, choose based on brand fit

---

## Iteration Plan

After choosing a winner:

1. **Deploy winning variant** to 100% traffic
2. **Create new variants** based on learnings
3. **Test specific elements:**
   - Headline variations
   - CTA button text/color
   - Value prop order
   - Adding social proof
4. **Run continuous optimization** cycle

---

## Common Pitfalls to Avoid

1. ❌ **Calling test too early** - Wait for statistical significance
2. ❌ **Changing variants mid-test** - Invalidates results
3. ❌ **Testing too many things** - Keep it simple, 2-4 variants max
4. ❌ **Ignoring sample ratio mismatch** - Check traffic split is actually 50/50
5. ❌ **Not checking for external factors** - Holidays, news events, etc.
6. ❌ **Focusing only on clicks** - Measure full funnel to signup
7. ❌ **Not running long enough** - Account for weekly patterns

---

## Reporting Template

### Weekly A/B Test Report

**Test:** Light vs. Dark Theme
**Duration:** Week 1 of 2
**Traffic:** 2,450 visitors (1,225 per variant)

| Metric | Variant A (Light) | Variant C (Dark) | Difference |
|--------|-------------------|------------------|------------|
| Primary CTA Clicks | 185 (15.1%) | 198 (16.2%) | +1.1% |
| Secondary CTA Clicks | 92 (7.5%) | 88 (7.2%) | -0.3% |
| Scroll to Bottom | 68% | 71% | +3% |
| Avg. Time on Page | 2:34 | 2:48 | +14s |
| Signups | 48 | 54 | +6 |
| Conversion Rate | 3.9% | 4.4% | +0.5% |

**Status:** ⚠️ Not yet significant (need 450 more conversions)
**Trend:** Dark theme leading by 12.8%
**Next Steps:** Continue collecting data

---

## Questions?

For implementation help or A/B testing strategy questions, refer to:

- [README.md](./README.md) - Technical setup
- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Design system
- [DESIGN_REFERENCES.md](./DESIGN_REFERENCES.md) - Design inspiration

---

**Last Updated:** December 30, 2025
