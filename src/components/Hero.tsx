import { getTranslations } from "next-intl/server";
import shared from "@/styles/shared.module.css";
import styles from "./Hero.module.css";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/portada-portal-del-origen.svg"
        alt={t("imageAlt")}
        width={1600}
        height={900}
        className={styles.image}
        fetchPriority="high"
      />
      <div className={`${shared.wrap} ${styles.content}`}>
        <p className={styles.label}>{t("label")}</p>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <a href="#origen" className={`${shared.action} ${styles.cta}`}>
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
