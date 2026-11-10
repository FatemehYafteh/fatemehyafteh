import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import MouseEffect from "@/components/MouseEffect";
import Nav from "@/components/Nav";
import { siteName, siteUrl } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fatemeh Yafteh - Front-end Developer",
    template: "%s - Fatemeh",
  },
  description:
    "Fatemeh Yafteh is a front-end developer focused on React, Next.js, and Tailwind CSS, building clean, accessible, and user-friendly web applications.",
  alternates: { canonical: "./" },
  openGraph: { type: "website", siteName, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-(--color-background) font-sans text-(--color-text-primary) antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-(--color-background) focus:px-4 focus:py-2 focus:font-semibold focus:text-accent"
        >
          Skip to main content
        </a>
        <MouseEffect />
        <Nav />
        <main
          id="main"
          tabIndex={-1}
          className="relative z-10 container mx-auto flex-1 px-4 pt-20 focus:outline-none"
        >
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
