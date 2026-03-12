import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Mesleki İlkeler | Şeffaflık, Gizlilik ve Süreç Yönetimi",
  description:
    "Şeffaf iletişim, düzenli bilgilendirme, gizlilik ve özenli dosya takibi temelinde yürütülen çalışma ilkelerini inceleyin.",
  alternates: { canonical: absoluteUrl("/mesleki-ilkeler") },
};

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