export const projects = [
  {
    id: 1,
    title: "Inventory Manager",
    slug: "inventory-manager",
    description:
      "A stock management web app with a dashboard, product catalog, stock movement history and an admin area. This project focuses on the React front end, in English and Persian.",
    longDescription:
      "The front end is a React app built with Vite and Tailwind CSS. It has a dashboard with stock summaries and a low-stock list, searchable and filterable tables for products, categories, suppliers and stock movements with CSV export, and an admin page for approving users. Data is fetched and cached with TanStack Query, the tables use TanStack Table with server-side sorting and pagination, and forms use React Hook Form with Zod validation shared with the API. The interface works in English and Persian, including right-to-left layout. The repository also contains the Node.js API the app talks to; this project focuses on the front end.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "TanStack Table",
      "React Hook Form",
      "Zod",
      "i18next",
    ],
    github: "https://github.com/FatemehYafteh/Inventory-App",
    demo: "https://inventory-app-drab-tau.vercel.app",
    demoLogin: { email: "admin@example.com", password: "inventory-demo-2026" },
    images: [
      {
        src: "/projects/inventory-dashboard-dark-fa.webp",
        width: 1600,
        height: 802,
        alt: "Inventory Manager dashboard in dark theme and Persian, with stock summary cards, latest stock movements and a reorder list.",
      },
      {
        src: "/projects/inventory-products-fa.webp",
        width: 1600,
        height: 798,
        alt: "Product table in Persian with search, category, supplier and stock filters, quick stock buttons and an Excel export button.",
      },
      {
        src: "/projects/inventory-login-fa.webp",
        width: 1600,
        height: 794,
        alt: "Sign-in page in Persian with email and Telegram options and a demo account box.",
      },
      {
        src: "/projects/inventory-users-en.webp",
        width: 1600,
        height: 795,
        alt: "Users page in English with pending, active and rejected tabs and approve and reject buttons.",
      },
      {
        src: "/projects/inventory-categories-mobile.webp",
        width: 359,
        height: 639,
        alt: "Categories page on a phone, where the table layout becomes a list of cards.",
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "My own portfolio site, built with Next.js and Tailwind CSS: responsive, accessible, with security headers and share previews.",
    longDescription:
      "This website is built with Next.js (App Router) and Tailwind CSS. The layout is responsive from phone to desktop. A soft mouse-glow effect follows the cursor on desktop screens and is switched off for visitors who prefer reduced motion. Accessibility work includes a visible keyboard focus style and a mobile menu with labels that closes with the Escape key. For search and sharing it has page titles and descriptions, canonical links, a sitemap and robots file, and Open Graph and Twitter tags with a generated share image. Security headers are set in the Next.js config, and there are custom 404 and error pages. The site is deployed on Vercel. I designed this website and built the first version myself. Later improvements were made with Claude Code (AI), under my direction and review.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/FatemehYafteh/fatemehyafteh",
    demo: "https://fatemehyafteh.vercel.app",
    demoLabel: "Live site",
    images: [
      {
        src: "/projects/portfolio-home.webp",
        width: 1600,
        height: 725,
        alt: "Home page of this portfolio with the name, a short introduction and the View Projects and Contact Me buttons on a dark blue background.",
      },
    ],
  },
];
