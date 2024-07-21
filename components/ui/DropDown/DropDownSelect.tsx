"use client";
import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from "../icons/SearchIcon/SearchIcon";
import { AccordionIcon } from "../icons";
import useOutsideAlerter from "hooks/useOutsideClick";
import {
  autocompleteInterface,
  optionInterface,
} from "shared/interfaces/dropdowns.interface";
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";

const DropdownSelect: React.FC<autocompleteInterface> = ({
  options,
  onChange,
  outlined = true,
  value,
  className,
  placeholder,
  name,
}) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const isOutside = useOutsideAlerter(wrapperRef);

  useEffect(() => {
    if (showOptions && isOutside) setShowOptions(false);
  }, [isOutside, showOptions]);

  const handleOptionClick = (option: optionInterface) => {
    onChange({ [name]: option.value });
    setShowOptions(false);
  };

  const handleInputClear = () => {
    onChange({ [name]: null });
    setShowOptions(false);
  };
  return (
    <div className={`${className}  relative`}>
      {!value && (
        <AccordionIcon
          height={8}
          width={8}
          className="absolute right-0 top-4 lg:right-5"
        />
      )}
      <div
        onClick={() => setShowOptions(true)}
        className={`min-h-[35px] min-w-[191px] appearance-none py-2 pl-2 lg:min-w-[220px] ${outlined && "rounded-[8px] border"}   ${showOptions ? "rounded-b-none border-b-[0px]" : "border-b"} border-black-color-500  bg-white-color text-[13px] outline-none lg:border-primary-color-500 lg:px-4 lg:font-bold `}
      >
        <p
          className={
            value
              ? "w-fit rounded-[20px] border-[1.5px] border-black-color-900 px-3 text-[10px] capitalize leading-[19px] hover:cursor-pointer hover:border-primary-color-500 hover:bg-primary-color-500  hover:text-white-color  lg:ml-0 lg:px-4 lg:py-1 lg:leading-[12px]"
              : ""
          }
        >
          {options.find((_e) => _e?.value === value)?.label ||
            value ||
            placeholder}
        </p>
      </div>
      {showOptions && (
        <div className="relative">
          <ul
            ref={wrapperRef}
            className="relative z-[1000] w-full border-b border-black-color-500 bg-white-color pl-0 opacity-100  transition-opacity duration-300  lg:absolute lg:rounded-b-[8px] lg:border-x lg:border-primary-color-500 lg:p-[0px_8px_8px_8px]"
          >
            <div
              className={` ${showOptions && "mx-2 border-black-color-500  lg:mb-2 lg:border-b"}`}
            />
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer py-1 pl-2 text-[13px] hover:bg-primary-color-500 hover:text-white-color lg:px-3 lg:text-[15px] ${options.find((_e) => _e?.value === value)?.label === option.label && "bg-primary-color-500 text-white-color"}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      {value && (
        <button
          className="absolute right-0 top-[9px] text-gray-500 lg:right-2"
          onClick={handleInputClear}
        >
          <CloseIcon
            width={13}
            height={13}
            fillColor="fill-black-color-900 mt-1.5 lg:mr-4"
          />
        </button>
      )}
    </div>
  );
};

export default DropdownSelect;
