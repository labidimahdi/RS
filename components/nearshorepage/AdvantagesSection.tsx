import { useTranslations } from "next-intl";
import React from "react";
 
// Components
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";
import { CardPlan } from "components/ui/Cards/CardPlan/CardPlan";

// shared
import { AdvantagesData } from "shared/data/nearshore.data";

const AdvantagesSection: React.FC<{}> = () => {
  const t = useTranslations("OurValuesSection");
  return (
    <Section>
      <div className="flex h-full w-full flex-col items-center justify-center px-4 pt-4 lg:px-14 lg:py-10">
        <Title className="text-primary-color-500 text-center">{t("AdvantagesTitle")}</Title>

        <CardPlan
          imageSrc="/assets/NearshorePageAssets/nearshorei2.svg"
          summary={AdvantagesData.map((i) => ({
            title: t(i.title),
            details: t(i.details),
          }))}
        />
      </div>
    </Section>
  );
};

export default AdvantagesSection;
