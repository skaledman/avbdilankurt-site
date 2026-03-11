import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main>
        <Hero />
        <div className="divider" />
        <SectionWrapper id="hakkimda">
          <AboutSection />
        </SectionWrapper>
        <div className="divider" />
        <SectionWrapper id="hizmetler">
          <ServicesSection />
        </SectionWrapper>
        <div className="divider" />
        <SectionWrapper id="neden-biz">
          <WhyChooseUsSection />
        </SectionWrapper>
        <div className="divider" />
        <SectionWrapper id="blog">
          <BlogPreviewSection />
        </SectionWrapper>
        <div className="divider" />
        <SectionWrapper id="iletisim">
          <ContactSection />
        </SectionWrapper>
      </main>
    </div>
  );
}
