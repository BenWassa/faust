# PROJECT CONTEXT - Project Faust: The Architecture of Ambition

## 1. Project Overview
**Identity:** A digital essay and diagnostic tool analyzing "Workism" and career-centric identity.
**Thesis:** Extreme career ambition is a "rational maladaptation"—economically logical in expensive cities but psychologically destructive.
**Vibe/Aesthetic:** "The Panopticon Revealed." Editorial magazine meets architectural blueprint. Clean, generous spacing, "clinical but empathetic."

## 2. Technical Stack (Strict Constraints)
* **Build Tool:** Vite (Vanilla JS template).
* **Framework:** NONE. Pure HTML5, CSS3, Vanilla JavaScript.
* **Styling:** Tailwind CSS (Local installation, NOT CDN).
* **Logic:**
    * `index.html` acts as the "Lobby" (SPA-like visibility toggling for high-level concepts).
    * `/archetypes/*.html` are physical, standalone files (The "Files").
    * No React, Vue, or heavy frameworks.

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
* `/src/index.html`: The entry point. Contains chapters: System, Cities, Machines.
* `/src/archetypes/`: Contains `watchman.html`, `visible.html`, `faithful.html`, `departed.html`, `architect.html`.
* `/public/img/`: All static images.

**Linking Logic:**
* **Lobby -> Archetype:** Links in `index.html` must point to `./archetypes/[name].html`.
* **Archetype -> Lobby:** "Return" links in archetypes must point to `../index.html`.
* **Archetype -> Archetype:** Footer links must point to `./[next_name].html`.

## 5. Coding Rules for AI
1.  **Maintain the Voice:** Copy must be "authoritative but not academic." Avoid "corporate tech" speak.
2.  **No Component Libraries:** Do not suggest Shadcn, MUI, or Bootstrap. Build UI with raw Tailwind classes.
3.  **Preserve Structure:** If editing an Archetype file, do not remove the `<head>` metadata or the `tailwind.config` script/link.
4.  **Mobile First:** Always ensure the `<nav>` works on mobile (hamburger menu logic is in `main.js`).