import { PageHero } from "@/components/PageHero";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function ProfessionalPrinciplesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Mesleki İlkeler"
        title="Hukuki Süreç Yönetiminde Benimsediğim İlkeler"
        description="Şeffaf iletişim, düzenli bilgilendirme, gizlilik ve özenli süreç takibi temelinde yürütülen çalışma anlayışımı bu sayfada toplu olarak inceleyebilirsiniz."
      />

      <section className="section-inner pt-16">
        <WhyChooseUsSection />
      </section>
    </div>
  );
}