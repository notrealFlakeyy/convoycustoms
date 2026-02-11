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
              Sahkoposti: info@convoycustoms.com
              <br />
              Puhelin: (614) 555-0188
              <br />
              Osoite: 1024 Foundry Avenue, Columbus, OH 43215
            </p>
            <p className="mt-3 text-[#34413c]">
              Aukioloajat: Ma-Pe, 07:00-17:30
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl">Projektikysely</h2>
          <form className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1 block font-semibold">Nimi</span>
              <input
                className="w-full rounded-md border border-[var(--border)] px-3 py-2"
                type="text"
                name="name"
                placeholder="Nimesi"
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">Sahkoposti</span>
              <input
                className="w-full rounded-md border border-[var(--border)] px-3 py-2"
                type="email"
                name="email"
                placeholder="sina@yritys.fi"
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">Projektin tiedot</span>
              <textarea
                className="min-h-32 w-full rounded-md border border-[var(--border)] px-3 py-2"
                name="message"
                placeholder="Materiaalit, maara, aikataulu ja vaaditut standardit."
              />
            </label>
            <button type="submit" className="primary-button">
              Laheta kysely
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
