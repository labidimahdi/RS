import React, { FC, useEffect, useState } from "react";

import { PaginationProps } from "shared";
import { ArrowUpIcon } from "../icons";
import { TextButton } from "../Texts/TextButton/TextButton";
import { Text } from "../Texts/Text/Text";

const Pagination: FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onPageChange,
}) => {
  const [maxButtons, setMaxButtons] = useState<number>(
    lastPage / 5 <= 1 ? 5 : 3,
  );

  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (lastPage - currentPage <= 2) {
      setMaxButtons(5);
      setShow(true);
    } else if (lastPage - currentPage == 3) {
      setMaxButtons(3);
      setShow(false);
    } else if (lastPage == 4) {
      setMaxButtons(4);
      setShow(true);
    } else if (lastPage == 5) {
      setMaxButtons(5);
      setShow(true);
    } else {
      setMaxButtons(3);
      setShow(false);
    }
  }, [currentPage]);

  const getPages = () => {
    let startPage = Math.max(currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = Math.min(startPage + maxButtons - 1, lastPage);

    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPages();

  const NextPage = () => {
    if (currentPage + 3 == lastPage) {
      onPageChange(lastPage - 1);
    } else {
      onPageChange(currentPage + 3);
    }
  };

  return (
    <div className="mb-10 mt-5 flex items-center justify-center gap-3 lg:gap-6">
      <TextButton size="medium" fontWeight="bold">
        <button
          className="group flex items-center justify-center gap-x-1 shadow-none"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowUpIcon
            width={9}
            height={7}
            fillColor={`${currentPage === 1 ? "fill-gray-color-400" : "fill-black-color-900 group-hover:fill-primary-color-500"}`}
            className=" rotate-[270deg] lg:h-[11px] lg:w-[13px]"
          />
          <div
            className={`${currentPage === 1 ? "text-gray-color-400" : "text-black-color-900 group-hover:text-primary-color-500"} `}
          >
            Previous
          </div>
        </button>
      </TextButton>
      <div className="flex gap-2 lg:gap-3">
        {pages.map((page) => (
          <div
            key={page}
            className={`flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-[5px] text-center font-bold shadow-md transition-colors duration-100 hover:bg-primary-color-500 hover:text-white lg:h-[44px] lg:w-[48px] lg:rounded-[10px] ${
              page === currentPage ? "bg-fifth-color-900 text-white" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            <Text
              className={`text-justify ${page === currentPage && "text-white-color"} text-[12px] font-bold`}
            >
              {page}
            </Text>
          </div>
        ))}
        {!show ? (
          <>
            <div
              key={maxButtons + 1}
              className={`flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-[5px] text-center font-bold shadow-md transition-colors duration-100 hover:bg-primary-color-500 hover:text-white lg:h-[44px] lg:w-[48px] lg:rounded-[10px] `}
              onClick={() => NextPage()}
            >
              <Text className={`text-justify  text-[12px] font-bold`}>
                {show || currentPage + 3 == lastPage ? lastPage - 1 : "..."}
              </Text>
            </div>
            <div
              key={lastPage}
              className={`flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-[5px] text-center font-bold shadow-md transition-colors duration-100 hover:bg-primary-color-500 hover:text-white lg:h-[44px] lg:w-[48px] lg:rounded-[10px] `}
              onClick={() => onPageChange(lastPage)}
            >
              <Text className={`text-justify  text-[12px] font-bold`}>
                {lastPage}
              </Text>
            </div>
          </>
        ) : null}
      </div>
      <TextButton size="medium" fontWeight="bold">
        <button
          className="group flex items-center justify-center gap-x-1 shadow-none"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
        >
          <div
            className={`${currentPage === lastPage ? "text-gray-color-400" : "text-black-color-900 group-hover:text-primary-color-500"} `}
          >
            Next
          </div>
          <ArrowUpIcon
            width={9}
            height={7}
            fillColor={`${currentPage === lastPage ? "fill-gray-color-400" : "fill-black-color-900 group-hover:fill-primary-color-500"}`}
            className=" rotate-90 lg:h-[11px] lg:w-[13px]"
          />
        </button>
      </TextButton>
    </div>
  );
};

export default Pagination;
