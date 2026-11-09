# Handoff: portfolio work, 9 November 2026

Site: https://fatemehyafteh.vercel.app · Repo: https://github.com/FatemehYafteh/fatemehyafteh
Stack: Next.js 16.4.5 (App Router), React 19, Tailwind CSS 4, JavaScript, Vercel.
Owner: Fatemeh Yafteh, a **front-end developer** (never "full-stack").
Plan: `PRD.md`. How to run and deploy: `README.md`.

## 1. Pushed vs local

| State | Commits |
|---|---|
| **Pushed and live** (`origin/main` = `840b7f2`) | Everything up to and including `840b7f2` Add Vercel Web Analytics |
| **Local only, not pushed** | `2cc9525`, `ebc92ff`, `b0461a4`, `65b5ec7`, `5a6521e`, and the commit that adds this file |

Rule from the owner: **do not push until she says "push it"**. Run `git status -sb` first; it should show `ahead 6`.

## 2. What was done (commit hashes)

**Review and plan**
- `9a15cfe` Product requirements document (`PRD.md`), then updated in `5325f20`.

**Milestone 1: review fixes** (pushed)
- `84b206e` Upgrade Next.js to 16.4.5 (security advisories)
- `3c0627d` mailto links open in the same tab
- `219e325`, `e6140a3` Visible, softer, glowing focus style, one shared rule for all focusable elements
- `07a09bf` Basic security headers
- `23b65eb`, `59dcb7d`, `9cd4e30` Cleanup, Prettier config (100 columns, Tailwind class sorting), format `src`

**Milestone 2: shareable** (pushed)
- `5e44dfa` Share previews, canonical URLs, robots, sitemap
- `fa244af`, `0403473` Generated share image (glow, rings, site URL; outer ring bleeds off the edge)
- `fd5c02a`, `7350366` Custom 404 and error pages
- `aed4869`, `ed1077c` Mouse glow on every page, cheaper, off for reduced motion
- `c0b4662` Real README

**Projects, footer, buttons, CV, analytics** (pushed)
- `a212c89`, `5325f20` Only the Inventory Manager project (PRD updated)
- `f98e11f` Footer with "Designed & built by Fatemeh Yafteh with Next.js and Tailwind CSS" and a View source link
- `a466f72`, `89b8568` Portfolio Website as a second project, with the honest sentence about Claude Code
- `104674d` Equal-width buttons, filled button bold (404 and error pages too)
- `383b0c3`, `7247daf` CV download buttons (English and Persian PDFs), finally on About and Contact only
- `840b7f2` Vercel Web Analytics

**Milestone 3: prove the work** (local only)
- `2cc9525` Six compressed WebP screenshots, `next/image`, gallery and light lightbox (native `<dialog>`, no library)
- `ebc92ff` Equal 16:10 thumbnails (cropped from the top), 1/2/3 columns, Movements screenshot added, gallery wider than the text from 1024px
- `b0461a4`, `65b5ec7`, `5a6521e` Inventory Manager text: The problem, What I built, Challenges, What I learned (three bullets); Portfolio Website: The problem and What I built

Checked in a real browser (headless Chrome): first load of project images is about 49 KB (AVIF), no horizontal scroll at 390 to 1920px, lightbox works with keyboard and returns focus.

## 3. Decisions made by the owner

- Say "front-end developer" everywhere; no "full-stack" and no back-end project.
- No contact form. Email and LinkedIn links are enough.
- Keep plural wording: "Projects", "View Projects".
- Keep the Inventory live demo and show a public demo login under it (admin@example.com). Keep it, even though it is an admin account.
- Footer wording and the "View source" link as above. Portfolio entry's demo button says "Live site".
- Honest wording: "I designed this website and built the first version myself. Later improvements were made with Claude Code (AI), under my direction and review." (it is on the Portfolio Website project page and in the README; she asked for it "in all three places", so check the footer or other copy if a third place was meant)
- Buttons: stacked full width on phones, equal width side by side from `sm`; filled button bold (700), outline buttons semibold.
- CV buttons only on About and Contact, not Home.
- Prettier config added (100 columns, Tailwind class sorting).
- Share image: option 1 (outer ring 660px, bleeding off the edge).
- Screenshots: same-size thumbnails (16:10, `object-cover object-top`), 1/2/3 columns, no images on Home, one small thumbnail per card on Projects, only the first image on a page loads eagerly, lightbox must stay small (no library). The Portfolio project page has no Challenges or What I learned.
- Working style: small phases; lint and build after each; commit separately; no push until told; ask before any decision not in the plan; fix grammar only when she supplies text.

## 4. What is left, in order

**Milestone 3 (finish)**
1. **Push** the local commits when she says so, then check the live site (project pages, images, lightbox).
2. Rewrite the **About** text and the **Home availability line** (PRD R16). Needs her content: roles, countries, time zone, availability.
3. Update `PRD.md` (section 5.2 still says "an image is added in Milestone 3"; section 5.3 lists Role, Problem and Solution, which she changed to The problem, What I built, Challenges and What I learned) and `README.md` for screenshots and the new sections.
4. Optional: a second screenshot for the Portfolio Website (mobile view), and a decision on whether Portfolio gets a Role line.

**Milestone 4: measure and harden**
1. Confirm **Vercel Web Analytics** shows real visits in the dashboard (script loads from `/02ff43dadade0806/script.js`; not yet confirmed in the dashboard).
2. Analytics events (custom events need a paid Vercel plan; decide if worth it).
3. **CI** with lint, build and `npm audit` (`.github/` does not exist yet), plus **Dependabot**.
4. **Lighthouse** pass on the live site (mobile and desktop).
5. Mobile menu focus handling (PRD R3). It already has labels, `aria-expanded` and closes with Escape. Moving focus into the menu and back is not verified. Also check the skip-to-content link (PRD asks for one).
6. Mouse-effect performance and reduced motion: **already done** early (`ed1077c`).

**Milestone 5 (later, after seeing metrics):** skills section, Persian version, JSON-LD, TypeScript.

## 5. Open questions

1. Which roles and countries is she targeting, and in which time zone? (Needed for the Home and About lines.)
2. Is Telegram or WhatsApp a contact channel for Iranian clients?
3. Does she want a Persian version of the site?
4. Any client work or testimonials to show?
5. Inventory demo login: the screenshot of the Users page says the demo account "cannot approve, reject or change roles", so it looks restricted already. Confirm it cannot change or delete data in a harmful way, and that the demo stays reachable.
6. The CV PDFs were copied as given; their contents have not been reviewed. Check that phone number and email are what she wants public.
7. The Inventory login screenshot shows the demo email and password (already public on the site). Fine, unless she changes the password.
8. Is the "What I learned" order right (design in two languages first)?

## 6. First prompt for tomorrow

> Read `HANDOFF.md` and `PRD.md`. Run `git status -sb` and tell me what is local only. Do not push anything yet.
> Then show me the plan for finishing Milestone 3: the About and Home availability lines, and updating `PRD.md` and `README.md` for the screenshots and the new project sections. Ask me for any text you need, one question at a time, and do not invent content. After each step: run lint and build, commit separately, and wait for my approval.

## 7. Handy facts

- Commands: `npm run dev`, `npm run lint`, `npm run build` (the build script uses `--webpack`).
- Project data and text: `src/data/projects.js`. Detail page: `src/app/projects/[slug]/page.jsx`. Gallery and lightbox: `src/components/ProjectGallery.jsx`. Buttons: `src/lib/buttons.js`. Site constants and CV files: `src/lib/site.js`.
- Images live in `public/projects/` (WebP, at most 1600px wide); Next serves AVIF or WebP.
- Windows notes: Git shows LF to CRLF warnings (harmless). In Git Bash, paths starting with `/` need `MSYS_NO_PATHCONV=1` when passed to Node scripts.
