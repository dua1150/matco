"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/shared/Button";
import ThemeToggle from "@/components/shared/ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const THEME_STORAGE_KEY = "matco-theme";

function pageHasHeroImage(pathname: string): boolean {
  if (pathname === "/" || pathname === "/about" || pathname === "/process") {
    return true;
  }
  if (pathname.startsWith("/projects/") && pathname !== "/projects") {
    return true;
  }
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const hasHero = pageHasHeroImage(pathname);
  const showSolidNav = scrolled || !hasHero;

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // ignore storage errors (private browsing etc.)
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        showSolidNav
          ? "border-b border-nav-border bg-nav-bg-scrolled/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-app flex h-20 items-center justify-between">
        <Link
          href="/"
          className="relative z-50 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/matco-logo.png"
            alt="MATCO"
            loading="eager"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-11 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-outline group relative py-1 text-sm font-medium tracking-wide text-nav-text/85 transition-colors hover:text-nav-text"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Button href="/contact" variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-[1.5px] w-6 bg-nav-text transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-nav-text transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-nav-text transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-nav-bg-scrolled transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="container-app flex flex-col gap-7"
          aria-label="Mobile"
          aria-hidden={!menuOpen}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="text-outline text-3xl font-semibold tracking-tight text-nav-text transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="mt-4 w-fit"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Button>
        </nav>
      </div>
    </header>
  );
}