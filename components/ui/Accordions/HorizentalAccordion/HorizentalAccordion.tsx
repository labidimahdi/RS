"use client";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

// Components
import { Title } from "../../Texts/Title/Title";
import { AccordionIcon } from "components/ui/icons";

// Shared
import { HorizentalAccordionProps } from "shared";

const HorizentalAccordion: React.FC<HorizentalAccordionProps> = ({ data }) => {
  const [activeElement, setActiveElement] = useState(1);

  const handleClick = (value: number) => {
    if (value === activeElement) {
      setActiveElement(1);
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
      <div className="flex h-full w-full flex-col items-start justify-center lg:px-4">
        {data.map((q, index) => (
          <div
            className="group my-2 h-full w-full max-w-full lg:w-1/2"
            key={index + 1}
          >
            <div
              className={twMerge(
                `${
                  activeElement === index + 1
                    ? `bg-white-color py-4 `
                    : "bg-purple-gray-500/40 py-2"
                } group px-2 duration-300 sm:min-w-[320px] lg:w-[457px]`,
              )}
            >
              <button
                className={`${
                  activeElement === index + 1 && `lg:text-primary-color-500`
                } relative flex h-full w-full flex-col items-start text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none group-hover:text-primary-color-500`}
                type="button"
                onClick={() => handleClick(index + 1)}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="group flex h-full w-full items-start justify-between p-2 lg:items-center">
                  <Title className="text-[13px] lg:text-[15px]">
                    {q.title}
                  </Title>
                  <AccordionIcon
                    width={9}
                    height={9}
                    className={`mt-2 group-target:fill-primary-color-500 group-hover:fill-primary-color-500  lg:mt-0 lg:h-[12px] lg:w-[12px]
                ${activeElement === index + 1 && `rotate-180 fill-primary-color-500 duration-200`}
                `}
                  />
                </div>
                <div
                  className={`${
                    activeElement === index + 1 &&
                    ` border border-x-2 bg-primary-color-500`
                  }   w-full  bg-none group-hover:border group-hover:border-x-2 group-hover:border-primary-color-500 
                  `}
                ></div>
              </button>
            </div>
            <div
              className={`h-full w-full ${activeElement === index + 1 && `pb-4`} lg:hidden`}
            >
              <TECollapse
                show={activeElement === index + 1}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                {q.content}
              </TECollapse>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden h-full w-full flex-col items-start justify-center lg:flex lg:px-4">
        {data.map((q, index) => (
          <div
            key={index + 1}
            className={`h-full w-full ${activeElement === index + 1 && `pb-4`}`}
          >
            <TECollapse
              show={activeElement === index + 1}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              {q.content}
            </TECollapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HorizentalAccordion };
