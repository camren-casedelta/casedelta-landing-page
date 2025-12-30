# Font Configuration

## Fonts Used

### Harvey Serif (Headings)
- **Source:** Extracted from harvey.ai (for mockup purposes only)
- **Files:**
  - `public/fonts/HarveySerif-Regular.woff2` (400 weight)
  - `public/fonts/HarveySerif-Italic.woff2` (400 weight italic)
- **Usage:** All headings (h1, h2, h3, h4, h5, h6)
- **License:** Proprietary - Harvey AI Corporation
- **Note:** For mockup/reference only. Do not use in production without proper licensing.

### CaseDelta Sans (Body Text)
- **Source:** Your brand font files
- **Files:**
  - `public/fonts/CaseDeltaSans-Regular.otf` (400 weight)
  - `public/fonts/CaseDeltaSans-RegularItalic.otf` (400 weight italic)
  - `public/fonts/CaseDeltaSans-Medium.otf` (500 weight)
  - `public/fonts/CaseDeltaSans-MediumItalic.otf` (500 weight italic)
  - `public/fonts/CaseDeltaSans-Semibold.otf` (600 weight)
  - `public/fonts/CaseDeltaSans-SemiboldItalic.otf` (600 weight italic)
- **Usage:** Body text, UI elements, buttons, navigation
- **License:** Custom CaseDelta brand font

## Font Stack

### Headings
```css
font-family: "Harvey Serif", "Georgia", serif;
```

### Body
```css
font-family: "CaseDelta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif;
```

## Implementation

All fonts are loaded via `@font-face` declarations in `app/globals.css`.

### Harvey Serif
- Weight: 400 (Regular)
- Fallback: Georgia, serif
- Display: swap (prevents invisible text while loading)

### CaseDelta Sans
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
- Fallback: Inter, system fonts
- Display: swap

## Usage Examples

### Headings (Harvey Serif)
```tsx
<h1>Main Headline</h1>  // Uses Harvey Serif, weight 400
<h2>Section Title</h2>   // Uses Harvey Serif, weight 400
```

### Body Text (CaseDelta Sans)
```tsx
<p>Body text</p>         // Uses CaseDelta Sans, weight 400
<button>CTA</button>     // Uses CaseDelta Sans, weight 500
```

## Legal Notice

**Harvey Serif Font:**
The Harvey Serif font files were extracted from harvey.ai's public website for mockup and reference purposes only. These fonts are proprietary to Harvey AI Corporation and are protected by copyright.

**Usage Restrictions:**
- ✅ **Allowed:** Internal mockups, design references, prototyping
- ❌ **Not Allowed:** Production deployment, redistribution, commercial use

**For Production:**
Replace Harvey Serif with one of these free alternatives:
- **Spectral** (Google Fonts) - Best match
- **Crimson Pro** (Google Fonts)
- **Instrument Serif** (Google Fonts)
- **EB Garamond** (Google Fonts)

## Font Performance

- **Format:** WOFF2 (Harvey Serif), OpenType (CaseDelta Sans)
- **Loading Strategy:** font-display: swap
- **Total Size:** ~1.1MB (all font files combined)
- **Optimization:** Subset fonts if needed to reduce file size

## Fallback Fonts

If custom fonts fail to load:
- **Headings:** Georgia (serif) will be used
- **Body:** Inter → system fonts will be used

This ensures text is always readable even if custom fonts fail to load.

---

**Last Updated:** December 30, 2025
