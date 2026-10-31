import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import shared from "@/styles/shared.module.css";
import styles from "./Sections.module.css";

export async function Origin() {
  const t = await getTranslations("origin");

  return (
    <section id="origen" className={`${shared.wrap} ${styles.origin}`}>
      <div className={`${shared.grid} ${styles.split}`}>
        <div className={styles.main}>
          <p className={shared.label}>{t("label")}</p>
          <h2 className={shared.title}>{t("title")}</h2>
        </div>
        <div className={styles.aside}>
          <p className={`${shared.text} ${styles.text}`}>{t("text")}</p>
          <Link href="/#viaje" className={shared.action}>{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}

export async function Collection() {
  const t = await getTranslations("collection");

  return (
    <section id="coleccion" className={`${shared.wrap} ${styles.collection}`}>
      <div className={`${shared.grid} ${styles.collectionGrid}`}>
        <div className={styles.image}>{t("imagePlaceholder")}</div>
        <div className={styles.collectionText}>
          <p className={shared.label}>{t("label")}</p>
          <h2 className={`${shared.title} ${styles.title}`}>{t("title")}</h2>
          <p className={`${shared.text} ${styles.text}`}>{t("text1")}</p>
          <p className={`${shared.text} ${styles.text} ${styles.last}`}>{t("text2")}</p>
          {/* TODO: apuntar a la página de la colección cuando exista */}
          <Link href="/#coleccion" className={shared.action}>{t("cta")}</Link>
        </div>
      </div>
    </section>
  );
}

export async function Founders() {
  const t = await getTranslations("founders");

  return (
    <section id="fundadores" className={styles.dark}>
      <div className={`${shared.wrap} ${styles.inner}`}>
        <div className={`${shared.grid} ${styles.split}`}>
          <div className={styles.main}>
            <p className={`${shared.label} ${styles.label}`}>{t("label")}</p>
            <h2 className={shared.title}>{t("title")}</h2>
          </div>
          <div className={styles.aside}>
            <p className={`${shared.text} ${styles.text}`}>{t("text")}</p>
            <Link href="/fundadores" className={shared.action}>{t("cta")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
