import useFilterScroll from "hooks/useFilterScroll";
import React from "react";

const FilterSectionSkeleton: React.FC<{}> = ({}) => {
  const rounded = "rounded-t-[15px] rounded-bl-[20px] rounded-br-[20px]";
  const isAbsolute = useFilterScroll();

  return (
    <>
      <div
        className={`hidden lg:flex ${isAbsolute ? "sticky top-16 z-30 bg-white-color py-6 shadow-[1px_4px_10px_0px_#00000040] lg:py-4" : "relative py-6"} flex w-full items-center justify-end gap-6 px-5 lg:justify-center `}
      >
        <div
          className={`${rounded} h-[29px] min-w-[180px] bg-primary-color-100 px-0`}
        ></div>
        <div
          className={`${rounded} h-[29px] min-w-[180px] bg-primary-color-100 px-0`}
        ></div>
        <div
          className={`${rounded} h-[29px] min-w-[180px] bg-primary-color-100 px-0`}
        ></div>
        <div
          className={`${rounded} h-[33px] min-w-[150px] bg-primary-color-100 px-0`}
        ></div>
        <div
          className={`${rounded} h-[33px] min-w-[150px] bg-primary-color-100 px-0`}
        ></div>
      </div>
      <div
        className={` flex items-center justify-between px-10 lg:hidden ${isAbsolute ? "sticky top-16 z-30 bg-white-color py-6 shadow-[1px_4px_10px_0px_#00000040] lg:py-4" : "relative py-6"} flex w-full items-center justify-end gap-6 px-10 lg:justify-center `}
      >
        <div className={`${rounded} h-6 w-16 bg-primary-color-100`}></div>
        <div className={`${rounded} h-8 w-8 bg-primary-color-100`}></div>
      </div>
    </>
  );
};

export default FilterSectionSkeleton;
