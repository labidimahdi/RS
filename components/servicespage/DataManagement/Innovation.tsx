import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';
import { Title } from 'components/ui/Texts/Title/Title';

const Innovation = () => {
    const t = useTranslations("DataManagement");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' shadow imageSrc='/assets/ServicesPageAssets/data4.svg'>
        <div>
            <Title
            className='pb-1 font-bold text-primary-color-500 '
            size="large"
            >
            {t("innovationtitle")}
            </Title>
          <Text
            className="pb-1 text-justify font-bold text-black-color-900"
            size="medium"
          >
            {t("innovationtext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("innovationtext2")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("innovationtext3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("innovationtext4")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("innovationtext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("innovationtext6")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("innovationtext7")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("innovationtext8")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("innovationtext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default Innovation