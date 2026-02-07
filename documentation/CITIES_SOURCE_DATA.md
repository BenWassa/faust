# Cities Canonical Source Data

This file is the canonical data contract for figures displayed on the Cities page.
Use one row per metric so ownership and rent measures remain explicitly separated.

## Ownership Affordability Metrics

| city | metric_type | metric_name | value | denominator_or_population | year | currency | primary_source_title | publisher_or_author | link | notes |
|---|---|---|---:|---|---:|---|---|---|---|---|
| Toronto | ownership | price_to_income_ratio | 10.4 | median home price / median annual household income | 2025 | CAD | Demographia International Housing Affordability, 2025 Edition | Demographia | TODO | Canonical ratio used on page |
| Vancouver | ownership | price_to_income_ratio | 13.5 | median home price / median annual household income | 2025 | CAD | Demographia International Housing Affordability, 2025 Edition | Demographia | TODO | Canonical ratio used on page |
| New York City | ownership | price_to_income_ratio | 7.7 | median home price / median annual household income | 2025 | USD | Demographia International Housing Affordability, 2025 Edition | Demographia | TODO | Canonical ratio used on page |
| London | ownership | price_to_income_ratio | 8.8 | median home price / median annual household income | 2025 | GBP | Demographia International Housing Affordability, 2025 Edition | Demographia | TODO | Source notes indicate roughly 8-9; set to midpoint pending exact figure confirmation |

## Burden / Stress Metrics

| city | metric_type | metric_name | value | denominator_or_population | year | currency | primary_source_title | publisher_or_author | link | notes |
|---|---|---|---:|---|---:|---|---|---|---|---|
| Toronto | burden | mortgage_payment_share | 81 | mortgage payment share of household income (representative non-condo home) | 2025 | CAD | Housing Affordability Monitor Q3 2025 | National Bank of Canada | TODO | Replaces prior 77% figure |
| Vancouver | burden | affordability_pressure_ratio | 13.5 | same denominator as ownership ratio | 2025 | CAD | Demographia International Housing Affordability, 2025 Edition | Demographia | TODO | Displayed as ratio burden proxy |
| London | burden | housing_cost_share_low_income_young | 77 | share of earnings spent on housing by lower-income young Londoners (up to) | 2024 | GBP | City Hall Investigation (as cited by Enfield Dispatch) | Greater London Authority / City Hall | TODO | Subgroup-specific; label explicitly in UI |
| New York City | burden | rent_burdened_tenants_share | 53 | NYC tenant households rent-burdened (>30% income to rent) | 2023 | USD | Spotlight: New York City's Rental Housing Market | NYC Comptroller (Mark Levine) | TODO | Matches current burden chip concept |

## Supplemental Context Metrics (not all currently displayed)

| city_or_region | metric_name | value | denominator_or_population | year | primary_source_title | publisher_or_author | link | notes |
|---|---|---:|---|---:|---|---|---|---|
| Ontario | youth_unemployment_rate | 17.8 | youth labor force | 2025 | Generation in Limbo: Canada's Youth Employment Crisis | Magnet Network | TODO | Candidate contextual chip if added later |
| Toronto | adults_20_34_living_with_parents_share | 47 | adults aged 20-34 | 2025 | Research note aggregation | Derived from provided research packet | TODO | Use only when original primary table link is confirmed |
| New York City | low_income_renters_over_50pct_rent_share | 30 | low-income renters | 2023 | Spotlight: New York City's Rental Housing Market | NYC Comptroller (Mark Levine) | TODO | Context metric for deep drilldown |

## Implementation Notes

1. `src/cities/index.js` should be kept in sync with this file for all displayed figures.
2. If a metric is subgroup-specific (for example, lower-income young Londoners), the UI label must include that subgroup.
3. Replace all `TODO` links with canonical URLs before final publication.
