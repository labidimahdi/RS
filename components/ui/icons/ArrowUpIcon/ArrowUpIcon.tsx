import React from "react";
// shared
import { IconProps } from "shared";

export const ArrowUpIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${fillColor} ${className}`}
    >
      <g id="Down">
        <path
          id="Vector"
          d="M3.55491 19.5H5.45921C5.5887 19.5 5.71058 19.4365 5.78675 19.3324L13.0002 9.38945L20.2137 19.3324C20.2899 19.4365 20.4118 19.5 20.5412 19.5H22.4455C22.6106 19.5 22.7071 19.3121 22.6106 19.1775L13.6578 6.83516C13.3328 6.38828 12.6676 6.38828 12.3451 6.83516L3.39241 19.1775C3.29339 19.3121 3.38987 19.5 3.55491 19.5Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
