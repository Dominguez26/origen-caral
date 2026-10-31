import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import { routing } from "@/i18n/routing";
import "../globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: { es: "/", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const { nav, common } = await getMessages();

  return (
    <html lang={locale} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <NextIntlClientProvider messages={{ nav, common }}>
          <a href="#contenido" className="saltar">
            {(common as Record<string, string>).skipToContent}
          </a>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
