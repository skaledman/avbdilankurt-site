"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { SERVICES } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function ServicesSection() {
  const { language, t } = useLanguage();

  return (
    <div className="section-inner">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">{t("services.kicker")}</span>
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-description">{t("services.description")}</p>
      </div>

      {/* Services grid */}
      <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.05]">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          const title = language === "tr" ? service.title.tr : service.title.en;
          const desc = language === "tr" ? service.shortDescription.tr : service.shortDescription.en;
          return (
            <Link
              href={`/hizmetler/${service.slug}`}
              key={service.slug}
              className="group flex flex-col gap-4 bg-[var(--bg-main)] p-6 transition-colors hover:bg-[var(--bg-card)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]">
                  <Icon size={16} className="text-[var(--gold)]" />
                </div>
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
              </div>
              <p className="text-sm leading-7 text-[var(--text-faint)]">
                {desc}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                {t("services.cardCta")} <ArrowRight size={14} />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="mt-8 text-center text-[12px] text-[rgba(232,229,221,0.42)] uppercase tracking-[0.22em]">
        {t("services.bottomNote")}
      </p>

      <MiniCta
        title={t("services.miniCtaTitle")}
        description={t("services.miniCtaDescription")}
        primary={{ href: "/iletisim", label: t("services.miniCtaPrimary") }}
      />
    </div>
  );
}
