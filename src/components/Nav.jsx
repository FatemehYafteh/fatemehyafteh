"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-20 shadow-[0_1px_15px_rgba(255,255,255,0.1)]"
      aria-label="Primary navigation"
    >
      {/* Blur lives on its own layer: backdrop-filter on <nav> would trap the fixed overlay inside the nav bar */}
      <div className="absolute inset-0 -z-10 bg-background/30 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative z-50 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl transition-all duration-300 hover:text-accent">
          Fatemeh Yafteh
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-(--color-text-primary) hover:text-accent transition font-medium focus:outline-none "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden -m-2 p-2 min-w-11 min-h-11 flex items-center justify-center text-2xl text-(--color-accent) focus:outline-none"
          onClick={() => setIsOpen((s) => !s)}
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
     {/* Mobile Menu */}
{isOpen && (
  <div id="mobile-menu" role="dialog" aria-modal="true" className="md:hidden">
    {/* Overlay */}
    <div
      className="fixed inset-0 backdrop-blur-[2px] bg-black/30 z-40"
      onClick={() => setIsOpen(false)}
      aria-hidden="true"
    />

    {/* Menu */}
    <ul
      className="
        absolute top-[4.5rem] left-0 right-0 
        bg-(--color-background) 
        text-center pb-4 z-50 shadow-xl
        animate-slideDown
      "
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="block w-full py-3 text-(--color-text-primary) hover:text-accent transition font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

    </nav>
  );
}
