import { useTranslations } from "next-intl";
import React from "react";

// components
import { Section } from "../ui/Sections/Section";
import { Title } from "../ui/Texts/Title/Title";
import { HoverCard } from "../ui/Cards/HoverCard/HoverCard";
// shared
import { SupportSectionProps } from "shared/interfaces";
import { homePageData } from "shared";

const SupportSection: React.FC<SupportSectionProps> = ({ bgImage = "" }) => {
  const t = useTranslations("ServiceSection");
  return (
    <Section bgImage={bgImage} className="flex items-center justify-center">
      <div className=" h-full w-fit flex-col items-center justify-between px-6 pb-10">
        <Title className="py-2 pt-6 text-center text-[13px] lg:text-xl">
          {t("SupportSectionTitle")}
        </Title>
        <div className="grid-cols-3 flex-col gap-x-6 gap-y-2 lg:grid ">
          {homePageData.services.map((card, index) => (
            <div className="flex justify-center" key={index}>
              <HoverCard
                extraLink={{
                  pathname: "/services/[slug]",
                  params:card.id,}
                }
                icon={card.icon}
                title={t(card.title)}
                beforeText
                text={t(card.text)}
                className={index >= homePageData.services.length - 2 ? "hidden" : "group hover:bg-white-color "}
                >
                </HoverCard>
            </div>
          ))}
          {/* Center the last two cards */}
          <div className="col-span-3 justify-center gap-x-6 lg:flex">
            {homePageData.services.slice(-2).map((card, index) => (
              <div key={index}>
                <HoverCard
                extraLink={{
                  pathname: "/services/[slug]",
                  params:card.id,}
                }
                  icon={card.icon }
                  title={t(card.title)}
                  beforeText
                  text={t(card.text)}
                  className="group hover:bg-white-color"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SupportSection;
