"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { PROCESS_STEPS } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function ReviewsSection() {
  const { language, t } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">{t("process.kicker")}</span>
        <h2 className="section-title">{t("process.title")}</h2>
        <p className="section-description">{t("process.description")}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROCESS_STEPS.map((item) => {
          const Icon = item.icon;
          const title = language === "tr" ? item.title.tr : item.title.en;
          const description = language === "tr" ? item.description.tr : item.description.en;
          const cta =
            item.key === "initial-review"
              ? { href: "/iletisim", labelKey: "process.ctaAppointment" }
              : item.key === "document-review"
                ? { href: "/iletisim", labelKey: "process.ctaSendFile" }
                : item.key === "roadmap"
                  ? { href: "/iletisim", labelKey: "process.ctaRequest" }
                  : { href: "/iletisim", labelKey: "process.ctaContact" };

          return (
            <article key={item.key} className="card-dark flex min-h-[230px] flex-col gap-5 p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
                <Icon size={18} className="text-[var(--gold)]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-muted)]">{description}</p>
              </div>
              <div className="mt-auto">
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
                >
                  {t(cta.labelKey)}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <MiniCta
        title={t("process.miniCtaTitle")}
        description={t("process.miniCtaDescription")}
        primary={{ href: "/iletisim", label: t("process.miniCtaPrimary") }}
      />
    </div>
  );
}
