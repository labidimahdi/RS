import { useTranslations } from 'next-intl'
import React from 'react'

// components
import { Section } from 'components/ui/Sections/Section'
import { HorizentalAccordion } from 'components/ui/Accordions/HorizentalAccordion/HorizentalAccordion'
import { Text } from 'components/ui/Texts/Text/Text'
import { ImageContainer } from 'components/ui/ImageContainer/ImageContainer'

const HorizentalData = () => {
  const t = useTranslations("DataManagement");
  return (
    <Section className='lg:px-20 px-6 mt-8'>
        <HorizentalAccordion
        data={[
          {
            title: t("horizentaltitle1"),
            content: (
              <div className="flex flex-col items-center justify-center">
                 <ImageContainer
                  imgSrc="/assets/ServicesPageAssets/HorizentalAssets/horizental1.svg"
                  alt="abou Us"
                  width={150}
                  height={150}
                  className="flex rounded-[10px] py-6 lg:h-[200px] lg:w-[356px] lg:scale-125"
                />
                <Text className="lg:px-30 px-2 my-2 text-justify lg:text-[15px]">{t("horizentaltext1")}</Text>
               
              </div>
            ),
          },
          {
            title: t("horizentaltitle2"),
            content: (
              <div className="flex flex-col items-center justify-center">
                 <ImageContainer
                  imgSrc="/assets/ServicesPageAssets/HorizentalAssets/horizental2.svg"
                  alt="abou Us"
                  width={150}
                  height={150}
                  className="flex rounded-[10px] py-6 lg:h-[200px] lg:w-[356px] lg:scale-125"
                />
                <Text className="lg:px-30 px-2 my-2 text-justify lg:text-[15px]">{t("horizentaltext2")}</Text>
               
              </div>
            ),
          },
          {
            title: t("horizentaltitle3"),
            content: (
              <div className="flex flex-col items-center justify-center">
                 <ImageContainer
                  imgSrc="/assets/ServicesPageAssets/HorizentalAssets/horizental3.svg"
                  alt="abou Us"
                  width={150}
                  height={150}
                  className="flex rounded-[10px] py-6 lg:h-[200px] lg:w-[356px] lg:scale-125"
                />
                <Text className="lg:px-30 px-2 my-2 text-justify lg:text-[15px]">{t("horizentaltext3")}</Text>
               
              </div>
            ),
          },
          {
            title: t("horizentaltitle4"),
            content: (
              <div className="flex flex-col items-center justify-center">
                 <ImageContainer
                  imgSrc="/assets/ServicesPageAssets/HorizentalAssets/horizental4.svg"
                  alt="abou Us"
                  width={150}
                  height={150}
                  className="flex rounded-[10px] py-6 lg:h-[200px] lg:w-[356px] lg:scale-125"
                />
                <Text className="lg:px-30 px-2 my-2 text-justify lg:text-[15px]">{t("horizentaltext4")}</Text>
               
              </div>
            ),
          },
          
        ]}
      />

    </Section>
  )
}

export default HorizentalData