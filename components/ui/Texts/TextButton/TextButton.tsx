import React from "react";
import { twMerge } from "tailwind-merge";
// shared
import { TextButtonProps } from "shared";

const sizes: any = {
  xlarge: "text-[14px] lg:text-[29px]",
  large: "text-[12px] lg:text-[20px]",
  medium: "text-[11px] lg:text-[14px]",
  default: "text-[11px] lg:text-[11px]",
};
const TextButton: React.FC<TextButtonProps> = ({
  children,
  fontWeight,
  fontStyle,
  color,
  textDecoration,
  size = "default",
  className,
}) => {
  return (
    <div
      className={twMerge(`${sizes[size]} cursor-pointer 
       ${fontStyle} ${textDecoration} 
        leading-[21px] ${color} font-${fontWeight} ${className}`)}
    >
      {children}
    </div>
  );
};
export { TextButton };
