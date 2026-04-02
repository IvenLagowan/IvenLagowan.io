import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ServicesSection from "@/components/ServicesSection";
import AlbumSection from "@/components/AlbumSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal direction="left" delay={100}>
        <EducationSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <PortfolioSection />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={100}>
        <BlogSection />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delay={50}>
        <AlbumSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      <FooterSection />
    </div>
  );
};

export default Index;
