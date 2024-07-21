import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const WhyChoose = () => {
    const t = useTranslations("CloudManagement");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/cloud2.svg' reverse shadow>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("whychoosetitle")}
            </Text>
          <Text
            className="pb-1 text-justify font-bold text-black-color-900"
            size="medium"
          >
            {t("whychoosetext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext2")}</span><br/>            
          </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext3")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext4")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext6")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("whychoosetext7")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("whychoosetext8")}</span><br/>
            </Text>
          
          <Text className='text-justify'>{t("whychoosetext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default WhyChoose