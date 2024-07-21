import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const Benefits = () => {
    const t = useTranslations("Security");
  return (
    <Section>
        <CardContainer className='flex justify-between gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' reverse imageSrc='/assets/ServicesPageAssets/security3.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("Benefitstitle")}
            </Text>
            <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            {t("Benefitssubtitle")}<br/>            
            </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Benefitstext1")}</span><br/>            
            </Text>
          <Text className='pb-1 text-justify'>{t("Benefitstext2")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Benefitstext3")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Benefitstext4")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Benefitstext5")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Benefitstext6")}
          </Text>
          <Text className=" text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Benefitstext7")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("Benefitstext8")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default Benefits