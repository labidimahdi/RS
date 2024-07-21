import React from "react";

const ListSectionSkeleton: React.FC<{}> = ({}) => {
  const rounded = "rounded-t-[15px] rounded-bl-[20px] rounded-br-[20px]";

  return (
    <div className="flex  h-full w-full items-center justify-center lg:flex-row">
      <div
        className={`flex h-full w-2/3 flex-col items-center justify-center py-6 lg:flex-row`}
      >
        <div
          className={`grid grid-cols-1 gap-5 lg:grid-cols-4 lg:place-content-center`}
        >
          {Array.from({ length: 8 }).map((_offer, index) => (
            <div
              key={index}
              className={`h-fit flex-col items-start justify-start rounded-[30px] bg-white px-4 pb-4 pt-6 shadow-[1px_4px_10px_0px_rgba(0,0,0,0.15)] hover:bg-purple-gray-500 lg:min-h-full  lg:w-[320px] lg:min-w-[300px] lg:pl-6  ${rounded} bg-secondary-color-100 pb-5 shadow-md`}
            >
              <div className="flex flex-col items-start justify-start">
                {/* address */}
                <div className="flex h-full w-full items-center justify-start gap-2">
                  <div className="h-4 w-4 rounded-full bg-primary-color-100 lg:h-5 lg:w-5" />
                  <div
                    className={`${rounded} h-4 w-40 bg-primary-color-100 pl-2`}
                  />

                  <div className="w-20 bg-primary-color-100 pl-2"></div>
                </div>
                {/* title */}
                <div className="group relative mt-4">
                  <div
                    className={`${rounded} h-4 w-20 bg-primary-color-100 pl-2`}
                  ></div>

                  <div className="mt-2 h-1 w-[105px] bg-primary-color-500/50">
                    <span className=" absolute bottom-0 left-0 h-1 w-0 bg-primary-color-100 transition-all  group-hover:w-[105px]"></span>
                  </div>
                </div>
                {/* details */}
                <div className=" group my-4 flex h-20 w-full max-w-[300px] flex-col items-start justify-start rounded-[10px]  bg-primary-color-100 py-2 "></div>
                {/* apply button */}
                <div
                  className={`${rounded} h-8 w-40 bg-primary-color-100`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListSectionSkeleton;
