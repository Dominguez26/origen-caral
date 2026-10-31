import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import shared from "@/styles/shared.module.css";
import styles from "./Footer.module.css";

export default async function Footer() {
  const t = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const brand = (await getTranslations("common"))("brand");

  return (
    <footer className={`${shared.wrap} ${styles.footer}`}>
      <div className={`${shared.grid} ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.brand}>{brand}</p>
          <p className={styles.city}>{t("city")}</p>
        </div>
        <nav className={styles.col} aria-label={t("navLabel")}>
          <ul className={styles.list}>
            <li><Link href="/#viaje">{nav("journey")}</Link></li>
            <li><Link href="/#coleccion">{nav("collection")}</Link></li>
            <li><Link href="/#fundadores">{nav("founders")}</Link></li>
          </ul>
        </nav>
        <nav className={styles.col} aria-label={t("legalLabel")}>
          <ul className={styles.list}>
            <li><Link href="/terminos">{t("terms")}</Link></li>
            <li><Link href="/privacidad">{t("privacy")}</Link></li>
            <li><Link href="/libro-de-reclamaciones">{t("complaints")}</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
