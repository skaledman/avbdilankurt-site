"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "./language-context";
import { SERVICES, SITE_INFO } from "@/lib/site-data";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* 1) Kurumsal */}
          <div className="space-y-5">
            <h3 className="footer-title text-lg">Kurumsal</h3>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                className="object-contain"
                width={80}
                height={40}
                sizes="80px"
              />
              <p className="font-heading text-lg font-semibold tracking-[0.06em] text-[var(--foreground)]">
                {SITE_INFO.name}
              </p>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[var(--text-faint)]">
              Adana&apos;da hukuki danışmanlık ve avukatlık hizmeti. Bireysel ve kurumsal müvekkiller için farklı hukuk alanlarında özenli danışmanlık, dava takibi ve stratejik hukuki destek sunulmaktadır.
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
              <Link href="/" className="footer-link text-sm">
                Ana Sayfa
              </Link>
              <Link href="/hakkimda" className="footer-link text-sm">
                Hakkında
              </Link>
              <Link href="/hizmetler" className="footer-link text-sm">
                Hizmetler
              </Link>
              <Link href="/blog" className="footer-link text-sm">
                Yazılar
              </Link>
              <Link href="/yargi-kararlari" className="footer-link text-sm">
                Yargı Kararları
              </Link>
              <Link href="/iletisim" className="footer-link text-sm">
                İletişim
              </Link>
            </nav>
          </div>

          {/* 3) Hizmetler */}
          <div>
            <h3 className="footer-title text-lg">Hizmetler</h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Hizmet alanları">
              {SERVICES.map((service) => (
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
        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[rgba(240,236,228,0.35)]">
            © {new Date().getFullYear()} {SITE_INFO.name}. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-[var(--text-muted)]">
            <Link href="/gizlilik-politikasi" className="footer-link">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="footer-link">
              Çerez Politikası
            </Link>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-[10px] leading-relaxed text-[rgba(240,236,228,0.25)]">
          Avukatlık Kanunu m.55 uyarınca hazırlanmıştır. Bu internet sitesi bilgilendirme amaçlıdır; reklam veya iş sağlama amacı taşımaz.
        </p>
      </div>
    </footer>
  );
}
