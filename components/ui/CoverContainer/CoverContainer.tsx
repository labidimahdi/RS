/* eslint-disable @next/next/no-img-element */
"use client";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import React, { useState } from "react";
// components
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";
// shared
import { CoverContainerProps } from "shared";

const CoverContainer: React.FC<CoverContainerProps> = ({
  tab,
  coversType,
  className,
  hovered,
  id,

}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const showModal = (src: string) => {
    if (hovered) {
      setModalSrc(src);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imageClasses = `w-full object-cover ${hovered && "cursor-pointer hover:scale-110 transition duration-500"}`;

  return (
    <>
      <div className={twMerge(`${className}`)}>
        {coversType === "hr-h2c" && (
          <div className="h-full w-full flex-row">
            <div className="pb-[4px] lg:pb-[6px]">
              <div className="flex h-1/2 w-full justify-center overflow-hidden rounded-t-[15px]">
                <img
                  alt="CoverContainer1"
                  src={tab[0]}
                  height={100}
                  width={200}
                  className={`${imageClasses} h-[140px] rounded-t-[15px] lg:h-[350px]`}
                  onClick={() => showModal(tab[0])}
                />
              </div>
            </div>
            <div className="flex-cols-2 flex h-1/2 w-full gap-1 lg:gap-2">
              <div className="flex h-full w-1/2 justify-start overflow-hidden">
                <img
                  alt="CoverContainer2"
                  src={tab[1]}
                  height={100}
                  width={200}
                  className={`${imageClasses} h-[100px] lg:h-[350px]`}
                  onClick={() => showModal(tab[1])}
                />
              </div>
              <div className="flex h-full w-1/2 justify-start overflow-hidden">
                <img
                  alt="CoverContainer3"
                  src={tab[2]}
                  height={100}
                  width={100}
                  className={`${imageClasses} h-[100px] lg:h-[350px]`}
                  onClick={() => showModal(tab[2])}
                />
              </div>
            </div>
          </div>
        )}
        {coversType === "vr-v2c" && (
          <div className="flex-cols-2 flex h-full w-full gap-1 lg:gap-2">
            <div className="flex h-full w-1/2 justify-center overflow-hidden rounded-tl-[15px]">
              <img
                alt="CoverContainer1"
                src={tab[0]}
                height={100}
                width={200}
                className={`${imageClasses} h-[204px] rounded-tl-[15px] lg:h-[708px]`}
                onClick={() => showModal(tab[0])}
              />
            </div>
            <div className="h-full w-1/2 flex-row">
              <div className="pb-[4px] lg:pb-[8px]">
                <div className="flex h-1/2 w-full justify-start overflow-hidden rounded-tr-[15px]">
                  <img
                    alt="CoverContainer2"
                    src={tab[1]}
                    height={100}
                    width={200}
                    className={`${imageClasses} h-[100px] rounded-tr-[15px] lg:h-[350px]`}
                    onClick={() => showModal(tab[1])}
                  />
                </div>
              </div>
              <div className="flex h-1/2 w-full justify-start overflow-hidden">
                <img
                  alt="CoverContainer3"
                  src={tab[2]}
                  height={100}
                  width={100}
                  className={`${imageClasses} h-[100px] lg:h-[350px]`}
                  onClick={() => showModal(tab[2])}
                />
              </div>
            </div>
          </div>
        )}
        {coversType === "v2r" && (
          <div className="w-full flex-row ">
            <div className="pb-[4px] lg:pb-[6px]">
              <div className="flex w-full justify-center overflow-hidden rounded-t-[15px]">
                <img
                  alt="CoverContainer1"
                  src={tab[0]}
                  height={60}
                  width={300}
                  className={`${imageClasses} h-[120px] rounded-t-[15px] lg:h-[300px]`}
                  onClick={() => showModal(tab[0])}
                />
              </div>
            </div>
            <div className="flex w-full justify-center overflow-hidden">
              <img
                alt="CoverContainer2"
                src={tab[1]}
                height={60}
                width={300}
                className={`${imageClasses} h-[100px] lg:h-[300px]`}
                onClick={() => showModal(tab[1])}
              />
            </div>
          </div>
        )}
        {coversType === "hr" && (
          <div
            className={`flex w-full justify-center overflow-hidden rounded-t-[15px] lg:w-full`}
          >
            <img src={tab[0]} width={639} height={306} alt={tab[0]} className={`${imageClasses} h-[140px] lg:h-[300px]`} onClick={() => showModal(tab[0])} />
          </div>
        )}
      </div>
      {modalOpen && (
        <div className="fixed left-0 top-16 h-full w-screen bg-black-color-900 bg-opacity-70">
          <a
            className="fixed right-3 z-40 text-5xl text-primary-color-500 lg:right-4"
            href="javascript:void(0)"
            onClick={closeModal}
          >
            <CloseIcon
                  height={20}
                  width={20}
                  className="fixed right-4 z-40 mt-2 fill-primary-color-500  lg:h-8  lg:w-8"
                />
          </a>
          <div className="flex h-full w-full justify-center bg-black-color-900 bg-opacity-70 pt-20">
            <img
              alt="popUpImage"
              height={200}
              width={300}
              id="modal-img"
              className="h-fit rounded-[15px] object-cover lg:h-[400px] lg:w-[800px]"
              src={modalSrc}
            />
          </div>
        </div>
      )}
    </>
  );
};

export { CoverContainer };
