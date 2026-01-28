# Site Style Guide: Architecture of Ambition

Use this as the single source of truth when building subpages so everything stays in the same "architectural blueprint / surveillance research dossier" vibe.

## 1) Core Vibe (Non-Negotiables)

- **Genre:** digital research document + architectural schematic + institutional critique.
- **Mood:** calm, clinical, slightly ominous; "soft power" rather than dystopian neon.
- **Visual metaphor:** grids, plans, sections, labels, chapters, diagnostics, pressure points.
- **Interaction feel:** precise, restrained, purposeful; no playful UI chrome.

## 2) Design Tokens

### Colors (Tailwind tokens)

These are defined in `architecture_of_ambition.html` under `tailwind.config.theme.extend.colors`.

- `cream`: `#FDFBF7` (page background, soft panels, overlays)
- `surveillance`: `#1A202C` (primary ink, dark panels, hero CTA, footer)
- `rust`: `#C05640` (signal color: chapter numbers, CTAs on hover, borders)
- `soft-green`: `#7A9A84` (secondary signal, subtle "alive" accent on hovers)

**Blueprint grid lines**

- Use `#E2E8F0` as the grid line color (see `.bg-blueprint`).

### Typography

Fonts are loaded via Google Fonts in `architecture_of_ambition.html`.

- **Display:** `Syne` (`font-display`)
  - Use for: titles, chapter headings, key callouts
  - Typical treatment: bold, tight tracking, uppercase when used as a label
- **Body:** `Crimson Pro` (`font-body`)
  - Use for: essays, paragraphs, long reads
  - Typical treatment: larger sizes than normal web copy (16px is too small here)
- **Mono:** `JetBrains Mono` (`font-mono`)
  - Use for: navigation, microcopy, labels, data, numbered chapters, "Diagnostic" panels
  - Typical treatment: uppercase + wide tracking (`tracking-widest` / custom tracking)

### Motion

Animations defined in Tailwind config:

- `animate-fade-in` (1s opacity in)
- `animate-slide-up` (0.8s translateY + opacity)

**Rules**

- Use motion for *entrance hierarchy* (hero/chapter header) and *hover affordance* (cards).
- Keep transitions quick and mechanical: `transition-colors`, `transition-all`, `duration-300`.
- Avoid bouncy/eased overshoot; prefer clean `ease-out`.

## 3) Layout System

### Page + section widths

Stay consistent with existing max widths:

- Nav/footer container: `max-w-7xl mx-auto px-6`
- Major index sections: `max-w-6xl mx-auto px-6`
- Content sections: `max-w-5xl mx-auto px-6`
- Reading column: `max-w-3xl mx-auto px-6`
- Compact resources: `max-w-4xl mx-auto px-6`

### Spacing rhythm

- Hero: `min-h-screen`, centered, generous bottom space
- Standard section padding:
  - `py-12` (light sections)
  - `py-16` (article body)
  - `py-24` (index grid / major transitions)
- Default page horizontal padding: `px-6`

## 4) Surfaces, Borders, and Texture

### Base page styling

From inline CSS:

- `body` background is `cream`, text is `surveillance`, no horizontal overflow.
- Scrollbar is thin and high-contrast (optional, but keep if possible).

### Blueprint background

Use `.bg-blueprint` for "schematic space" sections:

- Hero background
- Data/diagram panels
- Any subpage that needs the "plan view" feel

### Image treatment

Use `.img-blueprint` for documentary / city imagery:

- Default: grayscale + slightly higher contrast + slightly dimmed
- Hover: returns toward full color/normal contrast
- Often paired with `opacity-20` and `mix-blend-multiply` for "printed on paper" feel

## 5) Components (Copy These Patterns)

### Navigation (fixed header)

Signature traits:

- Fixed top bar: `bg-cream/95 backdrop-blur-sm border-b border-surveillance/10`
- Monospace desktop nav: `font-mono text-sm uppercase tracking-widest text-surveillance/70`
- A subtle progress bar at top (`#progress-bar`) is part of the identity.

### Hero

Signature structure:

- Blueprint background + faint abstract overlay
- Mono badge (outlined): `border border-rust`, uppercase, wide tracking
- Massive display headline (tight leading): `leading-[0.9] tracking-tighter`
- Primary CTA: `bg-surveillance text-cream`, hover to `bg-rust`

### Index cards (chapter tiles)

Signature traits:

- White surface + thin border: `bg-white border border-surveillance/20`
- Hover inverts: `hover:bg-surveillance hover:text-cream`
- Watermark icon top-right: low opacity, scales by font size (`text-6xl`)
- Chapter number in mono rust; on hover it turns `soft-green`

### Chapter header (subpage header)

Use the existing `Header()` pattern:

- Cream background, bottom border, hidden overflow
- Mono label: `"Chapter 01"` style, rust, uppercase, wide tracking
- Big display title and large serif subtitle

### Reading article styling

Use the existing essay tone:

- Large leading, long-form serif paragraphs
- Drop cap on first paragraph:
  - `first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left`
- Quotes/citations:
  - Left rust rule: `border-l-4 border-rust`
  - Display italic quote + mono cite line in rust
- "Diagnostic" or "Box" sections:
  - Dark panel: `bg-surveillance text-cream`
  - Mono label in rust, list content in body serif

### Data/diagram panels

City view is the reference:

- Blueprint container with overlay image at low opacity
- Foreground cream panel: `bg-cream/90 backdrop-blur-sm border border-surveillance/10`
- Buttons: mono uppercase, border, selected state is `bg-surveillance text-cream`

### Exit cards

Signature traits:

- White surface + thin border
- Icon chip: `bg-rust/10 text-rust`, on hover becomes `bg-rust text-white`
- Display title + mono sublabel + serif body

### Footer

Signature traits:

- Dark surface: `bg-surveillance text-cream`
- Rust accent in headings/labels, subtle top border: `border-t border-rust/30`
- Mono navigation list with reduced opacity

## 6) Writing Style (So It Feels Like The Same Site)

- **Headlines:** declarative, architectural metaphors, strong nouns ("System", "Machines", "Exits").
- **Subheads:** short thesis lines ("Where ambition goes to pay rent.")
- **Labels:** mono uppercase, wide tracking, numbered chapters.
- **Tone:** analytic + moral clarity; avoid startup/marketing language.
- **Structure:** mix of short paragraphs, one strong pull quote, one diagnostic/checklist, then a next-step CTA.

## 7) Subpage Template (Copy/Paste Starter)

Use this skeleton for new pages if you split into multiple HTML files later. Keep tokens identical.

```html
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><!-- Page Title --></title>

    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />

    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              cream: "#FDFBF7",
              surveillance: "#1A202C",
              rust: "#C05640",
              "soft-green": "#7A9A84",
            },
            fontFamily: {
              display: ["Syne", "sans-serif"],
              body: ["Crimson Pro", "serif"],
              mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
              "fade-in": "fadeIn 1s ease-out forwards",
              "slide-up": "slideUp 0.8s ease-out forwards",
            },
            keyframes: {
              fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
              slideUp: {
                "0%": { transform: "translateY(20px)", opacity: "0" },
                "100%": { transform: "translateY(0)", opacity: "1" },
              },
            },
          },
        },
      };
    </script>

    <style>
      body {
        background-color: #fdfbf7;
        color: #1a202c;
        overflow-x: hidden;
      }
      .bg-blueprint {
        background-image: linear-gradient(#e2e8f0 1px, transparent 1px),
          linear-gradient(90deg, #e2e8f0 1px, transparent 1px);
        background-size: 40px 40px;
      }
      .img-blueprint {
        filter: grayscale(100%) contrast(120%) brightness(0.9);
        transition: filter 0.5s ease;
      }
      .img-blueprint:hover {
        filter: grayscale(0%) contrast(100%) brightness(100%);
      }
    </style>
  </head>

  <body class="font-body selection:bg-rust selection:text-white antialiased">
    <!-- Reuse existing nav + footer patterns -->

    <header class="bg-cream pt-12 pb-12 px-6 border-b border-surveillance/10 relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        <span class="font-mono text-rust text-sm uppercase tracking-widest mb-2 block animate-fade-in">
          Chapter 07
        </span>
        <h1 class="font-display font-bold text-5xl md:text-6xl text-surveillance mb-4 animate-slide-up">
          <!-- Title -->
        </h1>
        <p class="font-body text-xl md:text-2xl text-surveillance/60 max-w-2xl animate-slide-up">
          <!-- Subtitle -->
        </p>
      </div>
    </header>

    <main class="max-w-3xl mx-auto px-6 py-16">
      <!-- Content -->
    </main>
  </body>
</html>
```

## 8) Quick Do/Don't

- **Do:** keep backgrounds cream, use blueprint grids as texture, and rely on borders over heavy shadows.
- **Do:** use mono labels + chapter numbering everywhere (it sells the "document" feel).
- **Do:** invert cards on hover (surveillance -> cream) and keep icon watermarking subtle.
- **Don't:** introduce new bright accent colors; rust/soft-green is enough.
- **Don't:** use rounded-pill UI or playful microcopy; keep it institutional.
- **Don't:** make body text tiny; this site reads like an essay, not a dashboard.

