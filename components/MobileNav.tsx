"use client";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import LocalSwitcher from "./LocalSwitcher";
import Logo from "./ui/Logo/Logo";

// data
import { slugMobile } from "shared";

const MobileNav = () => {
  const t = useTranslations("navigation");
  const localActive = useLocale();
  const [mobilenav, setMobilenav] = useState(false);
  return (
    <>
      <div className="flex justify-center gap-2">
        <LocalSwitcher />
        <button
          onClick={() => setMobilenav(!mobilenav)}
          className="transition-transform"
        >
          {mobilenav ? (
            <Image
              src="/assets/XButton.svg"
              alt="image panel"
              width={18}
              height={16}
            />
          ) : (
            <Image
              src="/assets/panelButton.svg"
              alt="image panel"
              width={24}
              height={16}
            />
          )}
        </button>
      </div>
      <div
        className={`max-h-100vh fixed right-0 top-0 z-40 h-full w-full  overflow-auto bg-black-color-900 text-white-color transition-transform duration-500 ease-in-out ${
          !mobilenav ? "translate-x-full transition-all" : "translate-x-0 "
        }`}
      >
        <div className="flex items-center justify-end gap-4 p-8">
          <button
            onClick={() => setMobilenav(!mobilenav)}
            className="transition-transform"
          >
            <Image
              src="/assets/XButton.svg"
              alt="image panel"
              width={18}
              height={16}
            />
          </button>
        </div>
        <div className="flex justify-center pb-6">
          <Logo width={215} height={44} light={true} />
        </div>
        {slugMobile.map((slug, index) => (
          <ul key={index} className="mt-6 flex-grow px-16 font-bold">
            <li
              className={`${index === slugMobile.length - 1 ? "pb-20 pt-1" : "py-1"}  uppercase`}
            >
              <Link
                href={`/${localActive}/${slug}`}
                onClick={() => setMobilenav(!mobilenav)}
              >
                <div className="hover flex justify-between text-sm hover:text-primary-color-600">
                  {t(slug)}
                  <Image
                    src="/assets/Vector.svg"
                    alt="vector"
                    width={10}
                    height={10}
                  />
                </div>
              </Link>
              {index !== slugMobile.length - 1 && (
                <div className="mt-6 h-[0px] w-full border bg-black-color-500 opacity-30" />
              )}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default MobileNav;
