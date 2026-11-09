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
  },
];
