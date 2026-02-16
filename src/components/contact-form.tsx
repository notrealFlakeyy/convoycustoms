"use client";

import { FormEvent, useState } from "react";

type ContactFormText = {
  title: string;
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

type ContactFormProps = {
  text: ContactFormText;
  locale: "sv" | "fi";
};

export default function ContactForm({ text, locale }: ContactFormProps) {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-2xl">{text.title}</h2>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-1 block font-semibold">{text.name}</span>
          <input
            className="w-full rounded-md border border-[var(--border)] px-3 py-2"
            type="text"
            name="name"
            placeholder={text.namePlaceholder}
            required
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-semibold">{text.email}</span>
          <input
            className="w-full rounded-md border border-[var(--border)] px-3 py-2"
            type="email"
            name="email"
            placeholder={text.emailPlaceholder}
            required
          />
        </label>
        <label className="block">
          <span className="mb-1 block font-semibold">{text.message}</span>
          <textarea
            className="min-h-32 w-full rounded-md border border-[var(--border)] px-3 py-2"
            name="message"
            placeholder={text.messagePlaceholder}
            required
          />
        </label>
        <button type="submit" className="primary-button" disabled={isSending}>
          {isSending ? text.sending : text.submit}
        </button>
        {status === "success" ? (
          <p className="text-sm text-green-700">{text.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-700">{text.error}</p>
        ) : null}
      </form>
    </section>
  );
}
