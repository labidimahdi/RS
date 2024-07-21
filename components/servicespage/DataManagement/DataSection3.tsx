import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { Title } from 'components/ui/Texts/Title/Title';

const DataSection3 = () => {
    const t = useTranslations("DataManagement");
  return (
    <Section className="pb-8 bg-gray-color-100 lg:mt-8 pt-8"
      >
        <div className='lg:px-20 px-6'>
            <Title
            className='pb-2 font-bold text-primary-color-500 '
            size="large"
            >
            {t("section3title")}
            </Title>
          <Text
            className="pb-2 text-justify text-black-color-900  lg:pt-2"
            size="medium"
          >
            {t("section3text1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("section3text2")}</span>
            </Text>
          <Text className="text-justify pb-1">{t("section3text3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("section3text4")}</span>
            </Text>
          <Text className="text-justify pb-1">{t("section3text5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("section3text6")}</span>
            </Text>
          <Text className="text-justify">{t("section3text7")}
          </Text>
        </div>
      </Section>
  )
}

export default DataSection3