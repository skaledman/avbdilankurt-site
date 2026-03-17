"use client";

import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { useLanguage } from "@/components/language-context";

export default function AboutPage() {
  const { language } = useLanguage();

  const eyebrow = language === "en" ? "About" : "Hakkımda";
  const title =
    language === "en"
      ? "Trust, Care and Professionalism"
      : "Güven, Özen ve Profesyonellik";
  const description =
    language === "en"
      ? "You can find general information here about Atty. Betül Dilan Kurt’s working approach, professional principles and client-focused way of providing legal services."
      : "Av. Betül Dilan Kurt'un çalışma yaklaşımı, mesleki öncelikleri ve müvekkil odaklı hukuki hizmet anlayışı hakkında genel bilgilere bu sayfadan ulaşabilirsiniz.";

  return (
    <div>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <section id="calisma" className="section-inner pt-16" aria-label="İçerik">
        <AboutSection />
      </section>
    </div>
  );
}