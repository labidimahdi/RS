import React from "react";
import { twMerge } from "tailwind-merge";

// Shared
import { TextProps } from "shared";

const Title: React.FC<TextProps> = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        `cursor-default font-bold uppercase leading-tight lg:leading-[30px] ${className}`,
      )}
    >
      {children}
    </h1>
  );
};

export { Title };
