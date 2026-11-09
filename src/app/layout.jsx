import "./globals.css";
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
      <body className="relative min-h-screen overflow-x-hidden bg-(--color-background) font-sans text-(--color-text-primary) antialiased">
        <MouseEffect />
        <Nav />
        <main className="relative z-10 container mx-auto px-4 pt-20">{children}</main>
      </body>
    </html>
  );
}
