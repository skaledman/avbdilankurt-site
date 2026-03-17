"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-context";
import { WHY_CHOOSE_US } from "@/lib/site-data";

export function WhyChooseUsSection() {
  const { language, t } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">{t("whyUs.kicker")}</span>
        <h2 className="section-title">{t("whyUs.title")}</h2>
        <p className="section-description">{t("whyUs.description")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_US.map((item) => {
          const Icon = item.icon;
          const title = language === "tr" ? item.title.tr : item.title.en;
          const description = language === "tr" ? item.description.tr : item.description.en;
          return (
            <div
              key={item.key}
              className="group card-dark flex flex-col gap-4 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]">
                <Icon size={20} className="text-[var(--gold)]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-faint)]">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/hizmetler"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] px-6 py-3 text-sm font-semibold text-[var(--gold)] transition-colors hover:border-[var(--gold)] hover:bg-[rgba(201,168,76,0.12)]"
        >
          {language === "tr" ? "Hizmetleri İncele →" : "View Services →"}
        </Link>
      </div>
    </div>
  );
}
