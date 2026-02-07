# Cities Page Figure Source Tracker

Purpose: inventory every numeric/data figure currently displayed on the Cities page so each one can be tied to a real source.

Scope: values in `src/cities/index.js` used by `CitiesLayout` / `updateCityPanel`.

## A) Core ownership figures (per city)

| City | Figure | Current value | Field/key | Code location | Required source details | Status |
|---|---|---:|---|---|---|---|
| Toronto | Median household income | 99,000 | `medianIncome` | `src/cities/index.js:5` | Publisher, series/table, year, URL, access date | TODO |
| Toronto | Median home price | 1,029,600 | `medianHomePrice` | `src/cities/index.js:6` | Publisher, metric definition, year, URL, access date | TODO |
| Toronto | Price-to-income ratio (derived) | 10.4 | `ratio = medianHomePrice / medianIncome` | `src/cities/index.js:93` | Derivation check against same-year source inputs | TODO |
| Vancouver | Median household income | 92,000 | `medianIncome` | `src/cities/index.js:21` | Publisher, series/table, year, URL, access date | TODO |
| Vancouver | Median home price | 1,168,400 | `medianHomePrice` | `src/cities/index.js:22` | Publisher, metric definition, year, URL, access date | TODO |
| Vancouver | Price-to-income ratio (derived) | 12.7 | `ratio = medianHomePrice / medianIncome` | `src/cities/index.js:93` | Derivation check against same-year source inputs | TODO |
| London | Median household income | 45,000 | `medianIncome` | `src/cities/index.js:37` | Publisher, series/table, year, URL, access date | TODO |
| London | Median home price | 441,000 | `medianHomePrice` | `src/cities/index.js:38` | Publisher, metric definition, year, URL, access date | TODO |
| London | Price-to-income ratio (derived) | 9.8 | `ratio = medianHomePrice / medianIncome` | `src/cities/index.js:93` | Derivation check against same-year source inputs | TODO |
| New York City | Median household income | 80,000 | `medianIncome` | `src/cities/index.js:53` | Publisher, series/table, year, URL, access date | TODO |
| New York City | Median home price | 600,000 | `medianHomePrice` | `src/cities/index.js:54` | Publisher, metric definition, year, URL, access date | TODO |
| New York City | Price-to-income ratio (derived) | 7.5 | `ratio = medianHomePrice / medianIncome` | `src/cities/index.js:93` | Derivation check against same-year source inputs | TODO |

## B) Burden figures shown in the top-right chip

| City | Figure | Current value | Field/key | Code location | Required source details | Status |
|---|---|---|---|---|---|---|
| Toronto | Ownership burden | 77% of income | `burdenLabel`, `burdenValue` | `src/cities/index.js:13` | Definition (mortgage payment share? median buyer?), population, year, URL | TODO |
| Vancouver | Affordability pressure | 12.7x income | `burdenLabel`, `burdenValue` | `src/cities/index.js:29` | If duplicated from ratio, point to same ratio source | TODO |
| London | Rent burden | 52% of income | `burdenLabel`, `burdenValue` | `src/cities/index.js:45` | Definition (who pays 52%?), population, year, URL | TODO |
| New York City | Rent burdened households | 53% | `burdenLabel`, `burdenValue` | `src/cities/index.js:61` | Definition (>30% or >50%), denominator, year, URL | TODO |

## C) Shared methodological figures/assumptions shown in UI

| Item | Current value | Field/key | Code location | Source needed? | Notes |
|---|---:|---|---|---|---|
| Year label in metadata | 2025 | `year` | `src/cities/index.js:8` | Yes | Must match each city data source year |
| Income type label | Median household income | `incomeType` | `src/cities/index.js:9` | Yes | Must match source definition exactly |
| Tax basis label | Pre-tax | `taxBasis` | `src/cities/index.js:10` | Yes | Confirm source is gross/pre-tax |
| Ratio definition line | `price-to-income = median home price / median annual household income` | hardcoded UI text | `src/cities/index.js:288` | No external source | Internal method statement; keep aligned with actual computation |
| Bar min height | 24px | `BAR_MIN_HEIGHT` | `src/cities/index.js:1` | No | Display constant, not economic source |
| Bar max height | 130px | `BAR_MAX_HEIGHT` | `src/cities/index.js:2` | No | Display constant, not economic source |

## D) Source completion checklist

1. Replace placeholder source strings in `ownershipSource` and `rentSource` with real citations per city.
2. Confirm each city uses the same metric definitions for ownership comparison (or label differences explicitly).
3. Validate that `medianIncome`, `medianHomePrice`, and displayed `year` are from compatible periods.
4. If burden metrics use different populations (e.g., low-income renters), state that directly in `burdenLabel`.
5. After sourcing, update `documentation/CITIES_SOURCE_DATA.md` with canonical rows and links.

## E) Candidate primary source mapping (from latest research notes)

| Figure / Claim on page | Candidate primary source | Fit | Notes for implementation |
|---|---|---|---|
| Toronto price-to-income ratio | Demographia, *International Housing Affordability 2025 Edition* | High | Notes indicate 10.4 (matches current page ratio) |
| Vancouver price-to-income ratio | Demographia, *International Housing Affordability 2025 Edition* | High | Notes indicate 13.5 (current page is 12.7, mismatch) |
| NYC price-to-income ratio | Demographia, *International Housing Affordability 2025 Edition* | High | Notes indicate 7.7 (current page is 7.5, mismatch) |
| London price-to-income ratio | Demographia, *International Housing Affordability 2025 Edition* | Medium | Notes indicate roughly 8-9; current page is 9.8 |
| Toronto ownership burden (77%/81%) | National Bank of Canada, *Housing Affordability Monitor Q3 2025* | High | Notes indicate mortgage burden 81%; current page shows 77% |
| NYC rent burdened share | NYC Comptroller (Mark Levine), *Spotlight: NYC Rental Housing Market* (2023) | High | Notes indicate 53% rent-burdened (matches current chip value) |
| London severe housing/rent burden (up to 77%) | Greater London Authority / City Hall investigation (2024) via Enfield Dispatch citation | Medium | Current page shows 52%; source note indicates up to 77% for lower-income young Londoners |
| North America affordability comparison visuals | Visual Capitalist, *Mapped: Housing Affordability Across North America in 2025* | Medium | Good support for comparative framing; not always canonical for raw city values |

## F) Mismatches between current page values and provided source notes

| City | Metric | Current page value | Source-note value | Action |
|---|---|---:|---:|---|
| Vancouver | Price-to-income ratio | 12.7 | 13.5 | Update data model or justify alternate source year/definition |
| New York City | Price-to-income ratio | 7.5 | 7.7 | Update ratio or document source-method difference |
| London | Price-to-income ratio | 9.8 | ~8-9 | Confirm exact year/definition before locking |
| Toronto | Ownership burden | 77% | 81% | Decide which metric to display and label denominator clearly |
| London | Rent burden | 52% | up to 77% (low-income young Londoners) | Keep both only if populations are explicitly differentiated |

## G) Source insertion template (for `CITIES_SOURCE_DATA.md`)

Use one row per metric (not per city only), so mixed metrics remain explicit:

| city | metric_type | metric_name | value | denominator/population | year | currency | primary_source_title | publisher/author | link | notes |
|---|---|---|---|---|---:|---|---|---|---|---|
| Toronto | ownership | price_to_income_ratio | 10.4 | median home price / median annual household income | 2025 | CAD | Demographia International Housing Affordability 2025 Edition | Demographia | TODO | Confirm metro boundary definition |
