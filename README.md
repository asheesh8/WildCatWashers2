# Wildcat Washers — wildcatwashers.com

Conversion- and SEO-focused marketing site for Wildcat Washers, a window cleaning,
solar panel cleaning and pressure washing company serving Greater Tucson.

Built with **Astro 5**, static output, ~4 KB of JavaScript site-wide.

```bash
npm install
npm run dev      # http://localhost:4400
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

---

## The one rule

**`src/data/business.ts` is the single source of truth for every factual claim on
the site.** Services, service areas, guarantees, process, pricing factors, FAQs,
awards, phone number, hours — all of it lives there, and every page reads from it.

Change the guarantee from 14 days to 21 and it updates on 47 pages, in the JSON-LD,
in the assistant's answers and in the footer. Never hard-code a fact into a page.

Anything marked `TODO(wildcat)` in that file is **unverified** and must be
confirmed before launch. Do not invent replacements.

---

## What's here

| Path | What it is |
|---|---|
| `src/data/business.ts` | The fact bank. Start here. |
| `src/data/media.ts` | Media library: image keys, alt text, curated pools |
| `src/data/reviews.ts` | Customer reviews — **currently placeholders, see below** |
| `src/pages/` | Routes (see the page map below) |
| `src/components/` | Shared UI |
| `src/layouts/Base.astro` | Head, meta, JSON-LD graph, header/footer |
| `src/styles/global.css` | Design tokens and the shared system |
| `src/assets/img/` | 60 real Wildcat photos, optimised at build |
| `public/video/hero-film.mp4` | 14 s cinematic loop cut and graded from real job footage (`-sm` for phones) |
| `tools/contrast-audit.js` | WCAG contrast checker (see QA below) |

### Page map — 47 routes

```
/                                    Homepage
/services/                           Services hub
/services/{service}/                 3 core service pages
/services/{service}/{location}/      24 service × location pages (programmatic)
/areas/                              Service-area hub
/areas/{location}/                   8 location pages
/residential/  /commercial/          Intent pages
/reviews/  /about/  /guarantee/  /faq/  /contact/
/quote/  /thank-you/  /privacy/  /404
```

Adding a ninth town is one entry in `locations` in the fact bank — it generates
the location page, three service × location pages, nav entries, footer links,
internal links from every sibling page, sitemap entries and assistant answers.

Same for a fourth service: one entry in `services` generates eight more pages.

---

## The homepage

Structure follows Pink's: a cinematic film carries the top, the nav sits **below**
it (via the `above-header` slot in `Base.astro`), and the page stays short — five
sections, ~7,100px, against Pink's 5,900px. Depth lives on its own pages rather
than in one endless scroll.

**The hero** (`src/components/Hero.astro`) is a 230svh runway holding a sticky
100svh frame — the same construction as `CinematicHero.tsx` in the Black Sheep
build. Scroll progress (0→1) drives three things:

| Progress | What happens |
|---|---|
| 0.00 → 0.32 | Beat one fades through: *"A thousand homes."* |
| 0.26 → 0.60 | Beat two: *"Not one review below five stars."* |
| 0.55 → 0.71 | Brand block lands — H1, CTAs and the compact Ask bar — and stays |
| throughout | Film scales 1.03 → 1.08, progress bar tracks along the bottom |

It degrades to a single static screen with the brand visible under
`prefers-reduced-motion`, and with no JS at all (`.ch:not(.is-live)`).

## Ask Wildcat

The assistant (`src/components/AskWildcat.astro`) sits as a **compact utility in
the hero brand block** — deliberately small, under the CTAs, not the main event.
It takes natural language — *"I need my windows cleaned in Green Valley"*, *"how much for a two
storey house"*, *"do you serve Quail Creek"* — and returns a real answer plus the
right next step, with the quote form pre-filled from the detected service and area.

It is **not** a language model. It scores the query against
`/ask-index.json` (generated from the fact bank at build time by
`src/pages/ask-index.json.ts`). That means:

- no API key, no per-query cost, no latency, nothing to rate-limit;
- it physically cannot invent a fact — every answer already exists on the site;
- the index is fetched once on first intent and cached across all pages.

It detects whether the visitor named a **service**, a **location**, both, or
neither, and answers at the matching altitude:

| Query | Answers with |
|---|---|
| `solar panels are dusty` | Solar Panel Cleaning (service page) |
| `do you serve Quail Creek` | Green Valley (area page) |
| `window cleaning green valley` | Window Cleaning in Green Valley |
| `how often should I clean windows` | the FAQ, not a service page |
| `i want a quote` | the quote page |

To improve an answer, edit the fact bank — add words people actually type to a
FAQ's optional `terms: []` array. Do not edit answers in the component.

If you later want a real LLM behind it, keep this as the instant first response
and treat the model as a fallback for unmatched queries only — it is faster and
strictly more truthful for everything it does match.

---

## ⚠️ Before this goes live

1. **Reviews are placeholders.** `src/data/reviews.ts` contains six clearly-marked
   dummy entries so the layout is visible. No real review text was supplied for
   this build and none was invented. Paste real Google / Nextdoor / BBB reviews in
   and set `placeholder: false`.

   Anything still marked `placeholder: true` is **automatically stripped from
   production builds** — so if you ship without doing this, the review sections
   render empty rather than fake. `AggregateRating` schema is likewise only
   emitted once real reviews exist.

2. **Confirm the changed facts.** The live site currently says *500+ customers*
   and a *10-day rainproof guarantee*. This build uses **1,000+ customers** and a
   **14-day Spotless Guarantee** per the brief. Confirm which is correct — it
   appears on every page.

3. **Missing award badges.** `public/brand/` has the Angi, BBB and Thumbtack
   badges. The **AZ-19 Readers' Pick** and **Nextdoor Neighborhood Fave** badge
   files were not in the asset folder. The real award *photos* are used instead
   (stronger proof anyway). Drop the badge files in and add their paths to the
   `awards` array if you want them.

4. **Wire up the form.** `QuoteForm.astro` posts to `/thank-you/` with Netlify
   Forms attributes. On Netlify it works as-is. On any other host, point the
   `action` at your endpoint (Formspree, Basin, a Zapier catch hook, etc.).

5. **Confirm social profile URLs** in `company.social` — currently a guess, and
   they feed the `sameAs` property in the LocalBusiness schema.

6. **Legal review of `/privacy/`.** It is a plain-language draft matched to how
   the site actually behaves, not legal advice.

7. **Higgsfield had no credits.** The Higgsfield workspace returned *out of
   credits*, so no AI-generated b-roll was produced. The hero film is cut and
   graded from real Wildcat footage instead, which is the stronger option — but
   if you top up, abstract texture inserts (water sheeting on glass, macro
   droplets) would cut in well. Do **not** generate AI footage of technicians:
   presenting synthetic crews as Wildcat's would misrepresent a real business.

8. **Self-host the fonts.** Chivo and Figtree currently load from Google Fonts.
   Self-hosting removes a third-party connection from the critical path and is
   worth ~100 ms on first paint.

9. **Analytics.** Nothing is installed. Every CTA already carries a
   `data-track` attribute (`quote-hero`, `call-sticky`, `call-footer`, …) so you
   can wire GA4 / Plausible events without touching markup.

---

## Design system

Type is **Chivo** (display, 900, uppercase for section headings — the strongest
brand-consistency device on the site) over **Figtree** (body). Chivo was chosen
because its heavy, slightly squared letterforms echo the logo's athletic
lettering far better than a neutral grotesque.

Brand colours from the guidelines:

| Token | Value | Use |
|---|---|---|
| `--navy` | `#121832` | Dark sections, headings, ink |
| `--cyan` | `#36c6f4` | Accent on dark surfaces |
| `--cyan-600` | `#0a7599` | **Text-safe cyan** — 5.2:1 on white |
| `--cyan-500` | `#12a8db` | Decorative only — icons, fills |
| `--red` | `#d91e3d` | Primary CTA, and only the CTA |

> The brand cyan `#36c6f4` is only 1.9:1 on white — unusable for text. Small text
> on light backgrounds uses `--cyan-600`; the brand cyan is reserved for dark
> surfaces where it hits 8.8:1. Keep that split.

Accessibility decisions driven by the 55+ audience: 17 px base body text,
1.62 line-height, 54–64 px tap targets, no grey-on-grey micro-copy, and every
interactive element reachable by keyboard with a visible focus ring.

---

## QA

**Contrast.** `npm run dev` exposes `contrastAudit()` in the console on every page
(dev only — it is not in production builds):

```js
contrastAudit()   // expands accordions, then tables every WCAG AA failure
```

All 47 routes currently pass AA. `tools/contrast-audit.js` is the annotated
standalone version if you'd rather paste it into DevTools on the live site.

**Two CSS traps this codebase has already hit** — worth knowing before you add a
page:

- Astro scopes component styles. A selector like `.tone-navy .my-thing` written
  *inside a component* will never match a `.tone-navy` section declared in the
  page. Use `:global(.tone-navy) .my-thing`.
- A container rule like `.my-nav a { color: … }` has the same specificity as
  `.btn` and, because scoped styles are emitted after `global.css`, silently
  repaints button labels. `global.css` has a `a.btn.btn` safety net for this, but
  prefer `.my-nav a:not(.btn)`.

---

## SEO

- One JSON-LD `@graph` per page: `LocalBusiness` + `WebSite` + `BreadcrumbList`,
  plus `Service` and `FAQPage` where relevant.
- Unique title, meta description and canonical on every route.
- `sitemap-index.xml` generated at build; `/thank-you/` excluded and `noindex`.
- Service × location pages are materially different from their parent service
  page — local communities, local conditions, local scheduling, local FAQs — not
  a city-name swap. Keep it that way when you add towns.

Before adding any programmatic page, apply the brief's own quality gate: *could
this page justify existing if Google did not?* If not, merge it or leave it out.

---

## Deploying

`netlify.toml` and `vercel.json` are both included with security headers,
immutable caching for `/_astro/*`, and 301s from the old `.html` URLs.

Netlify is the path of least resistance because the quote form works with no
backend. Point the build at `npm run build`, publish `dist/`.
