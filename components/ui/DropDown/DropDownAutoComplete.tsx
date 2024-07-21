"use client";
import React, { useEffect, useRef, useState } from "react";

// components
import { SearchIcon } from "../icons/SearchIcon/SearchIcon";
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";

// hooks
import useOutsideAlerter from "hooks/useOutsideClick";

import {
  autocompleteInterface,
  autocompleteMultiInterface,
  optionInterface,
} from "shared/interfaces/dropdowns.interface";

const AutocompleteDropdown: React.FC<autocompleteInterface> = ({
  options,
  onChange,
  placeholder,
  value,
  className,
  name,
}: autocompleteInterface) => {
  const [filteredOptions, setFilteredOptions] = useState<optionInterface[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const isOutside = useOutsideAlerter(wrapperRef);
  useEffect(() => {
    if (showOptions && isOutside) setShowOptions(false);
  }, [isOutside, showOptions]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange({ [name]: inputValue });
    if (inputValue) {
      // Filter options based on input value
      const filteredOptions = options.filter((option: optionInterface) =>
        option.value.toLowerCase().includes(inputValue.toLowerCase()),
      );

      setFilteredOptions(filteredOptions);
      setShowOptions(true);
    } else setShowOptions(false);
  };

  const handleOptionClick = (option: optionInterface) => {
    onChange({ [name]: option.value });
    setFilteredOptions([]);
    setShowOptions(false);
  };

  const handleInputClear = () => {
    onChange({ [name]: "" });
    setShowOptions(false);
  };
  return (
    <div className={`${className} relative `}>
      {!showOptions && (
        <SearchIcon
          width={16}
          height={16}
          className="absolute left-2 top-[8px] lg:top-[9px] lg:h-[20px] lg:w-[20px]"
          fillColor="fill-primary-color-500"
        />
      )}
      <input
        type="text"
        value={value || ""}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`lg:placeholder:font-none rounded-[8px] border pl-7 text-[13px] font-bold placeholder:text-[13px] placeholder:font-normal placeholder:text-gray-color-900 lg:min-w-[220px]  lg:pl-9 lg:text-[14px] ${showOptions && filteredOptions?.length > 0 ? " rounded-b-none  border-b-[0px]" : "border-b"} ${className} rounded-[8px] border-primary-color-500 bg-white-color p-2 outline-none`}
      />
      {showOptions && filteredOptions.length > 0 && (
        <div className="relative">
          <ul
            ref={wrapperRef}
            className="absolute z-[1000] max-h-[92px] w-full overflow-y-auto rounded-b-[8px] border-x border-b border-primary-color-500 bg-white-color p-[0px_8px_8px_8px]  opacity-100  transition-opacity  duration-300 scrollbar-thin scrollbar-track-white-color scrollbar-thumb-primary-color-500 lg:max-h-[110px]"
          >
            <div
              className={` ${showOptions && "mx-2 mb-2  border-b border-gray-color-900"}`}
            />
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={(e) => {
                  handleOptionClick(option);
                }}
                className="group cursor-pointer px-3 py-1 hover:bg-primary-color-500"
              >
                <div className="flex items-center gap-2 text-[13px] group-hover:text-white-color lg:text-[15px]">
                  <SearchIcon
                    width={13}
                    height={13}
                    fillColor="fill-primary-color-500 group-hover:fill-white-color lg:w-[24px] lg:h-[24px]"
                  />
                  {option.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {value && (
        <button
          className="absolute right-2 top-[8px] text-gray-500 lg:top-[9px]"
          onClick={handleInputClear}
        >
          <CloseIcon
            width={15}
            height={15}
            fillColor="fill-black-color-900 lg:mt-1 lg:mr-4"
          />
        </button>
      )}
    </div>
  );
};

const MultiAutocompleteDropdown: React.FC<autocompleteMultiInterface> = ({
  options,
  onChange,
  placeholder,
  value,
  className,
  name,
}: autocompleteMultiInterface) => {
  const [filteredOptions, setFilteredOptions] = useState<optionInterface[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const isOutside = useOutsideAlerter(wrapperRef);
  useEffect(() => {
    if (showOptions && isOutside) setShowOptions(false);
  }, [isOutside, showOptions]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange({ [name]: inputValue });
    if (inputValue) {
      // Filter options based on input value
      const filteredOptions = options.filter((option: optionInterface) =>
        option.value[0].toLowerCase().includes(inputValue.toLowerCase()),
      );

      setFilteredOptions(filteredOptions);
      setShowOptions(true);
    } else setShowOptions(false);
  };

  const handleOptionClick = (option: optionInterface) => {
    onChange({ [name]: [option.value] });
    setFilteredOptions([]);
    setShowOptions(false);
  };

  const handleInputClear = () => {
    onChange({ [name]: [] });
    setShowOptions(false);
  };
  return (
    <div className={`${className} relative `}>
      {!showOptions && (
        <SearchIcon
          width={16}
          height={16}
          className="absolute left-2 top-[13px] lg:h-[20px] lg:w-[20px]"
          fillColor="fill-primary-color-500"
        />
      )}
      <input
        type="text"
        value={value || ""}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`lg:placeholder:font-none rounded-[8px] border pl-7 text-[13px] font-bold placeholder:text-[13px] placeholder:font-normal placeholder:text-gray-color-900 lg:min-w-[409px]   lg:pl-9 lg:text-[14px] ${showOptions && filteredOptions?.length > 0 ? " rounded-b-none  border-b-[0px]" : "border-b"} ${className} rounded-[8px] border-primary-color-500 bg-white-color p-2 outline-none`}
      />
      {showOptions && filteredOptions.length > 0 && (
        <div className="relative">
          <ul
            ref={wrapperRef}
            className="absolute z-[1000] max-h-[92px] w-full overflow-y-auto rounded-b-[8px] border-x border-b border-primary-color-500 bg-white-color p-[0px_8px_8px_8px]  opacity-100  transition-opacity  duration-300 scrollbar-thin scrollbar-track-white-color scrollbar-thumb-primary-color-500 lg:max-h-[110px]"
          >
            <div
              className={` ${showOptions && "mx-2 mb-2  border-b border-gray-color-900"}`}
            />
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={(e) => {
                  handleOptionClick(option);
                }}
                className="group cursor-pointer px-3 py-1 hover:bg-primary-color-500"
              >
                <div className="flex items-center gap-2 text-[13px] group-hover:text-white-color lg:text-[15px]">
                  <SearchIcon
                    width={13}
                    height={13}
                    fillColor="fill-primary-color-500 group-hover:fill-white-color lg:w-[24px] lg:h-[24px]"
                  />
                  {option.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {value && (
        <button
          className="absolute right-2 top-[13px] text-gray-500 lg:top-[11px]"
          onClick={handleInputClear}
        >
          <CloseIcon
            width={15}
            height={15}
            fillColor="fill-black-color-900 lg:mt-1 lg:mr-4"
          />
        </button>
      )}
    </div>
  );
};

export default AutocompleteDropdown;

export { MultiAutocompleteDropdown };
