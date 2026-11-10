"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

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

  // Escape closes the menu and returns focus to the button. While the menu is open,
  // Tab and Shift+Tab stay inside it (the button plus the menu links), because it is a modal dialog.
  useEffect(() => {
    if (!isOpen) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const items = [buttonRef.current, ...menuRef.current.querySelectorAll("a")];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 z-20 w-full shadow-[0_1px_15px_rgba(255,255,255,0.1)]"
      aria-label="Primary navigation"
    >
      {/* Blur lives on its own layer: backdrop-filter on <nav> would trap the fixed overlay inside the nav bar */}
      <div
        className="absolute inset-0 -z-10 bg-background/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="rounded-md text-2xl font-bold transition-all duration-300 hover:text-accent"
        >
          Fatemeh Yafteh
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="rounded-md font-medium text-(--color-text-primary) transition hover:text-accent"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          ref={buttonRef}
          className="-m-2 flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-2xl text-(--color-accent) md:hidden"
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
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu */}
          <ul
            ref={menuRef}
            className="animate-slideDown absolute top-full right-0 left-0 z-50 bg-(--color-background) pb-4 text-center shadow-xl"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block w-full rounded-md py-3 text-lg font-medium text-(--color-text-primary) transition hover:text-accent"
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
