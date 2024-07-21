import React from "react";
import { useTranslations } from "next-intl";
// components
import { OutlinedButton } from "../ui/Buttons/OutlinedButton/OutlinedButton";
import { SubTitle } from "../ui/Texts/SubTitle/SubTitle";
import { Text } from "../ui/Texts/Text/Text";
import { CardContainer } from "../ui/Cards/CardContainer/CardContainer";
import { Section } from "../ui/Sections/Section";

// navigation
import { Link } from "navigation";

// Shared
import { AboutUsSectionProps } from "shared";

const AboutUsSection: React.FC<AboutUsSectionProps> = ({}) => {
  const t = useTranslations("AboutUsSection");
  return (
    <Section title={t("about")}>
      <div className="h-min w-full">
        <CardContainer imageSrc="../assets/HomePageAssets/about1.svg" className="px-6 lg:px-14">
          <SubTitle className=" mb-[25px] uppercase">
            {t("AboutTitle1")}
          </SubTitle>
          <Text className=" mb-[14px]">
            <span className="font-semibold">{t("AboutSubTitle1")}</span>
            {t("AboutSubTitle1-2")}
          </Text>
          <Text className="text-justify">{t("AboutText1")}</Text>
        </CardContainer>
        <CardContainer
          imageSrc="../assets/HomePageAssets/about2.svg"
          reverse={true}
          className="lg:-translate-y-6 px-6 lg:px-14 pt-8 lg:pt-0"
        >
          <SubTitle className=" mb-[25px] uppercase">
            {t("AboutTitle2")}
          </SubTitle>

          <Text className=" mb-[14px]">
            <span className="font-semibold">{t("AboutSubTitle2")}</span>{" "}
          </Text>
          <Text className="text-justify">{t("AboutText2")}</Text>
        </CardContainer>
        <div className="my-6 flex justify-center lg:my-0 lg:-translate-y-10">
          <Link href="/about">
            <OutlinedButton text={t("discover")} rounded="rounded-full" className="px-5"/>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutUsSection;
