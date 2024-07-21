import React from "react";
import { twMerge } from "tailwind-merge";

// Shared
import { TextButtonProps } from "shared";

const sizes: any = {
  xlarge: "text-[13px] lg:text-[29px]",
  large: "text-[13px] lg:text-[20px]",
  medium: "text-[13px] lg:text-[17px]",
  small: "text-[10px] lg:text-[11px]",
  xsmall: "text-[10px] lg:text-[10px]",
  default: "text-[13px] lg:text-[15px]",
};

const Text: React.FC<TextButtonProps> = ({
  children,
  fontWeight = "normal",
  fontStyle,
  color,
  textDecoration,
  size = "default",
  className,
}) => {
  return (
    <p
      className={twMerge(
        `${sizes[size]} cursor-default ${fontStyle} ${textDecoration} ${color} font-${fontWeight} leading-normal ${className}`,
      )}
    >
      {children}
    </p>
  );
};
export { Text };
