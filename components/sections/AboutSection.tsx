"use client";

import { useLocale } from "next-intl";
import { Scale, BookOpen, Users } from "lucide-react";

const PILLARS = [
  {
    key: "approach",
    icon: Scale,
    tr: { title: "Çalışma Yaklaşımı", desc: "Her dosya kendine özgü özellikleriyle değerlendirilir; süreç boyunca şeffaf ve düzenli bilgilendirme yapılır." },
    en: { title: "Approach", desc: "Each matter is assessed on its own merits, with transparent and regular communication throughout." },
  },
  {
    key: "priority",
    icon: Users,
    tr: { title: "Öncelikler", desc: "Müvekkil memnuniyeti, güçlü temsil ve hukuki güvenlik temel değerlerdir." },
    en: { title: "Priorities", desc: "Client satisfaction, strong representation and legal security are the core values." },
  },
  {
    key: "expertise",
    icon: BookOpen,
    tr: { title: "Uzmanlık", desc: "Aile, ceza, iş ve miras hukuku başta olmak üzere geniş bir alanda hukuki destek sunulmaktadır." },
    en: { title: "Expertise", desc: "Legal support across a wide range of fields, primarily family, criminal, labour and inheritance law." },
  },
];

export function AboutSection() {
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <div className="section-inner">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <span className="section-kicker">
            {isTr ? "Hakkımda" : "About"}
          </span>

          <h2 className="section-title">
            {isTr
              ? "Güven, Özen ve Profesyonellik"
              : "Trust, Care and Professionalism"}
          </h2>

          <div className="h-px w-12 bg-[var(--gold)] opacity-40" />

          <p className="section-description">
            {isTr
              ? "Av. Betül Dilan Kurt, çalışmalarında her dosyanın kendine özgü özelliklerini dikkate alarak hukuki sürecin dikkatli planlanmasına ve müvekkilin süreç hakkında düzenli bilgilendirilmesine önem verir."
              : "Atty. Betül Dilan Kurt approaches each matter according to its specific characteristics, with emphasis on careful planning and regular client updates."}
          </p>

          <p className="section-description">
            {isTr
              ? "Her müvekkile kişisel ilgi gösterilir; hukuki süreç boyunca gizlilik ve şeffaflık ilkeleri titizlikle korunur."
              : "Personal attention is given to every client; confidentiality and transparency are maintained throughout the legal process."}
          </p>
        </div>

        {/* Right: Pillars */}
        <div className="flex flex-col gap-4">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.key}
                className="card-dark flex items-start gap-4 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-dim)] bg-[rgba(201,168,76,0.06)]">
                  <Icon size={18} className="text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold text-[var(--foreground)]">
                    {isTr ? p.tr.title : p.en.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-faint)]">
                    {isTr ? p.tr.desc : p.en.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
