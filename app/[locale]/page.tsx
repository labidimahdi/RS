// components
import AboutUsSection from "components/homepage/AboutUsSection";
import ContactSection from "components/ContactSection";
import { Section } from "components/ui/Sections/Section";
import NearshoreSection from "components/homepage/NearshoreSection";
import AmbitionSection from "components/homepage/AmbitionSection";
import MissionSection from "components/homepage/MissionSection";
import ServiceSection from "components/homepage/ServiceSection";
import ClientSection from "components/homepage/ClientSection";
import NearshoreTunSection from "components/homepage/NearshoreTunSection";
import CtaSection from "components/CtaSection";
import HeroSection from "components/homepage/HeroSection";

// Shared
import { homePageData, TrustData } from "shared";

export default function HomePage() {
  return (
    <main>
      <Section>
        {/* Hero Section */}
        <HeroSection />
        {/* About us section */}
        <AboutUsSection />
        {/* Service section */}
        <ServiceSection
          data={homePageData}
          bgImage="bg-wave_mobile sm:bg-wave"
        />
        {/* Cta section */}
        <CtaSection />
        {/* Nearshore Tun section */}
        <NearshoreTunSection />
        {/* Ambition section */}
        <AmbitionSection />
        {/* Mission section */}
        <MissionSection />
        {/* Clients section */}
        <ClientSection data={TrustData} />
        {/* Nearshore section */}
        <NearshoreSection />
        {/* Contact section */}
        <ContactSection />
      </Section>
    </main>
  );
}
