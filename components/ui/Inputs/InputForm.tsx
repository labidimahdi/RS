import React from "react";
import Image from "next/image";
import { inputInterface } from "shared/interfaces/dropdowns.interface";
import { twMerge } from "tailwind-merge";

const InputForm: React.FC<inputInterface> = ({
  value,
  className,
  placeholder,
  name,
  type,
  required,
  icon,
  iconIsRight,
  ImageSrc,
  id,
  onChange,
}) => {
  return (
    <label className="relative  lg:flex">
      <input
      id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
        className={twMerge(`focus:ring-0 my-2 mb-6 flex h-10 w-full rounded-[10px] bg-primary-color-500 bg-opacity-5 pl-2 outline-none border-none ${className}`)}
      />
      {icon && (
        <Image
          src={`${ImageSrc}`}
          alt="logo"
          width={18}
          height={18}
          className={`absolute lg:top-5 top-3 ${iconIsRight ? "right-4" : "left-4"}`}
        />
      )}
    </label>
  );
};

export default InputForm;
