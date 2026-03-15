"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openHakkinda, setOpenHakkinda] = useState(false);
  const [openHizmetler, setOpenHizmetler] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(6,8,15,0.86)]"
          : "bg-[linear-gradient(180deg,rgba(6,8,15,0.78),rgba(6,8,15,0.14),transparent)]"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-3 pt-2 sm:px-4 lg:px-6 lg:pt-3">
      <nav
        className={`nav-blur relative mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-[1.6rem] border px-3 transition-all duration-300 sm:px-4 lg:grid-cols-[minmax(320px,1.1fr)_minmax(0,1fr)_auto] ${
          scrolled
            ? "min-h-[72px] border-[rgba(201,168,76,0.14)] bg-[rgba(10,13,24,0.88)] shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
            : "min-h-[78px] border-white/[0.06] bg-[rgba(10,13,24,0.66)] shadow-[0_14px_34px_rgba(0,0,0,0.16)]"
        }`}
      >
        <Link href="/" className="group flex min-w-0 items-center gap-3 py-2 lg:gap-4">
          <Image
            src="/logo.png"
            alt="Av. Betül Dilan Kurt logo"
            className="object-contain transition-all duration-300"
            width={scrolled ? 72 : 82}
            height={scrolled ? 72 : 82}
            sizes="82px"
            priority
          />
          <div className="hidden min-w-0 flex-col justify-center md:flex">
            <span
              className={`font-heading font-semibold tracking-[0.08em] text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] whitespace-nowrap ${
                scrolled ? "text-[1.02rem] xl:text-[1.18rem]" : "text-[1.05rem] xl:text-[1.26rem]"
              }`}
            >
              {SITE_INFO.name.toUpperCase()}
            </span>
            <span
              className={`mt-1 uppercase text-[var(--muted)] whitespace-nowrap ${
                scrolled ? "text-[9px] tracking-[0.24em]" : "text-[9px] tracking-[0.28em]"
              }`}
            >
              {language === "tr" ? "Hukuk & Danışmanlık" : "Law & Consultancy"}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center justify-center lg:flex">
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
          </div>
        </div>

        <div className="hidden shrink-0 lg:flex lg:justify-end">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-[var(--gold-dim)] bg-[rgba(255,255,255,0.03)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.06)]"
          >
            <span className={language === "tr" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>TR</span>
            <span className="text-[var(--muted)]">/</span>
            <span className={language === "en" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>EN</span>
          </button>
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
      </div>

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
