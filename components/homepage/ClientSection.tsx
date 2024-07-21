import { useTranslations } from "next-intl";
import React from "react";

// components
import { Section } from "../ui/Sections/Section";
import { CarouselSlider } from "../ui/Sliders/CarouselSlider/CarouselSlider";
import { Title } from "../ui/Texts/Title/Title";
import { Text } from "../ui/Texts/Text/Text";

// Shared
import { ClientSectionProps } from "shared";

const ClientSection: React.FC<ClientSectionProps> = ({ data }) => {
  const t = useTranslations("ClientSection");
  return (
    <Section className="py-10 lg:px-[90px]">
      <div className="px-6 pb-4">
        <Title className="flex justify-center text-[13px] lg:text-[20px]">
          {t("carouselTitle")}
        </Title>
        <Text className="flex justify-center text-center" size="large">
          {t("carouselText1")}
          <br />
          {t("carouselText2")}
        </Text>
      </div>
      <CarouselSlider data={data} />
    </Section>
  );
};

export default ClientSection;
