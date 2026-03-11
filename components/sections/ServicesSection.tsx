"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { SERVICES } from "@/lib/site-data";

export function ServicesSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      {/* Header */}
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Hizmet Alanlarım" : "Practice Areas"}
        </span>
        <h2 className="section-title">
          {language === "tr" ? "Uzmanlık Alanlarım" : "Areas of Expertise"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Her dosya, hukuki gerekliliklerin yanı sıra müvekkilin hayatına etkileri de gözetilerek titizlikle ele alınır."
            : "Every matter is handled with care, considering not only legal requirements but also its impact on clients' lives."}
        </p>
      </div>

      {/* Services grid */}
      <div className="grid gap-px bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.05]">
        {SERVICES.map((service) => {
          const Icon = service.icon;
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
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-7 text-[var(--text-faint)]">
                {service.shortDescription}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                Detaylı İncele <ArrowRight size={14} />
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom note */}
      <p className="mt-8 text-center text-[12px] text-[rgba(232,229,221,0.42)] uppercase tracking-[0.22em]">
        {language === "tr"
          ? "Tüm hukuki alanlarda ön bilgilendirme için iletişime geçebilirsiniz"
          : "Contact for preliminary information on any legal matter"}
      </p>
    </div>
  );
}
