"use client";

import { useLanguage } from "@/components/language-context";
import { TRUST_INDICATORS } from "@/lib/site-data";
import { MiniCta } from "@/components/MiniCta";

export function TrustIndicatorsSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Güven" : "Trust"}
        </span>
        <h2 className="section-title">
          {language === "tr"
            ? "Hukuki Süreçte Güven Göstergeleri"
            : "Indicators of Trust in Legal Process"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Bireysel ve kurumsal müvekkillere farklı hukuk alanlarında şeffaf süreç yönetimi ve titiz dosya takibi ile hukuki destek sunulmaktadır."
            : "Transparent process management and diligent case handling support individual and corporate clients across various legal areas."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_INDICATORS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className="group card-dark flex flex-col gap-3 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]">
                <Icon size={22} className="text-[var(--gold)]" />
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-faint)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <MiniCta
        title={language === "tr" ? "İletişim" : "Contact"}
        description={
          language === "tr"
            ? "Hukuki sürecinizin kapsamına göre izlenebilecek adımların netleşmesi için ön bilgilendirme talep edebilirsiniz."
            : "For preliminary information on the steps relevant to your situation, you may contact us."
        }
        primary={{ href: "/iletisim", label: language === "tr" ? "İletişime geçin" : "Contact" }}
      />
    </div>
  );
}
