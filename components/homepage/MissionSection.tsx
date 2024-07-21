import { useTranslations } from "next-intl";
import React from "react";

// Componenents
import { Title } from "../ui/Texts/Title/Title";
import { Text } from "../ui/Texts/Text/Text";
import { Section } from "../ui/Sections/Section";
import { CardContainer } from "components/ui/Cards/CardContainer/CardContainer";

const MissionSection: React.FC<{}> = () => {
  const t = useTranslations("MissionSection");
  return (
    <Section>
      <CardContainer imageSrc="../assets/HomePageAssets/ourmission.svg" className="flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-auto lg:px-14 lg:mx-14 mx-4" shadow>
      <div className="flex-cols mx-auto lg:items-start md:pt-10 justify-center rounded-[15px]  lg:flex h-[230px] lg:w-fit">
        <div>
            <Title className="pb-2">{t("missionTitle")}</Title>
            <div className="h-10">
              <Text className="text-justify font-normal leading-[20.93px]">
                {t("missionText")}
                <br />
              </Text>
          </div>
        </div>
 
      </div>
      </CardContainer>
    </Section>
  );
};

export default MissionSection;
