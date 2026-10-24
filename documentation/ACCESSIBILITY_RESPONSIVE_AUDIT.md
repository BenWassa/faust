# Accessibility and responsive QA — issues #11 and #12

**Scope:** All seven chapters, home, Diagnostic, and five archetype articles; shared navigation, components, global styling, and the Machines disclosure interface. Source audit based on main at the start of work on 2026-10-24. Diagnostic quiz and Cities feature files are read-only in this PR by ownership agreement.

## Verification tiers (do not conflate)

1. **Completed static/source review:** markup, event handlers, existing motion styles, asset inventory and computed token contrast. Fixes committed to this branch.
2. **Automated Chromium run on PR:** `.github/workflows/accessibility-audit.yml` builds main and this PR, serves both at `/faust/`, and executes `scripts/browser-audit.mjs`. Its `accessibility-before-after` artifact provides JSON, summary and paired **before/after** viewport screenshots. The workflow must finish before any browser results can be claimed.
3. **Manual acceptance pending:** NVDA/Firefox, VoiceOver/Safari, TalkBack/Chrome, genuine 200% browser zoom, landscape on physical mobile, forced-colors mode, keyboard order on every page, and real-world midrange Android Core Web Vitals. An automated axe scan is not a screen-reader test.

## Test matrix built into the collector

| Dimension | Coverage |
| --- | --- |
| Pages | Home; System, Cities, Machines, Casualties, Exits, Practice, Resources; Diagnostic; five archetype detail pages (14 routes) |
| Layout | 320, 375, 390, 768, 1024, 1440px |
| Themes | Light and dark via persistent `faust-theme` preference |
| Motion | `prefers-reduced-motion: reduce` in all main matrix checks |
| Screenshots | Home, Cities, Machines, Diagnostic at 320/390/768/1440; light/dark; baseline and candidate (64 viewport images) |
| Accessibility | Axe WCAG 2, 2.1 and 2.2 A/AA sampling for the four primary routes at 390px in each theme; semantic/alt checks and control sizing on all route states |
| Keyboard smoke | Skip link focus; hamburger Enter/Escape/state/focus; theme persistence; Machines disclosures; Diagnostic ten-question keyboard path (reported, not modified here) |
| Responsive edge | 200% root font-size proxy for four key pages, with **no claim** it substitutes for browser zoom; landscape and physical zoom remain manual |
| Performance | Local production preview, 390px simulated midrange mobile with 4× CPU slowdown, 150ms latency and 1.6Mbps downlink; DCL/transfer/CLS samples, **not Lighthouse or field vitals** |

## Verified source-level defects and remediation

| Priority | Defect in main | Candidate remediation | Verification status |
| --- | --- | --- | --- |
| P0 | Narrow navigation opens visually but has no `aria-controls`, no Escape path, no focus return, no mobile-menu scroll boundary, and no current-page annotation | Explicit expanded/label state, Escape focus return, outside-click and breakpoint closure, current-page annotations, scrollable dropdown, 44px toggle | Static change; keyboard runner pending |
| P1 | Theme control has no announced on/off state and an undersized / negative-margin hit area | `aria-pressed` reflects initial and changed theme; 44px interactive area; persisted choice preserved | Static change; smoke pending |
| P1 | Machines trap content toggles `hidden` without `aria-expanded` or controls relationship; feed click scrolls without moving focus | Labeled disclosure relationships, synchronized state, feed-to-disclosure focus, motion-aware scrolling; table headers/scroll region | Static change; keyboard runner pending |
| P1 | Normal `text-rust` #C05640 on #FDFBF7 is **4.37:1**, and on #12161F is **4.00:1** (WCAG 2.2 AA text is 4.5:1) | Text-only rust foreground #A7422F (~**5.87:1** light) and #EA917B (~**7.61:1** dark), without changing rust fills and chart markers | Calculated using linearized sRGB contrast; visual/axe pending |
| P1 | 40–60% ink labels yield ~2.4–4.3:1 on cream; low-opacity text in dark also fails in places | Increase informative secondary-text contrast while retaining a subordinate hierarchy; text-only green variant adjusted | Static change; per-element axe pending |
| P1 | Chapter CTA in cards is invisible without hover | Always present on narrow screens and revealed on keyboard focus at wider widths | Static change |
| P1 | Hero uses fixed-size large text at narrow widths; scripted smooth scroll ignores reduced motion | Fluid `clamp` typography and motion-aware scroll | Visual screenshot pending |
| P2 | Chapter navigation links can crowd narrow widths; horizontal overflow globally masked | Flexible, wrapping labels; preserve natural overflow for measurement; move primary desktop menu threshold to 1280px | Viewport run pending |
| P2 | Diagram reading order is implicit and source links use icon-only labels | Meaningful list structures for Envy Loop and identity diagrams; source links receive explicit accessible names | Static change |

### Contrast calculation

WCAG contrast uses linear sRGB channel transformation (channel/12.92 for values ≤0.04045, otherwise ((channel+0.055)/1.055)^2.4), luminance weighted 0.2126/0.7152/0.0722, then (lighter + 0.05)/(darker + 0.05). Reported values are calculated for **opaque token pairings**, not complete rendered screens; transparency, imagery, hover and composite backgrounds require axe and manual sampling. The brand-rust *fill* against light lettering remains near the 4.5:1 boundary and should be specifically inspected.

## Feature-owned findings — do not modify in this branch

**Diagnostic: coordinate with #10/#13 (issues #10 and #13):**
- Answer buttons are children of `fieldset` but are not radio inputs/radiogroups and do not expose a selected state. The semantic change to the question and selected answer needs explicit focus and state communication.
- Advancing and returning hides and shows fieldsets but does not move keyboard focus to the new question. Focus can remain in a hidden panel; screen-reader announcement of the counter/progress/results is not implemented.
- Quiz progress bar is visual-only; results replace content without focus management; sharing status changes in text but not in a live region.
- The existing question advancing timer and rapid keypress handling are under #10; coordinate before edits. This PR includes an observational keyboard-completion smoke check only.

**Cities: coordinate with #9 (issues #8/#9):**
- `role="tablist"` / `role="tab"` controls do not provide tabpanel relationships or standard arrow-key/Home/End/roving-tabindex behaviour; tabs currently remain individually tabbable. State change updates visual data but there is no announced selected-panel heading or status.
- Comparative bar values have `whitespace-nowrap` and can plausibly collide on small widths; verify 320px, large text, dark mode and long currency labels in browser evidence before changing the visualization.
- Chart bars lack an equivalent structured text table for screen-reader comparison (selected city has visual values; full comparative chart in `cities.astro` has written values, but should be assessed in #9 alongside data labels).
- City images update `alt`, but explicit `width`/`height` and performance impacts of 1–1.75 MB city PNGs warrant inspection. Actual evidence and responsive fixes are owned by #9.

## Further risks and manual follow-up

- Third-party Google Fonts and Material Symbols are loaded by `BaseLayout.astro`. Network/font delay, fallback and CLS should be checked on real devices; metadata/layout file ownership is with #7/#14/#17.
- Many inline citations and ancillary text links fall below the ideal 44×44 CSS pixel touch target and may depend on adjacent spacing; assess WCAG 2.2 2.5.8 minimum 24×24 plus spacing separately from the 44×44 enhanced usability target.
- Decorative 10px metadata is very small even where contrast improved; validate 200% zoom, large text and forced colours.
- The 320px hero and the four-city chart should be visually reviewed for clipping after the browser runner completes. Removing global `overflow-x-hidden` intentionally exposes, rather than conceals, any remaining overflow.
- Existing `src/pages/casualties.astro` and `src/pages/exits.astro` contain heading jumps (`h1` to `h3`); no editorial/IA rewrite was made. The shared home Card heading level was corrected.
- Large imagery in `public/infographics` is roughly 6–7MB per PNG; this is an asset optimisation opportunity, not evidence these are all loaded on any one route. Asset ownership remains with deployment #7/#14/#17.
- CI captures screenshots and automated results for review; **no manual screen-reader pass, Lighthouse score, 200% browser zoom, or physical-phone performance claim** is made by this document.

## PR acceptance checklist

- [x] Repository/issue ownership scoped; Diagnostic/Cities feature sources untouched
- [x] Priority shared keyboard, semantic, contrast and responsive fixes committed
- [x] Repeatable baseline/candidate Chromium workflow with artifacts committed
- [ ] Review resulting screenshots and metrics; fix any attributable regressions
- [ ] NVDA, VoiceOver, TalkBack, physical phone/landscape and true zoom
- [ ] Obtain #9 and #10 feedback on feature-owned findings
- [ ] Verify all checks green; then decide separately whether #11/#12 can close
