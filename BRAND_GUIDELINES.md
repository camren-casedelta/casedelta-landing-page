# CaseDelta Brand Guidelines

**Version 1.0** — Design System for CaseDelta Legal Case Management Platform

---

## Brand Overview

### Brand Personality

CaseDelta is a professional legal technology platform designed for law firms and legal professionals. The brand personality is characterized by:

- **Professional & Trustworthy**: Clean, minimal design that inspires confidence
- **Efficient & Focused**: No unnecessary visual noise; every element serves a purpose
- **Accessible & Inclusive**: WCAG-compliant, keyboard-navigable, screen reader friendly
- **Modern but Timeless**: Contemporary without chasing trends; built to last

### Visual Tone

- **Minimalist**: Generous white space, subtle backgrounds, restrained color palette
- **High Contrast**: Clear text hierarchy with strong contrast ratios for readability
- **Understated**: Minimal use of color; dark grays over pure black, light grays over pure white
- **Refined**: Custom typography, precise spacing, thoughtful transitions

---

## Color System

### Philosophy

CaseDelta uses a **grayscale-first** color palette with minimal accent colors. The primary interface is built entirely in grays, with semantic colors (success, error, warning) used sparingly and only when necessary to convey meaning.

### Primary Palette

#### Backgrounds

```
Primary Background (Page)
#F3F3F3 | rgb(243, 243, 243)
Use: Main page background, provides subtle contrast to white surfaces

Surface (Cards, Panels)
#FFFFFF | rgb(255, 255, 255)
Use: Cards, modals, panels, any elevated surface

Surface Secondary
#EDEDED | rgb(237, 237, 237)
Use: Secondary panels, hover states, subtle differentiation

Surface Tertiary
#DFDFDF | rgb(223, 223, 223)
Use: Borders, dividers, inactive states

Surface Hover
rgba(0, 0, 0, 0.02)
Use: Hover state for interactive surfaces

Dark Background
#181818 | rgb(24, 24, 24)
Use: Primary action buttons, dark mode (optional)

Button Primary
#212121 | rgb(33, 33, 33)
Use: Primary action buttons (NOT pure black)
```

#### Text Hierarchy

```
Primary Text
#282828 | rgb(40, 40, 40)
Use: Body text, headings, primary content
Contrast: 14.8:1 on white (WCAG AAA)

Secondary Text
#5D5D5D | rgb(93, 93, 93)
Use: Supporting text, labels, metadata
Contrast: 7.3:1 on white (WCAG AA)

Tertiary Text
#757575 | rgb(117, 117, 117)
Use: Placeholders, disabled text, de-emphasized content
Contrast: 4.7:1 on white (WCAG AA)

High Contrast Text
#0D0D0D | rgb(13, 13, 13)
Use: Extra emphasis, critical information

Text on Dark
#FFFFFF | rgb(255, 255, 255)
Use: Text on dark backgrounds (buttons, dark mode)

Active Link
#181818 | rgb(24, 24, 24)
Use: Active/selected navigation items
```

#### Borders

```
Default Border
#EDEDED | rgb(237, 237, 237)
Use: All borders, dividers, input outlines
```

### Semantic Colors

**Use sparingly and only to convey meaning:**

```
Success
#00A240 | rgb(0, 162, 64)
Use: Success messages, positive status indicators, confirmation

Error
#FF0000 | rgb(255, 0, 0)
Use: Error messages, destructive actions, critical warnings

Warning
#FF9900 | rgb(255, 153, 0)
Use: Warning messages, cautionary states
```

### Accessibility Notes

- All text colors meet WCAG AA standards (minimum 4.5:1 contrast ratio)
- Primary text achieves AAA standard (14.8:1 contrast ratio)
- Focus indicators use `rgba(40, 40, 40, 0.3)` with 2px outline and 2px offset
- Inputs do NOT use focus outlines; border color changes from `#EDEDED` to `#282828` on focus
- Always pair color with text, icons, or patterns (never use color alone to convey information)

### Do's and Don'ts

#### ✅ Do

- Use grays for 95% of the interface
- Use semantic colors only when they convey specific meaning
- Maintain high contrast between text and background
- Use `#212121` for primary action buttons (not pure black)
- Use `#F3F3F3` for page backgrounds (not pure white)

#### ❌ Don't

- Don't use bright, saturated colors for decorative purposes
- Don't use pure black (#000000) or pure white (#FFFFFF) for large areas
- Don't rely on color alone to communicate state
- Don't use custom colors outside the defined palette
- Don't use gradients, shadows, or complex visual effects

---

## Typography

### Font Family

**CaseDelta Sans** — Custom brand typeface

```
Primary: "CaseDelta Sans"
Fallback: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif
```

**Font Weights Available:**

- Regular (400) — Body text, general use
- Medium (500) — Emphasized text, labels
- Semibold (600) — Headings, strong emphasis

**Do not use:** Light, Bold, or any weight outside 400/500/600

### Type Scale

**IMPORTANT: Base size is 14px, not 16px**

```
Caption       12px (0.75rem)    — Fine print, timestamps
Small         13px (0.8125rem)  — Small labels, metadata
Body          14px (0.875rem)   — PRIMARY SIZE: All body text, UI elements
Base          16px (1rem)       — Standard headings, larger text
Large         18px (1.125rem)   — Prominent text
H3            16px (1rem)       — Tertiary headings
H2            20px (1.25rem)    — Secondary headings
H1            24px (1.5rem)     — Page titles, primary headings
```

### Line Height

**Default: 1.5** (150% of font size)

Use tighter line heights (1.2–1.3) for headings and UI elements where vertical space is constrained.

### Letter Spacing

**Tight (Headings):** `-0.011em` (~-0.16px at 14px)
**Tight UI (Components):** `-0.01em` (~-0.14px at 14px)

Tight letter spacing creates a refined, professional appearance. Apply to all headings and UI text.

### Font Usage

| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| Page Title (H1) | 24px | Semibold (600) | -0.011em |
| Section Heading (H2) | 20px | Semibold (600) | -0.011em |
| Subsection (H3) | 16px | Semibold (600) | -0.011em |
| Body Text | 14px | Regular (400) | -0.011em |
| Button Labels | 14px | Medium (500) | -0.01em |
| Input Labels | 14px | Medium (500) | -0.01em |
| Metadata | 13px | Regular (400) | -0.011em |
| Captions | 12px | Regular (400) | -0.011em |

### Do's and Don'ts

#### ✅ Do

- Use 14px as the default body text size
- Apply tight letter spacing to headings
- Use semibold (600) for all headings
- Use medium (500) for labels and emphasized text
- Maintain 1.5 line height for body text

#### ❌ Don't

- Don't use 16px as the default body size
- Don't use bold (700+) or light (300-) weights
- Don't use positive letter spacing (tracking)
- Don't use all caps for long text
- Don't use line heights below 1.2 for body text

---

## Spacing & Layout

### Spacing System

**4px grid system** — All spacing in multiples of 4px

```
0      0px     — No spacing
0.5    2px     — Micro spacing (rare)
1      4px     — Minimal spacing between related items
1.5    6px     — Tight spacing
2      8px     — MOST COMMON: Default gap between elements
2.5    10px    — Medium-tight spacing
3      12px    — Medium spacing
4      16px    — STANDARD PADDING: Card padding, form spacing
5      20px    — Large spacing
6      24px    — Extra large spacing, section gaps
10     40px    — Major section spacing
```

### Common Patterns

| Use Case | Spacing |
|----------|---------|
| Between inline elements (icons, text) | 8px (2) |
| Between form fields | 16px (4) |
| Card internal padding | 24px (6) |
| Between card sections | 24px (6) |
| Between page sections | 40px (10) |
| Flex/Grid gap (default) | 8px (2) |

### Layout Dimensions

```
Sidebar Width:      210px
Content Max Width:  600px (forms, reading content)
Container Max:      1376px (full-width layouts)
Input Height:       40px (36px + 2px border + 2px padding)
Button Height:      32px (default)
Touch Target Min:   44px (mobile accessibility)
```

### Border Radius

```
Small (sm):    6px   — Small buttons, badges, chips
Medium (md):   8px   — DEFAULT: Inputs, buttons, small cards
Large (lg):    12px  — Cards, modals, panels
Full (full):   9999px — Pills, fully rounded elements
```

### Responsive Breakpoints

Using Tailwind's default breakpoints:

```
sm:   640px   — Small tablets, large phones (landscape)
md:   768px   — Tablets
lg:   1024px  — Laptops, small desktops
xl:   1280px  — Desktops
2xl:  1536px  — Large desktops
```

### Mobile Considerations

- Sidebar hidden on mobile (< 768px), replaced with hamburger menu
- Top navigation always visible
- Touch targets minimum 44px in at least one dimension
- Inputs expand to full width on mobile
- Cards stack vertically on mobile

### Do's and Don'ts

#### ✅ Do

- Use multiples of 4px for all spacing
- Use 8px as the default gap between elements
- Use 16px as standard padding for containers
- Ensure touch targets are at least 44px on mobile
- Use 8px border radius as default

#### ❌ Don't

- Don't use arbitrary spacing values (e.g., 15px, 22px)
- Don't use spacing smaller than 4px except for micro adjustments
- Don't create touch targets smaller than 44px on mobile
- Don't use border radius larger than 12px except for pills
- Don't ignore responsive breakpoints

---

## Components

### Buttons

#### Variants

**Primary Button** (Main CTA)
- Background: `#212121` (dark gray)
- Text: `#FFFFFF` (white)
- Height: 32px (default) | 36px (large) | 28px (small)
- Padding: 16px horizontal, 8px vertical
- Border Radius: 8px
- Hover: Opacity 90%

**Secondary Button**
- Background: `#EDEDED` (light gray)
- Text: `#282828` (primary text)
- Hover: Opacity 80%

**Ghost Button**
- Background: Transparent
- Text: `#282828` (primary text)
- Hover: Background `rgba(0, 0, 0, 0.02)`

**Destructive Button**
- Background: `#FF0000` (error red)
- Text: `#FFFFFF` (white)
- Hover: Opacity 90%

**Outline Button**
- Background: Transparent
- Border: 1px solid `#EDEDED`
- Text: `#282828` (primary text)
- Hover: Background `#EDEDED`

**Link Button**
- Background: Transparent
- Text: `#212121` (dark)
- Underline on hover

**Icon Button**
- Size: 36px × 36px (default)
- Padding: 8px
- Hover: Background `rgba(0, 0, 0, 0.02)`

#### Button States

- **Default**: As described above
- **Hover**: Subtle background color change or opacity reduction
- **Focus**: 2px outline with 2px offset, `rgba(40, 40, 40, 0.3)`
- **Disabled**: Opacity 50%, pointer-events none

### Cards

**Default Card**
- Background: `#FFFFFF`
- Border: 1px solid `#EDEDED`
- Border Radius: 12px
- Padding: 24px
- Gap between sections: 24px

**Card Structure:**
```
Card
├── CardHeader (optional)
│   ├── CardTitle (semibold, default size)
│   ├── CardDescription (secondary text, 14px)
│   └── CardAction (top-right slot)
├── CardContent (main content)
└── CardFooter (optional, border-top)
```

### Forms

#### Input Fields

**Default Input**
- Height: 40px
- Background: `#FFFFFF`
- Border: 1px solid `#EDEDED`
- Border Radius: 8px
- Padding: 12px horizontal
- Font Size: 14px
- **Focus**: Border changes to `#282828` (NO outline, NO ring)
- **Disabled**: Opacity 50%

**Placeholder Text:** `#757575` (tertiary text)

#### Labels

- Font Weight: Medium (500)
- Font Size: 14px
- Margin Bottom: 8px
- Color: `#282828` (primary text)

#### Field Spacing

- Between label and input: 8px
- Between fields: 16px
- Between field groups: 24px

### Navigation

#### Top Navigation

- Height: 64px
- Background: `#FFFFFF`
- Border Bottom: 1px solid `#EDEDED`
- Padding: 16px horizontal

#### Sidebar

- Width: 210px
- Background: `#FFFFFF`
- Border Right: 1px solid `#EDEDED`
- Padding: 24px vertical, 16px horizontal
- Hidden on mobile (< 768px)

#### Navigation Items

- Height: 36px
- Padding: 8px 12px
- Border Radius: 8px
- **Default**: Text `#5D5D5D` (secondary)
- **Hover**: Background `rgba(0, 0, 0, 0.02)`, text `#282828`
- **Active**: Background `#F3F3F3`, text `#181818` (semibold)

### Tables

- Background: `#FFFFFF`
- Border: 1px solid `#EDEDED`
- Border Radius: 8px
- Row Height: 44px minimum (touch target)
- **Header**: Background `#F3F3F3`, text semibold, 14px
- **Row Hover**: Background `rgba(0, 0, 0, 0.02)`
- **Row Border**: 1px solid `#EDEDED`

### Modals & Dialogs

- Background: `#FFFFFF`
- Border Radius: 12px
- Padding: 24px
- Max Width: 600px (reading content)
- **Backdrop**: `rgba(0, 0, 0, 0.5)`
- **Animation**: Fade in 200ms, scale from 0.95

### Badges & Tags

- Height: 24px
- Padding: 4px 8px
- Border Radius: 6px
- Font Size: 12px
- Font Weight: Medium (500)
- **Colors**: Use semantic colors with light backgrounds
  - Success: Background `#E6F7ED`, Text `#00A240`
  - Error: Background `#FFE6E6`, Text `#FF0000`
  - Warning: Background `#FFF4E6`, Text `#FF9900`

---

## Iconography

### Style

- **Line Icons**: Outlined style, not filled
- **Stroke Width**: 1.5px
- **Viewbox**: 16×16 (standard)
- **Color**: `currentColor` (inherits text color)
- **Default Size**: 16×16px (1em)

### Usage

- Always use `aria-hidden="true"` for decorative icons
- Provide text labels or `aria-label` for icon-only buttons
- Pair with text for clarity (icon + label pattern)

### Common Sizes

- Small: 12×12px
- Default: 16×16px
- Medium: 20×20px
- Large: 24×24px

---

## Animation & Motion

### Philosophy

**Subtle and purposeful** — Animations should enhance usability, not distract. CaseDelta uses minimal, fast transitions that feel responsive without calling attention to themselves.

### Timing

```
Instant:   0ms    — No animation (immediate state change)
Fast:      100ms  — Micro-interactions (hover, focus)
Normal:    150ms  — DEFAULT: Most transitions (color, opacity)
Slow:      200ms  — Larger movements (dropdowns, modals)
Page:      350ms  — Page transitions
```

### Easing

```
Ease Out:     cubic-bezier(0.33, 1, 0.68, 1)
              Use for: UI transitions, page loads, element entrances

Ease In-Out:  cubic-bezier(0.65, 0, 0.35, 1)
              Use for: Reversible animations, toggles
```

### Common Animations

**Button Hover**
```css
transition: background-color 150ms cubic-bezier(0.33, 1, 0.68, 1);
```

**Input Focus**
```css
transition: border-color 150ms cubic-bezier(0.33, 1, 0.68, 1);
```

**Dropdown Open**
```css
animation: fadeIn 200ms ease-out;
```

**Page Transition**
```css
animation: fadeInUp 350ms cubic-bezier(0.33, 1, 0.68, 1);
/* Fades in and translates up 4px */
```

**Modal Open**
```css
animation: modalFadeIn 200ms ease-out;
/* Backdrop fades in, modal scales from 0.95 to 1.0 */
```

### Accessibility

**Always respect `prefers-reduced-motion`:**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion will see instant state changes instead of animated transitions.

### Do's and Don'ts

#### ✅ Do

- Use 150ms as the default transition duration
- Use ease-out easing for most transitions
- Animate opacity, transform, and color
- Respect `prefers-reduced-motion`
- Keep animations under 350ms

#### ❌ Don't

- Don't animate layout properties (width, height, margin, padding)
- Don't use durations longer than 350ms
- Don't use bouncy or elastic easing
- Don't animate on every interaction
- Don't ignore reduced motion preferences

---

## Design Principles

### 1. Professional Minimalism

**Every element must serve a purpose.** Remove anything that doesn't actively help the user complete their task.

- Use generous white space to create breathing room
- Let content speak for itself without decorative elements
- Use subtle grays instead of stark blacks and whites
- Avoid gradients, shadows, and visual embellishments

### 2. Clarity Over Aesthetics

**Function before form.** Beautiful design is useless if users can't accomplish their goals.

- Prioritize readability: high contrast, clear hierarchy, generous sizing
- Use clear, descriptive labels instead of clever copy
- Make interactive elements obvious (buttons look like buttons)
- Ensure all states (hover, focus, disabled) are clearly differentiated

### 3. Consistency is King

**Every instance of a pattern should look identical.**

- Use design tokens for all values (never hardcode colors or spacing)
- Use the same component for the same purpose everywhere
- Follow established patterns for new features
- Document deviations from standards

### 4. Accessibility is Non-Negotiable

**Everyone should be able to use CaseDelta.**

- All text must meet WCAG AA contrast standards (AAA preferred)
- All interactive elements must be keyboard accessible
- All functionality must work with screen readers
- Touch targets must be at least 44px on mobile
- Never use color alone to convey information

### 5. Progressive Disclosure

**Show only what's needed when it's needed.**

- Start with the most important information
- Hide advanced features behind secondary actions
- Use modals and panels for complex workflows
- Break multi-step processes into clear stages

---

## Implementation Guidelines

### CSS Variables

All design tokens are defined as CSS custom properties in `globals.css`:

```css
var(--color-background-primary)
var(--color-text-primary)
var(--spacing-4)
var(--radius-md)
var(--duration-normal)
```

**Always use CSS variables** instead of hardcoded values.

### Tailwind Utilities

Use Tailwind's utility classes with design token references:

```html
<!-- Good -->
<div class="bg-[var(--color-background-surface)] text-[var(--color-text-primary)]">

<!-- Bad -->
<div class="bg-white text-gray-800">
```

### Component Pattern

All UI components follow this structure:

```tsx
import { cn } from '@/lib/utils';

interface ComponentProps extends React.ComponentProps<"div"> {
  variant?: 'default' | 'primary' | 'ghost';
}

export function Component({ className, variant = 'default', ...props }: ComponentProps) {
  return (
    <div
      className={cn(
        "base-classes",
        variantClasses[variant],
        className // Always allow override
      )}
      {...props}
    />
  );
}
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `Card`, `FormField`)
- **Props**: camelCase (`onClick`, `isDisabled`, `hasError`)
- **CSS Variables**: kebab-case (`--color-text-primary`)
- **Files**: PascalCase for components (`Button.tsx`), camelCase for utils (`cn.ts`)

---

## Resources for External Teams

### What You Need to Replicate CaseDelta's Look

1. **Font Files**: CaseDelta Sans in Regular (400), Medium (500), and Semibold (600)
2. **Design Tokens**: See `design-tokens.json` for machine-readable values
3. **Color Palette**: Grayscale-first with minimal semantic colors
4. **14px Base Font Size**: This is critical to the brand's visual identity
5. **4px Grid System**: All spacing in multiples of 4px
6. **Subtle Animations**: 150ms transitions, ease-out easing

### Quick Start Checklist

- [ ] Install/reference CaseDelta Sans font
- [ ] Set base font size to 14px (0.875rem)
- [ ] Use `#F3F3F3` for page backgrounds
- [ ] Use `#FFFFFF` for card/panel backgrounds
- [ ] Use `#282828` for primary text
- [ ] Use `#212121` for primary buttons
- [ ] Apply `-0.011em` letter spacing to headings
- [ ] Use 8px as default border radius
- [ ] Use 8px as default spacing between elements
- [ ] Set transition duration to 150ms with ease-out easing

### Common Mistakes to Avoid

1. **Using 16px as base font size** — CaseDelta uses 14px as primary size
2. **Using pure black (#000) or pure white (#FFF)** — Use the defined grays
3. **Adding decorative colors** — Stick to grayscale + semantic colors only
4. **Ignoring the 4px grid** — All spacing must be multiples of 4px
5. **Using bold (700) font weight** — Only Regular (400), Medium (500), Semibold (600)
6. **Adding shadows or gradients** — CaseDelta uses flat design only
7. **Using focus rings on inputs** — Inputs change border color only

---

## Contact & Support

For questions about implementing CaseDelta's design system on your landing page:

1. Review the `design-tokens.json` file for exact values
2. Reference this document for usage guidelines
3. Contact the CaseDelta design team for font files and assets

**Document Version**: 1.0
**Last Updated**: December 30, 2025
**Maintained by**: CaseDelta Design Team
