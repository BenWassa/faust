# Cities Page Figure Source Tracker

Purpose: track each numeric figure currently displayed on the Cities page and its mapped primary source.

Scope: `src/cities/index.js`.

## A) Displayed ownership metrics

| City | Displayed figure | Current page value | Source title | Publisher/author | Year | URL | Status |
|---|---|---:|---|---|---:|---|---|
| Toronto | Price-to-income ratio | 10.4 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf | Mapped |
| Vancouver | Price-to-income ratio | 13.5 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf | Mapped |
| New York City | Price-to-income ratio | 7.7 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf | Mapped |
| London | Price-to-income ratio | 8.8 | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf | Mapped (selected canonical value within cited 8-9 range) |

## B) Displayed burden chip metrics

| City | Chip label | Current page value | Definition / population | Source title | Publisher/author | Year | URL | Status |
|---|---|---|---|---|---|---:|---|---|
| Toronto | Ownership burden | 81% of household income | Mortgage payment share on representative non-condo home | Housing Affordability Monitor Q3 2025 | National Bank of Canada | 2025 | https://www.nbc.ca/content/dam/bnc/taux-analyses/analyse-eco/logement/housing-affordability.pdf | Mapped |
| Vancouver | Affordability pressure | 13.5x median income | Same denominator as ownership ratio | Demographia International Housing Affordability, 2025 Edition | Demographia | 2025 | https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf | Mapped |
| London | Housing burden (low-income young) | Up to 77% of earnings | Lower-income young Londoners, housing cost share | City Hall Investigation (cited via Enfield Dispatch) | Greater London Authority / City Hall | 2024 | https://enfielddispatch.co.uk/young-londoners-spending-up-to-77-of-income-on-housing-costs/ | Mapped |
| New York City | Rent burdened households | 53% | Tenant households paying >30% of income on rent | Spotlight: New York City's Rental Housing Market | NYC Comptroller (Mark Levine) | 2023 | https://comptroller.nyc.gov/reports/spotlight-new-york-citys-rental-housing-market/ | Mapped |

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

1. For publication-grade rigor, add report table/section identifiers for each figure.
2. Confirm Toronto/Vancouver/NYC income and home-price pair values against the exact source table boundaries used in production.
