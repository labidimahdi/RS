import { twMerge } from "tailwind-merge";

// components
import { Title } from "../../Texts/Title/Title";
import { Text } from "../../Texts/Text/Text";
// Shared
import { CardProps } from "shared";

const Card: React.FC<CardProps> = ({
  icon,
  title,
  text,
  children,
  beforeText = false,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `mx-auto flex h-fit min-h-[200px] w-56 flex-col items-center justify-center gap-2 rounded-[5px] bg-white-color  py-6 shadow-[2px_4px_10px_1px_rgba(0,0,0,0.15)]  lg:min-h-[300px] lg:w-full lg:min-w-[340px] ${className}`,
      )}
    >
      <>{icon}</>
      {title && (
        <Title className="text-center text-xs lg:text-[15px]">{title}</Title>
      )}

      {children && beforeText && children}
      {text && (
        <Text
          size="meduim"
          className="m-4 text-center text-[12px] lg:text-[15px] "
        >
          {text}
        </Text>
      )}
      {children && !beforeText && children}
    </div>
  );
};

export { Card };
