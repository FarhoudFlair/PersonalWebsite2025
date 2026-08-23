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
  project-filter:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.slate}"
    typography: "{typography.metadata}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0px"
  project-filter-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.metadata}"
  project-record:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "2rem 0px"
  project-record-active:
    backgroundColor: "rgb(31 107 82 / 0.1)"
    textColor: "{colors.ink}"
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

The Evidence Field presents engineering work as an authored field of connected proof: precise enough for technical evaluation, pragmatic enough to scan quickly, and confident without spectacle. Condensed display type gives identity and section markers a clear voice; restrained body copy and monospaced metadata make the evidence feel technically fluent.

The system is dense inside generous outer whitespace. A flat semantic spine of rules, ledgers, indexes, and rectangular controls carries hierarchy instead of card stacks or decorative effects. Signal Green marks action and selection, Safety Rust protects focus and error states, and real project covers provide the only large image texture.

**Key Characteristics:**
- Six semantic color roles with a four-role dark-mode swap.
- Condensed display type, readable body type, and tabular monospaced metadata.
- Fluid outer gutters around an asymmetric twelve-column desktop field.
- Flat one-pixel dividers, predominantly square geometry, and no shadows.
- Dense, complete evidence records that become linear below the desktop breakpoint.

## Colors

A restrained six-role palette treats color as interface semantics rather than decoration.

### Primary
- **Signal Green** (token: `signal`): Primary actions, selected states, link emphasis, signal lines, and active controls. Translucent Signal is limited to selected-record fields.

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

At `lg` (`1024px`), the layout becomes an asymmetric twelve-column field. Identity and current evidence split seven/five columns; the project stage and index use the same proportions in reverse reading order. `sm` is `640px`, `md` is `768px`, and `xl` is `1280px`. The navigation is fixed at `4rem` high, and anchor scrolling accounts for a `5rem` offset.

Below `lg`, the evidence becomes linear rather than mimicking the desktop composition. The project stage is removed from flow and each project record carries its own bordered `16:9` cover, full description, highlights, technologies, and actions. The navigation becomes a right-side drawer; the signal trigger moves below the header on narrow screens. The root supports a `320px` minimum width, and the passing `390px` evidence has no horizontal overflow.

## Elevation & Depth

This is a flat system: the shipped field-map surface uses no box shadows, drop shadows, blur, or backdrop filtering. Hierarchy comes from Canvas/Ink inversion, Trace dividers, Signal-tinted selected fields, sticky positioning where useful, and the contrast of real project imagery against otherwise quiet surfaces.

### Named Rules

**The Flat-by-Default Rule.** Separate regions with role color, one-pixel rules, and whitespace; do not simulate depth with shadows or translucent glass.

**The Visible-with-Reduced-Motion Rule.** Motion may clarify a transition, but reduced motion must remove displacement and duration while leaving all content visible.

## Shapes

The field language is predominantly rectilinear. Navigation controls, calls to action, filters, inputs, image stages, drawers, ledger rows, and signal controls use square corners (`0px`) with one-pixel Trace borders. Project media is clipped to a bordered `16:9` rectangle; active filters use a two-pixel Signal top rule, and keyboard focus uses a two-pixel Safety outline with a three-pixel offset.

The rendered contact submit button is the incumbent exception: the shared Button primitive retains its medium radius (`0.375rem`). No pill container, circular icon badge, or rounded card silhouette is part of the field-map vocabulary.

## Components

Components feel instrumental and explicit: every state is visible through semantic color, border, label, or position rather than ornamental depth.

### Buttons
- **Primary action:** Square Signal surface with Canvas text, a minimum height of `2.75rem`, and `0.75rem 1.5rem` padding. Hover uses Signal at `90%` opacity; focus inherits the global Safety outline.
- **Secondary action:** Square transparent Canvas control with Ink text and a one-pixel Trace border using the same minimum height and padding. Hover changes the border to Signal.
- **Contact submit:** The shared primary Button is full width, `2.75rem` high, horizontally padded by `2rem`, set at `1.125rem`, and rounded by `0.375rem`. Loading disables the control, lowers opacity to `70%`, and adds the inline spinner; disabled controls use `50%` opacity and block pointer events.

### Project Filters
- **Style:** Two metadata buttons sit on a shared Trace top rule with no enclosing pill or filled track. Each uses `0.75rem` vertical padding.
- **State:** The selected filter moves a two-pixel Signal rule onto the shared edge and uses Ink text. Unselected filters remain Slate, then move toward Trace/Ink on hover. `aria-pressed` carries selection.

### Records / Containers
- **Project records:** Flat articles separated by Trace rules. The desktop active record receives a `10%` Signal field; complete body content remains visible for the active desktop record and for every mobile record.
- **Project stage:** A sticky desktop `16:9` cover frame and bordered caption update with a `220ms` opacity transition using `cubic-bezier(0.22, 1, 0.36, 1)`. On mobile, each record owns an eagerly loaded `16:9` cover.
- **Career ledger:** Rows divide date/location, role/company, achievements, and technologies across the twelve-column field. Additional achievements use a native `details` disclosure with a Trace left rule.
- **Capability matrix:** Category rows feed a two- or three-column list whose skill records use top dividers and an icon rail instead of tiles or cards.

### Inputs / Fields
- **Style:** Square Canvas fields with a one-pixel Trace stroke, Ink text, Slate placeholders, and `0.75rem 1rem` padding. Labels use the Work Sans label register.
- **Hover / Focus:** Hover moves the stroke to Slate. Focus moves the stroke to Safety and also receives the global two-pixel Safety outline with a three-pixel offset.
- **Error / Disabled:** Error strokes and messages use Safety. Disabled fields block interaction and use `50%` opacity. Textarea styling mirrors the input and does not resize.

### Navigation
- **Desktop:** A fixed, bordered Canvas bar uses a square Ink monogram, a numbered field index, social links, résumé action, and theme control. Links are compact, uppercase, and move to Signal on hover.
- **Mobile:** The field index opens as an accessible right drawer below the `4rem` header. It is `11/12` of the viewport up to `24rem`, uses full-width ruled rows, traps focus, closes on Escape or outside press, and restores trigger focus.
- **Footer:** Ink and Canvas invert the page field. A five-column numbered index becomes a divided linear list before `md`; hover inverts each row back to Canvas/Ink.

### Signal Controls
- **Trigger:** A square `2.75rem`-high Ink control with metadata label, current-color square, and explicit open/close sign. It sits `1rem` from the right, below the header on narrow screens and at the bottom edge from `sm` upward.
- **Panel:** A square bordered Canvas panel, `20rem` wide and capped to the viewport, contains a two-state interaction selector and five complete color rows. It opens downward on narrow screens and upward from `sm`.
- **State and motion:** Escape and outside press close the panel; selection uses `aria-pressed`. The panel transition is `180ms` `easeOut` with an eight-pixel vertical offset, and reduced motion changes it to a zero-duration, zero-offset state.

## Do's and Don'ts

### Do:
- Do use the six semantic role tokens instead of introducing ad hoc interface colors.
- Do keep Signal for action/selection and Safety for focus/validation/error.
- Do preserve the three typography registers and the observed spacing rhythm.
- Do use Trace rules, whitespace, and role inversion to organize dense evidence.
- Do keep controls keyboard-visible and content fully visible when motion is reduced.

### Don't:
- Don't add gradients, glass blur, shadows, glow borders, or decorative blobs.
- Don't turn evidence records into a repeated grid of rounded cards or decorative pills.
- Don't use Safety as a general accent or Signal as an error color.
- Don't hide actions or essential details behind hover-only behavior.
- Don't introduce a second palette, type family, radius scale, or spacing scale beside the captured system.
