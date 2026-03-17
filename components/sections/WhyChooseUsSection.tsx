"use client";

import { useLanguage } from "@/components/language-context";
import { WHY_CHOOSE_US } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function WhyChooseUsSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Neden Biz" : "Why Us"}
        </span>
        <h2 className="section-title">
          {language === "tr"
            ? "Neden Av. Betül Dilan Kurt?"
            : "Why Atty. Betül Dilan Kurt?"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Adana'da hukuki danışmanlık ve avukatlık hizmeti alırken güven, şeffaflık ve titiz süreç yönetimi önceliklidir. Dava takibi ve ön değerlendirme süreçlerinde yanınızdayız."
            : "When seeking legal counsel and representation, trust, transparency and diligent process management are our priorities."}
        </p>
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

      <MiniCta
        title={language === "tr" ? "Ön Görüşme" : "Consultation"}
        description={
          language === "tr"
            ? "Dosyanızın kapsamına göre izlenebilecek başvuru yolları ve süreç adımları hakkında genel bilgilendirme için iletişime geçebilirsiniz."
            : "For preliminary information about possible steps and procedures for your matter, you may get in touch."
        }
        primary={{ href: "/iletisim", label: language === "tr" ? "Ön görüşme talep et" : "Request a consultation" }}
        secondary={{ href: "/hizmetler", label: language === "tr" ? "Hizmetleri incele" : "View services" }}
      />
    </div>
  );
}
