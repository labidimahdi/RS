import React from "react";

// shared
import { IconProps } from "shared";

const DotIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      className={`${fillColor} ${className}`}
      width={width}
      height={height}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="Ellipse 9"
        cx="12.5"
        cy="12.5"
        r="12.5"
        fill={`${fillColor ? `${fillColor}` : "#E0D3E1"}`}
      />
    </svg>
  );
};

export { DotIcon };
