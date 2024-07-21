import React from 'react'
import { useTranslations } from 'next-intl';

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text';
import { CardContainer } from 'components/ui/Cards/CardContainer/CardContainer';

const Team = () => {
    const t = useTranslations("CyberSecurity");
  return (
    <Section>
        <CardContainer className='flex justify-center gap-x-20 rounded-[15px] lg:w-[1250] py-10 mt-4 lg:mt-8 px-6 lg:px-4 lg:mx-14 mx-4' imageSrc='/assets/ServicesPageAssets/cyber3.svg' reverse shadow>
            <div>
          <Text
            className="pb-1 text-justify font-bold text-black-color-900"
            size="medium"
          >
            {t("Teamtext1")}
          </Text>
          <Text className="text-justify text-black-color-900  lg:pt-2" size="medium">
            {t("Teamtext2")}
          </Text>
            </div>
        </CardContainer>
      </Section>
  )
}

export default Team