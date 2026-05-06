# Broken UI Audit — Intentional Issues

Date: 2026-05-06

This document lists all intentional UI/UX breaks introduced in the codebase for teaching/demo purposes, where they are, why they break best-practices, and a concise remediation for each.

**Global**
- **Typography & palette (`src/index.css`)**: global font was previously set to `Comic Sans` with tiny base font-size, huge line-height, wide letter-spacing, neon gradient background, and clashing color variables. This reduces readability and visual hierarchy. Suggested fix: restore system/inter font stack, normal `font-size` and `line-height`, and use accessible color variables. See: [src/index.css](src/index.css)

- **Inconsistent typography classes (`src/index.css`)**: introduced `.typo-serif`, `.typo-mono`, `.typo-display`, and `.typo-scale-h1` to demonstrate mixed type roles. These intentionally break the type system by applying different families to semantic elements (brand, nav, headings, body). Suggested fix: consolidate on a clear type scale and limit families to 1–2 complementary families. See: [src/index.css](src/index.css)

**Header / Navigation**
- **Tilted navbar (`src/components/Navbar.tsx`)**: the `<header>` has a slight clockwise rotation (`rotate(3deg)`), causing baseline misalignment with content. Suggested fix: remove the CSS `transform` on the header and keep the navbar aligned with the page grid. See: [src/components/Navbar.tsx](src/components/Navbar.tsx)

- **Mixed fonts in nav (`src/components/Navbar.tsx`)**: brand uses `typo-display`, nav links alternate `typo-serif` and `typo-mono`, creating inconsistent reading rhythm. Suggested fix: use a single readable font for navigation items and reserve display fonts only for decorative use. See: [src/components/Navbar.tsx](src/components/Navbar.tsx)

**Hero**
- **Headline / subheading mismatch (`src/components/Hero.tsx`)**: headline uses `typo-serif` and `typo-scale-h1` (different sizes across breakpoints), while the subheading uses `typo-mono`. This breaks typographic hierarchy and semantic expectations. Suggested fix: use consistent font-family for headline/subhead and apply a proper responsive scale (modular scale). See: [src/components/Hero.tsx](src/components/Hero.tsx)

**Products / Services**
- **Card alignment & mild skew (`src/components/Services.tsx`)**: product cards include a small `skewY(-1deg)` and slight negative margin to show a mild layout inconsistency. Suggested fix: remove transforms, align card padding consistently, and restore grid columns for responsive breakpoints. See: [src/components/Services.tsx](src/components/Services.tsx)

- **Mixed typography in product metadata (`src/components/Services.tsx`)**: title, description and prices intentionally use different type classes (`typo-display`, `typo-mono`, `typo-serif`) which confuses affordance. Suggested fix: use one family for titles and another neutral for body copy; reserve mono for code-like or tabular contexts. See: [src/components/Services.tsx](src/components/Services.tsx)

**Footer**
- **Dual-color split footer (`src/components/Footer.tsx`)**: footer uses a 50/50 split background (`linear-gradient`) with light left and dark right content areas; text colors differ across the split to maintain contrast. This can feel visually disjointed if not intentionally designed. Suggested fix: choose a single background or a smooth gradient with consistent content alignment, or ensure visual grouping is preserved with spacing and separators. See: [src/components/Footer.tsx](src/components/Footer.tsx)

**Layout / Overflow**
- **Removed global overflow wrapper**: earlier edits added an `overflow-break` wrapper that caused horizontal scrolling/overflow; this was later softened. If present, this causes accessibility/usability issues on small screens. Suggested fix: avoid fixed large widths; use responsive containers and prevent horizontal scroll. See: [src/layout/SiteLayout.tsx](src/layout/SiteLayout.tsx) and [src/index.css](src/index.css)

---

Quick remediation checklist (for slides or exercises)
- Restore base typography: set `body { font-family: Inter, system-ui; font-size: 16px; line-height: 1.5 }`.
- Normalize colors: revert `--body-bg`/`--text-main` to neutral palette and ensure WCAG contrast.
- Remove transforms from layout elements (headers, nav, cards).
- Consolidate typefaces: use 1 display + 1 UI font; remove `typo-*` classes except for demonstration copies.
- Fix images: set `object-fit: cover` and remove `image-rendering: pixelated`.
- Remove any global overflow utility that forces horizontal scrolling.

If you want, I can:
- Generate screenshots showing each broken area for slides.
- Produce a short remediation PR that reverts each issue one-by-one with diffs.
