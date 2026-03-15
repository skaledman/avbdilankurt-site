"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "./language-context";
import { SITE_INFO } from "@/lib/site-data";

const HAKKINDA_LINKS = [
  { href: "/hakkimda", tr: "Avukat Profili", en: "Attorney Profile" },
  { href: "/hakkimda#calisma", tr: "Çalışma Yaklaşımı", en: "Approach" },
];

const HIZMETLER_LINKS = [
  { href: "/hizmetler", tr: "Tüm Hizmet Alanları", en: "All Practice Areas" },
];

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openHakkinda, setOpenHakkinda] = useState(false);
  const [openHizmetler, setOpenHizmetler] = useState(false);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  const nameUppercase = SITE_INFO.name.toLocaleUpperCase("tr-TR");

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[rgba(10,13,24,0.94)] shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-md"
    >
      <nav className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2 sm:px-4 lg:grid-cols-[minmax(320px,1.1fr)_1fr_auto] lg:px-6 lg:py-2.5">
        <Link href="/" className="group flex min-w-0 items-center gap-3 py-1 lg:gap-4">
          <Image
            src="/logo.png"
            alt="Av. Betül Dilan Kurt logo"
            className="object-contain transition-all duration-300"
            width={72}
            height={72}
            sizes="82px"
            priority
          />
          <div className="hidden min-w-0 flex-col justify-center md:flex">
            <span
              className="font-heading text-[1.02rem] font-semibold tracking-[0.08em] text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] whitespace-nowrap xl:text-[1.18rem]"
            >
              {nameUppercase}
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[var(--muted)] whitespace-nowrap">
              {language === "tr" ? "Hukuk & Danışmanlık" : "Law & Consultancy"}
            </span>
          </div>
        </Link>

        {/* Desktop nav — menü öğeleri ve TR/EN aynı hizada */}
        <div className="hidden items-center justify-center gap-0 lg:flex">
          <div className="flex items-center rounded-full border border-white/[0.05] bg-[rgba(255,255,255,0.02)] px-3 py-2 xl:px-4">
          <Link
            href="/"
            className={`nav-link ${isActive("/") && pathname === "/" ? "nav-link-active" : ""}`}
          >
            {language === "tr" ? "Ana Sayfa" : "Home"}
          </Link>

          <div className="relative group/nav">
            <button
              type="button"
              className={`nav-link flex items-center gap-0.5 ${pathname === "/hakkimda" ? "nav-link-active" : ""}`}
              aria-expanded="false"
              aria-haspopup="true"
            >
              {language === "tr" ? "Hakkında" : "About"}
              <ChevronDown size={12} className="transition-transform group-hover/nav:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:opacity-100">
              <div className="min-w-[220px] rounded-2xl border border-white/[0.08] bg-[rgba(10,13,24,0.96)] py-2 shadow-[0_18px_40px_rgba(0,0,0,0.34)]">
                {HAKKINDA_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--gold)]"
                  >
                    {language === "tr" ? item.tr : item.en}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group/nav">
            <button
              type="button"
              className={`nav-link flex items-center gap-0.5 ${pathname.startsWith("/hizmetler") ? "nav-link-active" : ""}`}
              aria-expanded="false"
              aria-haspopup="true"
            >
              {language === "tr" ? "Hizmetler" : "Services"}
              <ChevronDown size={12} className="transition-transform group-hover/nav:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:opacity-100">
              <div className="min-w-[240px] rounded-2xl border border-white/[0.08] bg-[rgba(10,13,24,0.96)] py-2 shadow-[0_18px_40px_rgba(0,0,0,0.34)]">
                {HIZMETLER_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--gold)]"
                  >
                    {language === "tr" ? service.tr : service.en}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/yargi-kararlari"
            className={`nav-link ${pathname.startsWith("/yargi-kararlari") ? "nav-link-active" : ""}`}
          >
            {language === "tr" ? "Yargı Kararları" : "Case Law"}
          </Link>
          <Link
            href="/blog"
            className={`nav-link ${pathname.startsWith("/blog") ? "nav-link-active" : ""}`}
          >
            {language === "tr" ? "Yazılar" : "Articles"}
          </Link>
          <Link
            href="/iletisim"
            className={`nav-link ${pathname === "/iletisim" ? "nav-link-active" : ""}`}
          >
            {language === "tr" ? "İletişim" : "Contact"}
          </Link>
          <button
            type="button"
            onClick={toggleLanguage}
            className="ml-1 rounded-full border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.06)] xl:ml-2"
          >
            <span className={language === "tr" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>TR</span>
            <span className="text-[var(--muted)]">/</span>
            <span className={language === "en" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>EN</span>
          </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[rgba(255,255,255,0.03)] text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] lg:hidden"
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-3 mt-2 rounded-[1.5rem] border border-white/[0.06] bg-[rgba(10,13,24,0.96)] px-4 pb-5 pt-3 shadow-[0_18px_40px_rgba(0,0,0,0.26)] lg:hidden sm:mx-4">
          <div className="flex flex-col gap-0.5">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="nav-mobile-link"
            >
              {language === "tr" ? "Ana Sayfa" : "Home"}
            </Link>

            <div>
              <button
                type="button"
                onClick={() => setOpenHakkinda((p) => !p)}
                className="nav-mobile-link flex w-full items-center justify-between"
              >
                {language === "tr" ? "Hakkında" : "About"}
                <ChevronDown size={14} className={`transition-transform ${openHakkinda ? "rotate-180" : ""}`} />
              </button>
              {openHakkinda && (
                <div className="ml-4 flex flex-col border-l border-white/10 py-2">
                  {HAKKINDA_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 pl-3 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--gold)]"
                    >
                      {language === "tr" ? item.tr : item.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setOpenHizmetler((p) => !p)}
                className="nav-mobile-link flex w-full items-center justify-between"
              >
                {language === "tr" ? "Hizmetler" : "Services"}
                <ChevronDown size={14} className={`transition-transform ${openHizmetler ? "rotate-180" : ""}`} />
              </button>
              {openHizmetler && (
                <div className="ml-4 flex flex-col border-l border-white/10 py-2">
                  {HIZMETLER_LINKS.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="py-2 pl-3 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--gold)]"
                    >
                      {language === "tr" ? service.tr : service.en}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/yargi-kararlari" onClick={() => setOpen(false)} className="nav-mobile-link">
              {language === "tr" ? "Yargı Kararları" : "Case Law"}
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="nav-mobile-link">
              {language === "tr" ? "Yazılar" : "Articles"}
            </Link>
            <Link href="/iletisim" onClick={() => setOpen(false)} className="nav-mobile-link">
              {language === "tr" ? "İletişim" : "Contact"}
            </Link>

            <button
              type="button"
              onClick={toggleLanguage}
              className="mt-4 self-start rounded-full border border-[var(--gold-dim)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em]"
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
