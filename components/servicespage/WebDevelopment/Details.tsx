import { useTranslations } from 'next-intl'
import React from 'react'

// components
import { Section } from 'components/ui/Sections/Section'
import { Text } from 'components/ui/Texts/Text/Text'
import { ImageContainer } from 'components/ui/ImageContainer/ImageContainer'
// shared
import { WebData } from 'shared/data/web.data'

const Details = () => {
    const t = useTranslations("WebDevelopment");
  return (
    <Section className='flex justify-center'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 shadow-custom rounded-xl lg:mt-6 w-full h-full mx-6 px-6 lg:mx-12 py-10'>
        {WebData.map((el,index)=>(
            <div key={index} className="flex-col justify-center">
                <div className='flex justify-center'><ImageContainer 
                imgSrc={el.image} 
                alt='webIcons'
                width={el.width} 
                height={el.height}
                className={el.className}/> 
                </div>
                <Text className='flex justify-center text-center px-8 lg:px-24 uppercase'>{t(el.text)}</Text> </div>

        ))}
        </div>
    </Section>
  )
}

export default Details