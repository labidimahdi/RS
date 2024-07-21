import React from 'react'
import { useTranslations } from 'next-intl';

// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import CyberSecurityDetails from 'components/servicespage/CyberSecurity/CyberSecurityDetails';
import Brochure from 'components/servicespage/Brochure';
import OurStrengths from 'components/servicespage/CyberSecurity/OurStrengths';
import TheEssential from 'components/servicespage/CyberSecurity/TheEssential';
import Team from 'components/servicespage/CyberSecurity/Team';

const CyberSecurity
 = () => {
    const t = useTranslations('CyberSecurity');
  return (
    <Section>
    {/* Banner */}
    <Banner
      title={t("title")}
      subtitle={t("Subtitle")}
      bgImage="lg:bg-banner_oneServices_cyber bg-mobile_banner_oneServices_cyber"
    />
    {/*Cyber Security Details section */}
    <CyberSecurityDetails/>
    {/* Cta Brochure section */}
    <Brochure/>
    {/* Our Strengths section */}
    <OurStrengths/>
    {/* Team section */}
    <Team/>
    {/* The Essential section */}
    <TheEssential/>
    {/* Nearshore section */}
    <NearshoreSection />
    {/* Contact section */}
    <ContactSection/>
  </Section>
  )
}

export default CyberSecurity
