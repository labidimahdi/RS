import React from "react";
import { useTranslations } from "next-intl";

// navigation
import { Link } from "navigation";

// Components
import { OutlinedButton } from "../ui/Buttons/OutlinedButton/OutlinedButton";
import { Section } from "../ui/Sections/Section";
import { CardSlider } from "../ui/Sliders/CardSlider/CardSlider";

// Shared
import { ServiceSectionProps, services } from "shared";

const ServiceSection: React.FC<ServiceSectionProps> = ({
  bgImage = "",
  data,
}) => {
  const t = useTranslations("ServiceSection");
  return (
    <Section className="pt-10" bgImage={bgImage} title={t("ServicesTitle")}>
      <div className="mx-auto flex h-full w-full justify-center lg:px-10">
        <CardSlider
          data={data.services.map((el) => ({
            icon: (el.icon),
            title: t(el.title),
            text: t(el.text),
          }))}
        />
      </div>
      <div className="mt-4 flex justify-center pb-6">
        <Link href={`/${services}`}>
          <OutlinedButton text={t("discover")} rounded="rounded-full" className="px-5" />
        </Link>
      </div>
    </Section>
  );
};

export default ServiceSection;
