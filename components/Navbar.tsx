"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "./language-context";
import { SERVICES } from "@/lib/site-data";

const HAKKINDA_LINKS = [
  { href: "/hakkimda", tr: "Avukat Profili", en: "Attorney Profile" },
  { href: "/hakkimda#calisma", tr: "Çalışma Yaklaşımı", en: "Approach" },
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
          ? "nav-blur border-b border-white/[0.06] bg-[rgba(6,8,15,0.94)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-4 py-3 transition-all duration-300 lg:px-6 ${
          scrolled ? "min-h-[64px]" : "min-h-[80px]"
        }`}
      >
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2 pr-2 lg:gap-3">
          <Image
            src="/logo.png"
            alt="Av. Betül Dilan Kurt logo"
            className="object-contain transition-all duration-300"
            width={scrolled ? 100 : 140}
            height={scrolled ? 50 : 70}
            sizes="(max-width: 1024px) 100px, 140px"
            priority
          />
          <div className="hidden min-w-0 flex-col leading-none md:flex">
            <span
              className={`font-heading font-semibold tracking-[0.1em] text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)] whitespace-nowrap ${
                scrolled ? "text-base xl:text-lg" : "text-lg xl:text-xl"
              }`}
            >
              AV. BETÜL DILAN KURT
            </span>
            <span
              className={`mt-0.5 uppercase text-[var(--muted)] whitespace-nowrap ${
                scrolled ? "text-[9px] tracking-[0.2em] xl:text-[10px]" : "text-[10px] tracking-[0.22em] xl:text-[11px]"
              }`}
            >
              {language === "tr" ? "Hukuk & Danışmanlık" : "Law & Consultancy"}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
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
              <div className="min-w-[200px] rounded-xl border border-white/[0.08] bg-[var(--bg-elevated)] py-2 shadow-xl">
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
              <div className="min-w-[240px] rounded-xl border border-white/[0.08] bg-[var(--bg-elevated)] py-2 shadow-xl">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/hizmetler/${service.slug}`}
                    className="block px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:bg-white/[0.06] hover:text-[var(--gold)]"
                  >
                    {service.title}
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

        <div className="hidden shrink-0 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-[var(--gold-dim)] bg-[var(--bg-card)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors hover:border-[var(--gold)]"
          >
            <span className={language === "tr" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>TR</span>
            <span className="text-[var(--muted)]">/</span>
            <span className={language === "en" ? "text-[var(--gold)]" : "text-[var(--muted)]"}>EN</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[var(--bg-card)] text-[var(--foreground)] transition-colors hover:border-[var(--gold-dim)] lg:hidden"
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/[0.06] bg-[rgba(6,8,15,0.98)] px-4 pb-6 pt-2 lg:hidden">
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
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/hizmetler/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="py-2 pl-3 text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--gold)]"
                    >
                      {service.title}
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
