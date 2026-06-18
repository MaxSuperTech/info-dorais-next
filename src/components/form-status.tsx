"use client";

import { useSearchParams } from "next/navigation";
import { type Locale } from "@/lib/site";

export function FormStatus({ locale }: { locale: Locale }) {
  const params = useSearchParams();
  const sent = params.get("sent") === "1";
  const error = params.get("error") === "1";

  if (!sent && !error) return null;

  return (
    <div
      className={
        sent
          ? "mt-5 rounded-sm border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300"
          : "mt-5 rounded-sm border border-red-500/30 bg-red-500/10 p-4 text-sm font-semibold text-red-700 dark:text-red-300"
      }
      role="status"
    >
      {sent
        ? locale === "fr"
          ? "Message envoyé. Nous vous répondrons dès que possible."
          : "Message sent. We will reply as soon as possible."
        : locale === "fr"
          ? "Impossible d’envoyer le message. Vérifiez les champs et réessayez."
          : "Unable to send the message. Please review the fields and try again."}
    </div>
  );
}
