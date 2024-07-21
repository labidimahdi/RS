import React from "react";

//  shared
import { ButtonEnum, ButtonProps } from "shared";

const SecondaryButton: React.FC<ButtonProps> = ({
  type,
  className,
  disabled,
  icon,
  iconIsRight,
  text,
  isBlack,
}) => {
  return (
    <>
      {icon && !text ? (
        <button
          disabled={disabled}
          className={`w-10 h-10 shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)] rounded-full group
          ${
            disabled
              ? "bg-gray-color-200 text-disabled cursor-not-allowed  text-white-color"
              : isBlack
                ? "bg-black-color-900 text-white-color"
                : "bg-secondary-color-500 hover:bg-fourth-color-900"
          }`}
        >
          <div className="flex justify-center items-center overflow-hidden mx-auto">
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
          disabled={disabled}
          className={`w-fit shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)] group
      ${type === ButtonEnum.XLARGE ? "h-[64px]" : type === ButtonEnum.LARGE ? "h-[50px]" : type === ButtonEnum.SMALL ? "h-[33px]" : "h-[41px]"}
      h-[41px] hover:text-white-color  text-primary-color-900 border-none fill-primary-color-900 ${
        disabled
          ? "bg-gray-color-200 text-disabled cursor-not-allowed  text-white-color"
          : isBlack
            ? "bg-black-color-900 text-white-color"
            : "bg-secondary-color-500 hover:bg-fourth-color-900"
      }
     px-5 py-2.5 text-md font-bold leading-[21px] rounded-[30px] border-2 justify-center items-center gap-2.5 inline-flex ${className}`}
        >
          <div className="flex justify-center items-center overflow-hidden mx-auto">
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

export { SecondaryButton };
