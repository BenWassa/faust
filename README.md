# Project Faust
## The Architecture of Ambition

A digital essay + diagnostic tool exploring how career became identity in modern cities, why extreme ambition is rational yet destructive, and what alternative frameworks offer. Research-driven analysis of workism, platform dynamics, and paths toward flourishing beyond performance.

**Live:** https://benwassa.github.io/faust/

## Core Thesis

Extreme career ambition is a **"rational maladaptation"** — economically logical in cities with 10-to-1 price-to-income ratios, but psychologically destructive. Alternative architectures exist.

## Structure

Seven chapters plus an interactive diagnostic:

1. **The System** — workism, the tyranny of merit, self-exploitation
2. **The Cities** — source-backed housing data (Toronto, Vancouver, London, NYC)
3. **The Machines** — LinkedIn & Instagram as engines of envy
4. **The Casualties** — five archetypes (Watchman, Visible, Faithful, Departed, Architect)
5. **The Exits** — theological, Aristotelian, humanistic frameworks + radical refusals
6. **The Practice** — do-gooder derogation, the communication of refusal, organizing
7. **Resources** — reading list + crisis lines
- **The Diagnostic** — a forced-choice self-assessment that routes you to your archetype

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static output, near-zero client JS)
- **Styling:** Tailwind CSS v3 (via PostCSS) with a custom design system
- **Content:** Astro Content Collections (archetypes authored as Markdown)
- **Interactivity:** vanilla JS islands (city explorer, machine traps, diagnostic, theme)
- **Deploy:** GitHub Actions → GitHub Pages

### Design system — "The Panopticon Revealed"

| Token | Value | Use |
|---|---|---|
| `cream` | `#FDFBF7` | light background |
| `surveillance` | `#1A202C` | primary ink / dark surfaces |
| `rust` | `#C05640` | accent, warnings, data |
| `soft-green` | `#7A9A84` | exits, alternatives |

Fonts: **DM Sans** (display), **Crimson Pro** (body), **JetBrains Mono** (data/labels).
A **Surveillance Mode** dark theme is available via the nav toggle.

## Development

```bash
npm install
npm run dev      # dev server at http://localhost:4321/faust/
npm run build    # static build to ./dist
npm run preview  # preview the production build
```

Archetype content lives in `src/content/archetypes/*.md`. Those files are generated
from the authoring sources in `/archetypes/*.md` via:

```bash
node scripts/gen-archetypes.mjs
```

## Deployment

Deployment is automated via `.github/workflows/deploy.yml` on push to `main`.

> **One-time setup:** In the repository **Settings → Pages**, set **Source: GitHub Actions**.
> (Previously the site was served from a committed `/docs` folder; that folder has been
> removed in favour of the Actions build.)

## Project Structure

```
src/
├── components/     # Nav, Footer, hero, charts, diagnostic pieces
├── content/        # archetypes collection (Markdown) + content.config.ts
├── data/           # chapters, cities, citations, archetypes, quiz
├── layouts/        # BaseLayout, ChapterLayout
├── lib/            # base-path URL helpers
├── pages/          # one route per chapter + diagnostic + archetypes/[slug]
└── styles/         # global.css (design system)
public/             # images, manifest, sitemap, robots
documentation/      # vision, architecture, style, sprints
archetypes/         # authoring source for archetype markdown
```

## License

Content: CC BY-NC-SA 4.0 · Code: MIT
