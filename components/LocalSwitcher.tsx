import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

// Navigation
import { usePathname } from "navigation";

// Icons
import { FlechIcon } from "./ui/icons";

// Shared
import { Language } from "shared";

export default function LocalSwitcher(): JSX.Element {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState<string>(localActive);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setSelectedLocale(localActive);
  }, [localActive]);

  const handleButtonClick = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}/${pathname}`);
    });
    setShowOptions(false);
  };

  const toggleOptions = () => setShowOptions(!showOptions);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div className="flex h-[27x] w-[64px] items-center justify-between">
      <div className="relative flex h-full w-full text-[11px] font-bold">
        <div className="border-white mt-1  hidden h-[10px] w-[0px] border lg:flex"></div>
        <div className="flex h-full w-full items-center">
          <button
            type="button"
            className="bg-transparent h-[17px] w-10 cursor-pointer border-none uppercase outline-none"
            onClick={toggleOptions}
            disabled={isPending}
          >
            <FlechIcon
              width={13}
              height={19}
              className={`mr-1 inline-flex items-start`}
              fillColor={`fill-white-color`}
            />
            {selectedLocale === "en" ? Language.english : Language.french}
          </button>
        </div>
        {showOptions && (
          <div className="absolute left-[12px] top-[26px] h-9 w-[48px] rounded-bl-[9px] rounded-br-[9px] rounded-tr-[9px] border border-white-color border-opacity-70 bg-white-color shadow backdrop-blur-[30px] ">
            <div className="flex flex-col items-center">
              <button
                type="button"
                className="font-bold text-black-color-900"
                onClick={() => handleButtonClick("en")}
              >
                {Language.english}
              </button>
              <div className="h-[0px] w-9 border border-black-color-800 border-opacity-20"></div>
              <button
                type="button"
                className="font-bold text-black-color-900 "
                onClick={() => handleButtonClick("fr")}
              >
                {Language.french}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
