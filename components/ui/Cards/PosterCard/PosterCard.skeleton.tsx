import React from "react";

const PosterCardSkeleton: React.FC<{}> = ({}) => {
  const rounded = "rounded-t-[15px] rounded-bl-[20px] rounded-br-[20px]";

  return (
    <div
      className={`w-[300px] max-w-screen-sm animate-pulse flex-col  ${rounded} bg-secondary-color-100 pb-5 shadow-md  lg:min-h-[538px] lg:w-[590px]`}
    >
      {/* image */}
      <div
        className={` mx-auto flex w-full justify-center overflow-hidden ${rounded} h-[152px] w-[300px] bg-primary-color-100 object-cover lg:h-[300px] lg:w-full`}
      />
      <div className="flex justify-between px-5">
        {/* date */}
        <div className="flex items-center justify-center gap-x-3 pb-5 pt-3">
          <div className="h-3 w-3 rounded-full bg-primary-color-100 lg:h-5 lg:w-5" />
          <div className="h-3 w-10  rounded-full bg-primary-color-100 lg:h-5 lg:w-20"></div>
        </div>
        {/* author */}
        <div className="flex items-center justify-center gap-x-3 pb-5 pr-24 pt-3 lg:pr-72">
          <div className="h-3 w-3 rounded-full bg-primary-color-100 lg:h-5 lg:w-5" />
          <div className="h-3 w-10  rounded-full bg-primary-color-100 lg:h-5 lg:w-20"></div>
        </div>
        {/* pdf icon */}
        <div className="flex items-center justify-center gap-x-3 pb-5 pt-3">
          <div className="h-3 w-3 rounded-full bg-primary-color-100 lg:h-5 lg:w-5" />
        </div>
      </div>
      {/* title */}
      <div className={`mx-5 h-6 w-11/12 ${rounded} bg-primary-color-100`}></div>
      {/* description */}
      <div
        className={`mx-5 mt-4 h-12 w-11/12 ${rounded} bg-primary-color-100`}
      ></div>
      <div className="flex items-baseline justify-between pr-5 pt-5 align-baseline lg:flex lg:flex-row lg:items-end">
        {/* button */}
        <div
          className={` mx-5 mt-4 h-[20px] w-[100px] lg:h-[34px] lg:w-[150px] ${rounded} bg-primary-color-100`}
        ></div>
        {/* tags */}
        <div className="flex max-w-screen-sm flex-col items-end gap-2 lg:flex-row lg:gap-2">
          {Array.from({ length: 8 }, (_, index) => index + 1).map(
            (tag, index2) => (
              <div
                className={`flex h-[14px]  ${rounded} w-fit items-center justify-center rounded-[24px] bg-primary-color-100 p-2 text-center lg:h-[23px] lg:w-fit`}
                key={tag}
              >
                <div className="h-2 w-10"></div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterCardSkeleton;
