import { twMerge } from "tailwind-merge";
import React from "react";

// Components
import { Title } from "components/ui/Texts/Title/Title";
import { Text } from "components/ui/Texts/Text/Text";

// Shared
import { BannerProps } from "shared";

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  bgImage,
  className = "",
  isHero,
}) => {
  return (
    <section
      className={twMerge(
        `h-full w-full pb-[270px] lg:pb-[440px] ${isHero && "lg:pb-[700px]"}`,
      )}
    >
      <div
        className={twMerge(
          `absolute left-0 top-0 h-[330px] w-[430x] bg-cover bg-right sm:w-full lg:h-[500px]  ${bgImage && `w-full bg-clip-padding bg-no-repeat lg:bg-cover ${bgImage}`} ${className}`,
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center lg:absolute lg:left-14 lg:top-44 lg:h-fit lg:w-2/3 lg:items-start lg:justify-start">
          <Title className="max-w-[70%] text-white-color lg:text-[40px]">
            {title}
          </Title>
          <Text className="px-10 py-1 text-center text-[16px] font-medium leading-5 text-white-color lg:px-0 lg:text-[24px] ">
            {subtitle}
          </Text>
        </div>
      </div>
    </section>
  );
};

export { Banner };
