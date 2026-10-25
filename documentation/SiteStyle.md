# Site style guide — current Astro implementation

**Checked 2026-10-24 against `tailwind.config.js`, `src/styles/global.css`, `src/layouts/BaseLayout.astro` and actual components.** This guide describes the existing visual system, not approval for redesign. The previous static-HTML/CSS-CDN template has been preserved in [the pre-Astro archive](archive/SiteStyle_pre_Astro.md). For architecture, see [CURRENT_IMPLEMENTATION.md](CURRENT_IMPLEMENTATION.md).

## 1. Visual intent

- **Genre:** editorial research document, architectural blueprint, cultural critique.
- **UI:** restrained, legible, mobile-first; avoid gratuitous motion, decorative dashboards or alternate component libraries.
- **Metaphor:** the surveillance system is visible as grids, labels, quantified comparisons and tight mechanical interactions; the content and numerical evidence must remain legible.
- **Tone:** current published voice is confrontational. Significant voice shifts or Diagnostic positioning changes require owner decision #3; stylistic guidance cannot establish factual certainty.

## 2. Implemented tokens

| Tailwind role | Value | Usage |
| --- | --- | --- |
| `cream` | `#FDFBF7` | light backgrounds |
| `surveillance` | `#1A202C` | primary text, dark surfaces |
| `rust` | `#C05640` | links, accents, warnings |
| `soft-green` | `#7A9A84` | alternatives, reference threshold |
| `ink-900` | `#12161F` | dark theme page |
| `ink-800` | `#1A202C` | dark theme cards |
| `ink-700` | `#232B39` | additional dark tones |
| `--grid-line` | `#E2E8F0` light / `#2A3342` dark | 40px blueprint grid |

**Typography (source: `tailwind.config.js`; loaded in `BaseLayout.astro`):**

- `font-display` → **DM Sans**, sans-serif. Headings, architectural callouts, archetype titles.
- `font-body` → **Crimson Pro**, serif. Essays, long narrative, quotations.
- `font-mono` → **JetBrains Mono**, monospace. Chapter numbers, navigation, data labels, UI metadata.
- Material Symbols Outlined is loaded for icon glyphs.

**Deprecated proposals:** Syne, `#4A7C59`, and `architecture_of_ambition.html` came from archived design iterations. They are not the live design configuration. Don't add Google Fonts or a Tailwind CDN tag to an Astro page.

## 3. Page composition and implementation

- `BaseLayout.astro` owns `<head>`, title/description/OG tags, canonical link, font loads, global shell, theme preboot and skip link.
- `ChapterLayout.astro` owns the canonical chapter header, article shell, source list and previous/next navigation.
- `src/data/chapters.ts` defines **seven** chapter cards, the nav and sequential reading order.
- `src/pages/index.astro` contains the landing thesis, chapter cards and Diagnostic CTA. `src/pages/diagnostic.astro` is separate, not chapter 08.
- `src/components/Card.astro`, `ChapterHeader.astro`, `ChapterNav.astro`, `Diagnostic.astro`, `PullQuote.astro`, `SourceList.astro` and `Cite.astro` supply existing patterns. Favor these over copying markup.
- `src/styles/global.css` implements `.surface`, `.surface-muted`, `.bg-blueprint`, `.prose-faust`, `.rule`, `.trap-active`, focus-visible and reduced-motion support.
- Content widths are driven by Tailwind classes used in source (commonly `max-w-3xl` for prose, `max-w-4xl`/`max-w-5xl` for comparisons, `max-w-6xl` for landing grids). Match neighboring pages; don't revive the archived fixed HTML template.
- Interactions use small vanilla JS scripts in Astro pages/components. Keep keyboard and touch controls functional and preserve clear focus indication.
- Dark theme uses `html.dark` ("Surveillance Mode"), including `dark:` utilities and paired light/dark styles for any new surface.
- Site is published under **`/faust/`**. Use `url()` / `asset()` from `src/lib/url.ts` for internal routes and static assets.

### Minimal Astro page pattern

This example demonstrates the current component structure, **not a proposal for a new chapter**:

```astro
---
import ChapterLayout from '../layouts/ChapterLayout.astro'
---
<ChapterLayout
  num="01"
  slug="system"
  title="The System"
  sub="The theological intensity of modern work."
  readingTime="~6 min read"
>
  <article class="prose-faust max-w-3xl mx-auto px-6 py-12">
    <p>Long-form chapter content belongs here.</p>
  </article>
</ChapterLayout>
```

For changes to an existing chapter, edit the page rather than duplicating its route or header. For archetype essays, edit `/archetypes/*.md` and regenerate the content collection; see [CURRENT_IMPLEMENTATION](CURRENT_IMPLEMENTATION.md).

## 4. Motion, accessibility and source fidelity

- Maintain the existing fade/slide utility options but avoid unnecessary entrance sequences. Respect `prefers-reduced-motion`; see global CSS.
- Preserve the mobile navigation, skip link, focus-visible outlines, semantic headings, button affordances and dark-mode contrast.
- Use accessible names for icon-only controls and meaningful text for links. The separate Diagnostic and interactive Machines trap UI have specific owners (#10/#13).
- Don't represent interpretive charts as empirical precision beyond their cited inputs. Cities tables and citations are owned by #8/#9; their evidence policy remains open (#4).
- Author new prose for the reader's actual chapter rather than reproducing the old proposal's hypothetical section map.

## 5. Historical provenance

The archived [pre-Astro SiteStyle](archive/SiteStyle_pre_Astro.md) retains the retired long-form HTML skeleton and earlier decisions. [WebsiteArchitecture.md](WebsiteArchitecture.md) retains the initial React/SPA proposal and architecture brainstorming. Those files remain useful for understanding design intent, but **the checked-in Astro/Tailwind files supersede them for implementation**.
