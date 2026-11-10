# PRD: Fatemeh Yafteh Portfolio

| | |
|---|---|
| **Version** | 2.0 (replaces the draft PRD) |
| **Date** | 2026-11-09 |
| **Owner** | Fatemeh Yafteh |
| **Built on** | The code review of this repo and its 17 findings, referred to below as "R#" |

The live site could not be checked, because no URL has been shared. There is also no traffic data. Anything that depends on those is marked **[TBD]**.

## 1. Overview

**Name:** Fatemeh Yafteh Portfolio.

**Goal:** help Fatemeh get a remote front-end developer job (in Iran or abroad) and attract freelance clients.

**Stack (checked in the code):**
- Next.js 16.0.1 (App Router) and React 19.2
- JavaScript, not TypeScript (`jsconfig.json`; `typescript` is installed but unused)
- Tailwind CSS 4
- `react-icons`
- Static pages with no database, no API routes and no environment variables

**What exists today:** 5 routes: Home, Projects, a project page (`/projects/[slug]`, 2 projects: Inventory Manager and Portfolio Website), About and Contact. There is a nav bar with a mobile menu, a mouse-glow effect on Home, and three contact links (email, LinkedIn, GitHub).

## 2. Problem

A hiring manager or client opens the site, and within about a minute decides whether to contact Fatemeh. Today they see text-only project cards with no screenshots and no live demos. There is no CV, no clear statement of availability, and no preview when the link is shared. The framework version has a known critical vulnerability. The site is clean, but it does not yet prove skill.

## 3. Target users

| User | What they need | What they do |
|---|---|---|
| **Recruiter (non-technical)** | Role, level, location/time zone, availability, CV, easy contact | Scans for 30-60 seconds, downloads CV, emails |
| **Technical interviewer** | Real projects, code quality, stack depth | Opens live demos and GitHub repos |
| **Freelance client** | Proof of delivered work, what Fatemeh can build, how to hire and how fast she replies | Reads one or two projects, sends a brief |

## 4. Pages and features

### MVP (must have)
1. **Home** (exists): a clear value line, availability line, two calls to action.
2. **Projects list** (exists): one wide card per project (Inventory Manager first, then Portfolio Website) with its summary, tech tags and links.
3. **Project detail** (exists): the full case study.
4. **About** (exists, too generic): level, location, time zone, availability, photo, CV link.
5. **Contact** (exists): email, LinkedIn, GitHub, plus CV download.
6. **CV download** (new): a PDF.
7. **404 and error pages** (new).
8. **SEO and sharing** (new): Open Graph, sitemap, robots, canonical URLs.
9. **Security and accessibility fixes from the review** (R1, R2, R5, R8).
10. **Privacy-friendly analytics** (new).

### Later (nice to have)
- A Skills section grouped by area.
- A Persian (RTL) version, if the market needs it.
- Testimonials or client feedback.
- A short blog or write-ups.
- JSON-LD `Person` data.
- A light/dark theme toggle.
- TypeScript conversion.

## 5. Functional requirements and acceptance criteria

### 5.1 Home
- Shows name, role (front-end developer), a one-line value proposition, and an availability line: "Based in Tehran, Iran (UTC+3:30). Open to remote and on-site or hybrid full-time roles, and to freelance projects." (done)
- Two buttons: View Projects, Contact Me. Both are the same size (done in earlier commits, so keep it).
- **Acceptance:** all text is readable on a 360px-wide phone without horizontal scroll; both buttons are reachable by keyboard with a visible focus ring; the page has exactly one `<h1>`.
- The mouse-glow effect must not slow interaction (R4): no React state update per `mousemove`; it is off on touch devices and when `prefers-reduced-motion` is set.

### 5.2 Projects list
- Each card shows: title, one-sentence summary, tech tags, and a View Project button. It also shows a Live Demo link and, under it, a demo login (email and password) so visitors can sign in. Each card also shows one small thumbnail (the first screenshot, 16:10, cropped from the top).
- **Acceptance:**
  - Cards render for all projects in `src/data/projects.js`.
  - Cards are shown one per row, centred, so one or two projects look intentional and more can be added later.
  - A card with no image shows a neutral placeholder, not a broken icon.
  - Each card is reachable and activatable by keyboard.

### 5.3 Project detail (`/projects/[slug]`)
- Sections: The problem, What I built, Challenges, What I learned, Tech stack, Screenshots, Live demo, GitHub, and Back to projects. Challenges and What I learned are optional; the Portfolio Website page has neither. There is no separate "role" section.
- Screenshots: a gallery with equal 16:10 thumbnails (1, 2 or 3 columns by screen width) that open in a light lightbox built on the native `<dialog>` element (no library). Only the first image loads eagerly.
- Missing optional data (for example no demo) hides that button, as the code already does for `github`.
- **Acceptance:**
  - Every project has all required fields (see section 6).
  - Unknown slugs show the 404 page.
  - Page `<title>` and description are unique per project.
  - Links to GitHub and the demo open in a new tab with `rel="noopener noreferrer"`.

### 5.4 About
- Who Fatemeh is, then a short block: Location (Tehran, Iran, UTC+3:30), Open to (full-time remote, full-time on-site or hybrid in Tehran, freelance or contract) and Languages (Persian native, English intermediate). Includes the CV buttons. Done.
- Still open: a photo and a stated level (junior, mid), both **[TBD: content from Fatemeh]**.
- **Acceptance:** states availability and target roles in the first screen; includes a CV link; contains no placeholder text.

### 5.5 Contact
- Email, LinkedIn and GitHub cards (exist), plus Download CV.
- `mailto:` opens in the same tab; web links open in a new tab (R5).
- Add one sentence on what to include in a message and the typical reply time **[TBD]**.
- **Acceptance:** the email link opens a draft in a mail client; all three external links work; the layout is a single column on tablet and below (already done).

### 5.6 CV download
- A PDF file served from `/public`, linked from Nav or Home and Contact.
- **Acceptance:** the link downloads a current, one-to-two-page PDF; the file name is `Fatemeh-Yafteh-CV.pdf`.

### 5.7 404 and error pages
- `not-found.jsx` and `error.jsx` with a short message and links to Home and Projects.
- **Acceptance:** visiting `/anything-wrong` shows the custom page with HTTP status 404; an unexpected render error shows the error page with a retry button instead of a blank screen.

### 5.8 SEO and sharing
- `metadataBase`, Open Graph and Twitter tags, a generated `opengraph-image`, `robots.js`, `sitemap.js` including all project slugs, and canonical URLs (R10).
- **Acceptance:** pasting the URL into LinkedIn, WhatsApp and X shows a title, description and image; `/sitemap.xml` lists all pages; Lighthouse SEO score is 100 on mobile.

### 5.9 Security (from review)
- Upgrade Next.js and `eslint-config-next`; zero high or critical findings in `npm audit --omit=dev` (R1).
- Security headers in `next.config.mjs` (R8), and a CSP in report-only mode first.
- **Acceptance:** `npm audit --omit=dev` is clean; a header check (securityheaders.com) scores A or better **[needs the live URL]**.

### 5.10 Accessibility
- Visible `focus-visible` styles everywhere (R2). Mobile menu either a simple disclosure or a proper dialog with focus handling (R3). Skip-to-content link. Contrast of AA or better.
- **Acceptance:** the whole site can be used with the keyboard only; Lighthouse Accessibility is at least 95; Escape closes the mobile menu and focus returns to the button.

### 5.11 Analytics
- Privacy-friendly (Vercel Analytics or Plausible), no cookie banner. **Decision (Fatemeh): no custom analytics events.** Page views only.
- **Acceptance:** page views appear in the Vercel dashboard; no personal data is collected.

## 6. Content structure

### Every project (data fields in `projects.js`)

| Field | Required | Notes |
|---|---|---|
| `title`, `slug` | Yes | Slug is lowercase with hyphens |
| `description` (summary) | Yes | One or two sentences, used on the card |
| `sections.problem` | Yes | What need or pain the project addresses ("The problem") |
| `sections.built` | Yes | What was built and key decisions ("What I built") |
| `sections.challenges` | Optional | Array of strings ("Challenges") |
| `sections.learned` | Optional | Array of strings ("What I learned") |
| `tech` | Yes | Array of tags |
| `images` | Yes | One or more screenshots (`src`, `width`, `height`, `alt`); the first is the card thumbnail |
| `demo` | Strongly recommended | Live URL; if none, say why and show a short video or GIF |
| `github` | Yes (public work) | Repository URL |
| `highlights` | Optional | 2-4 bullet outcomes |

**Status:** both projects (Inventory Manager and Portfolio Website) now have `sections`, `images`, `demo` and `github`. Inventory Manager also has `demoLogin` and six screenshots; Portfolio Website uses the label "Live site" through `demoLabel` and has one screenshot. Neither has `highlights`. A mobile screenshot and a role line for the Portfolio Website are still open decisions.

### Page content summary
- **Home:** name, role, value line, availability, 2 calls to action.
- **About:** short bio, level, location and time zone, languages, tools, what she is looking for, photo, CV link.
- **Contact:** the three links, the CV, reply-time note.

## 7. Design and UX principles
- Keep the current visual style (dark theme, accent colour, cards) and the contact cards Fatemeh asked to keep unchanged.
- Mobile first; the layout must work from 360px up.
- Fast: static pages, optimized images with `next/image`.
- Plain, specific wording. Avoid repeating "passionate".

## 8. Technical approach
- Stay on static rendering (SSG). No database is needed.
- Keep project content in one data file; adding a project means adding one object.
- Hosting is **[TBD]**: see the assumptions in section 13 about Iran accessibility.
- Add CI (lint, build, audit on each push) and Dependabot.

## 9. Non-functional requirements
- Lighthouse (mobile): Performance >= 95, Accessibility >= 95, Best Practices >= 95, SEO = 100.
- Largest Contentful Paint under 2.5 s on a slow 4G connection.
- Works in current Chrome, Safari, Firefox and Edge.

## 10. Edge cases and error handling

| Case | Expected behaviour |
|---|---|
| Unknown URL or project slug | Custom 404 with links home (currently `notFound()` shows the default page) |
| Project image missing or fails to load | Placeholder with the project title; layout does not jump (fixed width and height) |
| Project has no demo or no GitHub link | The button is hidden; no empty link |
| Broken external link (demo or repo moved) | Run a link checker in CI or monthly; show nothing rather than a dead link |
| Slow or offline network | Pages are static and cached; images lazy-load below the fold; text appears first |
| Unexpected render error | `error.jsx` with a retry button |
| JavaScript disabled | Content still readable (server-rendered); the mobile menu needs JS, so keep core links in the page footer **[suggested]** |
| Email client not configured | Show the email address as text, as well as a link, so it can be copied (already true) |
| Visitor on a very small or very wide screen | No horizontal scroll at 320px; content stays centred at >= 1920px |
| Reduced-motion preference | Disable the mouse glow and animations |

## 11. Out of scope
- A CMS, admin panel, or user accounts.
- A database or any backend, for the MVP.
- A contact form or any form backend: email and LinkedIn links are enough.
- A blog, e-commerce, booking or payments.
- Multi-language and RTL support (Later, pending an answer in section 13).
- Pixel-perfect redesign; contact cards stay as they are.
- Paid advertising or a social media plan.

## 12. Success metrics

No analytics exist yet, so the first milestone sets the baseline; targets come after that.

| Metric | How measured | Target |
|---|---|---|
| Page views and visitors | Vercel Web Analytics (page views only; no custom events) | Baseline first **[TBD]** |
| Contact messages or interview requests received | Manual log | At least 1-2 per month **[TBD]** |
| Lighthouse scores | Lighthouse CI | Section 9 targets |
| Open high/critical vulnerabilities | `npm audit` in CI | 0 |
| Share preview present | Manual check | 100% of pages |

## 13. Risks, assumptions and open questions

**Assumptions**
- Content (CV, photo, screenshots, write-ups) will be provided by Fatemeh.
- Two projects are shown: Inventory Manager and Portfolio Website (the earlier four were removed on 2026-11-09); more front-end projects can be added later. The README and the Portfolio Website page state that Fatemeh designed the site and built the first version, and that later improvements were made with Claude Code (AI), under Fatemeh's direction and review.
- The audience reads English.

**Risks**
- **Content is the bottleneck.** Code is the smaller part. *Mitigation:* collect screenshots, CV and bio before Milestone 3.
- **Access from Iran and payments.** Some hosting, code-hosting and payment services restrict users in Iran, and clients abroad may not be able to pay her easily. The current restrictions for any specific service have not been verified, so check them before choosing hosting and before promising freelance payment methods. *Mitigation:* choose hosting that is reachable from Iran and abroad, and list how clients can pay.
- **Framework churn.** *Mitigation:* Dependabot and CI.
- **Visitors who prefer Persian.** Iranian clients may prefer Persian, which the site does not offer.

**Open questions**
1. What is the live URL and where is it hosted?
2. ~~Which roles and countries are you targeting, and what time zone are you in?~~ Answered: full-time remote, full-time on-site or hybrid in Tehran, freelance; Tehran, Iran, UTC+3:30. Which other countries to target is still open.
3. Is Telegram or WhatsApp a contact channel for Iranian clients?
4. Is the Inventory Manager demo login (an admin account whose password is shown publicly on the app login page) safe to keep, and does the demo stay reachable?
5. Do you want a Persian version?
6. Do you have any client work or testimonials that can be shown?

## 14. Milestones

Each milestone ends with lint and build passing, then a review before the next one starts.

| # | Milestone | Scope | Done when |
|---|---|---|---|
| **1** | **Fix the review findings** | Upgrade Next.js, run `npm audit fix` (R1); focus styles (R2); `mailto` link fix (R5); security headers (R8); delete leftover SVGs, run Prettier, remove commented code (R6, R13) | Audit clean; keyboard focus visible; build passes |
| **2** | **Make it shareable** | `metadataBase`, Open Graph image, robots, sitemap (R10); custom 404 and error pages (R15); real README (R14); CV download | Link previews work; CV downloads |
| **3** | **Prove the work** | New project data fields; screenshots and problem/solution/role for the Inventory Manager and Portfolio Website projects (R11, R12); rewrite About and Home availability lines (R16) | Every project meets section 6 |
| **4** | **Measure and harden** | CI with lint, build and audit; Dependabot; Lighthouse pass; mobile menu focus handling (R3); mouse-effect performance and reduced-motion (R4) | Metrics visible; CI green; scores met |
| **5** | **Later** | Skills section, Persian version, JSON-LD, TypeScript | By decision after seeing the metrics |

**Fastest start (about an hour):** the Milestone 1 items, plus `metadataBase` and Open Graph tags.
