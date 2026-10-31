import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import shared from "@/styles/shared.module.css";
import styles from "./Journey.module.css";

const STOPS = ["caral", "chavin", "paracas", "nazca", "moche", "wari", "chimu", "inca"] as const;

export default async function Journey() {
  const t = await getTranslations("journey");

  return (
    <section id="viaje" className={`${shared.wrap} ${styles.section}`}>
      <div className={`${shared.grid} ${styles.head}`}>
        <div className={styles.headText}>
          <p className={shared.label}>{t("label")}</p>
          <h2 className={shared.title}>{t("title")}</h2>
        </div>
      </div>
      <ol className={styles.list} aria-label={t("listLabel")}>
        {STOPS.map((id, i) => (
          <li key={id}>
            {/* TODO: enlazar cada fila a la página de su cultura cuando exista */}
            <Link href="/#coleccion" className={`${shared.grid} ${styles.row}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.name}>{t(`stops.${id}.name`)}</span>
              <span className={styles.meta}>{t(`stops.${id}.era`)}</span>
              <span className={styles.meta}>{t(`stops.${id}.site`)}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
