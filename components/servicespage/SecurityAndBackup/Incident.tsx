import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const Incident = () => {
    const t = useTranslations("Security");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' shadow imageSrc='/assets/ServicesPageAssets/security4.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("Incidenttitle")}
            </Text>
            <Text className='text-justify'>{t("Incidentsubtitle")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Incidenttext1")}</span><br/>            
            </Text>
          <Text className='pb-1 text-justify'>{t("Incidenttext2")}</Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Incidenttext3")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Incidenttext4")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Incidenttext5")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("Incidenttext6")}
          </Text>
          <Text className=" text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("Incidenttext7")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("Incidenttext8")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default Incident