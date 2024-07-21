import { useTranslations } from 'next-intl';
import React from 'react'

// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import WebDevelopmentDetails from 'components/servicespage/WebDevelopment/WebDevelopmentDetails';
import Brochure from 'components/servicespage/Brochure';
import WhyChoose from 'components/servicespage/WebDevelopment/WhyChoose';
import OurStrengths from 'components/servicespage/WebDevelopment/OurStrengths';
import Tools from 'components/servicespage/WebDevelopment/Tools';
import Details from 'components/servicespage/WebDevelopment/Details';


const WebDevelopment
 = () => {
    const t = useTranslations('WebDevelopment');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("title")}
        subtitle={t("Subtitle")}
         bgImage="lg:bg-banner_oneServices bg-mobile_banner_oneServices"
      />
      {/* WebDevelopmentDetails section */}
      <WebDevelopmentDetails/>
      {/* Cta Brochure section */}
      <Brochure/>
      {/* Why choose section */}
      <WhyChoose/>
      {/* Our Strengths section */}
      <OurStrengths/>
      {/* Details section */}
      <Details/>
      {/* Tools section */}
      <Tools/>
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  )
}
export default WebDevelopment
