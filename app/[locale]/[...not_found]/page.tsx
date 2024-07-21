import { useTranslations } from "next-intl";
import React from "react";
// components
import { ImageContainer } from "components/ui/ImageContainer/ImageContainer";
import { Title } from "components/ui/Texts/Title/Title";
import { Text } from "components/ui/Texts/Text/Text";
import { PrimaryButton } from "components/ui/Buttons/PrimaryButton/PrimaryButton";
// navigation
import { Link } from "navigation";

const NotFound: React.FC = ({}) => {
    const t = useTranslations("404");
  return (
    <main className=" bg-404-color">
      <ImageContainer
        imgSrc={"/assets/page404.svg"}
        alt="404 Background"
        width={400}
        height={500}
        className="relative top-[-66px] w-full hidden lg:flex"
      />
      <ImageContainer
        imgSrc={"/assets/page404mobile.svg"}
        alt="404 Background"
        width={400}
        height={400}
        className="relative top-[-66px] w-full h-full lg:hidden"
      />
        <div className="relative 2xl:-top-[640px] lg:-top-[500px]  -top-[520px] md:-top-[820px] h-0 flex-col lg:justify-start justify-center lg:pl-20 pl-10  items-start">
            <Title className="text-white-color lg:text-[44px] text-[20px] capitalize lg:pb-14 pb-2">{t("title1")}</Title>
            <Title className="text-white-color lg:text-[40px] text-[20px] capitalize lg:pb-5 pb-1">{t("title2")}</Title>
            <Text className="text-white-color w-60 lg:text-[17px] text-justify pb-5">{t("text1")}</Text>
            <Link href="/">
            <PrimaryButton
            text={t("home")}
            className=""/>
            </Link>
        </div>
    </main>
  );
};

export default NotFound;
