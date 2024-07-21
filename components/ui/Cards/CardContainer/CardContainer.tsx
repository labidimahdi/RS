import React from "react";
import { twMerge } from "tailwind-merge";

// components
import { ImageContainer } from "../../ImageContainer/ImageContainer";

// Shared
import { CardContainerProps } from "shared";

const CardContainer: React.FC<CardContainerProps> = ({
  imageSrc,
  children,
  reverse = false,
  shadow = false,
  className,
}) => {
  // Determine the flex direction based on the reverse prop
  const flexDirectionClass = reverse ? "flex-row-reverse" : "flex-row";

  // Determine if the component should have a shadow
  const boxShadowStyle = shadow
    ? {
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.25)",
      }
    : {};

  return (
    <div
      style={{ ...boxShadowStyle }}
      className={twMerge(
        `flex flex-wrap items-center justify-between ${flexDirectionClass} bg-white rounded-[5px] lg:px-14 px-6 ${className}`,
      )}
    >
      <div
        className={`visible relative mb-4  flex w-full justify-center md:mb-0 md:w-1/3 `}
      >
        <ImageContainer
          imgSrc={imageSrc}
          alt="Image"
          width={284}
          height={271}
          className="pb-8 lg:h-[348px] lg:w-[467px] lg:pb-0"
        />
      </div>

      <div className="w-full md:ml-6 md:w-1/2">{children}</div>
    </div>
  );
};

export { CardContainer };
