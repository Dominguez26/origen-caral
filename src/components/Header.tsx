"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import shared from "@/styles/shared.module.css";
import styles from "./Header.module.css";

export default function Header() {
  const t = useTranslations("nav");
  const brand = useTranslations("common")("brand");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || pathname !== "/";
  const cls = [styles.header, solid && styles.scrolled, open && styles.open]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cls}>
      <div className={`${shared.wrap} ${styles.bar}`}>
        <Link href="/" className={styles.brand} onClick={close}>
          {brand}
        </Link>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t("closeMenu") : t("openMenu")}
        </button>
        <nav id="menu-principal" className={styles.nav} aria-label={t("label")}>
          <Link href="/#viaje" onClick={close}>{t("journey")}</Link>
          <Link href="/#coleccion" onClick={close}>{t("collection")}</Link>
          <Link href="/#fundadores" onClick={close}>{t("founders")}</Link>
          <div className={styles.langs} role="group" aria-label={t("language")}>
            <Link
              href={pathname}
              locale="es"
              lang="es"
              hrefLang="es"
              aria-label={t("spanish")}
              aria-current={locale === "es" ? "true" : undefined}
              onClick={close}
            >
              ES
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={pathname}
              locale="en"
              lang="en"
              hrefLang="en"
              aria-label={t("english")}
              aria-current={locale === "en" ? "true" : undefined}
              onClick={close}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
