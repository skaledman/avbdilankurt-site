"use client";

import { ShieldCheck, HandHeart, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/components/language-context";

const FEATURES = [
  {
    key: "experience",
    icon: ShieldCheck,
    tr: {
      title: "Deneyimli Çalışma",
      desc: "Farklı hukuk alanlarında edinilmiş mesleki birikim, her dosyada mevzuat ve güncel içtihatlar ışığında dikkatli değerlendirmeler yapılmasına imkân tanır.",
    },
    en: {
      title: "Experienced Practice",
      desc: "Experience across several areas of law supports careful assessment of each matter in light of legislation and current case-law.",
    },
  },
  {
    key: "trust",
    icon: Sparkles,
    tr: {
      title: "Güven & Şeffaflık",
      desc: "Şeffaf iletişim, düzenli bilgilendirme ve gizlilik ilkesi; müvekkil ile kurulan ilişkinin temel unsurlarıdır.",
    },
    en: {
      title: "Trust & Transparency",
      desc: "Transparent communication, regular updates and confidentiality form the basis of the client relationship.",
    },
  },
  {
    key: "care",
    icon: HandHeart,
    tr: {
      title: "Kişisel İlgi",
      desc: "Her dosya, benzer nitelikteki uyuşmazlıklardan ayrışan yönleriyle ele alınır; süreç, müvekkilin ihtiyaçları gözetilerek planlanır.",
    },
    en: {
      title: "Personal Attention",
      desc: "Each matter is considered in view of its specific characteristics, with the process planned around the client's needs.",
    },
  },
  {
    key: "results",
    icon: Target,
    tr: {
      title: "Özenli Süreç Yönetimi",
      desc: "Hukuki sürecin her aşamasında; sürelere uyulması, gerekli başvuruların zamanında yapılması ve belgelendirmenin tam olması gözetilir.",
    },
    en: {
      title: "Considered Case Management",
      desc: "At each stage of the process, attention is paid to time-limits, timely filings and complete documentation.",
    },
  },
];

export function WhyChooseUsSection() {
  const { language } = useLanguage();

  return (
    <div className="section-inner">
      {/* Section header */}
      <div className="mb-14 flex flex-col gap-4">
        <span className="section-kicker">
          {language === "tr" ? "Mesleki İlkeler" : "Professional Principles"}
        </span>
        <h2 className="section-title">
          {language === "tr" ? "Hukuki Süreç Yönetiminde Esas Aldığım İlkeler" : "Principles Guiding Legal Process Management"}
        </h2>
        <p className="section-description">
          {language === "tr"
            ? "Her hukuki süreç; duyarlılık, titizlik ve profesyonellik gerektirir. Sizi temsil ederken yalnızca mevzuata değil, hayatınıza ve geleceğinize de odaklanıyorum."
            : "Every legal process requires sensitivity, diligence and professionalism. In representing you, I focus not only on the law, but also on your life and future."}
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-6 sm:grid-cols-2">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.key}
              className="group relative flex gap-5 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--gold-dim)]"
            >
              {/* Number */}
              <div className="pointer-events-none absolute right-5 top-4 font-heading text-5xl font-semibold text-white/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.1)]">
                <Icon size={20} className="text-[var(--gold)]" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[var(--foreground)]">
                  {language === "tr" ? feature.tr.title : feature.en.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-faint)]">
                  {language === "tr" ? feature.tr.desc : feature.en.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
