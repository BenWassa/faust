# Cities figure source tracker — 24 October 2026

Scope: `src/data/cities.ts`, `src/components/CityExplorer.astro`, `src/pages/cities.astro`. Supersedes the pre-Astro `src/cities/index.js` tracker.

| City | Previously shown | Verified ratio | Report geography | Denominator | Currency of source inputs | Data year vs publication | Exact source location | State |
|---|---:|---:|---|---|---|---|---|---|
| Toronto | 10.4× | **8.4×** | Toronto, ON metro | Gross median household income | CAD | 2024 Q3 / 2025 | Demographia Table 4, printed p. 23, PDF p. 29 | Corrected |
| Vancouver | 13.5× | **11.8×** | Vancouver, BC metro | Gross median household income | CAD | 2024 Q3 / 2025 | Same table/page | Corrected |
| Greater London | 8.8× | **9.1×** | Greater London | Gross median household income | GBP | 2024 Q3 / 2025 | Same table/page | Corrected |
| New York | 7.7× | **7.4×** | NY–NJ–PA metro | Gross median household income | USD | 2024 Q3 / 2025 | Demographia Table 4 cont., printed p. 25, PDF p. 31 | Corrected |

Original [Demographia 2025 PDF](https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf). Per the report's "Sources and Methods" (printed p. 26), house-price sources are selected by housing stock and median gross household incomes estimated from official figures. **Underlying pairs are not listed in Table 4.** Values such as 99k / 1,029,600 and 92k / 1,242,000 were not verified as its inputs, so the UI no longer displays them. The source publishes one decimal; further decimal precision cannot be reconstructed.

### Burden chip validation

| Market | Prior UI | Audited display | Specific population & denominator | Source location | Status |
|---|---|---|---|---|---|
| Toronto | 81% ownership burden | None | Indexed National Bank Q3 2025 PDF said 72.2% non-condo, but the linked PDF has rolled to 2026Q2 and no stable version is linked | National Bank Q3 2025 Toronto section; rolling URL not archival | Withheld; archival citation unresolved |
| Vancouver | 13.5× affordability pressure | None | Duplicate/wrong ratio, not a burden measure | Demographia Table 4 | Removed |
| London | Up to 77% for “low-income young” | 77% wages for **low-income Londoners aged 25–29** | Housing costs / wages for that subgroup | [London Assembly, 7 Mar 2024](https://www.london.gov.uk/who-we-are/what-london-assembly-does/london-assembly-work/london-assembly-publications/young-londoners-access-home-ownership), paragraph 2 | Corrected denominator |
| New York City | 53% / 2023 | **52.1% / 2022** | Rent-burdened NYC renter households, ACS 2022; gross rent incl. utilities >30% of income | [NYC Comptroller Spotlight, Jan 17 2024](https://comptroller.nyc.gov/reports/spotlight-new-york-citys-rental-housing-market/), Housing Affordability, Chart 6 | Corrected scope/year |

### Chart and methodology validation

- Every bar and the dashed cutoff use **one common ratio scale**, `ratioBarPercent(value, maxRatio)`. No hard-coded bar sizes; benchmark is placed inside the plot track, not offset by surface padding.
- Dashed 3.0× is **Demographia's Table ES-1 affordable category threshold**, not a measured cross-country historical average.
- Local monetary units **CAD, GBP and USD** are identified as source context, but no cross-currency numeric bars remain.
- Burden indicators and ownership multiples have different geographic bases, years and denominators; never present them as interchangeable.
- **Unresolved:** immutable original National Bank Q3 2025 edition; exact unrounded numerator/denominator pairs for Demographia; date of observation underlying London 77%; methodology-refresh policy per #4.
