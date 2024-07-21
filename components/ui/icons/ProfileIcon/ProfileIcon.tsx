import React from "react";
import { IconProps } from "shared";

export const ProfileIcon: React.FC<IconProps> = ({
  className,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 14"
      className={className}
    >
      <path
        fill={fillColor}
        d="M3 7.27h.75v.746h4.5V7.27H9v-.746h.75V2.047H9v-.746h-.75V.555h-4.5v.746H3v.746h-.75v4.477H3v.746zm.75-3.73h.75v-.746h.75v-.747h1.5v.747h.75v.746h.75v1.492H7.5v.746h-.75v.746h-1.5v-.746H4.5v-.746h-.75V3.54zm7.5 6.714v-.746h-.75v-.746h-9v.746H.75v.746H0v3.73h1.5v-2.238h.75V11H3v-.746h6V11h.75v.746h.75v2.239H12v-3.73h-.75z"
      ></path>
    </svg>
  );
};
