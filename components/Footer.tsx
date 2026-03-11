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
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  alt={`${SITE_INFO.name} logo`}
                  className="object-contain"
                  width={100}
                  height={50}
                  sizes="100px"
                />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold tracking-[0.08em] text-[var(--foreground)]">
                  {SITE_INFO.name}
                </p>
              </div>
            </div>
            <p className="max-w-sm text-base leading-8 text-[var(--text-faint)]">
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

          <div>
            <h3 className="footer-title">Hızlı Bağlantılar</h3>
            <div className="mt-5 flex flex-col gap-3 text-base text-[var(--text-muted)]">
              <Link href="/" className="footer-link">
                Anasayfa
              </Link>
              <Link href="/hakkimda" className="footer-link">
                Hakkımda
              </Link>
              <Link href="/hizmetler" className="footer-link">
                Hizmetler
              </Link>
              <Link href="/blog" className="footer-link">
                Yazılar
              </Link>
              <Link href="/yargi-kararlari" className="footer-link">
                Yargı Kararları
              </Link>
              <Link href="/iletisim" className="footer-link">
                İletişim
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Hizmetlerimiz</h3>
            <div className="mt-5 flex flex-col gap-3 text-base text-[var(--text-muted)]">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="footer-link"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-title">İletişim</h3>
            <div className="mt-5 flex flex-col gap-4 text-base text-[var(--text-muted)]">
              <a href={SITE_INFO.phoneHref} className="footer-contact-item">
                <Phone size={16} className="text-[var(--gold)]" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>
              <a href={`mailto:${SITE_INFO.email}`} className="footer-contact-item">
                <Mail size={16} className="text-[var(--gold)]" />
                <span>{SITE_INFO.email}</span>
              </a>
              <div className="footer-contact-item items-start">
                <MapPin size={16} className="mt-1 text-[var(--gold)]" />
                <span>{SITE_INFO.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 divider" />

        <div className="mb-8 flex flex-wrap gap-4 text-base text-[var(--text-muted)]">
          <Link href="/sss" className="footer-link">
            SSS
          </Link>
          <Link href="/gizlilik-politikasi" className="footer-link">
            Gizlilik Politikası
          </Link>
          <Link href="/cerez-politikasi" className="footer-link">
            Çerez Politikası
          </Link>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-[rgba(240,236,228,0.3)]">
            © 2026 {SITE_INFO.name}. {language === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <p className="max-w-xl text-[10px] leading-relaxed text-[rgba(240,236,228,0.25)] sm:text-right">
            Avukatlık Kanunu m.55 uyarınca hazırlanmıştır. Bu internet sitesi bilgilendirme amaçlıdır; reklam veya iş sağlama amacı taşımaz.
          </p>
        </div>
      </div>
    </footer>
  );
}
