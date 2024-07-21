import { useTranslations } from "next-intl";
import React from "react";

// Components
import { Section } from "../ui/Sections/Section";
import { CardContainer } from "../ui/Cards/CardContainer/CardContainer";
import { Text } from "../ui/Texts/Text/Text";

const OurStorySection: React.FC<{}> = () => {
  const t = useTranslations("OurStorySection");
  return (
    <Section
      title={t("StoryTitle")}
      className="pb-8 text-primary-color-500 lg:pb-0"
    >
      <CardContainer
        reverse={true}
        imageSrc="../assets/AboutPageAssets/ourStory.svg"
        className="px-6 lg:px-14"
      >
        <Text
          className="pb-2 text-justify text-black-color-900 lg:pt-4"
          size="medium"
        >
          {t("OurStoryText1")}
        </Text>
        <Text
          className="text-justify text-black-color-900  lg:py-2"
          size="medium"
        >
          {t("OurStoryText2")}
        </Text>
        <Text
          className="text-justify text-black-color-900 lg:py-2"
          size="medium"
        >
          {t("OurStoryText3")}
        </Text>
      </CardContainer>
    </Section>
  );
};

export default OurStorySection;
