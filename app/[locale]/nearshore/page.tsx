import { useTranslations } from 'next-intl';
// components
import ContactSection from 'components/ContactSection';
import CtaSection from 'components/CtaSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import AdvantagesSection from 'components/nearshorepage/AdvantagesSection';
import NearshoreSectionpage from 'components/nearshorepage/NearshoreSectionpage';
import WhySection from 'components/nearshorepage/WhySection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import React from 'react'
import OurNearshoreSection from 'components/nearshorepage/OurNearshoreSection';

const Nearshore
 = () => {
    const t = useTranslations('nearshorePage');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("titleNearshore")}
        subtitle={t("subtitleNearshore")}
        bgImage="lg:bg-banner_nearshore bg-mobile_banner_nearshore"
      />
      {/* Nearshore section */}
      <NearshoreSectionpage/>
      {/* Why section */}
      <WhySection/>
      {/* Cta section */}
      <CtaSection />
      {/* Advantages section */}
      <AdvantagesSection/>
      {/* Nearshore section */}
      <OurNearshoreSection/>
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  )
}

export default Nearshore
