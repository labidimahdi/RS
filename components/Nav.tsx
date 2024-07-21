import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// Shared
import { slugData } from "shared";

export default function Nav({ slug }: { slug: string }) {
  const t = useTranslations("navigation");
  const [activeLink, setActiveLink] = useState("");
  const localActive = useLocale();
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    // Initial check for active link on render
    setActiveLink(segment ? segment : slug);
  }, [localActive, segment, slug]);

  const handleClick = (href: string) => setActiveLink(href);

  return (
    <div className="flex items-start justify-center xl:gap-4 lg:gap-2">
      {slugData.map((slug) => (
        <div key={slug} className="rounded-full lg:px-[1px] xl:px-2">
          <Link
            href={`/${localActive}/${slug}`}
            className={`text-[13px] font-bold uppercase decoration-primary-color-500 hover:text-primary-color-500 hover:underline hover:decoration-4 ${
              activeLink === slug && "underline decoration-4"
            }`}
            onClick={() => handleClick(slug)}
          >
            {t(slug)}
          </Link>
        </div>
      ))}
    </div>
  );
}
