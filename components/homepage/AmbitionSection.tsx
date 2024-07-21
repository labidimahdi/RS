import { useTranslations } from "next-intl";
import React from "react";

// Components
import { Title } from "../ui/Texts/Title/Title";
import { Text } from "../ui/Texts/Text/Text";
import { Section } from "../ui/Sections/Section";
import { CardContainer } from "components/ui/Cards/CardContainer/CardContainer";

const AmbitionSection: React.FC<{}> = () => {
  const t = useTranslations("AmbitionSection");
  return (
    <Section>
      <CardContainer imageSrc="../assets/HomePageAssets/ambition.svg" className="flex justify-between rounded-[15px] lg:w-[1250] py-6 mt-20 lg:mt-8 px-auto lg:px-14 lg:mx-14 mx-4" reverse shadow>
      <div className="flex-cols mx-auto lg:items-start md:pt-6 justify-center rounded-[15px] lg:flex h-[280px] w-full lg:w-fit">
        <div>
            <Title className="pb-2">{t("ambitionTitle")}</Title>
            <div className="h-10 ">
              <Text className="pb-1 font-semibold leading-[35px]" size="medium">
                {t("ambitionSubTitle")}
                <br />
              </Text>
              <Text className="text-justify font-normal leading-[20.93px] ">
                {t("ambitionText")}
                <br />
              </Text>
          </div>
        </div>
 
      </div>
      </CardContainer>
    </Section>
  );
};

export default AmbitionSection;
