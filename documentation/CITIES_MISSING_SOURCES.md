# Cities Missing Sources Audit

Date: February 7, 2026 (updated)

Purpose: identify any Cities figures that still lack a usable primary source trail.

## Current status

All currently displayed Cities figures now have:
1. Source title
2. Publisher/author
3. Year
4. Canonical URL
5. Metric definition/population context

No hard blockers remain for source completeness of currently displayed figures.

## Residual quality checks (non-blocking)

| Check | Where |
|---|---|
| Add exact table/section citations for each figure (for publication-grade auditability) | `documentation/CITIES_SOURCE_DATA.md:1` |
| Validate city boundary alignment for income/home-price pair assumptions used in code | `src/cities/index.js:5` |

## Notes

- London ownership source is now treated as confirmed primary source naming (`Demographia International Housing Affordability (2025)`), with the selected value documented in source notes.
- Supplemental metrics are sourced with URLs but are not all currently displayed on the Cities page.
