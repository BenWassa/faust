# Diagnostic functional audit and regression contract

Issues: [#10](https://github.com/BenWassa/faust/issues/10) and [#13](https://github.com/BenWassa/faust/issues/13). No thesis, question wording, weights or result copy were changed; those belong to owner decision [#3](https://github.com/BenWassa/faust/issues/3).

## Findings and functional changes

| Behavior | Original implementation | Treatment |
| --- | --- | --- |
| Scoring | Incrementally mutates a global score map and undoes the last recorded weights on changes | Recompute scores from ten selected option indices at finish; no stale accumulated weights |
| Tie-breaking | Code selects first entry of the archetype registry on equal scores; the comment incorrectly claimed "question order of first lead" | Preserve *registry order* Watchman → Visible → Faithful → Departed → Architect; document and regression-test rather than changing editorial policy |
| Secondary | Next rank with a positive score (may be tied with the primary) | Preserve behavior; test positive and tied runner-up |
| Rapid clicks | Uncancelled timeouts could advance/finish out of sequence and render twice | Replace the outstanding transition on selection or navigation, ignore option events from hidden questions |
| Back | Prior answer remains selected, but races with pending transitions | Restore previous selection, cancel pending advance, return focus to the chosen option |
| Retake | Clears accumulated scores and highlights but leaves stale result hash | Clear selections, styles, pending work, and valid Diagnostic hash; return focus to the first question |
| Shared result link | The result hash was written but not read on page load | Recognize the five approved hashes on load, show the corresponding *primary* result with no manufactured secondary; Retake enables a new full assessment |
| Share | Relied on Web Share or modern Clipboard, swallowing errors | Use native share where available; copy canonical result-hash URL through clipboard or legacy selection fallback; show failure rather than a false success; do not copy on native-share cancellation |
| Keyboard and motion | Buttons were natively operable, but focus could remain in hidden content; result always used smooth scrolling | Explicit button semantics, selected state, arrow-key focus navigation, next-question/result focus, and reduced-motion-aware scrolling |

The deep-link hash exposes the **result slug only**, not the ten answers. It is interpretive content, not a validated clinical diagnosis.

## Exhaustive mathematical distribution

The existing dataset contains nine four-option questions and one five-option question: **4⁹ × 5 = 1,310,720** distinct complete answer vectors. All vectors were enumerated using the existing weights and registry-order tie policy, under a *hypothetical uniform choice assumption*:

| Primary result | Outcome count | Share of vectors |
| --- | ---: | ---: |
| Watchman | 403,270 | 30.77% |
| Visible | 410,542 | 31.32% |
| Faithful | 334,090 | 25.49% |
| Departed | 135,683 | 10.35% |
| Architect | 27,135 | 2.07% |
| **Total** | **1,310,720** | **100%** |

**309,756 (23.63%)** vectors have at least two archetypes tied for first before registry-based precedence is applied. The Architect receives dedicated or shared weight from relatively few question options, and wins fewer combinations than the other four. This is an **instrument-design fairness concern**, not evidence of respondent population proportions, psychometric validity or any individual's type. #3 must decide whether this skew is intended; it was not silently corrected here.

Examples checked: all five archetypes reachable, positive and tied second-place outcomes, changed prior answers, early/back/final states, rapid double taps, Retake, all five result paths, reduced motion, keyboard focus, clipboard success/failure and canceled native sharing.

## Privacy and interpretive limits

No response data is persisted, submitted to a backend or included in share links. Answers live in memory until Retake/navigation; the URL contains only the primary archetype slug. The site-wide theme control separately uses localStorage, which is unrelated to Diagnostic answers. A direct share link reconstructs **only** the primary result, not a fictitious answer history.

This is a self-reflection prompt, not a standardized or clinically validated personality assessment. The language and framing should be reviewed under #3 rather than changed in a functional defect PR.

## Repeatable tests and CI

```bash
npm ci
npm test
npm run build
npm run check:build
```

Vitest covers the pure scoring function, a jsdom interaction harness, City data shape integration and the /faust URL helper. The post-build smoke check verifies all expected chapter and archetype pages, the five embedded result destinations, and base-prefixed built asset references. Both are deterministic and require no secrets.

CI is in `.github/workflows/ci.yml` (pull requests, main pushes, manual). It is **independent** of `deploy.yml`, as required by #13; merging must be protected by a required CI status check in GitHub branch protection to prevent untested changes reaching main. A separate deployment workflow triggered on push to main can still start before the CI workflow completes; this change does not imply deployment is mechanically blocked.

### Coordination with #9

`tests/cities.contract.test.ts` asserts only the four-city data contract: unique city keys, nonempty identifying/source labels, valid currencies, finite same-currency ratios and agreement with the exported ratio helper. It **does not** lock current disputed housing numbers, source years, citations or methodology; those evidence-backed regression fixtures remain owned by #9. Preserve/export `cities`, `cityOrder` and `ratio` or coordinate any contract change.

### Remaining limitations

- jsdom verifies state, focus, events and clipboard branches, but does not reproduce actual hardware keyboard activation, screen-reader announcements or OS share sheets; manual mobile/desktop accessibility testing remains valuable.
- No psychometric validation, population calibration or revision of archetype language/weights was undertaken.
- The existing `format:check` script is not made a required CI gate pending a verified clean repository-wide formatting baseline. A TypeScript/Astro static typecheck is not configured by the existing dependency set.
