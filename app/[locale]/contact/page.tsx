import { useTranslations } from 'next-intl';

// components
import FaqSection from 'components/contactuspage/FaqSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import Brochure from 'components/servicespage/Brochure';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import ContactUsSection from 'components/contactuspage/Contact';



const Contact = () => {
    const t = useTranslations('contactPage');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("title")}
        bgImage="lg:bg-banner_contact_us bg-mobile_banner_contact_us"
      />      
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactUsSection/>
      {/* Brochure section */}
      <Brochure/>
      {/* FAQ section */}
      <FaqSection/>

    </Section>
  )
}

export default Contact
