import React from "react";
import { useTranslations } from "next-intl";

// Components
import { Banner } from "components/ui/Banners/Banner/Banner";
import { Section } from "components/ui/Sections/Section";
import CtaSection from "components/CtaSection";
import ServiceSection from "components/aboutpage/ServiceSection";
import NearshoreSection from "components/homepage/NearshoreSection";
import ContactSection from "components/ContactSection";
import OurStorySection from "components/aboutpage/OurStorySection";
import OurPhilosophySection from "components/aboutpage/OurPhilosophySection";
import OurValuesSection from "components/aboutpage/OurValuesSection";

// shared
import { homePageData } from "shared";

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  return (
    <Section>
      {/* Banner */}
      <Banner
        title={t("titleAbout")}
        subtitle={t("subtitleAbout")}
        bgImage="lg:bg-banner_about_us bg-mobile_banner_about_us"
      />
      {/* Our Story */}
      <OurStorySection />
      {/* Our Philosophy */}
      <OurPhilosophySection />
      {/* Cta section */}
      <CtaSection />
      {/* Our values section */}
      <OurValuesSection />
      {/* Service section */}
      <ServiceSection data={homePageData} />
      {/* Nearshore section */}
      <NearshoreSection />
      {/* Contact section */}
      <ContactSection />
    </Section>
  );
}
