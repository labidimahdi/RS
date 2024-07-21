import React from "react";
import { twMerge } from "tailwind-merge";

//  shared
import { ButtonEnum, ButtonProps } from "shared";

const PrimaryButton: React.FC<ButtonProps> = ({
  type,
  className,
  disabled,
  icon,
  iconIsRight,
  text,
  isBlack,
  onClick
}) => {
  return (
    <>
      {icon && !text ? (
        <button
          onClick={onClick}
          disabled={disabled}
          className={twMerge(
            `h-10 w-10 rounded-full shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)]  ${
              disabled
                ? "text-disabled cursor-not-allowed border-none bg-gray-color-200"
                : isBlack
                  ? "bg-black-color-900"
                  : "bg-primary-color-500 hover:bg-fifth-color-500"
            }`,
          )}
        >
          <div className="mx-auto flex items-center justify-center overflow-hidden">
            {icon ? (
              <>
                {iconIsRight ? (
                  <>
                    {text}
                    <div className={`${text && "ml-2"}`}>{icon}</div>
                  </>
                ) : (
                  <>
                    <div className={`${text && "mr-2"}`}>{icon}</div>
                    {text}
                  </>
                )}
              </>
            ) : (
              <>{text}</>
            )}
          </div>
        </button>
      ) : (
        <button
        onClick={onClick}
          disabled={disabled}
          className={twMerge(` w-fit   border-none  shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)]
      ${type === ButtonEnum.XLARGE ? "h-[64px]" : type === ButtonEnum.LARGE ? "h-[50px]" : type === ButtonEnum.SMALL ? "h-[33px]" : "h-[41px]"} text-white-color hover:text-white-color
     ${
       disabled
         ? "text-disabled cursor-not-allowed border-none bg-gray-color-200"
         : isBlack
           ? "bg-black-color-900"
           : "bg-primary-color-500 hover:bg-fifth-color-500"
     }
     inline-flex items-center justify-center gap-2.5 rounded-[30px] border-2  px-5 py-2.5 text-sm font-bold leading-[21px] ${className}`)}
        >
          <div className="mx-auto flex items-center justify-center overflow-hidden">
            {icon ? (
              <>
                {iconIsRight ? (
                  <>
                    {text}
                    <div className={`${text && "ml-2"}`}>{icon}</div>
                  </>
                ) : (
                  <>
                    <div className={`${text && "mr-2"}`}>{icon}</div>
                    {text}
                  </>
                )}
              </>
            ) : (
              <>{text}</>
            )}
          </div>
        </button>
      )}
    </>
  );
};

export { PrimaryButton };
