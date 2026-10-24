# Cities Math / Economics Review — updated 24 October 2026

The prior version of this document audited an obsolete, pre-Astro prototype (`src/cities/index.js`) and is not the production baseline. The findings below describe the **current branch**.

1. **Ownership:** `src/data/cities.ts` stores the one-decimal 2024 Q3 **Demographia-published median multiples**: Toronto 8.4×, Vancouver 11.8×, Greater London 9.1× and New York NY–NJ–PA 7.4×. See Table 4, printed pp. 23, 25 of the [2025 report](https://www.chapman.edu/communication/_files/Demographia-International-Housing-Affordability-2025-Edition.pdf). No unreliable monetary price/income pair is presented.
2. **Bars:** the CityExplorer and comparison chart represent the **same ownership median-multiple ratio** on a consistent unitless scale. Every bar is `100 * ratio / maxRatio` percent of its track. The ≤3.0× marker also uses that scale. No arbitrary fixed pixel heights or exchange-rate comparisons.
3. **Gross income:** per Demographia section 1 and Sources and Methods, denominator is **gross/pre-tax median household income** estimated for the metropolitan market, not an individual's post-tax wages. Rounded ratios must not be treated as precise computed pair results.
4. **Burden:** London's 77% refers to wages of low-income people **aged 25–29** (London Assembly, 2024); New York City's 52.1% refers to the share of **NYC renter households** above 30% rent/income (ACS **2022** via Comptroller **2024**). They are dissimilar metrics to each other and to ownership; Toronto and Vancouver burden chips lack distinct stable source support and are withheld.
5. **Claims:** housing observations are evidence of high price-to-income multiples, **not direct empirical evidence** that housing prices cause workism, depression, or career decisions. Page interpretation is identified as such.

See `documentation/CITIES_SOURCE_DATA.md`, `documentation/CITIES_FIGURE_SOURCE_TRACKER.md` and `documentation/RESEARCH_SOURCE_AUDIT_2026-10-24.md`. Issue #4 retains the independent decision about future refreshing.
