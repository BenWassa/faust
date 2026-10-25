# Current implementation and documentation authority

**Verified against:** `main` at `594a4b5`, 2026-10-24. This is an implementation inventory, **not** approval of the essay's empirical claims, diagnostic validity, or editorial positioning.

## Read order and authority

1. **Running code and data** are authoritative for what ships: `astro.config.mjs`, `src/pages/`, `src/data/`, `src/content/`, `src/layouts/`, `src/components/`, `src/styles/global.css`, `tailwind.config.js` and `.github/workflows/deploy.yml`.
2. **This document** maps those files. `AI_CONTEXT.md` summarizes current conventions. `README.md` is the developer entry point.
3. `documentation/VISION_CONTEXT.md` records the intended thesis and voice but includes a clearly marked *historical brief*. Any positioning, major tone or release-scope change requires owner approval; see issues #2 and #3.
4. `documentation/WebsiteArchitecture.md` is a **historical proposal** (including abandoned React/SPA ideas). `documentation/SiteStyle.md` is the maintained style guide; older static-HTML examples are archived separately.
5. `documentation/SPRINTS.md` is a **dated record**, not the work queue. GitHub issues/PRs describe current work. Cities research and historical source trackers are controlled by the Cities audit (#8/#9) and evidence-methodology decision (#4), not this implementation inventory.

## Stack, build and deploy

- **Astro 7** static build (`astro.config.mjs`): `site: https://benwassa.github.io`, `base: /faust`, `trailingSlash: ignore`, directory output in `dist/`.
- **Tailwind 3**, PostCSS/Autoprefixer and `src/styles/global.css`; client interaction is scoped vanilla JavaScript within Astro components/pages. **No React application and no CDN Tailwind**.
- **Build:** `npm ci` (lockfile), `npm run build`; **develop:** `npm run dev`; **preview:** `npm run preview`. `npm run format:check` checks Prettier formatting of `src/` files only. The repository had no `test` script or separate PR-check workflow in the reviewed baseline; #13 is establishing that infrastructure.
- **Deploy:** `.github/workflows/deploy.yml` builds and publishes on push to `main` through GitHub Pages Actions. Do not edit this workflow as part of editorial/documentation housekeeping.

## Route and content map

| Order | Reader destination | Implementation |
| --- | --- | --- |
| Home | `/faust/` | `src/pages/index.astro` |
| 01 The System | `/faust/system` | `src/pages/system.astro` |
| 02 The Cities | `/faust/cities` | `src/pages/cities.astro` + `src/components/CityExplorer.astro` |
| 03 The Machines | `/faust/machines` | `src/pages/machines.astro` |
| 04 The Casualties | `/faust/casualties` | `src/pages/casualties.astro` |
| 05 The Exits | `/faust/exits` | `src/pages/exits.astro` |
| 06 The Practice | `/faust/practice` | `src/pages/practice.astro` |
| 07 Resources | `/faust/resources` | `src/pages/resources.astro` |
| Separate Diagnostic | `/faust/diagnostic` | `src/pages/diagnostic.astro` + `src/data/quiz.ts` |
| Five archetype essays | `/faust/archetypes/{slug}` | `src/pages/archetypes/[slug].astro` + content collection |

**Canonical order:** `src/data/chapters.ts`, used by nav and previous/next components. The Diagnostic is a ten-question self-assessment, **not a chapter** and not a validated clinical diagnostic. Its weighting/tie behavior is implementation-owned by #10/#13; changes to its editorial framing remain subject to #3.

**Five archetypes:** **The Watchman, The Visible, The Faithful, The Departed, The Architect**, in that order; registry is `src/data/archetypes.ts`. These are narrative/interpretive patterns, not empirically validated personality types.

**Machines:** **eight** live interactive trap labels in `src/pages/machines.astro`: The Future Audience, Success Theater, Performative Vulnerability, Infinite Comparison, Extremity Bias, Work-Conditional Esteem, Veblen Inversion, Defensive Ambition. `documentation/MACHINES_TRAPS_PROSPECTIVE.md` is a prospective candidate list, not shipped nomenclature.

**Archetype authoring:** edit `archetypes/{slug}.md` first, then use `node scripts/gen-archetypes.mjs` to regenerate `src/content/archetypes/{slug}.md`; verify generated diff and collection frontmatter. `src/content.config.ts` defines the collection schema. `archetypes/copy/` and `archetypes/insights/` are editorial background, not generated route content. Archetype metadata is repeated in the generator and `src/data/archetypes.ts` and must remain consistent.

**Cities:** `src/data/cities.ts` feeds `src/components/CityExplorer.astro` and `src/pages/cities.astro`; `src/data/citations.ts` holds citation entries. Ownership of evidence, denominators and chart semantics is with #8/#9. Do not substitute old `src/cities/index.js` or `src/views` paths from historical documentation.

**URLs/assets:** call `url()` and `asset()` from `src/lib/url.ts` for project-base-aware internal links and static assets. Canonical/OG data are assembled in `src/layouts/BaseLayout.astro`; image assets and static robots/sitemap/manifest are in `public/`. Deployment, link correctness and social-preview validation are owned by #7/#14/#17.

## Design tokens in deployed source

| Role | Defined in | Value |
| --- | --- | --- |
| Display | `tailwind.config.js`, imported in `BaseLayout.astro` | **DM Sans** |
| Body | same | **Crimson Pro** |
| Data/UI | same | **JetBrains Mono** |
| Cream | `tailwind.config.js` | `#FDFBF7` |
| Surveillance | same | `#1A202C` |
| Rust | same | `#C05640` |
| Soft green | same | `#7A9A84` |
| Dark ink | same | `#12161F` (`ink-900`) |

`html.dark` enables **Surveillance Mode**; global CSS defines blueprint backgrounds, prose styling, focus and reduced-motion rules. **Syne and `#4a7c59` appear in historical proposals, not current tokens.**

## Edition, package version and outstanding decisions

- **Editorial/site design label:** "v3.0" refers to the July 2026 Astro content/design overhaul in historical project notes. `v3.1` is a planning label where used; neither label is demonstrated to be a published semver tag.
- **NPM package version:** `1.1.0` in `package.json` is an independent technical version field. Do **not** silently set it to `3.0.0` or `3.1.0`. Owner/maintainer must choose whether editions and package versions share a numbering scheme.
- **Approval gates:** #2 publication scope, #3 thesis/tone/Diagnostic framing, #4 Cities evidence-refresh policy, #5 new creative assets; issue numbers reflect the 2026-10-24 project backlog.
- **Open risks:** empirical claim strength, crisis-resource localization, archetype-to-chapter conceptual cross-references, platform causality, Cities cross-metric comparability, and the Diagnostic's interpretive limits. See `documentation/EDITORIAL_AUDIT_2026-10-24.md` for evidence, severity and proposals.

## Release notes (documentation reconciliation)

**2026-10-24 — documentation/continuity review, proposed PR:** identified the current Astro source of truth and seven chapters, labeled historical plans, aligned font/route descriptions, recorded package-versus-edition uncertainty, and audited chapter/archetype continuity. These notes **do not represent a shipped content revision**. See the PR for actual file changes and check results.
