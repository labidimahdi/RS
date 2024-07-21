import { useTranslations } from 'next-intl';
// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import ClientSection from 'components/servicespage/ClientSection';
import RsSection from 'components/servicespage/RsSection';
import SupportSection from 'components/servicespage/SupportSection';
import CtaSection from 'components/CtaSection';
// shared
import { SkillsData } from 'shared/data/services.data';


const Services
 = () => {
    const t = useTranslations('servicesPage');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("Title")}
        subtitle={t("Subtitle")}
        bgImage="lg:bg-banner_Services bg-mobile_banner_Services"
      />
      {/* Rs section */}
      <RsSection/>
      {/* Support section */}
      <SupportSection bgImage="lg:bg-support_bg bg-mobile_support_bg" />
      {/* Cta section */}
      <CtaSection />
      {/* Clients section */}
      <ClientSection data={SkillsData} />
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
      </Section>
  )
}

export default Services;
