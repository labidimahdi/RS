import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const OurCloud = () => {
    const t = useTranslations("CloudManagement");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/cloud4.svg' reverse shadow>
            <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("OurCloudtitle")}
            </Text>
          <Text
            className="pb-1 text-justify font-bold text-black-color-900"
            size="medium"
          >
            {t("OurCloudtext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurCloudtext2")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurCloudtext3")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurCloudtext4")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurCloudtext5")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurCloudtext6")}</span><br/>
            </Text>
          
          <Text className='pb-1 text-justify'>{t("OurCloudtext7")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("OurCloudtext8")}</span><br/>
            </Text>
          
          <Text className='text-justify'>{t("OurCloudtext9")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default OurCloud