import { useState, useEffect } from "react";

const useOutsideAlerter: React.FC<{}> = (ref: any) => {
  const [isOutSide, setIsOutSide] = useState<boolean>(false);
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutSide(true);
      } else {
        setIsOutSide(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return isOutSide;
};

export default useOutsideAlerter;
