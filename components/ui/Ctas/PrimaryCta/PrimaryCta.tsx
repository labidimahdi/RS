import { twMerge } from "tailwind-merge";
import Link from "next/link";
import React from "react";
// components
import { PrimaryButton } from "../../Buttons/PrimaryButton/PrimaryButton";
import { PhoneIcon } from "../../icons";
// shared
import { CallToActionProps } from "shared/interfaces";
import { ButtonEnum } from "shared/enum";

const PrimaryCta: React.FC<CallToActionProps> = ({
  children,
  buttonText,
  buttonPath,
  bgImage,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `h-max-[156px] flex-col-2 mx-auto lg:mb-0  lg:mt-10 mt-8 mb-10 h-[170px] items-center justify-center gap-x-20 rounded-[40px] bg-center bg-no-repeat px-14 py-4 lg:flex lg:w-5/6 ${bgImage} ${className}`,
      )}
    >
      <div className="flex items-center justify-center py-3 text-center uppercase leading-[54px] tracking-wider lg:py-0">
        {children}
      </div>
      <div className="flex justify-center">
        <Link href={`/${buttonPath}`}>
          <PrimaryButton
            type={ButtonEnum.LARGE}
            icon={
              <PhoneIcon width={20} height={20} fillColor="fill-white-color" />
            }
            text={buttonText}
            rounded="rounded-full"
            className="lg:text-[24px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default PrimaryCta;
