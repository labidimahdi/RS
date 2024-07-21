"use client";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";

// Components
import { Title } from "../../Texts/Title/Title";
import { AccordionIcon } from "components/ui/icons";

// Shared
import { VerticalAccordionProps } from "shared";

const VerticalAccordion: React.FC<VerticalAccordionProps> = ({ data }) => {
  const [activeElement, setActiveElement] = useState(0);

  const handleClick = (value: number) => {
    if (value === activeElement) {
      setActiveElement(0);
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      {data.map((q, index) => (
        <div className="group h-full w-full max-w-full" key={index + 1}>
          <div className="group flex h-full w-full py-4">
            <button
              className={`${
                activeElement === index + 1 && `text-primary-color-500`
              } relative flex w-full flex-col rounded-t-[15px] bg-white-color pt-4 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none group-hover:text-primary-color-500`}
              type="button"
              onClick={() => handleClick(index + 1)}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="group flex h-full w-full items-start justify-between pb-4 lg:items-center">
                <Title className="max-w-[90%] text-[13px] lg:text-[20px] capitalize">
                  {q.title}
                </Title>
                <AccordionIcon
                  width={9}
                  height={9}
                  className={`mt-2 group-hover:fill-primary-color-500 lg:mt-0 lg:h-[12px] lg:w-[12px]
                ${activeElement === index + 1 && `rotate-180 fill-primary-color-500 duration-200`}
                `}
                />
              </div>
            </button>
          </div>
          <div
            className={`h-full w-full ${activeElement === index + 1 && `pb-4`}`}
          >
            <TECollapse
              show={activeElement === index + 1}
              className="!mt-0 !rounded-b-none !shadow-none"
            >
              {q.content}
            </TECollapse>
          </div>
          <div
            className={`${
              activeElement === index + 1 && `mt-4 bg-primary-color-500`
            }   w-full border border-x-2 bg-black-color-900 group-hover:border-primary-color-500`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export { VerticalAccordion };
