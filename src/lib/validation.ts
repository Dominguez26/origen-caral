const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  return email.length <= 254 && EMAIL_PATTERN.test(email);
}

export type WaitlistResult =
  | { status: "success" }
  | { status: "error"; error: "email" | "consent" | "send" };
