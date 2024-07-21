import { useEffect, useState } from "react";

function useFilterScroll() {
  // scroll absolute
  const [isAbsolute, setIsAbsolute] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsAbsolute(true);
      } else {
        setIsAbsolute(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAbsolute;
}

export default useFilterScroll;
