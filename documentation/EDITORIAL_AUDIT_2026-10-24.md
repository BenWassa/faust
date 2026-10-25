# Editorial and documentation audit — 2026-10-24

**Scope:** GitHub issues [#15](https://github.com/BenWassa/faust/issues/15) and [#16](https://github.com/BenWassa/faust/issues/16); baseline `main` `594a4b5`. Read `src/pages/`, `src/content/archetypes/*.md`, `src/data/{chapters,archetypes,quiz}.ts`, route/layout components, root docs, style/architecture/sprint records, and crisis resource text. **No changes to Cities research, citations, diagnostic implementation, the site's core argument, or unapproved voice.**

## Status and method

| Area | Observation | Action |
| --- | --- | --- |
| Current tech documentation | Astro 7 static output, seven chapter routes, separate Diagnostic, five archetype content routes | Documented in `CURRENT_IMPLEMENTATION.md`; README/AI context reconciled |
| Historical docs | VISION retains a retired Vite structure and "critical gap"; WebsiteArchitecture proposes React; SiteStyle provides a CDN Tailwind/HTML copy template | Labeled as historical, or moved to explicit archive; current Astro references take precedence |
| Styling | Syne/old green in historical notes vs deployed DM Sans/`#7A9A84` | Corrected *active* guidance only |
| Versioning | Narrative v3.0 versus package `1.1.0` | Recorded separate scopes; no semver decision made |
| Machinery | Eight live traps; prospective document includes more candidates and inconsistent spellings | Canonical label list documented; no live trap changes |
| Navigation | Seven chapter nav/prev-next and archetype route links are present; chapter names match registries | Static structure checked; see content-only cross-reference gaps below |
| Diagnostic | Ten forced-choice questions and five outcomes in current source; not a clinical instrument | Validity/positioning review proposed, not edited (owner decision #3; functionality #10/#13) |
| Crisis help | Existing numbers verified with primary service providers, but names and geography ambiguous | Limited source-supported copy/link correction on Resources page; no clinical advice |

**Evidence standard:** "Verified" below means directly visible in reviewed source or current official provider pages; "Interpretation" means a reading of the prose; "Proposed" requires approval or further evidence. Source documentation and citations for economic/psychological claims are not independently verified by this editorial pass (#8/#9 own that work).

## Chapter-by-chapter argument and reader journey

| Stage | Current role and handoff | Editorial finding |
| --- | --- | --- |
| **01 The System** — `system.astro` | Workism → self-exploitation → meritocratic shame → urban incentives | Strong thematic handoff to Cities. **Interpretation:** "older containers of meaning thinned out" and "mathematically correct" generalize across people and cities; the latter is stronger than the comparative housing data can alone demonstrate. Propose calibrating only after #3/#8. |
| **02 The Cities** — `cities.astro` | Prices/earnings chart → "rational maladaptation" | **Verification deferred:** mixes city-level price-to-income ratios and other burdens. Chart/denominators and causal inference are #8/#9. No evidence tables or chart labels changed in this PR. |
| **03 The Machines** — `machines.astro` | Professional/lifestyle platforms → eight modeled traps → comparison | **Interpretation:** a cited association between LinkedIn frequency and depression is presented adjacent to engineered-feed causal language. LinkedIn/Instagram comparison table uses categories like "malicious" vs "depressive" envy as categorical assertions without source directly adjacent. Scope for claim calibration with #8, editorial decision #3. Illustrative posts are fictionalized but not expressly labeled fictional; consider marking them. |
| **04 The Casualties** — `casualties.astro` | Economic/social dynamics → five narrative archetypes | Five names and order match registry. "Defense mechanisms" suggests a formal psychological taxonomy despite no validation described. Whether to retain that term is an explicit owner decision, not a copyedit. |
| **05 The Exits** — `exits.astro` | Three containment strategies plus FIRE and Tang Ping → limitations of individual response | Distinction between the three exit-strategy cards' **"Archetype"** labels (New Monastic, Virtuous Practitioner, Strategic Deprioritizer) and the five Diagnostic archetypes is unclear. These are *not* additional Diagnostic outcomes; suggest relabeling to "Model" or "Approach" after approval. "failure is often a rational maladaptation" reverses the earlier proposition (ambitious *response* is called maladaptive); candidate low-risk wording correction, held for editorial approval because it changes thesis precision. |
| **06 The Practice** — `practice.astro` | Limits of individual exit → social resistance → language → diversified identity → organizing | Good structural resolution to Exits. **Interpretation:** do-gooder derogation is applied to declining promotions/working hours without demonstrating equivalence to the social-psychological construct; Linville self-complexity phrased as a strong uniform protective effect. `sources` cites Fisher on collective limits but does not on its own establish organizer efficacy. Owner/source review advised. |
| **07 Resources** — `resources.astro` | Reading lists plus four-country crisis lines | Eight books presented with titles/authors but no outgoing book links. Support numbers correct; added clear country-specific labels, primary links and urgent-help advice. The reading list does not provide community links or an "about this research" page despite the historical WebsiteArchitecture proposal. |

**Overall:** The sequence itself is coherent: social meaning and status → structural pressure → algorithmic amplification → patterned responses → individual exits → collective limits → reading/help. Primary risk is presentation of a *contested interpretation* as an empirically proven chain. Preserving the thesis while distinguishing evidence, illustration, and argument is preferable to unapproved rewriting.

## Five archetypes: continuity and cross-references

| Source | What is consistent | Specific mismatch or risk |
| --- | --- | --- |
| `src/data/archetypes.ts`, `src/content.config.ts`, five `src/content/archetypes/*.md` | Watchman → Visible → Faithful → Departed → Architect, numbering 01–05, metadata and titles | Archetype metadata is duplicated in `scripts/gen-archetypes.mjs`; future updates can drift. Do not edit generator under this docs pass. |
| **Watchman** | Defense against precarity; Cities/System/Exits logical references | Cross-reference repeats **Toronto 10.4** as a settled number and suggests slowing 60→45 hours as a low-risk test; outcome and personal constraints may vary. City fact goes to #8/#9. |
| **Visible** | Platform performance → identity → solitude | Cross-reference claims "success theater" and "false self" are explained in **The System**; the live named Success Theater trap is in **The Machines**. The text "Cross-Reference" is prose, not a hyperlink. |
| **Faithful** | Work as meaning; cites The System, Exits and Practice | Says The Exits contrasts vocation "dialogical, relational" with career "egocentric, competitive"; the live Exits presentation uses **Identity Containment** and does not explicitly state that contrast. |
| **Departed** | Withdrawal → protection → cost → selective re-engagement | Says The System explains **"involution"**; word not found in the reviewed System chapter. Statements like "You're not depressed" are absolute mental-state inferences requiring care; decision #3. |
| **Architect** | Private resilience → exhaustion → structural limits; Practice continuation | Ending connects with collective organizing. The claim that all personal architectures eventually fail is interpretation rather than demonstrated universal observation. |

All five archetype detail routes are generated from the Markdown collection and provide links to the other four, Casualties and Diagnostic. The `### Cross-Reference` sections **inside the Markdown bodies** currently name chapters as plain bold text, not linked anchors. Proposed implementation: use project-base-safe Markdown links or render the cross-links from structured metadata *after* the owner settles any editorial corrections; source/collection generator must be updated together, and is outside the present docs-only changes.

## Terminology register

| Concept | Live form | Audit |
| --- | --- | --- |
| Project thesis | "rational maladaptation" | Keep as authorial concept, not a standardized diagnostic category |
| Diagnostic | ten-question, forced-choice **The Diagnostic** | Do not equate its result to a clinical diagnosis; tone/label decisions for #3 |
| Primary five | The Watchman, The Visible, The Faithful, The Departed, The Architect | Match `src/data/archetypes.ts` and five generated essays |
| The Machines | **8 traps** | `SPRINTS.md` refers in one place to *nine*, elsewhere to *1–8*; historical, not current. `MACHINES_TRAPS_PROSPECTIVE.md` is a candidate list. |
| Trap #06 | **Work-Conditional Esteem** (live) | The prospective selection instead says **Work-Contingent Self-Esteem**; decide terminology before changing published copy |
| Exit figures | New Monastic, Virtuous Practitioner, Strategic Deprioritizer | Three illustrative approaches, **not** three more of the five Diagnostic archetypes |
| Chapter count | **7** | Old architecture's "6 chapter cards" text is superseded |

## Resources and support verification

Verified **2026-10-24** by checking official provider web pages, not aggregator directories:

| Jurisdiction | Live number | Source | Finding |
| --- | --- | --- | --- |
| Canada | Call **or text 9-8-8** | [988.ca](https://988.ca/get-help/help-right-now) | Official 24/7 crisis support; the site's generic US/Canada "Suicide & Crisis Lifeline" name conflates two separately branded services |
| United States | Call or text **988** | [CDC mental-health resources](https://www.cdc.gov/mental-health/caring/) and [988 Lifeline](https://988lifeline.org/) | Correct national number |
| UK | **116 123** | [Samaritans](https://www.samaritans.org/how-we-can-help/contact-samaritan/talk-us-phone/) | Free, day or night |
| Germany | **0800 111 0 111** (also 0800 111 0 222, 116 123) | [TelefonSeelsorge](https://www.telefonseelsorge.de/telefon/) | German-language service; **not** an EU-wide crisis line |

**Safety-oriented factual correction:** Label jurisdictions separately, link to these official providers, clarify that German numbers are for **DE**, and mention emergency services for immediate danger. These are verified facts, not an alteration of Diagnostic or thesis positioning. Service availability abroad, accessibility and regional alternatives can vary; links should be rechecked periodically. Samaritans UK discontinued **email** support on 2026-09-30 ([official notice](https://www.samaritans.org/how-we-can-help/email-service-closed/)); the essay does not advertise its email service.

## Owner decisions / alternative treatments — not implemented

1. **Diagnostic's epistemic status and "medicine" rhetoric (#3, #10/#13).** **Recommend** keeping the ten questions and interpretive archetypes while adding a short "literary reflection, not a psychological or clinical assessment" line before the quiz, and using "result" instead of "diagnosis" on the result screen. **Alternative:** retain confrontational diagnosis phrasing with an explicit limits note. **Not changed.**
2. **Structural argument and causal strength (#3/#8).** **Recommend** retaining the thesis but labeling empirical observations, plausible mechanisms and authorial interpretations separately. **Alternative:** preserve assertive phrasing and add inline provenance for its scope/limits. **Not changed.**
3. **Archetype voice and high-stakes inference (#3).** **Recommend** retaining direct second person but removing or qualifying universal mind-reading and clinical claims (especially Departed: "You're not depressed"; Watchman: assured outcome of overwork test). **Alternative:** retain voice with prominent fiction/interpretive framing. **Not changed.**
4. **Exit cards' "Archetype" label (#3).** **Recommend** "Approach" or "Illustrative model" to avoid an apparent eight-archetype taxonomy. **Alternative:** add a note that these figures are not Diagnostic results. **Not changed.**
5. **Cross-reference text (#3 + later implementation lane).** **Recommend** fix Visible→Machines, Departed→correct locus for involution, and Faithful→actual Exits terminology; then add base-aware links in authored Markdown and rerun the generator. **Alternative:** keep conceptual references but add explanatory passages in destination chapters. **Not changed.**
6. **Reading-list expansion (#2/#3).** **Recommend** curated publisher/library links and optional other-country support directory. **Alternative:** retain deliberately minimal reading list with explicit geographic scope. **Not changed.**
7. **Version convention (#15).** **Recommend** maintain distinct essay-edition label and package semver until the next release decision. **Alternative:** unify them at the next tagged publication after a migration plan. **No package version change.**

## Change log and validation contract

### Implemented factual/documentation edits

- New current-source-of-truth map with build, routes, design tokens, ownership, archive guidance, edition-versus-package distinction and dated release note.
- README and AI context aligned to shipped Astro design/system conventions.
- Historical vision, architecture, earlier sprints and prospective traps labeled as non-authoritative; old work and decisions preserved.
- Style guide updated to point contributors to Astro components rather than a retired standalone HTML/CDN template.
- Resource-support geography and official links clarified on the Resources route only.
- **No Cities or citations source data, diagnostic logic, narrative feature copy, deploy config, or global CSS changed.**

### Checks

- **Source inventory:** seven canonical `chapters`, seven `src/pages/{slug}.astro` pages, five archetype registry entries and content files, ten quiz questions, eight Machines traps.
- **Remote static contract checks actually executed against the PR branch on 2026-10-24:** **24/24 passed**: 11 inventory, documentation, support-link and design-token assertions; 13 route/frontmatter/Diagnostic-presence checks (seven chapter pages, five archetype Markdown entries and the separate Diagnostic page). These do **not** compile Astro, inspect runtime behavior, or replace a local build.
- **Cross-reference audit:** checked chapter order/next-prev logic, five archetype metadata/frontmatter, archived-vs-live naming, available links and resource numbers.
- **Run locally after checkout:** `npm ci && npm run build && npm run format:check`. The baseline `package.json` has no `test` script; do not report `npm test` as passing. GitHub PR checks, if configured, should be recorded separately. This remote connector environment does not provide a local checkout or Node build runner.
- **Open checks:** full browser/link crawl, regenerated archetype content snapshot tests, citation fact checks (#8/#9) and functional Diagnostic testing (#10/#13). CI may change concurrently while #13 builds it.

## Open risk register (2026-10-24)

| Priority | Risk | Owner/dependency |
| --- | --- | --- |
| High | Published empirical wording implies more causality, uniformity or psychometric validity than source evidence demonstrates | #3, #8, #10 |
| High | Mixed housing metrics/years used to support broad city-to-psychology inference | #8/#9; policy #4 |
| High | Archetype second-person certainty and test suggestions may be read as psychological assessment or individualized advice | #3 |
| Medium | Authoring/live metadata duplication and dead conceptual cross-reference labels | Follow-up implementation; coordinate #10 and publication decision #2 |
| Medium | Resource-provider labels and help options require periodic international verification | Editorial maintenance |
| Medium | Historical document status and unapproved version naming may recur in future agent work | #15, owner release decision |
| Medium | No baseline PR CI/test script at review time | #13 |
