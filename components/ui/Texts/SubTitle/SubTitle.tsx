import React from "react";
import { twMerge } from "tailwind-merge";

// Shared
import { TextProps } from "shared";

const SubTitle: React.FC<TextProps> = ({ children, className }) => {
  return (
    <h2
      className={twMerge(`cursor-default text-[13px] font-bold leading-snug
      lg:text-[15px] ${className}`)}
    >
      {children}
    </h2>
  );
};

export { SubTitle };
