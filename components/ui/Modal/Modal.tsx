"use client";
import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { Text } from "../Texts/Text/Text";
import { CloseIcon } from "../icons/CloseIcon/CloseIcon";

const Modal = ({ children, title, isOpen, setIsOpen }: any) => {
  return (
    <div>
      {/* <!-- Modal --> */}
      <TEModal
        show={isOpen}
        setShow={setIsOpen}
        className="z-[2000] bg-slate-500/25 "
      >
        <TEModalDialog centered={true} position="top-right">
          <TEModalContent>
            <TEModalHeader className=" bg-primary-color-500 px-5 py-4">
              {/* <!--Modal title--> */}
              <Text className=" text-[13px]	 font-medium uppercase	text-white-color">
                {title}
              </Text>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <CloseIcon
                  width={14}
                  height={14}
                  fillColor="fill-white-color"
                />
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>{children}</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light"></TERipple>
              <TERipple rippleColor="light"></TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};
export default Modal;
