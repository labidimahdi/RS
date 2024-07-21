import React from "react";

//  shared
import { ButtonEnum, ButtonProps } from "shared";
import { twMerge } from "tailwind-merge";

const OutlinedButton: React.FC<ButtonProps> = ({
  type,
  className,
  disabled,
  icon,
  iconIsRight,
  text,
  isBlack,
  rounded,
  onClick
}) => {
  return (
    <>
      {icon && !text ? (
        <button
          onClick={onClick}
          disabled={disabled}
          className={twMerge(`group h-10  w-10 rounded-full  border-2 shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)]
          ${
            disabled
              ? "text-disabled cursor-not-allowed border-2  border-gray-color-200 bg-white-color text-gray-color-200"
              : `border-primary-color-500 bg-white-color ${
                  isBlack
                    ? "border-black-color-900 text-black-color-900 focus:border-primary-color-900 focus:bg-white-color focus:text-primary-color-900"
                    : " text-black-color-900 hover:bg-primary-color-500  hover:text-white-color focus:border-primary-color-900 focus:bg-white-color focus:text-primary-color-900"
                }`
          }`)}
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
          className={twMerge(`w-fit ${rounded ? rounded : "rounded-[8px]"} group shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)]
      ${type === ButtonEnum.XLARGE ? "h-[64px]" : type === ButtonEnum.LARGE ? "h-[50px]" : type === ButtonEnum.SMALL ? "h-[33px]" : "h-[41px]"}
      h-[41px]   fill-black-color-900 ${
        disabled
          ? "text-disabled cursor-not-allowed bg-white-color  text-gray-color-200"
          : `bg-white-color ${
              isBlack
                ? "border-2 border-black-color-900 text-black-color-900 focus:border-primary-color-900 focus:bg-white-color focus:text-primary-color-900"
                : " border-primary-color-500 text-black-color-900 hover:bg-primary-color-500 hover:text-white-color focus:border-primary-color-900 focus:bg-white-color focus:text-primary-color-900"
            }`
      }
     text-md inline-flex items-center justify-center gap-2.5  border-2 py-2.5 font-bold leading-[21px] ${className}`)}
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

export { OutlinedButton };
