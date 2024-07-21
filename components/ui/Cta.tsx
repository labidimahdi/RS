import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

// shared
import { contact } from "shared";

const Cta: React.FC = () => {
  const localActive = useLocale();

  const t = useTranslations("navigation");

  return (
    <Link href={`/${localActive}/${contact}`}>
      <div className="w-[213px] h-[66px] ml-[60px] right-0 text-white text-base font-bold leading-normal bg-primary-color-500 rounded-tl-[30px] hover:bg-fifth-color-500 rounded-bl-[30px] shadow justify-center items-center  inline-flex">
        {t(contact)}
      </div>
    </Link>
  );
};

export default Cta;
