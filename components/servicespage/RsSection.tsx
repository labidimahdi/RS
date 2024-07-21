import React from "react";
import { useTranslations } from "next-intl";

// components
import { SubTitle } from "../ui/Texts/SubTitle/SubTitle";
import { Text } from "../ui/Texts/Text/Text";
import { CardContainer } from "../ui/Cards/CardContainer/CardContainer";
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";

// Shared
import { RsSectionProps } from "shared";

const RsSection: React.FC<RsSectionProps> = ({}) => {
  const t = useTranslations("RsSection");
  return (
    <Section>
      <div className="h-min w-full pb-5">
        <CardContainer imageSrc="../assets/ServicesPageAssets/pageServices.svg" className="px-6 lg:px-14">
        <Title className="text-primary-color-500 lg:text-xl">{t("Title")}</Title>
          <SubTitle className="lg:text-xl">{t("Subtitle")}</SubTitle>
          <Text className="text-justify">{t("Text")}</Text>
        </CardContainer>
      </div>
    </Section>
  );
};

export default RsSection;
