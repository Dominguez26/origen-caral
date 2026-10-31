import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import shared from "@/styles/shared.module.css";
import styles from "./LegalPage.module.css";

export type LegalKind = "terms" | "privacy" | "complaints";

export async function legalMetadata(locale: string, kind: LegalKind): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `legal.${kind}` });
  return { title: t("title") };
}

export default async function LegalPage({
  locale,
  kind,
}: {
  locale: string;
  kind: LegalKind;
}) {
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const sections = t.raw(`${kind}.sections`) as string[];

  return (
    <>
      <main id="contenido" className={`${shared.wrap} ${styles.page}`}>
        <h1 className={shared.title}>{t(`${kind}.title`)}</h1>
        <p className={styles.updated}>
          {t("updated")}: {t("pending")}
        </p>
        {sections.map((heading) => (
          <section key={heading} className={styles.section}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={shared.text}>{t("pending")}</p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
