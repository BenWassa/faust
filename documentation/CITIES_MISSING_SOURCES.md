# Cities Missing Sources Audit

Date: February 7, 2026

Purpose: list all Cities data points that are not fully sourced yet (missing canonical link, provisional value, or unresolved primary source).

## 1) Missing canonical source URLs

All rows below have a named source but no final URL yet (`TODO` / `URL pending`).

| Area | Metric | Current value | Where defined | Missing piece |
|---|---|---|---|---|
| Ownership | Toronto price-to-income ratio | 10.4 | `documentation/CITIES_SOURCE_DATA.md:10` | Canonical URL |
| Ownership | Vancouver price-to-income ratio | 13.5 | `documentation/CITIES_SOURCE_DATA.md:11` | Canonical URL |
| Ownership | New York City price-to-income ratio | 7.7 | `documentation/CITIES_SOURCE_DATA.md:12` | Canonical URL |
| Ownership | London price-to-income ratio | 8.8 | `documentation/CITIES_SOURCE_DATA.md:13` | Canonical URL |
| Burden | Toronto mortgage payment share | 81 | `documentation/CITIES_SOURCE_DATA.md:19` | Canonical URL |
| Burden | Vancouver affordability pressure ratio | 13.5 | `documentation/CITIES_SOURCE_DATA.md:20` | Canonical URL |
| Burden | London low-income young housing burden | 77 | `documentation/CITIES_SOURCE_DATA.md:21` | Canonical URL |
| Burden | NYC rent-burdened tenants share | 53 | `documentation/CITIES_SOURCE_DATA.md:22` | Canonical URL |
| Supplemental | Ontario youth unemployment rate | 17.8 | `documentation/CITIES_SOURCE_DATA.md:28` | Canonical URL |
| Supplemental | Toronto adults 20–34 living with parents | 47 | `documentation/CITIES_SOURCE_DATA.md:29` | Canonical URL |
| Supplemental | NYC low-income renters paying >50% | 30 | `documentation/CITIES_SOURCE_DATA.md:30` | Canonical URL |

## 2) Provisional or unresolved values

| Metric | Current value | Where used | Issue |
|---|---|---|---|
| London ownership ratio | 8.8 | `src/cities/index.js:40`, `documentation/CITIES_SOURCE_DATA.md:13` | Marked approximate/provisional; exact value not yet confirmed |

## 3) Source metadata still non-final in app code

| City | Field | Current value | Where | Issue |
|---|---|---|---|---|
| London | `ownershipSource` | `Demographia 2025 (approx)` | `src/cities/index.js:46` | Approximate marker indicates unresolved exact source figure |

## 4) Tracker confirms open items

Open verification items already listed in:
- `documentation/CITIES_FIGURE_SOURCE_TRACKER.md:46`

They remain valid until URLs and London exact ratio are finalized.

## 5) Definition of "fully sourced" for closure

A figure is fully sourced only when all are present:
1. Source title and publisher/author.
2. Exact year.
3. Canonical URL.
4. Matching denominator/population definition.
5. Value not marked approximate/provisional.
