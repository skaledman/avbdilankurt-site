"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { SERVICES, SITE_INFO } from "@/lib/site-data";

export function Footer() {
  const { t } = useLanguage();
  const quickLinks = [
    { href: "/", label: t("common.home") },
    { href: "/hakkimda", label: t("common.about") },
    { href: "/hizmetler", label: t("common.services") },
    { href: "/blog", label: t("common.articles") },
    { href: "/yargi-kararlari", label: t("common.caseLaw") },
    { href: "/sss", label: t("common.faq") },
    { href: "/iletisim", label: t("common.contact") },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-5 py-18 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.25fr_0.9fr_1fr_1fr]">
          {/* 1) Açıklama + sosyal medya */}
          <div className="space-y-4">
            <p className="max-w-sm text-sm leading-7 text-[var(--text-faint)]">
              {t("footer.aboutText")}
            </p>
            <div className="space-y-2 text-[10px] leading-relaxed text-[rgba(240,236,228,0.25)]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[var(--gold)] opacity-70" />
                <span>{SITE_INFO.address}</span>
              </div>
              <p>{t("footer.disclaimer")}</p>
            </div>
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
            <h3 className="footer-title text-lg">{t("footer.quickLinks")}</h3>
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
            <h3 className="footer-title text-lg">{t("footer.services")}</h3>
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
            <h3 className="footer-title text-lg">{t("footer.contact")}</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm text-[var(--text-muted)]">
              <a href={SITE_INFO.phoneHref} className="footer-contact-item">
                <Phone size={16} className="shrink-0 text-[var(--gold)]" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE_INFO.email}`} className="footer-contact-item">
                <Mail size={16} className="shrink-0 text-[var(--gold)]" />
                <span>{SITE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Alt footer */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.06] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-[rgba(240,236,228,0.35)]">
            © {new Date().getFullYear()} {SITE_INFO.name}. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-[var(--text-muted)]">
            <Link href="/gizlilik-politikasi" className="footer-link">
              {t("footer.privacy")}
            </Link>
            <Link href="/cerez-politikasi" className="footer-link">
              {t("footer.cookiePolicy")}
            </Link>
          </div>
        </div>
        <div className="mt-4 max-w-xl space-y-1 text-[10px] leading-relaxed text-[rgba(240,236,228,0.25)]">
          <p>{t("footer.barMember")}</p>
        </div>
      </div>
    </footer>
  );
}
