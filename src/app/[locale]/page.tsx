import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import { Collection, Founders, Origin } from "@/components/Sections";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <main id="contenido">
        <Hero />
        <Origin />
        <Journey />
        <Collection />
        <Founders />
      </main>
      <Footer />
    </>
  );
}
