# Cities Page — Math & Economics Review (Full)

Scope: `src/cities/index.js` (data + rendering) and how values are presented on the “Cities” page via `src/views/cities.js` / `src/main.js`.

This review focuses on (1) internal mathematical consistency, (2) economic meaning/definitions, and (3) whether the visualization faithfully represents the underlying numbers.

---

## 1) What the Cities page currently claims (as implemented)

### Primary metric shown (always)
- **Price-to-income ratio** (`ratio`): displayed prominently as “Price-to-Income Ratio … `ratio` x”.
  - Implied definition (not stated in UI): `median_home_price / median_annual_income`.

### Supporting values shown (bar figure)
- **Annual income** (`income`): rendered as a rounded “`$XXK`” label.
- **Property cost** (`costDisplay`): rendered as a pre-formatted string (e.g., `$1.07M`, `£221K`).
- **Bar heights**:
  - Income bar height is **fixed** at `70px`.
  - Cost bar height is **hard-coded per city** (`costBarHeight`) and animated on selection.

### “Stat chip” (varies by city)
- `stats` mixes **different kinds of metrics**:
  - Toronto: “77% income for ownership”
  - Vancouver: “12.7 Price-to-Income Ratio”
  - London: “52% income on rent”
  - NYC: “53% Rent Burdened”

---

## 2) Data dictionary (current fields)

Per-city fields in `cityData`:
- `ratio` (number): price-to-income ratio.
- `income` (number): annual income used in the bar figure (currently treated as dollars in formatting).
- `costDisplay` (string): displayed “property cost” label (not used for calculations).
- `costBarHeight` (number, px): displayed “property cost” bar height (not derived from ratio/income/cost).
- `stats`, `desc`, `narrative`, `image`: copy/media.

---

## 3) Internal math consistency checks

### 3.1 Ratio vs income implies a price (but the UI price label is independent)

If `ratio` is truly “price-to-income”, then:

`implied_price = ratio * income`

Current values (computed from `ratio` and `income`) vs `costDisplay`:

| City | `ratio` | `income` (as stored) | Implied price = `ratio*income` | `costDisplay` shown | Consistency |
|---|---:|---:|---:|---|---|
| Toronto | 10.7 | 99,000 | 1,059,300 | `$1.07M` | Close (within ~1%) |
| Vancouver | 12.7 | 92,000 | 1,168,400 | `$1.27M` | Off by ~101,600 (~8.7%) |
| London | 9.8 | 45,000 | 441,000 | `£221K` | Off by ~220,000 (~50%) |
| NYC | 7.5 | 80,000 | 600,000 | `$600K` | Exact |

Key point: **`costDisplay` is not mathematically tied to `ratio` and `income`**, so the UI can (and currently does) present contradictory triples (`ratio`, `income`, `property cost`).

### 3.2 Bar chart scaling does not correspond to any stated quantity

Income bar height is fixed (`70px`) for every city, while cost bars are hard-coded:

- Toronto `costBarHeight=130` → 130/70 = 1.86×
- Vancouver `costBarHeight=138` → 138/70 = 1.97×
- London `costBarHeight=115` → 115/70 = 1.64×
- NYC `costBarHeight=118` → 118/70 = 1.69×

These **do not track** either:
- the displayed `ratio` (7.5–12.7×), or
- a true price divided by income (same thing), or
- the displayed `costDisplay` magnitudes.

So as implemented, the “Annual Income vs Property Cost” figure is **illustrative only**, but it is *presented like data* (axis-free bar chart with numeric labels).

---

## 4) Economics/measurement issues (definition-level)

### 4.1 Mixed units/currencies (and unclear income definition)

Formatting currently assumes:
- Income label is always prefixed with `$` (via `const incomeLabel = '$' + ...`).
- London property cost uses `£` in `costDisplay`, while its income label still shows `$45K`.

This creates a measurement ambiguity:
- Are Toronto/Vancouver incomes in CAD or USD?
- Is London income in GBP or USD?
- Are these **individual** median incomes or **household** medians?
- Pre-tax or after-tax?

For price-to-income ratios, the standard is typically **median (household) income** in the same currency and year as the **median home price**. If you instead use individual income (or mix pre-/post-tax), the ratio will shift materially.

### 4.2 Mixed concepts: ownership affordability vs rent burden

The page simultaneously foregrounds:
- **price-to-income ratio** (ownership affordability proxy), and
- **rent burden** (“% income on rent” / “% rent-burdened”).

Both are legitimate, but they’re different measures with different denominators and populations. Right now the UI presents them without:
- a definition,
- a year,
- a population (“median renter household”, “all renter households”, etc.),
- or a source.

This matters because the narrative claim (“ownership is mathematical”, “only inheritance buys shelter”, etc.) relies on the reader trusting the measurement.

---

## 5) Presentation-level issues that affect interpretation

### 5.1 The “city title” uses internal keys

The title uses `currentCity` (e.g., `nyc`) rather than a formatted name, even though a `formatCityName` helper exists. This is mostly UX, but it also affects data literacy (“NYC” vs “New York City”) and perceived polish.

### 5.2 “Fig 02.1 — Global Affordability Index” label overpromises

The figure is a 4-city comparison with no index construction, axis, units, year, or source. Calling it an “index” implies methodological work that isn’t present in code.

### 5.3 Cross-document consistency (site copy vs implementation)

Elsewhere in the repo, Toronto is described as having a **10.4** price-to-income ratio (e.g., `README.md`, `documentation/WebsiteArchitecture.md`, `documentation/VISION_CONTEXT.md`), while the Cities page implementation currently uses **10.7** for Toronto in `src/cities/index.js`.

This is small numerically, but it matters rhetorically: if the project is positioning itself as research-backed, the same “headline stat” should not drift between pages/docs without an explicit year/source note.

---

## 6) Recommended fixes (ordered by impact)

### A) Make the three core numbers mathematically consistent (ratio / income / price)

Choose one of these approaches:

1) **Derive price from ratio + income** (best for internal consistency)
   - Store `ratio` and `income` as numbers.
   - Compute `medianHomePrice = ratio * income`.
   - Format `medianHomePrice` for display instead of maintaining `costDisplay` manually.

2) **Store price + income, derive ratio**
   - Store `medianHomePrice` and `income`.
   - Compute `ratio = medianHomePrice / income` (rounded).

Either approach eliminates contradictions like London’s current triple.

### B) Add explicit measurement metadata and show it (even minimally)

Per city, add:
- `currency` (e.g., `CAD`, `USD`, `GBP`)
- `year` (or a range)
- definitions for `income` and `price` (household vs individual; pre-/post-tax)
- source references (even a short label + link in Resources)

### C) Make the bar chart scale to real quantities (or restyle it as “illustrative”)

If it’s meant to be a *data* visualization:
- Compute bar heights from numeric values (`income` and `medianHomePrice`) using a common scale.

If it’s meant to be *symbolic*:
- Remove numeric labels and rename the figure so it doesn’t read as precise measurement.

### D) Fix currency formatting

Use `Intl.NumberFormat` with per-city currency for:
- income label
- home price label
- and any derived values

At minimum: London should not show `$45K` alongside `£221K`.

---

## 7) Quick audit summary

- ✅ Strong rhetorical structure: ratio + narrative + comparative figure is the right shape for the thesis.
- ❌ Two cities (Vancouver, London) currently have **internal numeric contradictions** between `ratio`, `income`, and `costDisplay`.
- ❌ The bar chart is **not scaled to the stated numbers**, but reads as if it is.
- ❌ Currency and measurement definitions are **mixed/implicit**, which undermines credibility.

---

## 8) Reconciliation against `CITIES_SOURCE_DATA.md` (status: empty)

`documentation/CITIES_SOURCE_DATA.md` is currently **0 bytes / empty** in this repo snapshot, so there is no authoritative source table to validate the Cities page numbers against.

Also note: `documentation/CITIES_FACTS.md` is not present in the repository (if it exists, it may be untracked or located elsewhere).

What *can* be reconciled today:
- **Cross-doc drift**: other project docs mention Toronto as **10.4** price-to-income, while the Cities page code uses **10.7**. Pick one canonical value and record the year + source so it can’t drift again.
- **Internal contradictions** (Section 3): Vancouver + London currently have inconsistent triples (`ratio`, `income`, `costDisplay`) regardless of what the “true” external numbers are.

What cannot be done without source data:
- Assert “correct” ratios/incomes/prices for each city.
- Decide whether you intend *household* or *individual* income, pre- or post-tax, and which year.

### Recommended contents for `CITIES_SOURCE_DATA.md` (so this review can be grounded)

At minimum, for each city:
- **Ownership affordability**:
  - `median_home_price` (number)
  - `median_income` (number)
  - `income_type` (`household`/`individual`)
  - `tax_basis` (`pre_tax`/`after_tax`)
  - `year`
  - `currency`
  - `source` (URL + publisher + access date)
- **Rent burden (optional but strongly recommended)**:
  - `rent_burden_metric` (e.g., “share paying >30%”, “median rent share”, “low-income share”)
  - `value`
  - `population` (e.g., “renter households”, “low-income renters”)
  - `year`, `source`

Suggested Markdown table shape:

| city | year | currency | home_price | income | income_type | tax_basis | derived_ratio | source |
|---|---:|---|---:|---:|---|---|---:|---|

And a second table for rent metrics:

| city | year | metric | value | population | source |
|---|---:|---|---:|---|---|

### What an upgraded Cities page should look like (implementation-ready spec)

#### 1) Make the figure mathematically faithful

Pick a canonical storage schema:
- Recommended: store `medianHomePrice` + `medianIncome`, compute `ratio = medianHomePrice / medianIncome`.

Then:
- Display **all three** (price, income, ratio) derived from the same data row.
- Scale bars from **real numeric values** (no `costBarHeight` constants).

Example scaling rule:
- `maxValue = max(medianHomePrice across cities)`
- `barHeightPx(value) = (value / maxValue) * MAX_BAR_PX` (clamped)
- Apply to both income and home price bars, so proportions reflect magnitudes.

#### 2) Make units explicit and consistent

Per city:
- Format values with `Intl.NumberFormat` using the city currency (and don’t mix `$` with `£`).
- Show a small metadata line: `Median household income (pre-tax), 2025 — Source: ...`.

#### 3) Stop mixing metric types without labeling

Keep the core chart about ownership affordability (price vs income).

Then add a second, clearly-labeled element for rent:
- A stat chip row or mini-chart (e.g., “Share of renters paying >30% of income: 53% (2023)”), with population + denominator in the label.

#### 4) Fix the “index” overclaim

Rename `Fig 02.1 — Global Affordability Index` to something literal unless you actually compute an index:
- `Fig 02.1 — Housing Affordability (Price-to-Income)` + a footnote with definition/year/source.

---

If you paste or populate `documentation/CITIES_SOURCE_DATA.md` with the real rows (even rough first pass), I can:
- update this review with “correct” per-city details,
- and implement the upgraded data model + chart scaling in `src/cities/index.js`.
