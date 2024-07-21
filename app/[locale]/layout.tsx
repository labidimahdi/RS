import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

// Styling
import "./globals.css";

// Components
import Header from "components/header";
import Footer from "components/footer";
import ScrollToTopButton from "components/ScrollToTopButton";

// data
import { RootLayoutProps, layoutData } from "shared";

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: layoutData.title,
  description: layoutData.description,
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressContentEditableWarning>
      <body
        className={`${inter.className}  mx-auto flex h-full w-full flex-col`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <ScrollToTopButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
