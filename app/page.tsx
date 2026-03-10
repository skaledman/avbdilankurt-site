import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SectionWrapper id="hakkimda" className="mt-6">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="hizmetler">
          <ServicesSection />
        </SectionWrapper>
        <SectionWrapper id="neden-biz">
          <WhyChooseUsSection />
        </SectionWrapper>
        <SectionWrapper id="iletisim">
          <ContactSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
