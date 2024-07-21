import { useTranslations } from 'next-intl';
import React from 'react'

// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import Brochure from 'components/servicespage/Brochure';
import OurStrengths from 'components/servicespage/SecurityAndBackup/OurStrengths';
import SecurityDetails from 'components/servicespage/SecurityAndBackup/SecurityDetails';
import Incident from 'components/servicespage/SecurityAndBackup/Incident';
import Benefits from 'components/servicespage/SecurityAndBackup/Benefits';

const SoftwareDevelopment
 = () => {
    const t = useTranslations('Security');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("title")}
        subtitle={t("Subtitle")}
         bgImage="lg:bg-banner_oneServices_software bg-mobile_banner_oneServices_software"
      />
      {/* Security details section */}
      <SecurityDetails/>
      {/* Cta Brochure section */}
      <Brochure/>
      {/*Our Strengths section */}
      <OurStrengths/>
      {/* Benefits section */}
      <Benefits/>
      {/* Incident section */}
      <Incident/>      
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  )
}

export default SoftwareDevelopment
