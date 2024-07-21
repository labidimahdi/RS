"use client";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// components
import Logo from "./ui/Logo/Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import LocalSwitcher from "./LocalSwitcher";
import Cta from "./ui/Cta";
import { OutlinedButton } from "./ui/Buttons/OutlinedButton/OutlinedButton";

// Shared
import { contact, HeaderProps } from "shared";

const Header: React.FC<HeaderProps> = ({}) => {
  const localActive = useLocale();
  const t = useTranslations("navigation");

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
    <header
      className={twMerge(
        `sticky top-0 z-30 h-[66px] w-full rounded-bl-[15px] rounded-br-[15px] text-white-color   ${
          header ? "bg-transparent bg-black-color-900  shadow-lg" : "relative"
        }`,
      )}
    >
      {header ? (
        <>
        {/* Header scrolled */}
          <div className={`flex h-full items-center justify-between`}>
            <div className="flex items-start justify-start pl-10">
              <Logo width={178} height={40} light />
            </div>

            <div className="flex items-center">
              {/* NAV */}
              <div className={`hidden lg:flex`}>
                <Nav slug={""} />
              </div>
              {/* MobileNav */}
              <div className="px-10 lg:hidden">
                <MobileNav />
              </div>
            </div>
            <div className="hidden items-center justify-end gap-1 lg:flex">
              <Cta />
            </div>
          </div>
        </>
      ) : (
        <>
        {/* Header not scrolled */}
          <div className={`mx-10 flex h-full items-center justify-between`}>
            <div className="flex items-start justify-start">
              <Logo width={178} height={40} light />
            </div>

            <div className="flex items-center">
              {/* NAV */}
              <div className={`hidden lg:flex`}>
                <Nav slug={""} />
              </div>
              {/* MobileNav */}
              <div className="pl-4 lg:hidden">
                <MobileNav />
              </div>
            </div>
            <div className="hidden items-center justify-end gap-1 lg:flex">
              <div className=" flex items-center justify-center">
                <Link href={`/${localActive}/${contact}`}>
                  <OutlinedButton
                    text={t(contact)}
                    className={"bg-transparent mr-5 px-5 text-white-color"}
                    rounded="rounded-full "
                  />
                </Link>
                <LocalSwitcher />
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
export default Header;
