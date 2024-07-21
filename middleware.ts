import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

// import from file 
import { locales, localePrefix, pathnames } from './navigation';

export default async function middleware(request: NextRequest) {

  // Create and call the next-intl middleware 
  const handleI18nRouting = createIntlMiddleware({
    defaultLocale: 'en',
    localePrefix,
    locales,
    pathnames

  });
  const response = handleI18nRouting(request);
    return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};