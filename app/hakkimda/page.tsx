import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Hakkında | Avukat Profili ve Çalışma Yaklaşımı",
  description:
    "Av. Betül Dilan Kurt'un Adana merkezli hukuki danışmanlık yaklaşımı, mesleki öncelikleri ve çalışma ilkeleri hakkında bilgi alın.",
  alternates: { canonical: absoluteUrl("/hakkimda") },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hakkımda"
        title="Güven, Özen ve Profesyonellik"
        description="Av. Betül Dilan Kurt'un çalışma yaklaşımı, mesleki öncelikleri ve müvekkil odaklı hukuki hizmet anlayışı hakkında genel bilgilere bu sayfadan ulaşabilirsiniz."
      />

      <section id="calisma" className="section-inner pt-16" aria-label="İçerik">
        <AboutSection />
      </section>
    </div>
  );
}