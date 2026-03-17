"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { PROCESS_STEPS } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function ReviewsSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Çalışma Süreci" : "Working Process"}
        </span>
        <h2 className="section-title">
          {language === "tr"
            ? "Danışmanlık Sürecimiz"
            : "How We Work"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Her dosyada ilk değerlendirmeden temsil aşamasına kadar düzenli, şeffaf ve mesleki özen odaklı bir çalışma akışı benimsenir."
            : "Each matter follows a clear, diligent and transparent process from initial assessment to representation."}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROCESS_STEPS.map((item) => {
          const Icon = item.icon;
          const cta =
            item.key === "initial-review"
              ? { href: "/iletisim", tr: "Randevu al", en: "Request an appointment" }
              : item.key === "document-review"
                ? { href: "/iletisim", tr: "Dosya gönder", en: "Send your documents" }
                : item.key === "roadmap"
                  ? { href: "/iletisim", tr: "Ön görüşme talep et", en: "Request a consultation" }
                  : { href: "/iletisim", tr: "İletişime geçin", en: "Contact" };

          return (
            <article key={item.key} className="card-dark flex min-h-[230px] flex-col gap-5 p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
                <Icon size={18} className="text-[var(--gold)]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
              </div>
              <div className="mt-auto">
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)] transition-colors hover:text-[var(--gold-light)]"
                >
                  {language === "tr" ? cta.tr : cta.en}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <MiniCta
        title={language === "tr" ? "İletişim" : "Contact"}
        description={
          language === "tr"
            ? "Davanız veya başvurunuz için izlenecek adımlar, talep kalemleri ve belge ihtiyaçları dosya özelinde belirlenir."
            : "Steps, requests and required documents are determined based on the specifics of your matter."
        }
        primary={{ href: "/iletisim", label: language === "tr" ? "Ön görüşme talep et" : "Request a consultation" }}
      />
    </div>
  );
}
