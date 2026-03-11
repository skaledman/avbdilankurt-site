"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./language-context";

const NAV_ITEMS = [
  { href: "/", tr: "Ana Sayfa", en: "Home" },
  { href: "/hakkimda", tr: "Hakkımda", en: "About" },
  { href: "/hizmetler", tr: "Hizmetlerimiz", en: "Services" },
  { href: "/mesleki-ilkeler", tr: "Mesleki İlkeler", en: "Professional Principles" },
  { href: "/yargi-kararlari", tr: "Yargı Kararları", en: "Case Law" },
  { href: "/blog", tr: "Yazılar", en: "Articles" },
  { href: "/iletisim", tr: "İletişim", en: "Contact" },
];

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur border-0 outline-0 bg-[rgba(6,8,15,0.92)]"
          : "border-0 outline-0 bg-transparent"
      }`}
    >
      <nav className="left-0 right-0 top-0 mx-auto mt-0 flex min-h-[80px] max-w-[1500px] items-center justify-between gap-6 border-0 px-4 py-4 pt-0 pb-4 outline-0 lg:px-6">
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center gap-3 pr-2">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Av. Betül Dilan Kurt logo"
              className="object-contain"
              width={140}
              height={70}
              sizes="140px"
              priority
            />
          </div>
          <div className="hidden min-w-0 flex-col leading-none md:flex">
            <span className="font-heading text-lg font-semibold tracking-[0.1em] text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] whitespace-nowrap xl:text-xl">
              AV. BETÜL DILAN KURT
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] whitespace-nowrap xl:text-[11px]">
              {language === "tr" ? "Hukuk & Danışmanlık" : "Law & Consultancy"}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.tr}
              href={item.href}
              className={`relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[var(--gold)] after:transition-all ${
                pathname === item.href
                  ? "text-[var(--foreground)] after:w-full"
                  : "text-[var(--text-faint)] hover:text-[var(--foreground)] after:w-0 hover:after:w-full"
              }`}
            >
              {language === "tr" ? item.tr : item.en}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-[var(--gold-dim)] bg-[var(--bg-card)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[var(--gold)]"
          >
            <span className={language === "tr" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>TR</span>
            <span className="text-[var(--muted)]">/</span>
            <span className={language === "en" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>EN</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex h-9 w-9 items-center justify-center justify-self-end rounded-full border border-white/10 bg-[var(--bg-card)] text-[var(--foreground)] lg:hidden"
          aria-label="Menü"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-0 bg-[rgba(6,8,15,0.98)] px-6 pb-6 pt-4 outline-0 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.tr}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-[11px] font-medium uppercase tracking-[0.25em] text-[rgba(240,236,228,0.7)] transition-colors hover:bg-white/[0.04] hover:text-[var(--foreground)]"
              >
                <span>{language === "tr" ? item.tr : item.en}</span>
                <span className="h-px w-5 bg-[var(--gold)] opacity-40" />
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleLanguage}
              className="mt-2 flex items-center gap-1.5 self-start rounded-full border border-[var(--gold-dim)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]"
            >
              <span className={language === "tr" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>TR</span>
              <span className="text-[var(--muted)]">/</span>
              <span className={language === "en" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>EN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
