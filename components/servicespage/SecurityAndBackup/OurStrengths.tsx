import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const OurStrengths = () => {
    const t = useTranslations("Security");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' shadow imageSrc='/assets/ServicesPageAssets/ourstrengths.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("OurStrengthstitle")}
            </Text>
            <Text className='text-justify'>{t("OurStrengthssubtitle")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext1")}</span><br/>            
            </Text>
          <Text className='pb-1 text-justify'>{t("OurStrengthstext2")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext3")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("OurStrengthstext4")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext5")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("OurStrengthstext6")}
          </Text>
          <Text className=" text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurStrengthstext7")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("OurStrengthstext8")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default OurStrengths