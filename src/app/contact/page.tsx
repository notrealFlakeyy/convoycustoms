export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.05fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Kontakta oss</h1>
          <p className="text-lg text-[#34413c]">
            Redo att diskutera ert behov av metallfabrikation? Dela omfattning,
            tidsplan och eventuella standardkrav sa ger vi ett tydligt forslag
            pa nasta steg.
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-2xl">Direktkontakt</h2>
            <p className="mt-3 text-[#34413c]">
              E-post: info@convoycustoms.com
              <br />
              Telefon: (614) 555-0188
              <br />
              Adress: 1024 Foundry Avenue, Columbus, OH 43215
            </p>
            <p className="mt-3 text-[#34413c]">
              Oppettider: Man-Fre, 07:00-17:30
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl">Projektforfragan</h2>
          <form className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1 block font-semibold">Namn</span>
              <input
                className="w-full rounded-md border border-[var(--border)] px-3 py-2"
                type="text"
                name="name"
                placeholder="Ditt namn"
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">E-post</span>
              <input
                className="w-full rounded-md border border-[var(--border)] px-3 py-2"
                type="email"
                name="email"
                placeholder="du@foretag.se"
              />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold">Projektdetaljer</span>
              <textarea
                className="min-h-32 w-full rounded-md border border-[var(--border)] px-3 py-2"
                name="message"
                placeholder="Material, volym, tidsplan och relevanta krav."
              />
            </label>
            <button type="submit" className="primary-button">
              Skicka forfragan
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
