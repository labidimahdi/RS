import { useTranslations } from "next-intl";
import React from "react";

// Components
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";
import { Card } from "../ui/Cards/Card/Card";
import { CardSlider } from "../ui/Sliders/CardSlider/CardSlider";

// shared
import { ourPhilosophyData } from "shared";

const OurPhilosophySection: React.FC<{}> = () => {
  const t = useTranslations("OurPhilosophySection");
  return (
    <Section>
      <div className=" h-full w-full flex-col items-center justify-center px-14 pt-6">
        <Title className="pt-10 text-center lg:pt-5">
          {t("OurPhilosophyTitle")}
        </Title>
        <div className="hidden h-full w-full grid-cols-3 gap-x-10 pt-10 lg:grid">
          <Card
            className="mx-4"
            title={t("OurPhilosophytitle1")}
            text={t("OurPhilosophytext1")}
          />
          <Card
            className="mx-4"
            title={t("OurPhilosophytitle2")}
            text={t("OurPhilosophytext2")}
          />
          <Card
            className="mx-4"
            title={t("OurPhilosophytitle3")}
            text={t("OurPhilosophytext3")}
          />
        </div>
      </div>
      <div className="mx-auto flex h-full w-full justify-center  lg:hidden lg:px-10">
        <CardSlider
          data={ourPhilosophyData.map((el) => ({
            title: t(el.title),
            text: t(el.text),
          }))}
        />
      </div>
    </Section>
  );
};

export default OurPhilosophySection;
