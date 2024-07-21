import { useTranslations } from 'next-intl';
import React from 'react'

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const Tools = () => {
    const t = useTranslations("WebDevelopment");
  return (
    <Section>
        <CardContainer className='flex justify-between gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-10 px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/webdev4.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("Toolstitle")}
            </Text>
          <Text
            className="pb-1 text-justify text-black-color-900"
            size="medium"
          >
            {t("Toolstext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Toolstext2")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Toolstext3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Toolstext4")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Toolstext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Toolstext6")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Toolstext7")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Toolstext8")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("Toolstext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default Tools