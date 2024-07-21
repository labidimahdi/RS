import { useTranslations } from 'next-intl';
import React from 'react'

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const WhyChoose = () => {
    const t = useTranslations("WebDevelopment");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/webdev2.svg' shadow>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("whychoosetitle")}
            </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext1")}</span><br/>            
          </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext2")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext3")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext4")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext5")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext6")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext7")}</span><br/>
            </Text>
          
          <Text className='text-justify'>{t("whychoosetext8")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default WhyChoose