
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: {
    default: "Fatemeh Yafteh - Front-end Developer",
    template: "%s - Fatemeh",
  },
  description:
    "Fatemeh Yafteh is a front-end developer focused on React, Next.js, and Tailwind CSS, building clean, accessible, and user-friendly web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-(--color-background) text-(--color-text-primary) font-sans antialiased relative min-h-screen overflow-x-hidden">
        <Nav />
        <main className="relative z-10 pt-20 container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
