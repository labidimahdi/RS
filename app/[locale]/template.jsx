"use client";

import { motion } from "framer-motion";

// hooks
import useScrollProgress from "../../hooks/useScrollProgress";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bottom-0 right-0 top-0 z-40 w-1 bg-primary-color-600 transition-all duration-700"
      ></span>
    </>
  );
};

export default Template;
