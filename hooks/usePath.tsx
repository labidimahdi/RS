import { useLocale } from "next-intl";


function usePath(pageName: string): string {
  const localeActive= useLocale()

  return `${localeActive}/${pageName}`;
}

export default usePath;
