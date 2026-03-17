"use client";

import { useLocale, useTranslations } from "next-intl";
import { TRUST_INDICATORS } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function TrustIndicatorsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (href: string) => (href === "/" ? `/${locale}` : `/${locale}${href}`);

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">{t("trust.kicker")}</span>
        <h2 className="section-title">{t("trust.title")}</h2>
        <p className="section-description">{t("trust.description")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_INDICATORS.map((item) => {
          const Icon = item.icon;
          const title = locale === "tr" ? item.title.tr : item.title.en;
          const description = locale === "tr" ? item.description.tr : item.description.en;
          return (
            <div
              key={item.key}
              className="group card-dark flex flex-col gap-3 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]">
                <Icon size={22} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-faint)]">
                {description}
              </p>
            </div>
          );
        })}
      </div>

      <MiniCta
        title={t("trust.miniCtaTitle")}
        description={t("trust.miniCtaDescription")}
        primary={{ href: withLocale("/iletisim"), label: t("trust.miniCtaPrimary") }}
      />
    </div>
  );
}
