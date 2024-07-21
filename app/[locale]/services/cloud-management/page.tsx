import React from 'react'
import { useTranslations } from 'next-intl';
// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import CloudManagementDetails from 'components/servicespage/CloudManagement/CloudManagementDetails';
import { Section } from 'components/ui/Sections/Section';
import Brochure from 'components/servicespage/Brochure';
import WhyChoose from 'components/servicespage/CloudManagement/WhyChoose';
import OurStrengths from 'components/servicespage/CloudManagement/OurStrengths';
import OurCloud from 'components/servicespage/CloudManagement/OurCloud';
import Innovation from 'components/servicespage/CloudManagement/Innovation';

const CloudManagement
 = () => {
    const t = useTranslations('CloudManagement');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("title")}
        subtitle={t("Subtitle")}
         bgImage="lg:bg-banner_oneServices_cloud bg-mobile_banner_oneServices_cloud"
      />
      {/* Cloud Management Details section */}
      <CloudManagementDetails/>     
      {/* Cta Brochure section */}
      <Brochure/>
      {/* Why Choose section */}
      <WhyChoose/>
      {/* Cloud Section 4 section */}
      <OurStrengths/>
      {/* Our Cloud section */}
      <OurCloud/>
      {/* Innovation section */}
      <Innovation/>
      {/* Nearshore section */}
      <NearshoreSection/>
      {/* Contact section */}
      <ContactSection />
    </Section>
  )
}

export default CloudManagement
