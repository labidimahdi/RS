import React from "react";
// shared
import { IconProps } from "shared";

export const MapMarkerIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
  strokeColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={`${fillColor} ${className}`}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2040_4152)">
        <path
          d="M8.24059 15.8794C8.24059 15.8794 2.83189 12.8302 2.83189 7.88384C2.81385 7.16067 2.94041 6.44118 3.20413 5.76779C3.46786 5.0944 3.8634 4.48073 4.36745 3.96293C4.8715 3.44513 5.47387 3.03368 6.13905 2.75283C6.80424 2.47198 7.51878 2.32741 8.24059 2.32764C8.96239 2.32741 9.67694 2.47198 10.3421 2.75283C11.0073 3.03368 11.6097 3.44513 12.1137 3.96293C12.6178 4.48073 13.0133 5.0944 13.277 5.76779C13.5408 6.44118 13.6673 7.16067 13.6493 7.88384C13.6493 12.8302 8.24059 15.8794 8.24059 15.8794Z"
          stroke={`${strokeColor ? `${strokeColor}` : "#E20080"}`}
          strokeWidth="2"
        />
        <path
          d="M8.2406 9.78109C9.36078 9.78109 10.2689 8.871 10.2689 7.74833C10.2689 6.62567 9.36078 5.71558 8.2406 5.71558C7.12042 5.71558 6.21234 6.62567 6.21234 7.74833C6.21234 8.871 7.12042 9.78109 8.2406 9.78109Z"
          stroke={`${strokeColor ? `${strokeColor}` : "#E20080"}`}
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_2040_4152">
          <rect
            width="16.2261"
            height="16.2621"
            fill="white"
            transform="translate(0.127563 0.972412)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
