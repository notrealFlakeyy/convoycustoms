import ContactForm from "@/components/contact-form";

export default function FinnishContactPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.05fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Ota yhteytta</h1>
          <p className="text-lg text-[#34413c]">
            Haluatko keskustella valmistustarpeestasi? Laheta projektin laajuus,
            aikataulu ja vaaditut standardit, niin ehdotamme selkeaa jatkoa.
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-2xl">Yhteystiedot</h2>
            <p className="mt-3 text-[#34413c]">
              Sahkoposti: info@convoycustoms.fi
              <br />
              Puhelin: 0456625484
              <br />
              Osoite: Vasavagen 837, 66710 Kaitsor
            </p>
          </div>
        </section>

        <ContactForm
          locale="fi"
          text={{
            title: "Projektikysely",
            name: "Nimi",
            email: "Sahkoposti",
            message: "Projektin tiedot",
            namePlaceholder: "Nimesi",
            emailPlaceholder: "sina@yritys.fi",
            messagePlaceholder: "Materiaalit, maara, aikataulu ja vaaditut standardit.",
            submit: "Laheta kysely",
            sending: "Lahetetaan...",
            success: "Kiitos! Kyselysi on lahetetty.",
            error: "Jokin meni pieleen. Yrita uudelleen tai laheta sahkopostia suoraan.",
          }}
        />
      </div>
    </main>
  );
}
