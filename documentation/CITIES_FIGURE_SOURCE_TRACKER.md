# Cities Page Figure Source Tracker

Purpose: track each numeric figure currently displayed on the Cities page and its mapped primary source.

Scope: `src/cities/index.js`.

## A) Displayed ownership metrics

| City | Displayed figure | Current page value | Source title | Publisher/author | Year | Status |
|---|---|---:|---|---|---:|---|
| Toronto | Price-to-income ratio | 10.4 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | Mapped (URL pending) |
| Vancouver | Price-to-income ratio | 13.5 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | Mapped (URL pending) |
| New York City | Price-to-income ratio | 7.7 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | Mapped (URL pending) |
| London | Price-to-income ratio | 8.8 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | Provisional (exact figure pending) |

## B) Displayed burden chip metrics

| City | Chip label | Current page value | Definition / population | Source title | Publisher/author | Year | Status |
|---|---|---|---|---|---|---:|---|
| Toronto | Ownership burden | 81% of household income | Mortgage payment share on representative non-condo home | Housing Affordability Monitor Q3 2025 | National Bank of Canada | 2025 | Mapped (URL pending) |
| Vancouver | Affordability pressure | 13.5x median income | Same denominator as ownership ratio | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | Mapped (URL pending) |
| London | Housing burden (low-income young) | Up to 77% of earnings | Lower-income young Londoners, housing cost share | City Hall Investigation (cited via Enfield Dispatch) | Greater London Authority / City Hall | 2024 | Mapped (URL pending) |
| New York City | Rent burdened households | 53% | Tenant households paying >30% of income on rent | Spotlight: New York City's Rental Housing Market | NYC Comptroller (Mark Levine) | 2023 | Mapped (URL pending) |

## C) Currency and metadata assumptions shown in UI

| Item | Current value | Source requirement | Status |
|---|---|---|---|
| Income type | Median household income | Must match source denominator | Mapped |
| Tax basis | Pre-tax | Confirm source uses gross income | Mapped |
| Ownership year label | City-specific (`2025`) | Must match ownership source row | Mapped |
| Rent year label | City-specific (`2025`, `2024`, `2023`) | Must match rent metric source row | Mapped |
| Ratio definition text | home price / annual household income | Must stay aligned with computation | Mapped |

## D) Resolved mismatch summary

| Metric | Previous | Updated |
|---|---:|---:|
| Vancouver ratio | 12.7 | 13.5 |
| New York City ratio | 7.5 | 7.7 |
| Toronto burden | 77% | 81% |
| London burden label | Rent burden 52% | Low-income young housing burden up to 77% |

## E) Open verification items

1. Replace all `URL pending` placeholders with canonical links.
2. Confirm exact London Demographia ratio (currently set to provisional 8.8 midpoint from source notes indicating roughly 8-9).
3. Confirm Toronto/Vancouver/NYC income and home-price pair values against the exact source table boundaries used in production.
