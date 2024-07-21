import { useTranslations } from "next-intl";
import React from "react";

// Components
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";
import { Card } from "../ui/Cards/Card/Card";
import { CardSlider } from "../ui/Sliders/CardSlider/CardSlider";

// shared
import { WhySectionData } from "shared/data/nearshore.data";

const WhySection: React.FC<{}> = () => {
  const t = useTranslations("WhySection");
  return (
    <Section> 
      <div className=" h-full w-full flex-col items-center justify-center px-14 lg:-translate-y-10">
        <Title className="pt-10 text-center lg:pt-5">{t("WhySectionTitle")}</Title>
        <div className="hidden lg:grid h-full w-full grid-cols-3 gap-x-10 pt-10">
          <Card
            className="mx-4"
            title={t("WhySectiontitle1")}
            text={t("WhySectiontext1")}
          />
          <Card
            className="mx-4"
            title={t("WhySectiontitle2")}
            text={t("WhySectiontext2")}
          />
          <Card
            className="mx-4"
            title={t("WhySectiontitle3")}
            text={t("WhySectiontext3")}
          />
        </div>
      </div>
      <div className="mx-auto flex h-full w-full justify-center  lg:hidden lg:px-10">
        <CardSlider data={WhySectionData.map((el)=>({title:t(el.title),text:t(el.text)}))} />
      </div>
    </Section>
  );
};

export default WhySection;
