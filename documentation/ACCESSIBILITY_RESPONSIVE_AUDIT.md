# Accessibility and responsive QA — issues #11 and #12

**Scope:** All seven chapters, home, Diagnostic, and five archetype articles; shared navigation, components, global styling, and the Machines disclosure interface. Source audit based on main at the start of work on 2026-10-24. Diagnostic quiz and Cities feature files are read-only in this PR by ownership agreement.

## Verification tiers (do not conflate)

1. **Completed static/source review:** markup, event handlers, existing motion styles, asset inventory and computed token contrast. Fixes committed to this branch.
2. **Automated Chromium run on PR:** `.github/workflows/accessibility-audit.yml` builds main and this PR, serves both at `/faust/`, and executes `scripts/browser-audit.mjs`. Its `accessibility-before-after` artifact provides JSON, summary and paired **before/after** viewport screenshots. First successful baseline/candidate browser run: [workflow 40141208021](https://github.com/BenWassa/faust/actions/runs/40141208021) and [64 screenshot + JSON artifact](https://github.com/BenWassa/faust/actions/runs/40141208021/artifacts/12579341139). A second [successful workflow run 40141958905](https://github.com/BenWassa/faust/actions/runs/40141958905) tested the expanded 14-route axe matrix (27 contrast reports); subsequent large-text heading fix requires final-head verification.
3. **Manual acceptance pending:** NVDA/Firefox, VoiceOver/Safari, TalkBack/Chrome, genuine 200% browser zoom, landscape on physical mobile, forced-colors mode, keyboard order on every page, and real-world midrange Android Core Web Vitals. An automated axe scan is not a screen-reader test.

## Test matrix built into the collector

| Dimension | Coverage |
| --- | --- |
| Pages | Home; System, Cities, Machines, Casualties, Exits, Practice, Resources; Diagnostic; five archetype detail pages (14 routes) |
| Layout | 320, 375, 390, 768, 1024, 1440px |
| Themes | Light and dark via persistent `faust-theme` preference |
| Motion | `prefers-reduced-motion: reduce` in all main matrix checks |
| Screenshots | Home, Cities, Machines, Diagnostic at 320/390/768/1440; light/dark; baseline and candidate (64 viewport images) |
| Accessibility | Axe WCAG 2, 2.1 and 2.2 A/AA at 390px in both themes for all fourteen routes on final head (initial browser run sampled four); semantic/alt checks and control sizing on all route states |
| Keyboard smoke | Skip link focus; hamburger Enter/Escape/state/focus; theme persistence; Machines disclosures; Diagnostic ten-question keyboard path (reported, not modified here) |
| Responsive edge | 200% root font-size proxy for four key pages, with **no claim** it substitutes for browser zoom; landscape and physical zoom remain manual |
| Performance | Local production preview, 390px simulated midrange mobile with 4× CPU slowdown, 150ms latency and 1.6Mbps downlink; DCL/transfer/CLS samples, **not Lighthouse or field vitals** |

## Measured evidence (initial successful run; not final-head certification)

- Browser build **passed** for both `main` and commit `c6cf0f2`; the workflow then completed successfully.
- **336 measured states**: 14 routes × 6 widths × light/dark × before/after. **0 cases of horizontal document overflow** and **0 new overflow regressions** at normal root font size.
- Keyboard smoke: skip link, menu Enter/Escape/focus restoration, theme state and persistence, Machines expansion/collapse/focus, and observational Diagnostic ten-question completion **passed**.
- At **200% root-font simulation**, home/Cities/Diagnostic had zero horizontal overflow. Machines showed **40px overflow** in the first and second runs. The later instrumented run isolated the cause: the flex header containing **“The Panopticon”** expanded to right edge **430px** inside a **390px** viewport when root font size was doubled. The heading is now smaller below `sm` and the row permits wrapping; the new script fails CI if any of the four text-size proxy routes still overflows.
- The initial four-route sample had **8 route/theme colour-contrast reports**. The expanded **14-route scan had 27 route/theme colour-contrast reports** (all colour contrast, some routes/themes without reported violations). The JSON artifact records node-by-node targets and ratios. This is a violation *report count*, not eight individual failing elements.
- Representative simulated mobile DCL on local preview ranged **386–489 ms**, with 4× CPU and synthetic 1.6Mbps/150ms network. Transfer measures were cache-affected (0 KiB on multiple routes) and must not be interpreted as real-device Lighthouse or field performance.
- **64 before/after screenshots** and `results.json` are in the [GitHub Actions artifact](https://github.com/BenWassa/faust/actions/runs/40141208021/artifacts/12579341139). 320px light/dark Home and Machines screenshots were visually inspected; the rest remain reviewable there.
- Attempting whole-site selector overrides for `text-rust` repeatedly failed the Astro 7 LightningCSS minifier (pseudo-element selector parse error); source rules were reverted to restore a successful production build. Contrast adjustments were instead applied to owned component utility classes. The shared Cite link now uses high-contrast important foreground classes to supersede article link styling, and SourceList links have ≥24px targets. Footer targets are ≥44px, measured down from 11 to 1 undersized controls on the 320px home sample (the remaining item is the visually hidden skip link). The pre-existing Astro/@astrojs-tailwind `npm ci` peer-conflict is worked around **inside this audit workflow only** with `--legacy-peer-deps`; issue #13 owns the production-wide dependency correction.

## Verified source-level defects and remediation

| Priority | Defect in main | Candidate remediation | Verification status |
| --- | --- | --- | --- |
| P0 | Narrow navigation opens visually but has no `aria-controls`, no Escape path, no focus return, no mobile-menu scroll boundary, and no current-page annotation | Explicit expanded/label state, Escape focus return, outside-click and breakpoint closure, current-page annotations, scrollable dropdown, 44px toggle | Passed initial keyboard smoke at commit c6cf0f2 |
| P1 | Theme control has no announced on/off state and an undersized / negative-margin hit area | `aria-pressed` reflects initial and changed theme; 44px interactive area; persisted choice preserved | Passed initial theme-state and reload smoke at commit c6cf0f2 |
| P1 | Machines trap content toggles `hidden` without `aria-expanded` or controls relationship; feed click scrolls without moving focus | Labeled disclosure relationships, synchronized state, feed-to-disclosure focus, motion-aware scrolling; table headers/scroll region | Static change; keyboard runner pending |
| P1 | Normal `text-rust` #C05640 on #FDFBF7 is **4.37:1**, and on #12161F is **4.00:1** (WCAG 2.2 AA text is 4.5:1) | Owned shared components use foreground variants #A7422F (~**5.87:1** light) and #EA917B (~**7.61:1** dark); original global selector overrides were reverted after reproducible LightningCSS build failures. Feature-owned pages retain some original token uses | Values calculated from linearized sRGB; shared component changes require final-head axe confirmation |
| P1 | 40–60% ink labels yield ~2.4–4.3:1 on cream; low-opacity text in dark also fails in places | Increased secondary-text opacity in owned shared components and Machines; remaining labels in Diagnostic/Cities/other page files and green variants are not claimed fixed | Initial axe detected failures; final-head results required |
| P1 | Chapter CTA in cards is invisible without hover | Always present on narrow screens and revealed on keyboard focus at wider widths | Static change |
| P1 | Hero uses fixed-size large text at narrow widths; scripted smooth scroll ignores reduced motion | Fluid `clamp` typography and motion-aware scroll | First 320px hero screenshots reviewed; final-head screenshot review pending |
| P2 | Chapter navigation links can crowd narrow widths; horizontal overflow globally masked | Flexible, wrapping labels; preserve natural overflow for measurement; move primary desktop menu threshold to 1280px | 0 standard-sizing overflow states in initial 336-state run; changes since then pending retest |
| P2 | Diagram reading order is implicit and source links use icon-only labels | Meaningful list structures for Envy Loop and identity diagrams; source links receive explicit accessible names | Static change |

### Contrast calculation

WCAG contrast uses linear sRGB channel transformation (channel/12.92 for values ≤0.04045, otherwise ((channel+0.055)/1.055)^2.4), luminance weighted 0.2126/0.7152/0.0722, then (lighter + 0.05)/(darker + 0.05). Reported values are calculated for **opaque token pairings**, not complete rendered screens; transparency, imagery, hover and composite backgrounds require axe and manual sampling. Original rust fill #C05640 against cream #FDFBF7 is **4.37:1** and fails for normal-size cream button labels (notably on Diagnostic and some dark-mode links). Darker shared CTA fills were adjusted only where owned. Full-site contrast remains an open risk pending further feature-owner remediation.

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
- Decorative 10px metadata is very small and some labels still fail 4.5:1 contrast, especially feature-owned pages; validate 200% zoom, large text and forced colours.
- The 320px hero and the four-city chart should be visually reviewed for clipping after the browser runner completes. Removing global `overflow-x-hidden` intentionally exposes, rather than conceals, any remaining overflow.
- Existing `src/pages/casualties.astro` and `src/pages/exits.astro` contain heading jumps (`h1` to `h3`); no editorial/IA rewrite was made. The shared home Card heading level was corrected.
- Large imagery in `public/infographics` is roughly 6–7MB per PNG; this is an asset optimisation opportunity, not evidence these are all loaded on any one route. Asset ownership remains with deployment #7/#14/#17.
- CI captures screenshots and automated results for review; **no manual screen-reader pass, Lighthouse score, 200% browser zoom, or physical-phone performance claim** is made by this document.

## PR acceptance checklist

- [x] Repository/issue ownership scoped; Diagnostic/Cities feature sources untouched
- [x] Priority shared keyboard, semantic and responsive fixes committed; contrast improvements limited to owned components
- [x] Repeatable baseline/candidate Chromium workflow with artifacts committed
- [x] Initial workflow run and representative 320px screenshots reviewed
- [x] Full 14-route axe scan reviewed: 27 route/theme contrast reports across 28 combinations; residual issues documented
- [ ] Review **final-head** screenshots and the 200% Machines heading overflow fix
- [ ] NVDA, VoiceOver, TalkBack, physical phone/landscape and true zoom
- [ ] Obtain #9 and #10 feedback on feature-owned findings
- [ ] Verify all checks green; then decide separately whether #11/#12 can close
