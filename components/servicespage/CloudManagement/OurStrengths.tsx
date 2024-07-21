import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const OurStrengths = () => {
    const t = useTranslations("CloudManagement");
  return (
    <Section>
        <CardContainer className='flex justify-between gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/ourstrengths.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("OurStrengthstitle")}
            </Text>
          <Text
            className="pb-1 text-justify text-black-color-900"
            size="medium"
          >
            {t("OurStrengthstext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext2")}</span><br/>            
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurStrengthstext3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext4")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurStrengthstext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext6")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurStrengthstext7")}
          </Text>
          <Text className=" text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext8")}</span><br/>
            </Text>
          
          <Text className='text-justify'>{t("OurStrengthstext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default OurStrengths