import { twMerge } from "tailwind-merge";
import Image from "next/image";
import React from "react";

// Shared
import { ImageContainerProps } from "shared";

const ImageContainer: React.FC<ImageContainerProps> = ({
  imgSrc,
  alt,
  width,
  height,
  className = "",
}) => {
  return (
    <section>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={twMerge(` ${className}`)}
      />
    </section>
  );
};

export { ImageContainer };
