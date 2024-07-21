import { useTranslations } from 'next-intl';
import React from 'react'

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const OurStrengths = () => {
    const t = useTranslations("WebDevelopment");
  return (
    <Section>
        <CardContainer className='flex justify-between gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' reverse imageSrc='/assets/ServicesPageAssets/ourstrengths.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("OurStrengthstitle")}
            </Text>
          <Text className="pb-1 text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext1")}</span> 
            {t("OurStrengthstext2")}           
            </Text>
            <Text className="pb-1 text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext3")}</span> 
            {t("OurStrengthstext4")}           
            </Text>  
            <Text className="pb-1 text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext5")}</span> 
            {t("OurStrengthstext6")}           
            </Text>  
            <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext7")}</span> 
            {t("OurStrengthstext8")}           
            </Text>        
          </div>
        </CardContainer>
      </Section>
  )
}

export default OurStrengths