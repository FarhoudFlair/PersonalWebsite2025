# Product Brief — Farhoud Talebi Portfolio

UIZZE product-truth record for the public software-development portfolio. Every fact below is verified from `app/data/siteData.ts`, `app/types/index.ts`, the rendered route source, and the filesystem. Audience and job statements are inferred from the explicit brief and are labeled as such. No claims, metrics, testimonials, or visual decisions are added.

## Platform and surface

- Web platform: a Next.js (React/TypeScript) application.
- Single-page portfolio with anchored sections in final rendered order: Home, Projects, Experience, Skills, Contact.
- Two additional routes outside the portfolio surface: `/imposter-hunt/privacy` and `/imposter-hunt/support`.

## Audience (inferred from the explicit brief)

- Engineering hiring managers
- Technical recruiters
- Senior developers

The source data records no audience; this list is inferred from the explicit redesign brief.

## Job to be done (inferred from the explicit brief)

- Evaluate Farhoud Talebi's systems, mobile, and full-stack engineering work.
- Decide whether his technical range and shipped work warrant a conversation.
- Primary action: contact Farhoud.

## Identity (verified from `siteData.personal`)

- Name: Farhoud Talebi
- Title: Software Engineer
- Tagline: "I build innovative software solutions"
- Bio: "Passionate software engineer with expertise in full-stack development, cybersecurity, and mobile applications. Bachelor of Computer Science with Honours from Carleton University, specializing in Security with a 98% CGPA and Senate Medal recognition (Top 3%)."
- Location: Ottawa, ON, Canada
- Email: farhoudtalebi@gmail.com
- Resume: `/Farhoud Resume.pdf`
- Phone: not recorded in `siteData` (the contact UI renders "Available upon request")

## Experience — 6 roles (verified)

1. Collins Aerospace — Sr. Analyst, Software Engineer — 2022-12 to Present — Canada — full-time
2. Fortinet — Mobile iOS Developer — 2022-05 to 2022-12 — Canada — full-time
3. Kinaxis — Back End Technologies Engineer — 2022-01 to 2022-05 — Ottawa, ON — full-time
4. Electronic Arts (EA) — Software Engineer — 2020-09 to 2021-04 — Canada — full-time
5. Solace — Software Developer — 2019-05 to 2019-09 — Canada — full-time
6. Department of National Defence — Software Engineer — 2015-05 to 2015-09 — Canada — full-time

Every role carries achievements and technologies in `siteData`; all must be preserved verbatim.

## Skills — 32 skills in 5 groups (verified)

- Languages (10): JavaScript, TypeScript, Python, C#, C++, C, Java, Swift, Objective-C, Perl
- Frontend & Mobile (6): React, Next.js, HTML, CSS, iOS Development, Android Development
- Backend & Systems (7): .NET, SQL, Database Management, Network Programming, System Programming, Algorithm Design, Security
- Tools & DevOps (4): Git, Docker, Linux, Perforce
- AI & Automation (5): AI-Assisted Development, Claude (Anthropic), Cursor, OpenAI, n8n Automation

No proficiency levels are recorded in the data.

## Projects — 17 (verified)

| Title | Status | Dates | GitHub | Live/App Store |
|---|---|---|---|---|
| DeenPath | completed | 2026-02 to Present | — | App Store (id6749211036) |
| StockScanner | completed | 2023-10 to 2023-11 | yes | — |
| Remote Admin Toolkit (RAT) | completed | 2025-05 | yes | — |
| Imposter Hunt | — | — | yes | — |
| Animal Adoption Center | completed | 2020-04 to 2020-05 | yes | — |
| AndroidQuizApp | completed | 2020-01 | yes | — |
| ChatServer | completed | 2020-05 | yes | — |
| FlickrViewer | completed | 2020-05 | yes | — |
| MazeSolver | completed | 2020-04 to 2020-05 | yes | — |
| Mechanic Shop | completed | 2018-10 | yes | — |
| Mortgage Scenario Comparisons | completed | 2025-03 | yes | — |
| PersonalWebsite2025 | completed | 2025-06 | yes | — |
| Purchase Calculator | completed | 2025-04 | yes | — |
| Recipe Adventure | completed | 2018-10 | yes | — |
| Rental Cash Dam | completed | 2025-04 | yes | — |
| Rental Property Calculator | completed | 2025-03 | yes | — |
| SwiftProjectileCalculationApp | completed | 2020-01 | yes | — |

Every project carries a description, long description, technologies, and highlights in `siteData`; all must be preserved.

## Approved presentation refinement

- **Original hero:** Restore the identity-first hero with Farhoud Talebi, Software Engineer, the existing tagline, Contact and Résumé actions, and a subtle particle field. There is no project preview or current-evidence column in the hero.
- **Preserved sections:** Keep the current Bolder Experience and Skills sections unchanged, including their factual records, hierarchy, and behavior.
- **Featured order and layout:** Show exactly four compact detailed cards in this order: DeenPath, StockScanner, Remote Admin Toolkit, Imposter Hunt. Use a 2x2 grid at 1440x1100 and a single-column flow at 390x844.
- **Visible archive:** Show exactly 13 remaining projects as a compact static alphabetical archive in this order: Animal Adoption Center, AndroidQuizApp, ChatServer, FlickrViewer, MazeSolver, Mechanic Shop, Mortgage Scenario Comparisons, PersonalWebsite2025, Purchase Calculator, Recipe Adventure, Rental Cash Dam, Rental Property Calculator, SwiftProjectileCalculationApp. Rental Cash Dam remains immediately before Rental Property Calculator.
- **Image strategy:** Use real DeenPath App Store screenshots at `/images/projects/featured/deenpath-store.webp`, factual editorial covers for StockScanner and Remote Admin Toolkit at `/images/projects/featured/stockscanner-cover.webp` and `/images/projects/featured/rat-cover.webp`, and the real Imposter Hunt icon at `/images/projects/imposter-hunt.webp`. Archive entries retain the existing factual project covers.
- **Interaction boundaries:** No project filters, selectors, giant/full-width case studies, or interaction-gated evidence. Featured and archive evidence, links, and actions remain visible.
- **QA markers:** `project-published-product` identifies DeenPath, `project-selected-work` wraps the four-card grid, and `project-archive` identifies the 13-item archive. Existing contact/footer behavior, navigation, theme, signal controls, reduced motion, and privacy/support routes remain required.

## Links and social (verified)

- GitHub: https://github.com/FarhoudFlair (@FarhoudFlair)
- LinkedIn: https://www.linkedin.com/in/farhoudtalebi/ (farhoudtalebi)
- Email: farhoudtalebi@gmail.com
- Resume: `/Farhoud Resume.pdf`
- SEO Twitter handle: @farhoudtalebi (SEO metadata only; no Twitter entry exists in the social array)

## Assets (verified on the filesystem)

- Portrait: none valid — `public/images/avatar.jpg` does not exist.
- Project covers: 17 cover images exist under `public/images/projects/` (one per project).
- Open Graph image: `public/images/og-image.jpg` exists.

## Accessibility and local-only constraints

- The surface must remain keyboard-operable and screen-reader reachable.
- Reduced motion must leave all content visible.
- Local-only, disposable experiment: no production deployment and no external publishing.
- `.env.local` exists in the worktree (144 bytes). It was not inspected, copied, or modified. QA must avoid a real EmailJS send and use explicit empty process env values for the configuration-error test.
- `app/data/siteData.ts` is the immutable factual source; presentation consumes it rather than duplicating it.

## Known factual gaps (preserve; do not "correct")

- No valid portrait (missing avatar image).
- Divergent Imposter Hunt contact email: `Farhoud.Engineer@gmail.com` (vs `farhoudtalebi@gmail.com` elsewhere).
- DeenPath records status `completed` while `endDate` is `Present`.
- SEO Twitter handle `@farhoudtalebi` has no matching entry in the social array.
