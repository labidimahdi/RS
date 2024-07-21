"use client"
import { useTranslations } from "next-intl";
import React from "react";
import { motion } from "framer-motion";
// components
import { Section } from "../ui/Sections/Section";
import { ImageContainer } from "../ui/ImageContainer/ImageContainer";
import { Title } from "components/ui/Texts/Title/Title";
import { Text } from "components/ui/Texts/Text/Text";

const HeroSection: React.FC = ({}) => {
  const t = useTranslations("Hero");
  return (
    <Section>
      <ImageContainer
        imgSrc={"/assets/HomePageAssets/home.svg"}
        alt="Banner Background"
        width={400}
        height={500}
        className="relative top-[-66px] w-full h-auto "
      />
       <div
        className={`absolute left-0 justify-center top-20 sm:top-36 lg:top-8 xl:top-20 2xl:top-32  bg-cover bg-right w-full lg:h-[500px]  `}
      >
        <div className="flex text-center lg:text-start h-fit w-full flex-col items-center justify-center lg:absolute lg:left-20 lg:top-44 lg:h-fit lg:w-2/3 lg:items-start lg:justify-start">
          <Title className="sm:max-w-[64%] text-white-color text-[15px] md:text-2xl lg:text-4xl xl:text-5xl lg:pb-4">
            <motion.div 
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, ease: "easeOut"}}
            >
                {t("title")}
            </motion.div>
          </Title>
          <div className="flex gap-2 ">
          <motion.div 
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.2, ease: "easeOut"}}
            >                
          <div className="hidden lg:flex border lg:h-20 md:h-16 h-8  mt-2 lg:mt-1"></div>
            </motion.div>
            <motion.div 
            initial={{opacity: 0, x: 500}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.4, ease: "easeOut"}}
            >
          <Text className=" py-1 text-center lg:text-start font-medium  text-white-color text-[13px] md:text-[24px] lg:text-[32px] lg:leading-[41.28px] tracking-wider">
                {t("subtitle1")}{" "}<br/>
            {t("subtitle2")}
          </Text>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
