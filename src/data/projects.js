export const projects = [
  {
    id: 1,
    title: "Freelancery",
    slug: "freelancery",
    description:
      "A freelance marketplace where project owners post jobs and freelancers send proposals, with separate dashboards for admins, owners, and freelancers.",
    longDescription:
      "A React 19 single-page app with OTP-based authentication and profile completion, plus a dashboard for each role: owners create and manage projects, freelancers browse projects and submit proposals, and admins manage users. Server data is fetched and cached with TanStack Query, and forms are built with React Hook Form.",
    tech: ["React", "React Router", "TanStack Query", "React Hook Form", "Tailwind CSS", "Axios", "Vite"],
    github: "https://github.com/FatemehYafteh/FREELANCERY",
  },
  {
    id: 2,
    title: "Hotel Booking App",
    slug: "hotel-booking-app",
    description:
      "A hotel search and booking app with an interactive map, date-range picker, and saved location bookmarks.",
    longDescription:
      "Search hotels by destination, dates, and number of guests, and see the results on a Leaflet map. Each hotel has its own page, and logged-in users can save locations as bookmarks on protected pages. App state is managed with the React Context API, and data comes from a mock REST API run with json-server.",
    tech: ["React", "React Router", "Leaflet", "Context API", "Axios", "json-server", "Vite"],
    github: "https://github.com/FatemehYafteh/Booking_Hotel_App",
  },
  {
    id: 3,
    title: "Rick and Morty Character Explorer",
    slug: "rick-and-morty",
    description: "A character browser for Rick and Morty, with a character list and a detail panel.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/FatemehYafteh/Rick-and-morty",
  },
  {
    id: 4,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS, with static project pages and a responsive navigation.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/FatemehYafteh/fatemehyafteh",
  },
];
