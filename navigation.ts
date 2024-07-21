import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "fr"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  "/": "/",

  // specify each external path per locale.
  "/home": {
    en: "/",
    fr: "/",
  },
  "/about": {
    en: "/about-us",
    fr: "/a-propos",
  },
  '/services': {
    en: '/services',
    fr: '/services'
  },
  '/services/web-development': {
    en: '/services/web-development',
    fr: '/services/developpement-web'
  },
  '/services/data-management': {
    en: '/services/data-management',
    fr: '/services/gestion-donnees'
  },
  '/services/cyber-security': {
    en: '/services/cyber-security',
    fr: '/services/cyber-securite'
  },
  '/services/security-and-backup': {
    en: '/services/security-and-backup',
    fr: '/services/securite-et-sauvegarde'
  },
  '/services/cloud-management': {
    en: '/services/cloud-management',
    fr: '/services/gestion-cloud'
  },
  "/contact": {
    en: "/contact",
    fr: "/contact",
  },
  "/nearshore": {
    en: "/nearshore",
    fr: "/nearshore",
  },
  "/career": {
    en: "/career",
    fr: "/career",
  },
  '/career/[slug]': {
    en: '/career/[slug]',
    fr: '/career/[slug]'
  },
  '/blog': {
    en: '/blog',
    fr: '/blog'
  },
  '/blog/[slug]': {
    en: '/blog/[slug]',
    fr: '/blog/[slug]'
  },
  '/services/[slug]': {
    en: '/services/[slug]',
    fr: '/services/[slug]'
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
