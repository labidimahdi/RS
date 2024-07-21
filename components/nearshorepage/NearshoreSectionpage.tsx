import React from "react";
import { useTranslations } from "next-intl";

// components
import { SubTitle } from "../ui/Texts/SubTitle/SubTitle";
import { Text } from "../ui/Texts/Text/Text";
import { CardContainer } from "../ui/Cards/CardContainer/CardContainer";
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";

// Shared
import {NearshoreSectionpageProps } from "shared";

const NearshoreSectionpage: React.FC<NearshoreSectionpageProps> = ({}) => {
  const t = useTranslations("Nearshore");
  return (
    <Section>
      <div className="h-min w-full">
        <CardContainer imageSrc="../assets/NearshorePageAssets/nearshore.svg">
        <Title className="text-primary-color-500 lg:text-xl pb-2">{t("Title")}</Title>
          <SubTitle className="lg:text-xl pb-2">{t("Subtitle")}</SubTitle>
          <Text className="text-justify">{t("Text")}</Text>
        </CardContainer>
      </div>
    </Section>
  );
};

export default NearshoreSectionpage;
