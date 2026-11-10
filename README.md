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
    CvButtons.jsx            CV download buttons (About and Contact)
    ProjectGallery.jsx       Screenshot gallery and lightbox
  data/
    projects.js              Project content
  lib/
    site.js                  Site URL, repo URL and CV file list
    buttons.js               Shared button layout and styles
public/
  projects/                  Project screenshots (WebP, at most 1600px wide)
  Fatemeh-Yafteh-CV-EN.pdf   CV in English
  Fatemeh-Yafteh-CV-FA.pdf   CV in Persian
```

## Updating the CV

Replace the two PDF files in `public/` and keep the same file names. The download buttons on the About
and Contact pages link to them, so no code change is needed. To change the button labels or file names,
edit `cvFiles` in `src/lib/site.js`.

## Adding a project

Projects live in `src/data/projects.js`. Add an object to the array and it appears on the Projects
page, gets its own page at `/projects/<slug>`, and is added to the sitemap automatically.

```js
{
  id: 2,
  title: "My New Project",
  slug: "my-new-project",
  description: "One or two sentences shown on the project card.",
  sections: {
    problem: "The problem the project solves.",
    built: "What I built.",
    challenges: ["Optional. One string per challenge."],
    learned: ["Optional. One string per lesson."],
  },
  tech: ["React", "Tailwind CSS"],
  github: "https://github.com/FatemehYafteh/my-new-project",
  demo: "https://example.com", // optional; add demoLabel to change the button text
  images: [
    // The first image is the card thumbnail
    { src: "/projects/my-image.webp", width: 1600, height: 800, alt: "Describe the image." },
  ],
}
```

Put screenshots in `public/projects/` as WebP, at most 1600px wide, and give the real `width` and
`height` so the page does not jump while loading. They show as equal 16:10 thumbnails (cropped from
the top) and open in a lightbox.

## Accessibility and performance notes

- Keyboard focus is shown with a clear outline and glow on every link and button.
- The mouse glow effect is turned off on small screens and for visitors who prefer reduced motion.
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`) are set in `next.config.mjs`. HTTPS and HSTS come from Vercel.

## Deployment

The site is deployed on Vercel. Pushing to the `main` branch triggers a new deployment.

[Vercel Web Analytics](https://vercel.com/docs/analytics) counts page views. The `<Analytics />` component is in
`src/app/layout.jsx`; it only sends data once Web Analytics is enabled in the Vercel project (Analytics tab)
and does nothing when running locally.

## Contact

- Email: fatemmehyafteh@gmail.com
- LinkedIn: https://www.linkedin.com/in/fatemeh-yafteh
- GitHub: https://github.com/FatemehYafteh
