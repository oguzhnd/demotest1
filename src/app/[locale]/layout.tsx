import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";

import { routing } from "@/i18n/routing";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import { theme } from "theme";
import CustomDatesProvider from "@/utils/providers/DatesProvider";
import CustomModalsProvider from "@/utils/providers/ModalsProvider";

import { Geist } from "next/font/google";
import GoogleMapProvider from "@/utils/providers/GoogleMapProvider";
import AppGuardProvider from "@/utils/providers/AppGuard";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "NTT GO",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={geist.className} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link
          rel="shortcut icon"
          href="/favicon_light.png"
          media="(prefers-color-scheme:no-preference)"
        />
        <link
          rel="shortcut icon"
          href="/favicon_light.png"
          media="(prefers-color-scheme:dark)"
        />
        <link
          rel="shortcut icon"
          href="/favicon_dark.png"
          media="(prefers-color-scheme:light)"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <MantineProvider theme={theme}>
            <CustomDatesProvider>
              <CustomModalsProvider>
                <GoogleMapProvider>
                  <AppGuardProvider>{children}</AppGuardProvider>
                </GoogleMapProvider>
              </CustomModalsProvider>
            </CustomDatesProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
