export const projects = [
  {
    id: 1,
    title: "Inventory Manager",
    slug: "inventory-manager",
    description:
      "A stock management web app with a dashboard, product catalog, stock movement history and an admin area. This project focuses on the React front end, in English and Persian.",
    sections: {
      problem:
        "Small businesses often track stock in spreadsheets or on paper. Counts drift, nobody knows who changed what, and items run out without warning.",
      built:
        "Anbar is a bilingual (Persian and English) inventory web app. It has a dashboard with stock value, low-stock and out-of-stock alerts, and a reorder list; a searchable, filterable product table with quick stock changes and Excel export; a full movement history showing who changed what, when and why; categories, suppliers, and user management with roles and approvals; sign-in by email or Telegram; light and dark themes; and a responsive layout where tables become cards on mobile.",
      challenges: [
        "Full right-to-left and left-to-right switching, including Persian numbers and Jalali dates.",
        "Keeping the UI in sync with the server after every stock change, using TanStack Query.",
        "Building sortable, filterable tables with TanStack Table that still work well on small screens.",
      ],
      learned: [
        "How to design a UI that works the same in two languages and two directions.",
        "How to manage server state and caching instead of keeping everything in local state.",
        "How to make data-heavy screens usable on mobile.",
      ],
    },
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
        src: "/projects/inventory-movements-en.webp",
        width: 1600,
        height: 802,
        alt: "Stock movements page in English: a history of every stock change with date, product, type, quantity before and after, note and who made it, with filters and an Excel export.",
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
    sections: {
      problem:
        "Employers and clients need a quick, clear way to see who I am, what I can build, and how to reach me.",
      built:
        "This website is built with Next.js (App Router) and Tailwind CSS. The layout is responsive from phone to desktop. A soft mouse-glow effect follows the cursor on desktop screens and is switched off for visitors who prefer reduced motion. Accessibility work includes a visible keyboard focus style and a mobile menu with labels that closes with the Escape key. For search and sharing it has page titles and descriptions, canonical links, a sitemap and robots file, and Open Graph and Twitter tags with a generated share image. Security headers are set in the Next.js config, and there are custom 404 and error pages. The site is deployed on Vercel. I designed this website and built the first version myself. Later improvements were made with Claude Code (AI), under my direction and review.",
    },
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
