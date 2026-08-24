---
version: alpha
name: Farhoud Talebi Portfolio
description: "The Evidence Field: a precise field-map system for presenting Farhoud Talebi's engineering work."
colors:
  canvas: "#F2F5F3"
  ink: "#18221F"
  slate: "#52605C"
  trace: "#C8D1CD"
  signal: "#1F6B52"
  safety: "#B24A2F"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.25rem"
  metadata:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1rem"
    letterSpacing: "0.03em"
  metadata-label:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: "1rem"
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  md: "0.375rem"
spacing:
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "11": "2.75rem"
  "12": "3rem"
  "16": "4rem"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "rgb(31 107 82 / 0.9)"
    textColor: "{colors.canvas}"
  button-submit:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0px 2rem"
    height: "2.75rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
    height: "2.75rem"
  input-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
  project-hierarchy:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.metadata}"
    rounded: "{rounded.none}"
    padding: "2rem 0px"
  navigation-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0px 0.5rem"
    height: "2.25rem"
  signal-trigger:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.metadata-label}"
    rounded: "{rounded.none}"
    padding: "0px 0.75rem"
    height: "2.75rem"
  ledger-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2rem 0px"
---

# Design System: Farhoud Talebi Portfolio

## Overview

**Creative North Star: "The Evidence Field"**

The Evidence Field restores the original identity-first hero before the evidence: Farhoud Talebi's name, Software Engineer role, existing tagline, Contact and Résumé actions, and a subtle particle field. The current Bolder Experience and Skills sections remain unchanged. Projects use four compact detailed cards and a complete visible archive so technical proof stays scanable without turning into a giant case study.

The system is dense inside generous outer whitespace. A flat semantic spine of rules, compact cards, archive rows, ledgers, section links, and rectangular controls carries hierarchy. Signal Green marks action and selection, Safety Rust protects focus and error states, and verified project imagery provides the only large image texture.

**Key Characteristics:**
- Six semantic color roles with a four-role dark-mode swap.
- Condensed display type, readable body type, and tabular monospaced metadata.
- Fluid outer gutters around an asymmetric twelve-column desktop field.
- Flat one-pixel dividers, predominantly square geometry, and no shadows.
- Compact four-card featured evidence and 13-item archive records that become linear below the desktop breakpoint while keeping all project details and actions visible.

## Colors

A restrained six-role palette treats color as interface semantics rather than decoration.

### Primary
- **Signal Green** (token: `signal`): Primary actions, selected states, link emphasis, and active controls. Translucent Signal is reserved for controlled-state fields.

### Secondary
- **Safety Rust** (token: `safety`): Global keyboard focus outlines, focused field borders, validation summaries, and error text. It is not an ornamental accent.

### Neutral
- **Canvas Mist** (token: `canvas`): Page and field surface in light mode; it becomes the dark ground in dark mode.
- **Carbon Ink** (token: `ink`): Primary text and inverted footer/control surface in light mode; it becomes the light foreground in dark mode.
- **Field Slate** (token: `slate`): Secondary copy, captions, inactive controls, and muted metadata.
- **Trace Gray** (token: `trace`): One-pixel dividers, input strokes, image frames, and underline decoration.

### Named Rules

**The Signal/Safety Separation Rule.** Signal marks action and selection; Safety is reserved for focus, validation, and errors.

**The Role-Swap Rule.** Dark mode swaps Canvas with Ink and Slate with Trace while Signal and Safety remain fixed semantic accents.

## Typography

**Display Font:** Barlow Condensed (with `sans-serif` fallback)  
**Body Font:** Work Sans (with `sans-serif` fallback)  
**Label/Mono Font:** `ui-monospace`, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace

**Character:** The pairing is direct and technical without imitating a terminal. Barlow Condensed creates economical authority at large sizes, Work Sans sustains readable evidence, and the monospaced register turns dates, counts, technologies, and field labels into a scannable index.

### Hierarchy
- **Display** (700, `3.75rem`, line-height `1`): The identity headline. It steps to `4.5rem` at `sm`, `6rem` at `lg`, and `8rem` at `xl` without changing weight.
- **Headline** (700, `2.25rem`, line-height `1`): Major section headings; most step to `3rem` and then `3.75rem` at their implemented breakpoints. The project catalog heading begins at `3rem`.
- **Title** (600–700, `1.5rem`–`1.875rem`, line-height `1`–`1.25`): Record, role, panel, and project titles.
- **Body** (400, `1rem`, line-height `1.5`): Default narrative text. Long-form evidence uses explicit `1.75rem` or `2rem` leading where the source applies it.
- **Body Small** (400, `0.875rem`, line-height `1.5`): Descriptions, achievements, actions, and compact explanatory copy.
- **Label** (600, `0.875rem`, line-height `1.25rem`): Buttons and compact navigation actions.
- **Metadata** (400–600, `0.75rem`, base letter-spacing `0.03em`): Dates, counts, status, technologies, indexes, and field labels; label instances are uppercase and may use `0.1em` tracking.

### Named Rules

**The Three-Register Type Rule.** Use Barlow Condensed for identity and structural titles, Work Sans for explanation and action, and the system mono stack only for metadata and indexing.

## Layout

The field container is fluid to a maximum width of `1440px`, centered with inline padding `clamp(1rem, 4vw, 4rem)`. Major sections use block padding `clamp(4.5rem, 9vw, 8rem)`. The recurring rhythm is the observed Tailwind spacing sequence captured in frontmatter, with `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, and `4rem` doing most grouping work.

At `lg` (`1024px`) and above, the original identity-first hero stays centered around Farhoud's name, Software Engineer role, existing tagline, Contact/Résumé actions, and subtle particles; it has no project preview or current-evidence column. Projects then show exactly four compact detailed cards in this order—DeenPath, StockScanner, Remote Admin Toolkit, Imposter Hunt—in a 2x2 grid at `1440px`, followed by a visible 13-item archive. `sm` is `640px`, `md` is `768px`, and `xl` is `1280px`. The navigation is fixed at `4rem` high, and anchor scrolling accounts for a `5rem` offset.

Below `lg`, the hero remains identity-first and the four featured cards become a single-column flow in the same order; all card evidence and actions stay visible. The complete 13-item archive follows as static content, with Rental Cash Dam before Rental Property Calculator. The current Bolder Experience and Skills sections remain unchanged. The navigation becomes an accessible right-side drawer; signal controls remain fixed at the top-right below the header and hide while that drawer is open. The root supports a `320px` minimum width with no horizontal overflow.

### Project Image Strategy

- DeenPath uses real App Store screenshots at `/images/projects/featured/deenpath-store.webp`.
- StockScanner and Remote Admin Toolkit use factual editorial covers at `/images/projects/featured/stockscanner-cover.webp` and `/images/projects/featured/rat-cover.webp`.
- Imposter Hunt uses its real icon at `/images/projects/imposter-hunt.webp`.
- Archive entries retain the existing factual project covers from `siteData.ts`; no portrait substitute or fabricated imagery is allowed.

## Elevation & Depth

This is a flat system: the shipped field-map surface uses no box shadows, drop shadows, blur, or backdrop filtering. Hierarchy comes from Canvas/Ink inversion, Trace dividers, Signal-tinted selected fields, sticky positioning where useful, and the contrast of real project imagery against otherwise quiet surfaces.

### Named Rules

**The Flat-by-Default Rule.** Separate regions with role color, one-pixel rules, and whitespace; do not simulate depth with shadows or translucent glass.

**The Visible-with-Reduced-Motion Rule.** Motion may clarify a transition, but reduced motion must remove displacement and duration while leaving all content visible.

## Shapes

The field language is predominantly rectilinear. Navigation controls, calls to action, inputs, media frames, drawers, ledger rows, and signal controls use square corners (`0px`) with one-pixel Trace borders. Project media is clipped to a bordered `16:9` rectangle, and keyboard focus uses a two-pixel Safety outline with a three-pixel offset.

The rendered contact submit button is the incumbent exception: the shared Button primitive retains its medium radius (`0.375rem`). No pill container, circular icon badge, or rounded card silhouette is part of the field-map vocabulary.

## Components

Components feel instrumental and explicit: every state is visible through semantic color, border, label, or position rather than ornamental depth.

### Buttons
- **Primary action:** Square Signal surface with Canvas text, a minimum height of `2.75rem`, and `0.75rem 1.5rem` padding. Hover uses Signal at `90%` opacity; focus inherits the global Safety outline.
- **Secondary action:** Square transparent Canvas control with Ink text and a one-pixel Trace border using the same minimum height and padding. Hover changes the border to Signal.
- **Contact submit:** The shared primary Button is full width, `2.75rem` high, horizontally padded by `2rem`, set at `1.125rem`, and rounded by `0.375rem`. Loading disables the control, lowers opacity to `70%`, and adds the inline spinner; disabled controls use `50%` opacity and block pointer events.

### Project Hierarchy & Components
- **Featured grid:** Exactly four compact detailed cards in this order: DeenPath, StockScanner, Remote Admin Toolkit, Imposter Hunt. The desktop grid is 2x2; it becomes one column on mobile.
- **Published product card:** DeenPath is the first featured card and uses real App Store screenshots, verified status/dates, highlights, technologies, and a direct App Store action.
- **Editorial featured cards:** StockScanner and Remote Admin Toolkit use factual editorial covers; Imposter Hunt uses its real icon. Each card keeps its evidence and direct link visible.
- **Archive list:** Exactly 13 remaining projects are always visible in a compact static list in alphabetical order: Animal Adoption Center, AndroidQuizApp, ChatServer, FlickrViewer, MazeSolver, Mechanic Shop, Mortgage Scenario Comparisons, PersonalWebsite2025, Purchase Calculator, Recipe Adventure, Rental Cash Dam, Rental Property Calculator, SwiftProjectileCalculationApp. Rental Cash Dam remains immediately before Rental Property Calculator. It is never filtered or revealed by selection.
- **Evidence rule:** No filters, selectors, giant/full-width case studies, interaction-gated evidence, or hover-only actions.

### Preserved Experience & Skills
- **Bolder Experience:** Keep the current Experience section, career records, achievements, technologies, and behavior unchanged.
- **Bolder Skills:** Keep the current Skills section, five groups, 32 skills, icon rail, and behavior unchanged.

### Records / Containers
- **Project records:** Flat compact articles separated by Trace rules. Featured cards and archive records remain complete and visible at every breakpoint.
- **Project media:** Featured imagery uses the approved real/editorial assets; archive entries retain existing factual covers in bordered rectangles.
- **Career ledger:** The current Bolder rows divide date/location, role/company, achievements, and technologies across the twelve-column field. Additional achievements use a native `details` disclosure with a Trace left rule.
- **Capability matrix:** The current Bolder category rows feed a two- or three-column list whose skill records use top dividers and an icon rail instead of tiles or cards.

### Inputs / Fields
- **Style:** Square Canvas fields with a one-pixel Trace stroke, Ink text, Slate placeholders, and `0.75rem 1rem` padding. Labels use the Work Sans label register.
- **Hover / Focus:** Hover moves the stroke to Slate. Focus moves the stroke to Safety and also receives the global two-pixel Safety outline with a three-pixel offset.
- **Error / Disabled:** Error strokes and messages use Safety. Disabled fields block interaction and use `50%` opacity. Textarea styling mirrors the input and does not resize.

### Navigation
- **Desktop:** A fixed Canvas bar uses Farhoud Talebi’s name as the home link, simple section links, social links, a résumé action, and theme control. Links remain compact and move to Signal on hover.
- **Mobile:** The same section links open in an accessible right drawer below the `4rem` header. It is `11/12` of the viewport up to `24rem`, uses full-width ruled rows, traps focus, closes on Escape or outside press, and restores trigger focus.
- **Footer:** Ink and Canvas invert the page field. A divided section-link list becomes linear before `md`; hover inverts each row back to Canvas/Ink.

### Signal Controls
- **Trigger:** A square `2.75rem`-high Ink control with metadata label, current-color square, and explicit open/close sign. It is fixed `1rem` from the right, below the header, and is hidden while the mobile navigation drawer is open.
- **Panel:** A square bordered Canvas panel, `20rem` wide and capped to the viewport, contains a two-state interaction selector and five complete color rows. It opens downward below its trigger at every breakpoint.
- **State and motion:** Escape and outside press close the panel; selection uses `aria-pressed`. The panel transition is `180ms` `easeOut` with an eight-pixel vertical offset, and reduced motion changes it to a zero-duration, zero-offset state.

## Do's and Don'ts

### Do:
- Do use the six semantic role tokens instead of introducing ad hoc interface colors.
- Do keep Signal for action/selection and Safety for focus/validation/error.
- Do preserve the three typography registers and the observed spacing rhythm.
- Do use Trace rules, whitespace, and role inversion to organize dense evidence.
- Do keep the original identity-first hero and the current Bolder Experience and Skills sections unchanged.
- Do keep featured evidence, archive entries, and direct actions visible without filters, selectors, or interaction gates.
- Do keep controls keyboard-visible and content fully visible when motion is reduced.

### Don't:
- Don't add gradients, glass blur, shadows, glow borders, or decorative blobs.
- Don't turn the approved compact four-card grid into oversized cards, a generic card wall, or a full-width case study.
- Don't add project filters, selectors, interaction-gated evidence, or hover-only actions.
- Don't use Safety as a general accent or Signal as an error color.
- Don't introduce a second palette, type family, radius scale, or spacing scale beside the captured system.
