# Deployment, SEO and existing asset audit — 2026-10-24

Scope: issues #7, #14 and #17. Repository base: `https://benwassa.github.io/faust/`. This document records source inspection and reproducible checks; it is **not** evidence that a new production deployment has succeeded.

## Deployment evidence and blockers

- Current main: `594a4b5e3c40cad885706092ca0674f304b8efb6` (Astro v3 site rewrite, 2026-07-02).
- Latest main GitHub Actions workflow: [Deploy to GitHub Pages, run 28618035661](https://github.com/BenWassa/faust/actions/runs/28618035661), **failure**; `build` job fails at `Install`, `Build` and `Upload artifact` skipped, `deploy` skipped. Archived job logs returned HTTP 410, so the precise installation error cannot be independently recovered.
- Same-commit legacy `pages build and deployment` workflow: [run 28618034825](https://github.com/BenWassa/faust/actions/runs/28618034825), **failure**.
- Prior legacy Pages workflow [run 21771563522](https://github.com/BenWassa/faust/actions/runs/21771563522) succeeded on **2026-02-07**, before the July migration. It does not validate current Astro output.
- Current workflow specifies **Node 20**, while the committed `astro@7.0.5` lockfile declares `node >=22.12.0`. It also specified `@astrojs/tailwind@6.0.2`, whose peer Astro range is `^3 || ^4 || ^5` (not Astro 7). The integration is unused; the site processes Tailwind via PostCSS.
- The PR switches CI to Node 22, removes the unused incompatible integration and adds PR-only build/smoke validation. Production deploy remains on main or manual dispatch.
- Pages **Settings → Pages → Source = GitHub Actions** must be confirmed by repository owner; the connected GitHub reader does not expose the Pages settings API. Do not conflate a successful build with live publication.
- The live `benwassa.github.io/faust/` site could not be retrieved from the available web reader in this review. No public HTTP status or browser session outcome is claimed.

## Routes, links, metadata

Astro static directory output: `dist/index.html`, `dist/{route}/index.html` (including `archetypes/{slug}/index.html`). Canonical directory URLs end with a slash. Static sitemap lists all 14 expected pages:

- Home `/faust/`.
- Seven chapters: `system/`, `cities/`, `machines/`, `casualties/`, `exits/`, `practice/`, `resources/`.
- Diagnostic: `diagnostic/`.
- Five archetypes: `archetypes/watchman/`, `archetypes/visible/`, `archetypes/faithful/`, `archetypes/departed/`, `archetypes/architect/`.

Verified source defects fixed on this branch: homepage's `./diagnostic` link fails if the homepage is opened at `/faust` (no final slash); previously generated social image metadata was `/faust/AMBITION_Vector.png` rather than an absolute HTTPS URL; route links and static sitemap omitted directory slashes. Base-aware route helpers now emit directory links while asset helpers retain file paths. Canonical, `og:url`, Open Graph image and Twitter image are normalized in the common layout. No image dimensions are asserted because pixel dimensions have not been verified.

`public/robots.txt`, `public/sitemap.xml` and `public/manifest.json` remain static, not generated dynamically. Sitemap now mirrors directory output. Manifest scope and start URL already point to `/faust/`. The layout loads fonts from Google Fonts and the site icon and manifest under `/faust/`.

## Existing artwork inventory

Sizes are exact **repository blob byte sizes**, not pixel dimensions. "Referenced" means present in source markup/config; it does not prove the current public site displays it. No source design projects, licensing certificates, or credited photographers were found in the repository tree or audited asset description; ownership/redistribution permissions therefore remain **unverified** for each PNG.

| Committed file (under `public/`) | Bytes | Source usage / status | Rights and format observations |
| --- | ---: | --- | --- |
| `AMBITION_Vector.png` | 373,142 | Default Open Graph/Twitter image; **referenced** | PNG despite name; not an editable vector file; source/rights unknown |
| `AMBITION_ICON.png` | 2,453,899 | Apple touch icon; **referenced** | PNG; source/rights unknown |
| `icon_round.png` | 984,288 | Favicon + web-app manifest icon; **referenced** | PNG; manifest declares 512×512, pixel dimensions not independently checked |
| `toronto.png` | 968,320 | City Explorer Toronto; **referenced** | PNG; photo provenance/rights unknown |
| `vancouver.png` | 1,754,133 | City Explorer Vancouver; **referenced** | PNG; photo provenance/rights unknown |
| `london.png` | 1,603,124 | City Explorer London; **referenced** | PNG; photo provenance/rights unknown |
| `nyc.png` | 1,485,533 | City Explorer New York; **referenced** | PNG; photo provenance/rights unknown |
| `infographics/architecture-of-ambition-beyond-workism.png` | 6,225,824 | **Committed but not linked/rendered** | PNG only; concepts described in `infographic_details.md` |
| `infographics/architecture-of-ambition-identity-fragility-vs-resilience.png` | 6,726,645 | **Committed but not linked/rendered** | PNG only; source/rights unknown |
| `infographics/digital-panopticon-career-anxiety-problem-solution.png` | 7,214,637 | **Committed but not linked/rendered** | PNG only; source/rights unknown |
| `infographics/digital-panopticon-professional-worth.png` | 6,310,556 | **Committed but not linked/rendered** | PNG only; source/rights unknown |
| `infographics/toronto-trap-defensive-ambition-burnout.png` | 6,425,441 | **Committed but not linked/rendered** | PNG only; may include figures requiring review under #8/#9 |

`public/infographics/infographic_details.md` describes the five concepts but is not a rights record and does not guarantee the figures in the rendered images are current. Repository contains no SVG, JPEG, WebP, AVIF or original artwork project in `public/`. File dimensions, art direction and image legibility at social preview sizes remain unverified because available GitHub file tools do not render the binary images.

### Minimal proposed launch pack — **not authorized**

Pending owner decision **#5**, do **not** commission, generate, recolour or recrop final campaign art. If #5 authorizes a launch pack, the first review should compare existing image dimensions and visual quality against:

| Destination | Proposed deliverable / format | Approval / source dependency |
| --- | --- | --- |
| Homepage / chapter preview | Reuse approved site art, with responsive crop / optimized WebP or AVIF where permissible | #5 scope and image rights; avoid unsupported new illustrations |
| Open Graph & X/Twitter link previews | Approved landscape share image, nominal 1200×630; fallback already references `AMBITION_Vector.png` | #5 final composition, title copy and rights; pixel review before `og:image:width/height` |
| Generic profile / card | Optional square crop, nominal 1200×1200 | #5 approval, only if distribution channel requires it |
| Manifest, favicon and touch icons | Confirm actual dimensions, transparency and source art; generate smaller optimized derivatives only after approval | #5 and verified permissions |
| Existing City Explorer and five infographics | Audit provenance and any displayed city statistics; optimize only assets selected for actual publication | #8/#9 source verification; #5 usage decision |

## Repeatable verification and manual release checklist

**Pull request / build stage**
- [ ] GitHub Actions PR `build` succeeds on Node 22, including `npm ci`, `npm run build`, `npm run smoke`. Smoke validates the 14 generated pages, static link targets, canonical/OG/Twitter metadata, required images/assets, sitemap, robots and manifest.
- [ ] Review the generated `dist/` artifact if available; verify all seven chapter pages, Diagnostic, five archetypes.
- [ ] Confirm `import.meta.env.BASE_URL` path handling for both `/faust` and `/faust/`; assert links never escape the project base.

**After an approved merge/deploy (owner/release gate #2)**
- [ ] Confirm Settings → Pages → **GitHub Actions** source, new main Pages workflow success and green **deploy** job; capture run URL, SHA and Pages environment deployment URL.
- [ ] Directly open and refresh `/faust/`, all 13 deep links, then exercise browser back/forward (desktop and mobile). A build-time file check alone is insufficient to prove live deep-link behavior.
- [ ] Confirm that CSS/JS, favicon, four city images and any displayed hero artwork return HTTP 200 with correct MIME types. Check browser console/network for 404s; check Google Fonts and the material icon font.
- [ ] Check light/dark toggle, navigate to a chapter, refresh, and verify persistent preference via `faust-theme` storage and no first-paint flash.
- [ ] Open representative home, chapter, Diagnostic and archetype links in an unfurled preview inspector (or an actual messaging client). Verify social title, description, landscape rendering and image accessibility. Absolute URLs alone do **not** guarantee attractive social previews.
- [ ] Fetch production `/faust/robots.txt`, `/faust/sitemap.xml`, `/faust/manifest.json`; compare against built files and live canonical link headers.
- [ ] Confirm asset rights and any on-image city numbers before publishing unreviewed infographic files; await #5 to commission new campaign graphics.

**Outstanding**: no browser-based live verification, actual image dimensions, independent social unfurl validation, or new successful Actions run at the time of initial source audit. Record results here when available; do not mark #7 or #14 fully resolved on PR creation alone.
