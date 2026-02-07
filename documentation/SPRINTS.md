# Sprint 1
Status: Completed on February 7, 2026.

## Opportunity: Link left / right panes on the interactive narrative page

### Goal
Connect the list of traps and popups on the left-hand column with the right-hand interactive stream of posts so the experience feels cohesive and the visible list mirrors the live content.

### Desired behavior
1. Right column stays the place to read curated posts. Users click a highlighted trap or phrase and the left column responds without losing its ordered list.
2. Left column still shows the canonical order (1–8), but the items can expand (accordion / reveal) to surface the details pulled from the post the user just opened on the right.
3. Only a subset of posts should surface multiple traps (at most three) so the right-hand feed emphasizes focused patterns instead of noise.

### Work steps
1. Map each of the nine traps (Future Audience → Defensive Ambition) to its glossary entry in the left column and add a collapsible detail panel that mirrors the popup content.
2. Adjust the right column so that clicking anywhere on a highlighted block scrolls/expands the corresponding left column entry rather than opening a modal.
3. Ensure the left column remains ordered (Future Audience first, Defensive Ambition last) while the right column can shuffle order as new posts arrive; add visual cues so users can trace which trap they just activated.
4. Update copy to call out that only a few posts include stacked traps (1–3 per post) and label those accordingly, so readers know when they are seeing a concentrated pattern.
5. Test the flow: click a highlighted trap on the right, verify left entry expands/scrolls and the list never disappears, and ensure the highlighting state resets when another card is selected.

### Follow-up
Once UI wiring is confirmed, capture the new behavior for the release notes and document the left-column accordion component in `SiteStyle.md` under "Interactive Lists."

# Sprint 2
Status: Completed on February 7, 2026.

## Opportunity: Make Cities data source-backed and internally consistent

### Goal
Replace placeholder source text and mismatched city figures with a canonical, source-linked dataset so every number on the Cities page is traceable, comparable, and defensible.

### Desired behavior
1. Every figure shown on the Cities page maps to a real primary source (title, publisher, year, URL, access date) with no placeholder source labels in UI metadata.
2. `CITIES_SOURCE_DATA.md` acts as the canonical table for values used in code, including metric type, denominator/population, year, and currency.
3. Mixed metrics (ownership affordability vs rent burden) are labeled with clear population/denominator so users do not read incomparable values as equivalent.
4. The mismatch set is resolved or explicitly documented: Vancouver ratio (12.7 vs 13.5), NYC ratio (7.5 vs 7.7), Toronto burden (77% vs 81%), London burden (52% vs up to 77% low-income subgroup).

### Work steps
1. Convert `documentation/CITIES_SOURCE_DATA.md` from prose into structured rows using the template in `documentation/CITIES_FIGURE_SOURCE_TRACKER.md` (one row per metric, not per city).
2. Populate source fields for all currently displayed figures using primary sources already identified (Demographia 2025, National Bank Q3 2025, NYC Comptroller 2023, Greater London Authority/City Hall 2024, plus supporting comparative references).
3. Update `src/cities/index.js` to pull only canonical values from the finalized source table decisions and remove all `"Project Faust city baseline"` source labels.
4. Normalize burden chips so denominator/population is explicit in the label (for example, distinguish general rent burden from low-income subgroup burden).
5. Reconcile ratio values to the agreed canonical source year/definition and document any intentional deviations in `documentation/CITIES_FIGURE_SOURCE_TRACKER.md`.
6. Validate page output after data updates: ratio math, currency tags (`CAD`, `USD`, `GBP`), metadata lines, and burden chips should all match source rows exactly.

### Acceptance criteria
1. No placeholder source text remains in Cities UI metadata.
2. Every displayed numeric figure has a completed source entry in `documentation/CITIES_FIGURE_SOURCE_TRACKER.md`.
3. `documentation/CITIES_SOURCE_DATA.md` is structured, complete, and sufficient for future code updates without re-reading narrative docs.
4. All known mismatches are either fixed in code or explicitly recorded with rationale and scope notes.

### Follow-up
After Sprint 2 ships, update `documentation/CITIES_MATH_ECON_REVIEW.md` to reflect the post-fix state (remove stale findings tied to old hardcoded values) and add a short changelog note in release documentation.

### Completion notes
1. Converted `documentation/CITIES_SOURCE_DATA.md` into a canonical structured source table.
2. Synced `src/cities/index.js` to source-backed values and removed placeholder source labels.
3. Updated city mismatch values (Vancouver ratio, NYC ratio, Toronto burden) and clarified London burden population in the chip label.
4. Updated `documentation/CITIES_FIGURE_SOURCE_TRACKER.md` with mapped source entries and open verification items.
