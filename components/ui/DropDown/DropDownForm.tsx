"use client";
import React, { useEffect, useRef, useState } from "react";
import { AccordionIcon } from "../icons";
import useOutsideAlerter from "hooks/useOutsideClick";
import { autocompleteInterface, optionInterface } from "shared/interfaces/dropdowns.interface";
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";

const DropdownForm: React.FC<autocompleteInterface> = ({
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


  return (
    <div className={`${className} relative`}>
      {!value &&(
        <AccordionIcon
          height={8}
          width={8}
          className="absolute top-4 right-5 fill-black"
        />
      )}
      <div
        onClick={() => setShowOptions(true)}
        className={`h-10 min-w-[191px] appearance-none py-2 lg:min-w-[220px] ${
          outlined && "rounded-[8px] border"
        } ${
          showOptions
            ? "rounded-b-none border-b-[0px] bg-white"
            : "border-b "
        } bg-primary-color-500 bg-opacity-5  text-[13px] lg:text-[15px] outline-none border-none pl-2`}
      >
        <p
          className={
            value
              ? "w-full py-1 h-full text-[13px] lg:text-[15px] capitalize leading-[19px] text-black lg:ml-0 lg:leading-[12px]"
              : "text-black opacity-60"
          }
        >
          {options.find((_e) => _e?.value === value)?.label ||
            value ||
            placeholder}
            <AccordionIcon
          height={8}
          width={8}
          className="absolute top-4 right-5 fill-black"
        />
        </p>
      </div>
      {showOptions && (
        <div className="relative">
          
          <ul
            ref={wrapperRef}
            className="relative z-[1000] w-full bg-white-color pl-0 opacity-100 transition-opacity duration-300 lg:absolute lg:rounded-b-[8px]"
          >
            <div
              className={`${
                showOptions && "mx-2 border-black-color-500 lg:mb-2 lg:border-b"
              }`}
            />
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer py-1 pl-2 text-[13px] hover:bg-primary-color-500 lg:rounded-[4px] text-black hover:text-white-color lg:px-3 lg:text-[15px] ${
                  options.find((_e) => _e?.value === value)?.label ===option.label && "bg-primary-color-500 text-white-color"
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default DropdownForm;
