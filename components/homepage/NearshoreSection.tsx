import React from "react";
import { useTranslations } from "next-intl";

// Components
import { Title } from "../ui/Texts/Title/Title";
import { Text } from "../ui/Texts/Text/Text";

const NearshoreSection: React.FC<{}> = () => {
  const t = useTranslations("NearshoreSection");
  return (
    <div className="my-8 flex  h-full w-full flex-col items-center justify-center px-4 text-center lg:px-20">
      <Title className="text-[13px] text-primary-color-500 lg:text-[20px]">
        {t("nearshoreTitle")}
        <br />
      </Title>
      <Text className="pt-4" size="large">
        {t("nearshoreText")}
        <br />
      </Text>
    </div>
  );
};

export default NearshoreSection;
