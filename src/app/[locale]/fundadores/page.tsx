import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { Link } from "@/i18n/navigation";
import shared from "@/styles/shared.module.css";
import styles from "./fundadores.module.css";

const CHARACTERS = ["musician", "warrior", "priestess"] as const;
const EDITIONS = ["essential", "collector", "founder"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "foundersPage.meta" });
  const path = locale === "es" ? "/fundadores" : `/${locale}/fundadores`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: path,
      languages: { es: "/fundadores", en: "/en/fundadores" },
    },
  };
}

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("foundersPage");
  const w = await getTranslations("foundersPage.waitlist");

  const labels = {
    emailLabel: w("emailLabel"),
    consent: w("consent"),
    privacyLink: w("privacyLink"),
    submit: w("submit"),
    sending: w("sending"),
    success: w("success"),
    errorEmail: w("errorEmail"),
    errorConsent: w("errorConsent"),
    errorSend: w("errorSend"),
  };

  return (
    <>
      <main id="contenido">
        <section className={`${shared.wrap} ${styles.intro}`}>
          <div className={`${shared.grid} ${styles.split}`}>
            <div className={styles.main}>
              <p className={shared.label}>{t("label")}</p>
              <h1 className={shared.title}>{t("title")}</h1>
            </div>
            <div className={styles.aside}>
              <p className={shared.text}>{t("text")}</p>
            </div>
          </div>
        </section>

        <section className={`${shared.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <p className={shared.label}>{t("characters.label")}</p>
            <h2 className={shared.title}>{t("characters.title")}</h2>
          </div>
          <ol className={styles.characters}>
            {CHARACTERS.map((id) => {
              const p = `characters.items.${id}` as const;
              return (
                <li key={id} className={`${shared.grid} ${styles.character}`}>
                  <div className={styles.image}>{t(`${p}.image`)}</div>
                  <div className={styles.characterText}>
                    <p className={styles.culture}>{t(`${p}.culture`)}</p>
                    <h3 className={styles.name}>{t(`${p}.name`)}</h3>
                    <p className={`${shared.text} ${styles.story}`}>{t(`${p}.story`)}</p>
                    <p className={styles.attrLabel}>{t("characters.attributesLabel")}</p>
                    <p className={styles.attrs}>{t(`${p}.attributes`)}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="ediciones" className={`${shared.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <p className={shared.label}>{t("editions.label")}</p>
            <h2 className={shared.title}>{t("editions.title")}</h2>
          </div>
          <ul className={styles.editions}>
            {EDITIONS.map((id) => {
              const p = `editions.items.${id}` as const;
              const includes = t.raw(`${p}.includes`) as string[];
              return (
                <li key={id} className={`${shared.grid} ${styles.edition}`}>
                  <div className={styles.editionName}>
                    <h3 className={styles.name}>{t(`${p}.name`)}</h3>
                    {id === "founder" && (
                      <p className={styles.badge}>{t("editions.items.founder.badge")}</p>
                    )}
                  </div>
                  <ul className={styles.includes} aria-label={t("editions.includesLabel")}>
                    {includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.priceCol}>
                    <p className={styles.price}>
                      <span className={styles.currency}>{t("editions.currency")}</span>{" "}
                      {t(`${p}.price`)}
                    </p>
                    <Link href="/fundadores#lista-de-espera" className={shared.action}>
                      {t("editions.cta")}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={styles.note}>{t("editions.note")}</p>
        </section>

        <section id="lista-de-espera" className={styles.waitlist}>
          <div className={`${shared.wrap} ${styles.inner}`}>
            <div className={`${shared.grid} ${styles.split}`}>
              <div className={styles.main}>
                <h2 className={shared.title}>{w("title")}</h2>
                <p className={`${shared.text} ${styles.waitText}`}>{w("text")}</p>
              </div>
              <div className={styles.formCol}>
                <WaitlistForm labels={labels} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
