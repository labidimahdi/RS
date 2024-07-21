import React from "react";
// shared
import { IconProps } from "shared";

export const AccordionIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className={`${fillColor} ${className}`}
    >
      <path
        d="M11.5975 0H0.402501C0.0667189 0 -0.120773 0.588714 0.0871726 0.990625L5.68467 11.7686C5.84489 12.0771 6.1534 12.0771 6.31533 11.7686L11.9128 0.990625C12.1208 0.588714 11.9333 0 11.5975 0Z"
        fill={fillColor}
      />
    </svg>
  );
};
