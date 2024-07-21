import { useTranslations } from 'next-intl';
import React from 'react'
// components
import { Section } from '../ui/Sections/Section';
import { Title } from '../ui/Texts/Title/Title';
import { Text } from '../ui/Texts/Text/Text';
import { ImageContainer } from '../ui/ImageContainer/ImageContainer';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const OurNearshoreSection = () => {
    const t = useTranslations("OurNearshoreSection");
    return (
      <Section>
        <CardContainer imageSrc='../assets/NearshorePageAssets/nearshorei3.svg' reverse shadow className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-auto lg:px-14 lg:mx-14 mx-4'>
        <div className="flex-cols items-center justify-center rounded-[15px]">
          <div className="flex-cols items-start justify-start lg:justify-start lg:pl-0">
              <Title className="">{t("OurNearshoreTitle1")}</Title>
              <div className="lg:w-[620px]">
                <Text className="pb-1 font-semibold " size="medium">
                  {t("OurNearshoreSubTitle1")}
                  <br />
                </Text>
                <Text className="text-justify font-normal leading-[20.93px] lg:w-[528px]">
                {t("OurNearshoreText1")}
                  <br />
                {t("OurNearshoreText2")}
                  <br />
                {t("OurNearshoreText3")}
                  <br />
                  {t("OurNearshoreText4")}
                  <br />
                </Text>
              </div>
            <div className="pt-4">
              <Title className="pb-2">{t("OurNearshoreTitle2")}</Title>
              <div className=" lg:w-[620px]">
                <Text className="text-justify font-normal leading-[20.93px] lg:w-[528px]">
                {t("OurNearshoreText2_1")}
                  <br />
                  {t("OurNearshoreText2_2")}
                  <br />
                  {t("OurNearshoreText2_3")}
                  <br />                   
                </Text>
              </div>
            </div>
          </div>
        </div>
        </CardContainer>
      </Section>
    );
  };

export default OurNearshoreSection