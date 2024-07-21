import React from "react";
// shared
import { IconProps } from "shared";

export const CheckIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={`${fillColor} ${className}`}
      viewBox="0 0 9 9"
      //  fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.5352 0H7.79683C7.69332 0 7.59508 0.0594177 7.5317 0.161088L3.17651 7.05751L1.08818 3.74992C1.05658 3.69978 1.01632 3.65924 0.970397 3.63134C0.924477 3.60344 0.874097 3.58891 0.82304 3.58883H0.0846761C0.013903 3.58883 -0.0251807 3.6905 0.0181282 3.75916L2.91138 8.34093C3.04658 8.55483 3.30644 8.55483 3.4427 8.34093L8.60175 0.16901C8.64506 0.10167 8.60597 0 8.5352 0Z" />
    </svg>
  );
};
