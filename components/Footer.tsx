"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./language-context";
import { SERVICES, SITE_INFO } from "@/lib/site-data";

export function Footer() {
  const { language } = useLanguage();
  const quickLinks = [
    { href: "/", label: language === "tr" ? "Ana Sayfa" : "Home" },
    { href: "/hakkimda", label: language === "tr" ? "Hakkında" : "About" },
    { href: "/hizmetler", label: language === "tr" ? "Hizmetler" : "Services" },
    { href: "/blog", label: language === "tr" ? "Yazılar" : "Articles" },
    { href: "/yargi-kararlari", label: language === "tr" ? "Yargı Kararları" : "Case Law" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: language === "tr" ? "İletişim" : "Contact" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.9fr_1fr_1fr]">
          {/* 1) Açıklama + sosyal medya */}
          <div className="space-y-4">
            <p className="max-w-sm text-sm leading-7 text-[var(--text-faint)]">
              {language === "tr"
                ? "Adana merkezli hukuk bürosunda; aile, iş, ceza, miras, gayrimenkul ve ticaret hukuku alanlarında özenli hukuki danışmanlık, dava takibi ve stratejik süreç yönetimi sunulmaktadır."
                : "Our Adana-based law office provides careful legal counsel, litigation support and strategic process management in family, employment, criminal, inheritance, real estate and commercial law."}
            </p>
            <div className="flex items-center gap-3">
              <a href={SITE_INFO.instagram} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={SITE_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 2) Hızlı Bağlantılar */}
          <div>
            <h3 className="footer-title text-lg">Hızlı Bağlantılar</h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Sayfa bağlantıları">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link text-sm">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3) Hizmetler */}
          <div>
            <h3 className="footer-title text-lg">Hizmetler</h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Hizmet alanları">
              {SERVICES.slice(0, 6).map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="footer-link text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* 4) İletişim */}
          <div>
            <h3 className="footer-title text-lg">İletişim</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-[var(--text-muted)]">
              <a href={SITE_INFO.phoneHref} className="footer-contact-item">
                <Phone size={16} className="shrink-0 text-[var(--gold)]" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE_INFO.email}`} className="footer-contact-item">
                <Mail size={16} className="shrink-0 text-[var(--gold)]" />
                <span>{SITE_INFO.email}</span>
              </a>
              <div className="footer-contact-item items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--gold)]" />
                <span>{SITE_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt footer */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.06] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-[rgba(240,236,228,0.35)]">
            © {new Date().getFullYear()} {SITE_INFO.name}. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-[var(--text-muted)]">
            <Link href="/gizlilik-politikasi" className="footer-link">
              {language === "tr" ? "Gizlilik Politikası" : "Privacy Policy"}
            </Link>
            <Link href="/cerez-politikasi" className="footer-link">
              {language === "tr" ? "Çerez Politikası" : "Cookie Policy"}
            </Link>
          </div>
        </div>
        <div className="mt-4 max-w-xl space-y-1 text-[10px] leading-relaxed text-[rgba(240,236,228,0.25)]">
          <p>Adana Barosu Üyesi</p>
          <p>
            {language === "tr"
              ? "Avukatlık Kanunu m.55 ve TBB Reklam Yasağı Yönetmeliği uyarınca bu internet sitesi bilgilendirme amaçlıdır; reklam veya iş kazanma amacı taşımaz."
              : "This website is for information purposes only under the Attorneyship Law art.55 and the TBB Advertising Ban Regulation; it does not constitute advertising or solicitation of work."}
          </p>
        </div>
      </div>
    </footer>
  );
}
