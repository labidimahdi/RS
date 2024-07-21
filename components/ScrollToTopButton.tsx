"use client";

import { useEffect, useState } from "react";

// Components
import { ArrowUpIcon } from "./ui/icons/ArrowUpIcon/ArrowUpIcon";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={`fixed z-50 bottom-24 right-4 rounded-full bg-primary-color-500 p-2 text-white-color transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon width={24} height={24} fillColor="fill-white-color" />
    </button>
  );
};

export default ScrollToTopButton;
