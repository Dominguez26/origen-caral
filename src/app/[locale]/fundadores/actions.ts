"use server";

import { isValidEmail, type WaitlistResult } from "@/lib/validation";
import { saveWaitlistEmail } from "@/lib/waitlist";

export async function joinWaitlist(formData: FormData): Promise<WaitlistResult> {
  const email = String(formData.get("email") ?? "").trim();
  const consent = formData.get("consent") === "on";

  if (!isValidEmail(email)) return { status: "error", error: "email" };
  if (!consent) return { status: "error", error: "consent" };

  try {
    await saveWaitlistEmail(email);
    return { status: "success" };
  } catch {
    return { status: "error", error: "send" };
  }
}
