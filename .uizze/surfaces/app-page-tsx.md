---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/layout.tsx","app/globals.css"]
---

Scope: Public portfolio home surface at app/page.tsx. Visitor mode: Persuade + Read.
Audience: Engineering hiring managers, technical recruiters, and senior developers evaluating Farhoud's systems, mobile, and full-stack work.
Job and action: Decide whether the demonstrated technical range and shipped work warrant a conversation, then contact Farhoud.
Proof and content: Complete siteData biography, six-role career record, all 17 projects and links, 32 skills in five groups, resume, socials, contact states, location, and factual project imagery.

Approved composition:
- Restore the original identity-first hero: Farhoud Talebi, Software Engineer, the existing tagline, Contact and Résumé actions, and a subtle particle field. Do not add a project preview or current-evidence column to the hero.
- Preserve the current Bolder Experience and Skills sections unchanged, including their factual records, hierarchy, and behavior.
- Present exactly four compact detailed featured cards in this order: DeenPath, StockScanner, Remote Admin Toolkit, Imposter Hunt. Use a 2x2 grid at 1440x1100 and a single-column flow at 390x844.
- Keep the remaining 13 projects visible in a compact alphabetical archive in this order: Animal Adoption Center, AndroidQuizApp, ChatServer, FlickrViewer, MazeSolver, Mechanic Shop, Mortgage Scenario Comparisons, PersonalWebsite2025, Purchase Calculator, Recipe Adventure, Rental Cash Dam, Rental Property Calculator, SwiftProjectileCalculationApp. Rental Cash Dam remains immediately before Rental Property Calculator; the archive is static and complete.
- Do not add filters, selectors, giant/full-width case studies, interaction-gated evidence, hover-only actions, or hidden project details. Preserve direct links and visible evidence.

Image strategy:
- DeenPath uses real App Store screenshots at `/images/projects/featured/deenpath-store.webp`.
- StockScanner and Remote Admin Toolkit use factual editorial covers at `/images/projects/featured/stockscanner-cover.webp` and `/images/projects/featured/rat-cover.webp`.
- Imposter Hunt uses its real icon at `/images/projects/imposter-hunt.webp`; archive entries keep existing factual project covers.

Constraints: Preserve factual data and every external link; no portrait; keyboard and reduced-motion access; dark/light theme; consolidated particle controls; EmailJS behavior without a real local send; retain Imposter Hunt routes; no gradients, glass, fake metrics, timeline dots, blobs, or decorative pills; preserve Contact/Footer behavior, navigation, privacy/support routes, and all required QA flows.
Required QA markers: `project-published-product` identifies the DeenPath card, `project-selected-work` wraps the four-card featured grid, and `project-archive` identifies the complete 13-item archive.
Responsive assertions: Desktop viewport is 1440x1100; mobile viewport is 390x844; all four cards and all 13 archive entries remain visible in reading order with no horizontal overflow.
Chosen direction: field-map foundation with final hybrid original-inspired navigation/hero and compact static project hierarchy.
Memorable moment: In the first viewport, Farhoud's identity and existing tagline read clearly before the visitor reaches factual project evidence.
Unresolved decisions: None for this approved refinement. This artifact records requirements only; it does not claim that QA has run.
