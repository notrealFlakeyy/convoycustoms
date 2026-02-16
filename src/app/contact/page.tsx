export default function ContactPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.05fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Frågor och funderingar?</h1>
          <p className="text-lg text-[#34413c]">
            Har du frågor om våra tjänster eller vill du veta mer om hur vi kan hjälpa dig med ditt projekt? Tveka inte att ta kontakt!
          </p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-2xl">Ta Kontakt</h2>
            <p className="mt-3 text-[#34413c]">
              E-post: info@convoycustoms.fi
              <br />
              Telefon: 0456625484
              <br />
              Adress: Vasavägen 837, 66710 Kaitsor
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl">Projektförfrågan</h2>
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
                placeholder="Kort info om ditt projekt och din telefonnummer."
              />
            </label>
            <button type="submit" className="primary-button">
              Skicka förfragan
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
