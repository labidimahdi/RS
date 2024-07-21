import React from "react";

// components
import { VerticalAccordion } from "components/ui/Accordions/VerticalAccordion/VerticalAccordion";
import { Section } from "components/ui/Sections/Section";
import { Text } from "components/ui/Texts/Text/Text";
import { Title } from "components/ui/Texts/Title/Title";
import { useTranslations } from "next-intl";

const FaqSection = () => {
  const t = useTranslations("FaqSection");
  return (
    <Section className="px-6 pb-10 lg:px-44 lg:pb-20 lg:pt-14">
      <Title>{"Frequentli asked questions"}</Title>
      <VerticalAccordion
        data={[
          {
            title: "1. Question ?",
            content: (              
                <Text className="lg:px-30 px-2 text-justify lg:text-[20px]">
                  {t("question1")}
                </Text>             
            ),
          },
          {
            title: "2. Question ?",
            content: (             
                <Text className="lg:px-30 px-2 text-justify lg:text-[20px]">
                  {t("question2")}
                </Text>             
            ),
          },
          {
            title: "3. Question ?",
            content: (              
                <Text className="lg:px-30 px-2 text-justify lg:text-[20px]">
                  {t("question3")}
                </Text>              
            ),
          },
          {
            title: "4. Question ?",
            content: (              
                <Text className="lg:px-30 px-2 text-justify lg:text-[20px]">
                  {t("question4")}
                </Text>              
            ),
          },
        ]}
      />
    </Section>
  );
};

export default FaqSection;
