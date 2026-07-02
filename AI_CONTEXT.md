# PROJECT CONTEXT - Project Faust: The Architecture of Ambition

## 1. Project Overview
**Identity:** A digital essay and diagnostic tool analyzing "Workism" and career-centric identity.
**Thesis:** Extreme career ambition is a "rational maladaptation"—economically logical in expensive cities but psychologically destructive.
**Vibe/Aesthetic:** "The Panopticon Revealed." Editorial magazine meets architectural blueprint. Clean, generous spacing, "clinical but empathetic."

## 2. Technical Stack (v3.0)
* **Framework:** Astro (static output). Migrated from the vanilla Vite SPA in v3.0.
* **Styling:** Tailwind CSS v3 via PostCSS (local, NOT CDN).
* **Content:** Astro Content Collections — archetypes are Markdown in `src/content/archetypes/`.
* **Interactivity:** vanilla-JS islands only (no React/Vue). City explorer, machine traps,
  the diagnostic quiz, and the theme toggle are `<script>` blocks scoped to their `.astro` files.
* **Routing:** one page per chapter under `src/pages/` (deep-linkable, per-page SEO/OG),
  plus `pages/archetypes/[slug].astro` generated from the collection.
* **Deploy:** GitHub Actions → GitHub Pages (Pages source must be set to "GitHub Actions").

## 3. Design System (Do Not Hallucinate New Values)
**Typography:**
* Display: `font-family: 'Syne', sans-serif;` (Headlines)
* Body: `font-family: 'Crimson Pro', serif;` (Long-form text)
* Data/UI: `font-family: 'JetBrains Mono', monospace;` (Stats, nav, labels)

**Color Palette (Tailwind Config):**
* `bg-cream` (#FDFBF7) - Main background. Warm, not stark white.
* `text-surveillance` (#1A202C) - Primary text. Deep blue-grey.
* `text-rust` (#C05640) - Accents, warnings, human elements.
* `text-soft-green` (#7A9A84) - "Exit" paths, growth, alternatives.
* `bg-blueprint` - CSS pattern: Linear gradient grid on cream background.

## 4. Architecture & Navigation
**Directory Structure:**
* `/src/pages/`: one route per chapter (`system`, `cities`, `machines`, `casualties`, `exits`,
  `practice`, `resources`, `diagnostic`) + `index.astro` + `archetypes/[slug].astro`.
* `/src/content/archetypes/`: Markdown for the five archetypes (content collection).
* `/src/data/`: `chapters`, `cities`, `citations`, `archetypes`, `quiz` (typed source data).
* `/src/components/`, `/src/layouts/`, `/src/lib/`, `/src/styles/global.css`.
* `/public/`: static images, manifest, sitemap, robots.

**Linking Logic:**
* Always build hrefs via the `url()` helper in `src/lib/url.ts` so the `/faust` base path is applied.
* Chapter order + prev/next come from `src/data/chapters.ts` (single source of truth).
* Archetype cross-links resolve to `url('archetypes/[slug]')`.

## 5. Coding Rules for AI
1.  **Maintain the Voice:** "Confrontational architecture" — authoritative, unsparing, no hedging.
2.  **No Component Libraries:** No Shadcn/MUI/Bootstrap and no React/Vue. Astro + raw Tailwind + vanilla-JS islands.
3.  **Design tokens are fixed:** cream / surveillance / rust / soft-green; DM Sans / Crimson Pro / JetBrains Mono. Support dark (`html.dark`).
4.  **Mobile First & accessible:** keep the nav hamburger, skip link, focus states, and reduced-motion support working.