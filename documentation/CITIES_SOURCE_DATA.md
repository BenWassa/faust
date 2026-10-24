# Cities source data — audited 24 October 2026

This document is the source contract for the **existing 2025-edition snapshot** of housing indicators. This audit verifies existing citations; it does not settle the evidence-refresh decision in issue #4.

## Ownership affordability: published median multiples

Primary: Wendell Cox, [*Demographia International Housing Affordability, 2025 Edition*](https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf), Tables 3–4 (printed pp. 22–25; PDF pages 28–31), **Q3 2024 observations**. Definition: metropolitan-market **median home price divided by gross/pre-tax median household income**, yielding a unitless rounded ratio. Markets are labor-market/metropolitan geographies, not municipal boundaries. Source Table 4 does **not** expose the underlying median home-price and median-income pairs.

| Display | Demographia market label | Ratio (published, 1 dp) | Local currency of underlying figures | Data period | Report location | Underlying monetary pairs |
|---|---|---:|---|---|---|---|
| Toronto | Toronto, ON | **8.4×** | CAD | 2024 Q3 | Table 4, printed p. 23; PDF p. 29 | Not published; do not derive |
| Vancouver | Vancouver, BC | **11.8×** | CAD | 2024 Q3 | Table 4, printed p. 23; PDF p. 29 | Not published; do not derive |
| London | Greater London | **9.1×** | GBP | 2024 Q3 | Table 4, printed p. 23; PDF p. 29 | Not published; do not derive |
| New York | New York, NY–NJ–PA | **7.4×** | USD | 2024 Q3 | Table 4 continued, printed p. 25; PDF p. 31 | Not published; do not derive |

The ratio is taken **directly** from the published one-decimal source table. Previous pair values (Toronto CAD 99,000 / 1,029,600; Vancouver CAD 92,000 / 1,242,000; London GBP 45,000 / 396,000; New York USD 80,000 / 616,000) reproduce **different** multiples but could not be traced to the cited table. They were removed rather than presented as Demographia observations. Exact unrounded ratios are unavailable.

**Benchmark:** the report's Table ES-1 (printed p. 1; PDF p. 7) defines its *affordable* category as 3.0× or lower. It is a **source-defined category cutoff**, not a measured historical mean, regulatory standard or causal threshold. The comparison chart scales both widths and markers to the maximum ratio (11.8), in **unitless ratios**; do not compare monetary values across CAD, GBP and USD.

## Separate burden / cost-stress measures

| Display | Verified statistic | Numerator / denominator / scope | Data year | Original report location | Verification |
|---|---|---|---|---|---|
| London | **Up to 77% of wages** | Housing costs divided by wages for **low-income Londoners aged 25–29**; not all London tenants | Published 2024; report does not establish the exact observation quarter here | [London Assembly Housing Committee, *Young Londoners’ Access to Home Ownership*, 7 March 2024](https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-work/london-assembly-publications/young-londoners-access-home-ownership), opening overview, paragraph 2 | Verified |
| New York City (municipal renter households) | **52.1%** | Renter households with **gross rent incl. utilities >30% of household income** divided by all relevant NYC renter households | **2022 ACS** (Comptroller spotlight issued Jan 17 **2024**) | [NYC Comptroller, *Spotlight: New York City’s Rental Housing Market*](https://comptroller.nyc.gov/reports/spotlight-new-york-citys-rental-housing-market/), “Housing Affordability”, Chart 6 and accompanying paragraph | Verified |
| Toronto | **Not displayed** | The former “81% of household income” was labeled as a non-condo payment share, but a Q3 2025 indexed National Bank release reports **72.2% non-condo** and **70.3% composite**; the [National Bank's live PDF URL](https://www.nbc.ca/content/dam/bnc/taux-analyses/analyse-eco/logement/housing-affordability.pdf) now serves Q2 **2026**, not Q3 2025 | Q3 2025 sought | Indexed Q3 2025 copy vs rolling live PDF; *immutable edition URL outstanding* | Suppressed pending stable archival source |
| Vancouver | **Not displayed separately** | Prior “13.5× affordability pressure” duplicated ownership ratio, incorrectly and under another label | 2024 Q3 | Demographia Table 4, which reports **11.8×** | Duplicate metric removed |

**Methodological boundary:** the NYC burden metric is **city-proper rental** stock from ACS 2022; its ownership ratio describes a **larger NY–NJ–PA metropolitan housing market**. London's low-income 25–29 housing-cost share is a **wage-share subgroup**. They cannot be compared as if they were population-wide rent-burden rates or mortgage-payment-to-income ratios.

## Implementation and status

- Production data: `src/data/cities.ts`; presentation: `src/components/CityExplorer.astro` and `src/pages/cities.astro`.
- Citation registry: `src/data/citations.ts`. No data are live-fetched.
- Unpublished monetary pairs have been removed from the UI. The chart now displays **only** the directly evidenced source ratios; fixed income/price bars and derived currency amounts must not return without original paired data.
- This is an evidence correction, **not** a decision on whether future editions replace this snapshot. That choice remains open under #4.
