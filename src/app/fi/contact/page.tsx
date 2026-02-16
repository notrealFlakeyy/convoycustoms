import ContactForm from "@/components/contact-form";

export default function FinnishContactPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.05fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Ota yhteyttä</h1>
          <p className="text-lg text-[#34413c]">
            Haluatko keskustella valmistustarpeestasi? Lähetä projektin laajuus,
            aikataulu ja vaaditut standardit, niin ehdotamme selkeää jatkoa.
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-2xl">Yhteystiedot</h2>
            <p className="mt-3 text-[#34413c]">
              Sähköposti: info@convoycustoms.fi
              <br />
              Puhelin: 0456625484
              <br />
              Osoite: Vasavägen 837, 66710 Kaitsor
            </p>
          </div>
        </section>

        <ContactForm
          locale="fi"
          text={{
            title: "Projektikysely",
            name: "Nimi",
            email: "Sähköposti",
            message: "Projektin tiedot",
            namePlaceholder: "Nimesi",
            emailPlaceholder: "sina@yritys.fi",
            messagePlaceholder: "Materiaalit, määrä, aikataulu ja vaaditut standardit.",
            submit: "Lähetä kysely",
            sending: "Lähetetään...",
            success: "Kiitos! Kyselysi on lähetetty.",
            error: "Jokin meni pieleen. Yritä uudelleen tai lähetä sähköpostia suoraan.",
          }}
        />
      </div>
    </main>
  );
}
