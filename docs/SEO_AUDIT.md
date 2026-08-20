# AcceleratorX — Technical SEO Audit & Growth Plan

_Prepared: August 2026 · Scope: acceleratorx.org (~55 routes) · Method: source-code & configuration analysis_

> **Methodology note.** The live site was unreachable from the audit environment (blocked by a network egress proxy), so this audit was performed against the **source code and build config** — `index.html`, `server.js`, the React Router route tables, `src/utils/metadata.ts`, `public/sitemap.xml`, and `public/robots.txt`. This is more precise than crawling for *technical* issues, but two items need live confirmation: which deployment actually serves production (Vercel SPA vs. Node SSR), and the rendered `<head>` of a live course page.

An interactive version of this report is available as a Claude artifact.

---

## Executive summary

The site has a solid SEO **foundation**: per-page metadata via `react-helmet-async`, an SSR pipeline that injects tags server-side, canonical tags, Open Graph/Twitter cards, GTM + Clarity analytics, and search-console verification for Google, Bing and Yandex. The problems are in **execution and hygiene** — duplicated head tags, an ambiguous deployment path that may strip per-page meta, a broken sitemap, thin structured data, and very heavy images.

**Fix first (this week):** duplicate title/description on every page (P0-1), the www vs non-www split (P0-3), and the broken sitemap (P0-4).

| Priority | Count |
|---|---|
| P0 · Critical | 4 |
| P1 · High | 6 |
| P2 · Medium | 5 |

---

## Findings

### P0 — Critical (fix this week)

**P0-1 · Duplicate `<title>` and meta description on every rendered page**
`index.html` hard-codes `<title>AcceleratorX</title>` plus a `meta description` and a full OG/Twitter set. `server.js` then injects Helmet's `title`/`meta`/`link` right before `</head>` **without removing** the static ones — so every SSR page ships two titles, two descriptions and two OG blocks. The generic static "AcceleratorX" title can win in SERPs.
**Fix:** Remove hard-coded `<title>`, `meta description`, and OG/Twitter tags from `index.html` (keep only global tags — charset, viewport, favicon, GTM). Make Helmet the single source of truth; inject at a dedicated `<!--head-outlet-->` placeholder.

**P0-2 · Deployment ambiguity — SSR may not be serving crawlers**
Two paths coexist: `ecosystem.config.json` + `nginx-ssr.conf` + `server.js` describe a Node/PM2 **SSR** deploy, but `vercel.json` rewrites `/(.*) → /` and `vercel-build` is a plain client `vite build` (no `build:server`). If Vercel is live, every route returns the static `index.html` with a generic title and no per-page meta until JS runs — invisible to non-rendering crawlers (Bing, LinkedIn, WhatsApp, X).
**Fix & verify:** View-Source a course URL. Page-specific title ⇒ SSR live (proceed to P0-1). "AcceleratorX" ⇒ SPA serving; point production at the Node SSR build (or add prerendering) and reconcile `vercel.json`.

**P0-3 · www vs non-www conflict inside your own tags**
`index.html` Organization schema and `og:url` use `https://www.acceleratorx.org`; every canonical in `metadata.ts`, `sitemap.xml`, and `robots.txt` use non-www `https://acceleratorx.org`. Split canonical signals dilute authority.
**Fix:** Pick one host (non-www, to match canonicals/sitemap), 301-redirect the other, and update the schema + `og:url` in `index.html`.

**P0-4 · sitemap.xml is broken, stale, and incomplete**
`public/sitemap.xml` (free online generator) contains literal placeholders `/jobs/:id`, `/certificate/:certificateId`; dead URLs with no route (`/xsat`, `/courses/gen-ai-for-pms`, `/courses/n8n-automation`, `/courses/onsite-workshopz`, `/login` — also disallowed in robots.txt); duplicates; and thin/auth pages. Missing real pages: `/courses/data-science`, `/courses/advance-generative-ai`, `/courses/all-programs`, `/courses/ai-digital-marketing`, `/courses/gen-ai`, `/blogs`. Every entry is `priority=1.0`, `changefreq=daily`.
**Fix:** Generate the sitemap programmatically from the route table at build time; include only canonical indexable pages; drop auth/utility/`:param` routes (or expand dynamic ones from data); use real `lastmod` and a priority spread.

### P1 — High (next two weeks)

**P1-5 · ~25 routes fall back to the homepage's metadata**
`getPageMetadata()` returns the homepage default for any unmapped path. Live routes with no entry include `/courses/all-programs`, `/courses/ai-digital-marketing`, `/courses/gen-ai`, `/courses/ai-digital-marketing-fb`, `/courses/datascience-program-fb`, `/blogs`, `/mentor/:id`, `/workshop/ai-coding-agents`, and newer workshop variants — all rendering the same title. Only 30 pages currently render the `<SEO>` component.
**Fix:** Add unique `title`/`description` for every indexable route; enforce the `<SEO>` component in the shared layout.

**P1-6 · No Course, FAQ, Event, or Breadcrumb structured data**
Only a bare `Organization` block exists. No `Course` schema on course pages, no `Event` on events, no `FAQPage` (despite a FAQ component). (Blog pages do get `Article` schema — good.) Missing the biggest ed-tech rich-result opportunities.
**Fix:** Add `Course`, `FAQPage`, `Event`, and site-wide `BreadcrumbList` JSON-LD; validate with Rich Results Test.

**P1-7 · Organization schema is nearly empty**
Only `url` and `logo` — no `name`, `description`, `sameAs`, or `contactPoint`. Social icons exist in `public/` but aren't wired in.
**Fix:** Add `name`, `description`, `sameAs` (all social URLs), `contactPoint`, and a proper-resolution logo (PNG ≥112×112, not the favicon SVG).

**P1-8 · Very heavy images hurting Core Web Vitals**
Mentor photos are 1.3–1.6 MB PNGs; the TCS logo is a 1.4 MB PNG; `hire-bg.webp` 701 KB, `hero-bg.webp` 483 KB. Poor LCP, high mobile data cost.
**Fix:** Re-encode to sized WebP/AVIF (<100 KB each, logos <20 KB), add `width`/`height`, `loading="lazy"` below the fold, responsive `srcset`.

**P1-9 · Homepage has three different titles**
`index.html` `<title>` = "AcceleratorX"; its `meta name="title"` = "AcceleratorX - Master the Skills That Matter"; `metadata.ts` = "AcceleratorX | Learn Product, AI & Data Skills". OG image also differs.
**Fix:** Standardize on one keyword-rich title (the `metadata.ts` version) and one OG image, removing competing static tags (per P0-1).

**P1-10 · Ad-landing variants risk thin/duplicate content**
Many `-fb`, `-fb-b`, `-eie`, and obfuscated workshop-slug variants exist. Several canonicalize to the primary URL (good) but also appear in the sitemap as indexable — contradicting the canonical.
**Fix:** Per page, either keep the canonical **and** remove from sitemap, or add `noindex` to pure ad-landing pages — consistently.

### P2 — Medium (this quarter)

**P2-11 · robots.txt out of sync with routes** — disallows non-existent `/login`; doesn't exclude real utility routes (`/thank-you`, `/registration-sucessfull`, `/profile/*`, `/my-applications`, `/course-payment/*`, `/workshop-payment/*`). Fix the rules to match reality.

**P2-12 · OG image relative path in static HTML** — `index.html` sets `og:image` to a relative `/companylogo-new.webp`; some scrapers need absolute URLs. Provide a proper 1200×630 share image.

**P2-13 · Heavy third-party script load** — GTM, Clarity, Meta Pixel, Google Fonts, and an ElevenLabs widget all load. Defer non-critical tags, load the widget on interaction, self-host/subset fonts.

**P2-14 · Confirm one `<h1>` per page** — 60 files use `<h1>` across ~55 routes; audit heavy multi-section landing pages for exactly one descriptive H1 and a logical heading outline.

**P2-15 · Partial image alt coverage** — ~409 `<img>` vs ~432 `alt=`; ensure content images have descriptive alt text and decorative images use `alt=""`.

---

## Page inventory

| Route | Purpose | Recommendation |
|---|---|---|
| `/` | Homepage | Index |
| `/about-us` | About | Index |
| `/courses/product-management` · `/courses/data-analytics` · `/courses/generative-ai` | Courses | Index |
| `/courses/data-science` · `/courses/advance-generative-ai` | Courses | Index — **add to sitemap** |
| `/courses/ai-digital-marketing` · `/courses/all-programs` · `/courses/gen-ai` | Courses | Index — **add meta + sitemap** |
| `/advance-ai-crash-course` | Course | Index |
| `/events` | Events hub | Index |
| `/blogs` · `/blogs/:slug` | Blog | Index (`:slug` has Article schema) — add `/blogs` to sitemap |
| `/privacy-policy` · `/terms-and-conditions` · `/refund-policy` | Policies | Index (low priority) |
| `/courses/*-fb` · `*-fb-b` · `*-eie` | Paid-ad variants | No-index (or canonical + drop from sitemap) |
| `/workshop/gen-ai-masterclass-{bxwcy,thidtx,fioth}` | Ad landing pages | No-index |
| `/sign-in` · `/sign-up` · `/profile/*` · `/my-applications` | Auth / account | No-index |
| `/thank-you` · `/registration-sucessfull` · `/*-payment/success` | Conversion utility | No-index |
| `/jobs/:id` · `/certificate/:certificateId` | Dynamic (sitemap has literal `:id`) | Fix sitemap |
| `/xsat` · `/courses/n8n-automation` · `/courses/onsite-workshopz` · `/courses/gen-ai-for-pms` · `/login` | In sitemap, no live route | Remove |

---

## Action plan

**Week 1 — stop the bleeding:** confirm live deployment (P0-2) → remove static head tags (P0-1) → pick one host + 301 (P0-3) → rebuild sitemap (P0-4).

**Weeks 2–3 — metadata & rich results:** unique meta for all indexable routes + enforce `<SEO>` (P1-5, P1-9) → add Course/FAQ/Event/Breadcrumb schema (P1-6) → enrich Organization schema (P1-7) → resolve ad-variant indexing (P1-10).

**Month 2 — performance & hygiene:** compress images (P1-8) → sync robots.txt + optimize scripts (P2-11, P2-13) → absolute OG images (P2-12) → H1 + alt audit (P2-14, P2-15).

**Ongoing — content & authority:** long-tail blog cadence interlinked to courses; internal links + visible breadcrumbs; unique substantive copy per course page; Search Console / Bing monitoring, sitemap submission, monthly index-coverage & CWV tracking.

---

## What's already working

Per-page metadata system · SSR head-tag injection · canonical/OG/Twitter tags · Article schema + SSR content for blogs · search-console verification (Google, Bing, Yandex) · GTM + Clarity, FOUC prevention, resource hints · mobile viewport, favicon set, `lang="en"`.
