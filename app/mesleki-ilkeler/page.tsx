"use client";

import { PageHero } from "@/components/PageHero";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { useLanguage } from "@/components/language-context";

export default function ProfessionalPrinciplesPage() {
  const { language } = useLanguage();

  const eyebrow =
    language === "en" ? "Professional Principles" : "Mesleki İlkeler";
  const title =
    language === "en"
      ? "Principles I Follow in Managing Legal Processes"
      : "Hukuki Süreç Yönetiminde Benimsediğim İlkeler";
  const description =
    language === "en"
      ? "On this page you can review the principles guiding my work, based on transparent communication, regular updates, confidentiality and careful case management."
      : "Şeffaf iletişim, düzenli bilgilendirme, gizlilik ve özenli süreç takibi temelinde yürütülen çalışma anlayışımı bu sayfada toplu olarak inceleyebilirsiniz.";

  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <section className="section-inner pt-16">
        <WhyChooseUsSection />
      </section>
    </div>
  );
}