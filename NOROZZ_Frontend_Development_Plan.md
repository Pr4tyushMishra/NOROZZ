# NOROZZ Website — Frontend Development Plan

**A complete React.js + Tailwind CSS implementation blueprint** — architecture, design system, page specifications, user workflows and API integration — derived from the NOROZZ Product & UX Documentation and the approved Figma design.

Version 1.0 | August 2026
Source design: Figma — "Norozz websites"
Inputs: `NOROZZ_Website_Product_Documentation.pdf` + Figma design export

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Design Reference & Selection Rationale](#2-design-reference--selection-rationale)
3. [Technology Stack & Architecture](#3-technology-stack--architecture)
4. [Design System (extracted from Figma)](#4-design-system-extracted-from-figma)
5. [Sitemap & Routing Table](#5-sitemap--routing-table)
6. [Page-by-Page Specifications](#6-page-by-page-specifications)
7. [Component Library](#7-component-library)
8. [Core User Workflows](#8-core-user-workflows)
9. [API Integration Plan](#9-api-integration-plan)
10. [SEO Implementation Plan](#10-seo-implementation-plan)
11. [Responsive Design Strategy](#11-responsive-design-strategy)
12. [Accessibility Checklist](#12-accessibility-checklist)
13. [Analytics Event Plan](#13-analytics-event-plan)
14. [Project Folder Structure](#14-project-folder-structure)
15. [Development Roadmap](#15-development-roadmap)
16. [Launch Checklist](#16-launch-checklist)

---

## 1. Executive Summary

This document translates the **NOROZZ Website Product & UX Documentation (v1.0)** and the approved **Figma design** into an actionable frontend engineering plan. NOROZZ is an on-demand home-services marketplace; the public website's job is to explain the product, build trust, and convert visitors into App downloads, registrations and verified service-partner sign-ups — while all authenticated booking, payment and live tracking stays inside the User App and Partner App.

The plan below is scoped for a **React.js + Tailwind CSS** single-page application (as recommended in Section 13 of the product documentation), consuming NOROZZ's public read-only content APIs (services, categories, cities, offers, FAQs, blogs, testimonials) and a lightweight authenticated layer for Sign In / Register / Contact submissions.

| Item | Decision |
|---|---|
| Framework | React 18 (Vite) + React Router v6 |
| Styling | Tailwind CSS 3, design tokens matched to the Figma system |
| Reference design | "Norozz websites" Figma file — teal/navy "Quality home services, on demand" direction (see Section 2) |
| Scope | 13 public routes + auth screens, fully responsive, SEO- and accessibility-compliant |
| Out of scope | Cart, checkout, payment, live GPS tracking — these remain inside the User App per the documentation's core principle |

---

## 2. Design Reference & Selection Rationale

*Why the teal/navy "Quality home services, on demand" frame set was chosen as the build reference.*

The shared Figma file contains **three distinct visual directions** for the NOROZZ marketplace. Each was reviewed against the product documentation's core principle: *"The public website is the discovery, trust and conversion layer… do not duplicate the full authenticated booking experience on the public website."* The comparison below is the basis for selecting Direction C as the frontend build reference.

| Direction | Look & locale | Pages present | Booking depth on web | Verdict |
|---|---|---|---|---|
| **A — "Verified Home Pros"** | Light navy/white, USD, San Francisco | Home, Find Services, Service Detail, About/Trust | Full "Confirm Booking Details" + payment page on-site | Good page coverage, but duplicates checkout — conflicts with documentation |
| **B — "Expert Home Services"** | Dark navy header, INR, Delhi NCR | Home, Category, Cart, Address/Slot, Payment, Live Tracking | Full cart → checkout → payment → live GPS tracking on-site | Effectively rebuilds the User App on the web — explicitly out of scope |
| **C — "Quality home services, on demand"** | Teal + navy, premium/neutral locale | Home, Sign In, Register, Services (filterable), About, How It Works, Contact | "Book Now" CTAs hand off to app/auth — no cart or payment UI | **Selected reference** — matches the documented sitemap, respects the web/app boundary, one consistent design system across every screen |

> **Design decision.** Direction C is used as the single source of truth for color, type, spacing and component style throughout this plan. Pages required by the documentation but not present in the Figma export (Service Detail, Cities, Offers, Blog, For Partners, Help Center, Download App, Legal) are specified in Section 6 by extending the same design system so the finished site reads as one product.

**What Direction C already covers, mapped to the documentation:**

- **Home** — hero + search, service categories grid, "Why Norozz" trust pillars, guarantee banner, testimonials, App download CTA, partner-recruitment CTA, footer — a near 1:1 match to Doc Section 5.
- **Browse All Services** — location field, category/price filters, service cards with rating, duration and starting price — matches Doc Section 3 ("Services") and Section 6 (category → sub-category → detail).
- **About** — Our Story, Vision/Mission, platform stats, Leadership team, and a **"Trust & Safety Commitment"** block — matches Doc's "About" and "Safety & Trust" pages in one screen.
- **How It Works** — 4-step process, customer guarantees, FAQ accordion — matches Doc Section 5 ("How NOROZZ Works") and the Home-page FAQ block.
- **Contact** — inquiry form, hotline/email/live-chat cards, HQ map — matches Doc's "Contact" page.
- **Sign In / Register** — not explicitly listed in the documentation's page table, but required to gate "Book Now" before app hand-off; styled consistently with the rest of the system.

---

## 3. Technology Stack & Architecture

| Layer | Choice | Why |
|---|---|---|
| Build tool | Vite | Fast dev server + optimized production build; documentation only mandates React.js, Vite is the standard companion |
| UI framework | React 18 (function components + hooks) | Matches Doc Section 13 technical recommendation |
| Routing | React Router v6 | Nested routes for `/services/:category/:service`, `/cities/:city`, `/blog/:slug` |
| Styling | Tailwind CSS 3 + `tailwind.config` tokens | Matches Doc Section 13; utility classes map 1:1 to the Figma spacing/type scale |
| Data fetching | TanStack Query (React Query) | Caches public content API responses (services, cities, offers, FAQs, blogs) client-side; simplifies loading/error states |
| Forms & validation | React Hook Form + Zod | Contact form, Sign In / Register forms, service-request search |
| Icons | lucide-react | Line-icon style matches the Figma icon set (search, shield, clock, star, map-pin) |
| Animation | Framer Motion (light use) | Section fade/slide-in, FAQ accordion expand, mobile menu transitions |
| Maps | Google Maps Embed / Mapbox GL | Contact page HQ map; Cities explorer map |
| SEO | React Helmet Async + prerendering (vite-plugin-ssg or react-snap) | Client-rendered React alone under-serves SEO; Doc Section 12 requires unique meta/canonical + sitemap per indexable page |
| Testing | Vitest + React Testing Library | Component and integration tests |
| Linting/format | ESLint + Prettier + Husky pre-commit | Consistent code style across contributors |
| Analytics | GA4 / Segment via a thin analytics wrapper | Implements the 11 events in Doc Section 17 |

> **Architecture note.** The documentation calls for a fast, SEO-indexable marketing site. A plain client-side-only React SPA is weak on SEO (Doc Section 12 explicitly requires per-page meta/canonical + structured data). Recommend **prerendering all public content routes at build time** (SSG-style) while keeping Sign In / Register / the account-gated "Book Now" hand-off as pure client-side React. This keeps the stack 100% React + Tailwind as specified, with no separate backend framework required for rendering.

---

## 4. Design System (extracted from Figma)

### 4.1 Color Tokens

| Token | Hex | Usage |
|---|---|---|
| primary | `#0D9488` | Buttons, links, active nav, icon accents, price highlights |
| primary-dark | `#0B7A70` | Button hover/active state |
| primary-tint | `#ECFDF5` | Soft accent section backgrounds (App CTA band, guarantee callouts) |
| navy (ink) | `#0F172A` | Footer background, dark section backgrounds, headline text |
| slate (body text) | `#334155` | Paragraph copy |
| muted | `#64748B` | Secondary/meta text (ratings, timestamps, helper text) |
| surface | `#FFFFFF` | Card and page background |
| surface-soft | `#F8FAFC` / `#F1F5F9` | Alternating section backgrounds |
| border | `#E2E8F0` | Card borders, input borders, table rules |
| success | `#16A34A` | Guarantee checkmarks, "verified" badges |

### 4.2 Typography

The Figma type system uses a geometric/humanist sans similar to **Manrope** for headings and **Inter** for body copy — both are on the documentation's approved list (Section 14: Manrope/Satoshi/Inter). Recommended pairing: **Manrope (600/700)** for all headings, **Inter (400/500/600)** for body, labels and buttons.

| Role | Weight | Size / Line-height | Example |
|---|---|---|---|
| H1 / Page hero | Manrope Bold | 34–40px / 1.15 | "Quality home services, on demand" |
| H2 / Section title | Manrope Bold | 26–28px / 1.2 | "Why Norozz?", "Browse All Services" |
| H3 / Card title | Manrope SemiBold | 16–18px / 1.3 | Service card names, step titles |
| Body | Inter Regular | 15–16px / 1.6 | Paragraph copy |
| Small / meta | Inter Regular | 13px / 1.5 | Ratings, review counts, timestamps |
| Button label | Inter SemiBold | 14–15px / 1 | All CTA buttons |

### 4.3 Spacing, Radius & Elevation

- **Section rhythm:** `py-20` / `py-24` desktop, `py-12` mobile; container max-width 1200–1280px, centered with `px-6` gutters.
- **Card radius:** `rounded-2xl` (16px) for content cards; `rounded-full` for pills, badges and primary buttons.
- **Elevation:** `shadow-sm` on resting cards, `shadow-md` on hover; no heavy drop shadows — the system favors flat color blocks (navy/teal/mint) over shadow depth.
- **Grid:** 4-col category grid desktop / 2-col tablet / 1-col mobile; 3-col service/testimonial/team cards desktop / 1-col mobile.

### 4.4 Core UI Components (visual spec)

| Component | Visual spec | Used on |
|---|---|---|
| Primary button | Solid teal, rounded-full, white text, subtle hover-darken | Search, Book Now, Sign In, Submit Inquiry |
| Secondary/outline button | Transparent, 1px border, dark text | App-store badges, "Read Guarantee Policy" |
| Icon tile | 48px rounded-xl mint background, teal line icon centered | Service category cards, "Why Norozz" pillars |
| Stat counter band | Full-width teal band, large white numerals + small caption | Home "50+ / 25,000+ / 10M+", About stats |
| Testimonial card | White card, rounded-2xl, quote + avatar initial + name/city | Home, About |
| FAQ accordion row | White card, chevron toggle, expands to reveal answer | How It Works, Home |
| Dark footer | Full-width navy, 4-column link groups, logo + blurb, app badges | Every page |

---

## 5. Sitemap & Routing Table

*Documentation sitemap (Sec. 18) reconciled with the Figma page set.*

| Route | Page | Source | Access |
|---|---|---|---|
| `/` | Home | Figma | Public |
| `/services` | Browse / Find Services (category + filters) | Figma | Public |
| `/services/:category` | Category listing | Extended from Figma pattern | Public |
| `/services/:category/:service` | Service Detail | Doc Sec. 7 (spec'd, no Figma frame) | Public |
| `/how-it-works` | How It Works | Figma | Public |
| `/for-partners` | Partner acquisition landing | Extended (reuses Home's partner-CTA + About patterns) | Public |
| `/cities` | City availability explorer | Extended (reuses Services filter + map pattern) | Public |
| `/cities/:city` | City landing page | Extended | Public |
| `/offers` | Promotions / referral | Extended (reuses service-card grid) | Public |
| `/about` | About / Company story / Trust | Figma | Public |
| `/safety` | Safety & Trust (deep-link into About's trust block, or standalone if CMS needs it split) | Figma (shared section) | Public |
| `/blog` | Blog index | Extended (card grid pattern) | Public |
| `/blog/:slug` | Blog article | Extended (rich-text template) | Public |
| `/help` | Help Center / FAQ | Extended from How It Works FAQ pattern | Public |
| `/contact` | Contact & Support | Figma | Public |
| `/download` | Download App | Extended (reuses Home App-CTA band, expanded) | Public |
| `/privacy`, `/terms`, `/refund-policy`, `/cookie-policy` | Legal pages | Extended (simple prose template) | Public |
| `/sign-in` | Sign In | Figma | Public (auth) |
| `/register` | Create Account | Figma | Public (auth) |
| `/404` | Not found | Extended | Public |

> **Routing note.** All routes are code-split with `React.lazy` + `Suspense`. Content-only routes (services, cities, offers, blog, FAQs, testimonials) are prerendered at build time from the public API for SEO; `/sign-in`, `/register` and any post-login state are client-rendered only.

---

## 6. Page-by-Page Specifications

### 6.1 Home — `/`

**Purpose:** Explain NOROZZ in seconds and route the visitor to a category, the app, or partner sign-up.

**Sections / components (top to bottom):**
- Sticky Navbar — logo, Home / Services / About / How It Works / Contact, Sign In, Register (primary button)
- Hero — headline, subcopy, service search bar, background image of a verified pro
- "What do you need help with?" — 8-tile service category grid (icon + label, links to `/services?category=`)
- "Why Norozz?" — 3 trust pillars (Transparent Pricing, Verified Professionals, Hassle-free Booking)
- Guarantee banner — image + "100% Quality Assured" copy + "Read Guarantee Policy" link
- Testimonials — 3-card carousel/grid, "Loved by homes across &lt;region&gt;"
- App download band (mint background) — phone mockup + Play Store / App Store badges
- Partner recruitment band (navy) — "Are you a service professional? Join us" + CTA to `/for-partners`
- Footer — services, company, download links, contact, social

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Explore Services / Download App (Doc Sec. 3 goals) | `GET /public/services` (featured), `GET /public/testimonials`, `GET /public/cities` (for locale) | Single canonical `/`, Organization + WebSite structured data, LCP-optimized hero image |

### 6.2 Browse / Find Services — `/services`

**Purpose:** Let visitors self-serve discovery across the full category tree (Doc Sec. 6).

**Sections / components:**
- Page header — title + "Transparent pricing. Trusted professionals. Hassle-free booking."
- Left filter sidebar — location field, category checkboxes, price-range radio group (sticky on desktop, drawer on mobile)
- Service card grid — image, name, rating + review count, duration, "Starts at $/₹…", "Book Now"
- Empty / loading / error states for the grid
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Book Now → auth-gated hand-off (see Workflow 8.1) | `GET /public/categories`, `GET /public/services?category&city&price_range&sort` | Canonical `/services`; `/services/:category` gets its own canonical + breadcrumb schema |

### 6.3 Service Detail — `/services/:category/:service`

**Purpose:** Convert an interested visitor into an app booking (Doc Sec. 7 — not present in Figma export; specified here using the same card, badge and CTA components as the Browse Services page for visual consistency).

**Sections / components:**
- Breadcrumb — Services / Category / Service name
- Gallery / hero image + name + rating + review count
- Pricing tiers card (sticky on desktop) — tier name, price, estimated duration, "Proceed to Booking"
- "What's included" accordion — itemized inclusions/exclusions per Doc Sec. 7
- Partner qualification blurb + free-cancellation note
- Reviews section — "What your neighbors are saying" card list
- Related services strip
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Proceed to Booking → "Book in NOROZZ App" deep link, with "Download App" fallback (Doc Sec. 7 & 8) | `GET /public/services/:id`, `GET /public/services/:id/reviews` | Service + AggregateRating + Breadcrumb structured data; canonical per service slug |

### 6.4 How It Works — `/how-it-works`

**Purpose:** Walk a first-time visitor through the booking journey and pre-empt objections (Doc Sec. 5 & 9).

**Sections / components:**
- Header band — "Booking a professional was never this simple"
- 4-step process cards — Search a service, Select professional, Book a custom slot, Pay securely
- "Our Customer Guarantees" — Zero Surprise Fees, Superb Security Cover, Always Checked Experts
- FAQ accordion — booking, cancellation, payment, safety (Doc Sec. "FAQ")
- App download band + Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Get Started → `/download` or `/register` | `GET /public/faqs?topic=booking` | FAQPage structured data for the accordion |

### 6.5 For Partners — `/for-partners`

**Purpose:** Recruit qualified service partners (Doc Sec. 2 & 9 — not a distinct Figma frame; built from Home's partner band + About's stats/leadership pattern to stay on-system).

**Sections / components:**
- Hero — partner-facing headline + "Become a Partner" CTA
- Benefits grid — earnings, flexible schedule, steady demand, support
- "How it works for partners" 4-step strip (reuses How-It-Works step-card component)
- Eligibility & required documents checklist
- Earnings explainer band
- Partner FAQ accordion
- Become Partner CTA → Partner App registration deep link
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Become Partner (Doc Sec. 9 journey) | `GET /public/partner-faqs` | Distinct meta title/description targeting "become a NOROZZ partner" |

### 6.6 Cities — `/cities` and `/cities/:city`

**Purpose:** Show real availability by city and support local SEO (Doc Sec. 3 & 12 — extended using the Services filter and map components).

**Sections / components:**
- Cities index — searchable grid of launch-city cards (reuses service-card shell with a city image)
- City page — hero with city name, availability summary, embedded map, top services in that city (reuses service card grid), local testimonials
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Explore City → filters `/services` by city | `GET /public/cities`, `GET /public/cities/:slug`, `GET /public/services?city=` | Unique title/meta per city; LocalBusiness/City structured data where valid; only real, live cities are indexed |

### 6.7 Offers — `/offers`

**Purpose:** Surface CMS-driven promotions and referral content (Doc Sec. 5 "Offers & Referral").

**Sections / components:**
- Header — "Current Offers"
- Offer card grid — badge (e.g. "Flat ₹500 Cashback"), description, terms link, "View Offer"
- Referral program explainer block
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| View Offers → service pre-filtered by promo | `GET /public/offers` | noindex on personalized/short-lived promo variants; index the evergreen `/offers` page |

### 6.8 Blog — `/blog` and `/blog/:slug`

**Purpose:** SEO/content layer (Doc Sec. 3 & 10).

**Sections / components:**
- Index — featured post + card grid (image, title, excerpt, author, read time), tag filter
- Article — hero image, title, author/date, rich-text body, related-article strip, CTA band
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Read Article | `GET /public/blogs?tag&page`, `GET /public/blogs/:slug` | Article structured data, canonical per slug, internal links to related services/cities per Doc Sec. 12 |

### 6.9 Help Center — `/help`

**Purpose:** FAQs/support self-serve (Doc Sec. 3; extends the How-It-Works FAQ accordion into a full searchable center).

**Sections / components:**
- Search-the-help-center input
- Topic categories (Booking, Payments, Cancellations, Safety, Account)
- Accordion list per topic, "Contact Support" CTA if unresolved
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Get Help → filtered FAQ or `/contact` | `GET /public/faqs?topic` | FAQPage structured data |

### 6.10 Contact — `/contact`

**Purpose:** Direct contact/support channel (Doc Sec. 3).

**Sections / components:**
- Header — "We are here to help"
- Inquiry form — name, email, phone, message, "Submit Inquiry" (React Hook Form + Zod, spam protection)
- Contact info cards — support hotline, email desk, in-app live chat
- Embedded HQ map
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Submit Inquiry → `POST /support/inquiries` | `POST /support/inquiries`; `GET /public/office-location` | ContactPage structured data; form has honeypot + rate limiting |

### 6.11 Download App — `/download`

**Purpose:** Dedicated app-acquisition landing (Doc Sec. 3; extends Home's App-CTA band into a full page).

**Sections / components:**
- Hero — phone mockup, QR code, App Store / Play Store badges
- Feature highlights — live tracking, in-app chat, saved addresses, order history
- "Why the app" comparison strip vs. browsing on web
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Download App | None (static + QR code generation) | og:image tuned for app-share links |

### 6.12 Sign In / Create Account — `/sign-in`, `/register`

**Purpose:** Auth gate before "Book Now" hands off to the authenticated flow.

**Sections / components:**
- Split layout — lifestyle image + testimonial quote (left), form card (right)
- Sign In — email, password, remember me, forgot password, link to Register
- Register — full name, email, phone, password, terms checkbox, link to Sign In
- Footer (light)

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| Sign In / Create Account | `POST /auth/login`, `POST /auth/register` (authenticated API, separate from public content API per Doc Sec. 11) | noindex, nofollow (auth pages are excluded from the sitemap per Doc Sec. 12) |

### 6.13 Legal pages — `/privacy`, `/terms`, `/refund-policy`, `/cookie-policy`

**Purpose:** Compliance content (Doc Sec. 3 & sitemap).

**Sections / components:**
- Simple prose template — title, last-updated date, table of contents anchor links, sectioned rich text
- Footer

| Primary CTA | Data / API needs | SEO |
|---|---|---|
| n/a | `GET /public/legal/:slug` (CMS-managed) | Indexable, unique titles; excluded from primary nav, linked from footer only |

### 6.14 404 / Error page

Friendly not-found state reusing the Navbar/Footer shell, a search bar to recover into `/services`, and links to Home and Help Center.

---

## 7. Component Library

*Shared React components and their key props.*

| Component | Key props | Notes |
|---|---|---|
| Navbar | `logoHref, links[], isAuthenticated, city` | Sticky top nav; collapses to a slide-in drawer under 768px |
| Footer | `serviceLinks[], companyLinks[], socialLinks[]` | Rendered once in the root layout |
| Hero | `title, subtitle, backgroundImage, searchPlaceholder, onSearch` | Reused (shorter variant) on Services, Cities, Offers |
| SearchBar | `placeholder, value, onChange, onSubmit` | Home hero + Services filter sidebar |
| CategoryTile | `icon, label, href` | Home "What do you need help with?" grid |
| ServiceCard | `image, title, rating, reviewCount, duration, priceFrom, href, onBook` | Services grid, Cities, Offers, related services |
| FilterSidebar | `categories[], priceRanges[], location, onChange` | Services listing |
| PricingTierCard | `tiers[], selectedTier, onSelect, onProceed` | Service Detail |
| TrustPillar | `icon, title, description` | Home "Why Norozz", About |
| StatBand | `stats: {value, label}[]` | Home, About |
| TestimonialCard | `quote, name, location, avatarInitial` | Home, About, Sign In/Register side panel |
| TeamMemberCard | `photo, name, role` | About "Leadership Behind the Mission" |
| StepCard | `index, icon, title, description` | How It Works, For Partners |
| FAQAccordion | `items: {question, answer}[]` | How It Works, Help Center, Home |
| GuaranteeBanner | `image, badgeText, heading, body, ctaLabel, ctaHref` | Home, Service Detail |
| AppDownloadBand | `heading, body, qrImage, storeLinks[]` | Home, Download App, How It Works |
| PartnerCTA | `heading, body, ctaLabel, ctaHref` | Home, For Partners |
| ContactInfoCard | `icon, label, value, description` | Contact |
| MapEmbed | `lat, lng, zoom, markerLabel` | Contact, Cities |
| AuthFormCard | `mode: 'sign-in' | 'register', onSubmit` | Sign In, Register |
| Button | `variant: primary|secondary|dark, size, href|onClick` | Global |
| Badge | `label, tone: teal|mint|navy` | "Best Seller", "Trending", "Verified" tags |

---

## 8. Core User Workflows

### 8.1 Website-to-App Customer Journey (Doc Sec. 8)

```
Home → Service Category → Service Detail → Sign In / Register → Download / Open App → Booking in App
```

The website never renders cart, payment or live-tracking UI. "Book Now" / "Proceed to Booking" always resolves to: (a) if the user has the app and is on mobile, an app deep link; (b) otherwise, an auth-gated hand-off screen prompting Sign In/Register, then a QR/store-badge redirect to complete the booking in the User App.

### 8.2 Search & Filter Services

```
Enter search / category tap → Services list filtered → Refine (city, price, sub-category) → Open Service Detail → Book Now hand-off
```

### 8.3 Partner Acquisition Journey (Doc Sec. 9)

```
For Partners page → Benefits & eligibility → Documents / KYC info → Earnings explainer → Become Partner → Partner App registration
```

### 8.4 Authentication Flow

```
Book Now / Register CTA → Sign In or Create Account → Form validation → Auth API call → Redirect to intended action
```

### 8.5 Contact / Support Inquiry

```
Visitor has a question → /contact form or Help Center search → Submit Inquiry → Confirmation state → Support team follow-up (off-site)
```

---

## 9. API Integration Plan

*Public read-only content API (Doc Sec. 11) + minimal authenticated layer.*

| Endpoint | Purpose | Consumed on |
|---|---|---|
| `GET /api/v1/public/services` | Services grid, Home featured services, related services | Home, Services, Service Detail |
| `GET /api/v1/public/services/:id` | Single service detail incl. pricing tiers, inclusions, reviews | Service Detail |
| `GET /api/v1/public/categories` | Category tree for filters and Home tiles | Home, Services |
| `GET /api/v1/public/cities` | Launch-city list and availability | Home locale switcher, Cities |
| `GET /api/v1/public/offers` | Promotions / referral content | Offers, Home banners |
| `GET /api/v1/public/faqs` | FAQ content by topic | How It Works, Help Center, Home |
| `GET /api/v1/public/blogs` | Blog index + article content | Blog |
| `GET /api/v1/public/testimonials` | Reviews/testimonials by locale | Home, About, Auth side-panel |
| `POST /auth/register`, `POST /auth/login` | Account creation / session for the app hand-off | Register, Sign In (authenticated API — kept separate from the public API per Doc Sec. 11) |
| `POST /support/inquiries` | Contact form submissions | Contact |

> **Caching rule.** Public content endpoints are cached with TanStack Query (staleTime 5–15 min depending on volatility) and prerendered at build time for SEO. Authentication and inquiry submissions always hit the live API — never cached, never prerendered.

---

## 10. SEO Implementation Plan

*Mapping Doc Section 12 to concrete React tasks.*

| Requirement | React implementation |
|---|---|
| Unique title / meta / canonical | React Helmet Async per route, sourced from CMS meta fields with sane fallbacks |
| Structured data | JSON-LD: Organization + WebSite (Home), Service + Breadcrumb (Service Detail), FAQPage (FAQ blocks), Article (Blog), LocalBusiness/City where valid (Cities) |
| XML sitemap | Generated at build time from the public API (services, cities, blogs) — canonical public URLs only, auth/dashboard routes excluded |
| robots.txt | Disallow `/sign-in`, `/register`, and any account/dashboard paths; allow all public content routes |
| Performance | Prerendered HTML for content routes, image lazy-loading + responsive srcset, code-splitting per route, Core Web Vitals budget (LCP < 2.5s) |
| Internal linking | Related services on Service Detail, related cities on City pages, related posts on Blog, cross-links from FAQ answers into relevant service pages |
| Indexing hygiene | noindex on `/sign-in`, `/register`, offer variants with short-lived query params, and any preview/staging deployments |

---

## 11. Responsive Design Strategy

*Doc Section 15 breakpoints mapped to Tailwind config.*

| Tier | Range | Tailwind breakpoint | Behavior |
|---|---|---|---|
| Mobile | 320–767px | `sm: 640px` (Tailwind default) | Single column; sticky bottom search on Home; filter sidebar becomes a slide-up drawer; nav collapses to a hamburger drawer |
| Tablet | 768–1023px | `md: 768px` | 2-column category/service grids; filter sidebar becomes a collapsible top bar |
| Desktop | 1024–1439px | `lg: 1024px` | Full nav, 3–4 column grids, sticky filter sidebar and sticky pricing card |
| Large desktop | 1440px+ | `xl: 1280px` / `2xl: 1536px`, content `max-w-[1280px]` | Container stays capped and centered; never stretches text edge-to-edge (Doc Sec. 15) |

---

## 12. Accessibility Checklist

*Doc Section 16, implemented as engineering acceptance criteria.*

- Color contrast ≥ 4.5:1 for body text against both white and navy backgrounds — audit the teal-on-white CTA text and mint-on-white badges specifically.
- Full keyboard navigation: nav menu, filter sidebar, FAQ accordion and forms all operable via Tab / Enter / Space / Escape.
- Visible focus states (focus-visible ring) on every interactive element — do not rely on default browser outline alone.
- Alt text on every meaningful image (hero photos, team photos, category icons treated as decorative via `aria-hidden` where purely ornamental).
- Semantic heading order (single h1 per page, no skipped levels) and landmark regions (header/nav/main/footer).
- Accessible forms: associated `<label>` elements, inline error text linked via `aria-describedby`, clear validation messaging (Sign In, Register, Contact).
- Clear, unambiguous cancellation/refund language on Legal pages and the Service Detail cancellation note.
- Never state or imply unsupported safety/verification claims in copy or badges (Doc Sec. 16) — all "Verified" / "Guaranteed" badges must map to an actual documented policy.

---

## 13. Analytics Event Plan

*Doc Section 17 events mapped to trigger points.*

| Event | Trigger | Fired from |
|---|---|---|
| `page_view` | Every route change | Router-level listener |
| `service_category_view` | Category tile tap / category route load | Home, Services |
| `service_view` | Service Detail route load | Service Detail |
| `city_selected` | City chosen in locale switcher or Cities page | Navbar, Cities |
| `app_download_click` | Any App Store / Play Store badge click | Home, How It Works, Download App |
| `partner_signup_click` | "Become Partner" click | Home, For Partners |
| `offer_view` | Offer card impression/click | Offers, Home |
| `faq_open` | FAQ accordion row expanded | How It Works, Help Center, Home |
| `contact_submit` | Contact form successfully submitted | Contact |
| `support_click` | Hotline / email / live-chat card click | Contact, Help Center |
| `store_badge_click` | Distinct from `app_download_click` if store attribution differs | Footer, Download App |

---

## 14. Project Folder Structure

```
norozz-website/
├─ public/
│  ├─ robots.txt
│  └─ sitemap.xml            (generated at build time)
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx                 (router + layout shell)
│  ├─ routes/
│  │  ├─ Home.jsx
│  │  ├─ Services/            (index, category, detail)
│  │  ├─ HowItWorks.jsx
│  │  ├─ ForPartners.jsx
│  │  ├─ Cities/
│  │  ├─ Offers.jsx
│  │  ├─ About.jsx
│  │  ├─ Blog/
│  │  ├─ Help.jsx
│  │  ├─ Contact.jsx
│  │  ├─ Download.jsx
│  │  ├─ Legal/
│  │  └─ Auth/                (SignIn.jsx, Register.jsx)
│  ├─ components/
│  │  ├─ layout/              (Navbar, Footer, Container)
│  │  ├─ ui/                  (Button, Badge, Input, Card, Accordion)
│  │  └─ sections/             (Hero, TrustPillars, StatBand, GuaranteeBanner, ...)
│  ├─ hooks/                  (useServices, useCities, useFaqs, ...)
│  ├─ lib/
│  │  ├─ apiClient.js
│  │  ├─ analytics.js
│  │  └─ seo.js
│  ├─ styles/
│  │  └─ index.css            (Tailwind base/components/utilities)
│  └─ assets/
├─ tailwind.config.js
├─ vite.config.js
└─ package.json
```

---

## 15. Development Roadmap

| Phase | Duration | Deliverables |
|---|---|---|
| Phase 0 — Setup | 0.5 wk | Vite + Tailwind + ESLint/Prettier scaffold, design tokens in `tailwind.config`, CI pipeline, component library skeleton (Button, Badge, Card, Input, Accordion) |
| Phase 1 — Core marketing pages | 1.5 wk | Home, Navbar, Footer, About, How It Works — pixel-matched to the Figma reference |
| Phase 2 — Services & discovery | 1.5 wk | Services listing + filters, Service Detail template, Cities index/detail, Offers |
| Phase 3 — Auth, Contact, Partners | 1 wk | Sign In / Register, Contact form + API, For Partners, Download App, Help Center |
| Phase 4 — Content & SEO | 1 wk | Blog index/article, Legal pages, sitemap/robots generation, structured data, meta audit |
| Phase 5 — QA, a11y, performance, launch | 1 wk | Accessibility pass, analytics QA, Core Web Vitals tuning, cross-device QA, launch checklist sign-off |

Total estimate: **~6.5 weeks** for a single frontend engineer; parallelizable to ~4 weeks with two engineers split across Phases 1–2 and 3–4.

---

## 16. Launch Checklist

*Doc Section 19, carried through as the frontend sign-off gate.*

- [ ] All pages have final CMS copy and are responsive across the four breakpoints.
- [ ] All CTAs resolve to real destinations (no placeholder hrefs) — including app deep links and store badges.
- [ ] Real App Store / Play Store links are configured.
- [ ] All forms (Contact, Sign In, Register) have validation and spam protection.
- [ ] Legal pages (privacy, terms, refund, cookie policy) are live and linked from the footer.
- [ ] Sitemap.xml and robots.txt are generated, verified, and submitted to Search Console.
- [ ] Analytics events from Section 13 fire correctly in a staging QA pass.
- [ ] 404 and error states exist and are styled on-brand.
- [ ] Mobile performance tested (Core Web Vitals) on representative mid-tier devices.
- [ ] SEO audit complete: unique titles/meta, canonical tags, structured data validated.
- [ ] Accessibility audit complete against the Section 12 checklist.
- [ ] Production secrets and environment variables are secured and not present in the client bundle.

---

*— End of document —*
