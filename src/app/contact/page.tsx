import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.05fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Frågor och funderingar?</h1>
          <p className="text-lg text-[#34413c]">
            Har du frågor om våra tjänster eller vill du veta mer om hur vi kan
            hjälpa dig med ditt projekt? Tveka inte att ta kontakt!
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-2xl">Ta kontakt</h2>
            <p className="mt-3 text-[#34413c]">
              E-post: info@convoycustoms.fi
              <br />
              Telefon: 0456625484
              <br />
              Adress: Vasavägen 837, 66710 Kaitsor
            </p>
          </div>
        </section>

        <ContactForm
          locale="sv"
          text={{
            title: "Projektförfrågan",
            name: "Namn",
            email: "E-post",
            message: "Projektdetaljer",
            namePlaceholder: "Ditt namn",
            emailPlaceholder: "du@foretag.fi",
            messagePlaceholder: "Kort info om ditt projekt och ditt telefonnummer.",
            submit: "Skicka förfrågan",
            sending: "Skickar...",
            success: "Tack! Din förfrågan har skickats.",
            error: "Något gick fel. Försök igen eller mejla oss direkt.",
          }}
        />
      </div>
    </main>
  );
}
