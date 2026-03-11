import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hakkımda"
        title="Güven, Özen ve Profesyonellik"
        description="Av. Betül Dilan Kurt'un çalışma yaklaşımı, mesleki öncelikleri ve müvekkil odaklı hukuki hizmet anlayışı hakkında genel bilgilere bu sayfadan ulaşabilirsiniz."
      />

      <section className="section-inner pt-16">
        <AboutSection />
      </section>
    </div>
  );
}