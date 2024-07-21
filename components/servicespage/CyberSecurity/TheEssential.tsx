import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const TheEssential = () => {
    const t = useTranslations("CyberSecurity");
  return (
    <Section>
        <CardContainer className='flex justify-between gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/cyber4.svg'>
        <div>
            <Text
            className='pb-1 font-bold uppercase text-primary-color-500 '
            size="large"
            >
            {t("TheEssentialtitle")}
            </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("TheEssentialtext1")}</span><br/>            
            </Text>
          <Text className='pb-1 text-justify'>{t("TheEssentialtext2")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("TheEssentialtext3")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("TheEssentialtext4")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("TheEssentialtext5")}</span><br/>
            </Text>
          <Text className='pb-1 text-justify'>{t("TheEssentialtext6")}
          </Text>
          <Text className=" text-justify text-black-color-900  lg:pt-2" size="medium">
            <span className='font-semibold'>{t("TheEssentialtext7")}</span><br/>
            </Text>
          <Text className='text-justify'>{t("TheEssentialtext8")}
          </Text>
          </div>
        </CardContainer>
      </Section>
  )
}

export default TheEssential