import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';
import { Title } from 'components/ui/Texts/Title/Title';

const OurStrengths = () => {
    const t = useTranslations("DataManagement");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-14 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' shadow imageSrc='/assets/ServicesPageAssets/ourstrengths.svg'>
        <div>
            <Title
            className='pb-1 font-bold text-primary-color-500 '
            size="large"
            >
            {t("ourstrengthstitle")}
            </Title>
          <Text
            className="pb-1 text-justify font-bold text-black-color-900"
            size="medium"
          >
            {t("ourstrengthstext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("ourstrengthstext2")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("ourstrengthstext3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("ourstrengthstext4")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("ourstrengthstext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("ourstrengthstext6")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("ourstrengthstext7")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("ourstrengthstext8")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("ourstrengthstext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default OurStrengths