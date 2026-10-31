"use client";

import { useRef, useState, useTransition } from "react";
import { joinWaitlist } from "@/app/[locale]/fundadores/actions";
import { Link } from "@/i18n/navigation";
import { isValidEmail } from "@/lib/validation";
import shared from "@/styles/shared.module.css";
import styles from "./WaitlistForm.module.css";

type Labels = {
  emailLabel: string;
  consent: string;
  privacyLink: string;
  submit: string;
  sending: string;
  success: string;
  errorEmail: string;
  errorConsent: string;
  errorSend: string;
};

type Errors = { email?: string; consent?: string; send?: string };

export default function WaitlistForm({ labels }: { labels: Labels }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  const [pending, startTransition] = useTransition();
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};

    if (!isValidEmail(String(data.get("email") ?? ""))) next.email = labels.errorEmail;
    if (data.get("consent") !== "on") next.consent = labels.errorConsent;
    setErrors(next);
    if (next.email) {
      emailRef.current?.focus();
      return;
    }
    if (next.consent) return;

    startTransition(async () => {
      const result = await joinWaitlist(data);
      if (result.status === "success") {
        setDone(true);
        return;
      }
      setErrors({
        email: result.error === "email" ? labels.errorEmail : undefined,
        consent: result.error === "consent" ? labels.errorConsent : undefined,
        send: result.error === "send" ? labels.errorSend : undefined,
      });
    });
  };

  if (done) {
    return (
      <p className={styles.success} role="status">
        {labels.success}
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="waitlist-email" className={styles.label}>
          {labels.emailLabel}
        </label>
        <input
          ref={emailRef}
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          className={styles.input}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "waitlist-email-error" : undefined}
        />
        {errors.email && (
          <p id="waitlist-email-error" className={styles.error}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.consent}>
          <input
            type="checkbox"
            name="consent"
            className={styles.checkbox}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "waitlist-consent-error" : undefined}
          />
          <span>
            {labels.consent}{" "}
            <Link href="/privacidad" className={shared.action}>
              {labels.privacyLink}
            </Link>
          </span>
        </label>
        {errors.consent && (
          <p id="waitlist-consent-error" className={styles.error}>
            {errors.consent}
          </p>
        )}
      </div>

      {errors.send && (
        <p className={styles.error} role="alert">
          {errors.send}
        </p>
      )}

      <button type="submit" className={styles.button} disabled={pending}>
        {pending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
