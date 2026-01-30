# Sprint Board

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
