Commission: Convert Existing Archetype Pages to Canonical Template

## Context

We now have a canonical archetype layout template:

`src/layouts/archetype-template.html`

This template defines:
- All layout
- All visual styling
- All section structure

Separately, we have content-only archetype pages located at:

`src/archetypes/`
- architect.html
- departed.html
- faithful.html
- visible.html
- watchman.html

These files contain the authoritative copy, but no usable layout.

---

## Objective

For each file in `src/archetypes/`, produce a converted version that:
- Uses the canonical archetype template
- Injects the existing copy into the correct template placeholders
- Does not alter wording, tone, or paragraph structure
- Does not modify the template itself

This is a content mapping task, not a design task.

---

## Required Output

For each archetype, produce one final HTML file that:
- Matches the canonical layout visually
- Contains the archetype's existing copy in the correct sections
- Preserves all emphasis, quotes, and paragraph breaks
- Uses the template's placeholder structure correctly

The output files should replace or supersede the originals in:

`src/archetypes/`

---

## Mapping Rules (Critical)

### 1. Do NOT rewrite copy
- No paraphrasing
- No shortening
- No "improving clarity"
- No changing sentence order

If copy feels long or short for a section, that is acceptable.

---

### 2. Preserve narrative intent when mapping

Use headings and logical breaks in the original file to determine placement.

General guidance:
- Opening paragraphs → Hero section
- "Core logic" or explanatory sections → Section 01
- "What this solves" or benefits → Ledger (Assets)
- Costs, downsides, failures → Ledger (Liabilities)
- Structural inevitabilities, math, or constraints → System Error
- Questions directed at reader → Diagnostic Protocol
- Final reframing or recognition → Closing Provocation

Do not invent new structure.

---

### 3. Use block placeholders where possible

When the template provides block placeholders (for example `{{LOGIC_BODY_HTML}}`):
- Insert full HTML content
- Preserve `<p>`, `<strong>`, `<em>`, `<ul>` as needed

Do not force content into artificial numbered slots.

---

### 4. Diagnostics section
- If the archetype has fewer than 5 questions, populate only the needed ones
- If more than 5 exist, prioritize the most central
- Do not create new questions

---

### 5. Icons and metadata
- Choose icons conservatively
- If unsure, reuse the Watchman defaults
- Do not invent new symbolic systems

---

## Explicit Non-Goals
- Do not refactor the template
- Do not optimize Tailwind
- Do not introduce JS, build tools, or frameworks
- Do not redesign or "clean up" copy

---

## Success Criteria

This conversion is successful if:
- Each archetype page visually matches the Watchman-derived layout
- The copy reads exactly as authored, only now structured
- All archetypes feel like members of the same system
- No template edits are required to accommodate content

---

## Optional (Only if Time Allows)
- Add HTML comments indicating which original section each block came from
- Flag any copy that clearly does not map cleanly (without fixing it)
