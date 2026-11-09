# Fatemeh Yafteh - Portfolio

Personal portfolio website of Fatemeh Yafteh, a front-end developer. It shows my projects, a short
about page, and ways to contact me.

**Live site:** https://fatemehyafteh.vercel.app

I designed this website and built the first version myself. Later improvements were made with Claude Code (AI), under my direction and review.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) and React 19
- JavaScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [react-icons](https://react-icons.github.io/react-icons/)
- ESLint and Prettier (with the Tailwind class-sorting plugin)
- Hosted on [Vercel](https://vercel.com)

The site is fully static: there is no database, no API and no environment variables.

## Getting started

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | What it does                             |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server             |
| `npm run build` | Create a production build                |
| `npm start`     | Run the production build (after `build`) |
| `npm run lint`  | Check the code with ESLint               |

To format the code, run `npx prettier --write src`.

## Project structure

```
src/
  app/
    page.jsx                 Home
    about/page.jsx           About
    contact/page.jsx         Contact links
    projects/page.jsx        Projects list
    projects/[slug]/page.jsx Project detail pages
    layout.jsx               Root layout, site metadata, navigation
    not-found.jsx            Custom 404 page
    error.jsx                Error page
    opengraph-image.jsx      Generated share image (Open Graph)
    robots.js, sitemap.js    robots.txt and sitemap.xml
    globals.css              Theme colors and shared styles
  components/
    Nav.jsx                  Navigation bar and mobile menu
    MouseEffect.jsx          Mouse glow effect (desktop only)
  data/
    projects.js              Project content
  lib/
    site.js                  Site URL and name
```

## Adding a project

Projects live in `src/data/projects.js`. Add an object to the array and it appears on the Projects
page, gets its own page at `/projects/<slug>`, and is added to the sitemap automatically.

```js
{
  id: 2,
  title: "My New Project",
  slug: "my-new-project",
  description: "One or two sentences shown on the project card.",
  longDescription: "Optional. A longer description for the project page.",
  tech: ["React", "Tailwind CSS"],
  github: "https://github.com/FatemehYafteh/my-new-project",
}
```

## Accessibility and performance notes

- Keyboard focus is shown with a clear outline and glow on every link and button.
- The mouse glow effect is turned off on small screens and for visitors who prefer reduced motion.
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`) are set in `next.config.mjs`. HTTPS and HSTS come from Vercel.

## Deployment

The site is deployed on Vercel. Pushing to the `main` branch triggers a new deployment.

## Contact

- Email: fatemmehyafteh@gmail.com
- LinkedIn: https://www.linkedin.com/in/fatemeh-yafteh
- GitHub: https://github.com/FatemehYafteh
