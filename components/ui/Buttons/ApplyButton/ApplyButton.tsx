import { twMerge } from "tailwind-merge";

// Shared
import { TextProps } from "shared";

const ApplyButton: React.FC<TextProps> = ({ children, className }) => {
  return (
    <button
      className={twMerge(`border- gray-color-500 h-[19px] w-[69px] rounded-[30px]
    border text-[8px]  font-bold uppercase leading-3 ${className}`)}
    >
      {children}
    </button>
  );
};

export { ApplyButton };
