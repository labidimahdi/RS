import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

// Components
import { Title } from "../ui/Texts/Title/Title";
import { Text } from "../ui/Texts/Text/Text";
import { SubTitle } from "../ui/Texts/SubTitle/SubTitle";
import { Section } from "../ui/Sections/Section";

const NearshoreTunSection: React.FC<{}> = () => {
  const t = useTranslations("NearshoreTunSection");
  return (
    <Section className="px-6 lg:px-14">
      <div className="flex-cols mx-auto mt-14 h-[690px] w-fit items-center lg:items-start justify-center lg:mt-8 lg:flex lg:h-[460px] lg:w-full">
        <div className="flex translate-y-28 justify-center md:translate-y-16  lg:translate-y-0">
          <Image
            src="../assets/HomePageAssets/nearshore.svg"
            alt="Nearshore"
            width={284}
            height={271}
            className="lg:h-[308px] lg:w-[567px]"
          />
        </div>
        <div className="flex-cols items-center justify-center lg:ml-20 lg:w-[620px] lg:justify-center">
          <div className="mb-6 h-full w-full -translate-y-48 lg:-translate-y-0">
            <Title className="text-primary-color-500">
              {t("nearshoreTunTitle")}
            </Title>
            <SubTitle className="text-justify font-semibold lg:font-bold">
              {t("nearshoreTunSubTitle1")}
            </SubTitle>
          </div>
          <div className="flex-cols lg:flex lg:w-[620px]">
            <div className="mb-8  h-[180px] w-full lg:mb-0">
              <SubTitle className="pb-2 font-semibold">
                {t("nearshoreTunSubTitle2")}
              </SubTitle>
              <Text className=" text-justify font-normal lg:w-[282px]">
                {t("nearshoreTunText1")}
                <br />
              </Text>
            </div>
            <div className="h-[180px]  w-full">
              <SubTitle className="pb-2 font-semibold">
                {t("nearshoreTunSubTitle2")}
              </SubTitle>
              <Text className=" text-justify font-normal lg:w-[282px]">
                {t("nearshoreTunText2")}
                <br />
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NearshoreTunSection;
