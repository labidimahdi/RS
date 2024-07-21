import React from 'react'
import { useTranslations } from 'next-intl';


// components
import ContactSection from 'components/ContactSection';
import NearshoreSection from 'components/homepage/NearshoreSection';
import { Banner } from 'components/ui/Banners/Banner/Banner';
import { Section } from 'components/ui/Sections/Section';
import DataManagementDetails from 'components/servicespage/DataManagement/DataManagementDetails';
import DataSection3 from 'components/servicespage/DataManagement/DataSection3';
import Brochure from 'components/servicespage/Brochure';
import OurStrengths from 'components/servicespage/DataManagement/OurStrengths';
import Innovation from 'components/servicespage/DataManagement/Innovation';
import HorizentalData from 'components/servicespage/DataManagement/HorizentalData';


const DataManagement
 = () => {
    const t = useTranslations('DataManagement');
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("title")}
        subtitle={t("Subtitle")}
         bgImage="lg:bg-banner_oneServices_data bg-mobile_banner_oneServices_data"
      />
      {/*Data Management Details section */}
      <DataManagementDetails/>
      {/* Cta Brochure section */}
      <Brochure />
      {/*Data  section 3 */}
      <DataSection3/>
      {/*Our strengths  section */}
      <OurStrengths/>
      {/* Horizental Data  section */}
      <HorizentalData/>
      {/*Innovation section  */}
      <Innovation/>
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  )
}

export default DataManagement
