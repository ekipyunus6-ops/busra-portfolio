"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type TopNavProps = {
  items: ReadonlyArray<NavItem>;
  cta: NavItem;
};

type ThemeMode = "dark" | "light";

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 14.13A8.5 8.5 0 0 1 9.87 4 8.5 8.5 0 1 0 20 14.13Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.5 1.5M17.8 17.8l1.5 1.5M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.5-1.5M17.8 6.2l1.5-1.5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

export function TopNav({ items, cta }: TopNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("studio-theme");
    const initialTheme: ThemeMode =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("studio-theme", nextTheme);
  };

  const navStateClass = isScrolled
    ? "translate-y-0 scale-[0.985]"
    : "translate-y-0 scale-100";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="page-shell flex justify-center">
        <div
          className={`nav-pill pointer-events-auto mt-5 transition-transform duration-300 ${navStateClass}`}
        >
          <a
            href="/"
            className="nav-avatar shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            aria-label="Studio Coşgun ana sayfa"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/studio-avatar.svg"
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </a>

          <nav aria-label="Bölüm navigasyonu" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              className="nav-icon-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>

            <a
              href={cta.href}
              className="nav-contact focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span>{cta.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="nav-icon-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"}
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </button>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              className="nav-icon-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="pointer-events-auto px-[var(--outer-x)] pt-20 md:hidden">
          <div id="mobile-nav" className="mobile-nav-sheet">
            <nav aria-label="Mobil bölüm navigasyonu">
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex min-h-[3rem] items-center rounded-[1rem] px-4 text-[0.86rem] uppercase tracking-[0.18em] text-text transition-colors duration-200 hover:bg-white/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={cta.href}
              className="nav-contact mt-5 w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{cta.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
