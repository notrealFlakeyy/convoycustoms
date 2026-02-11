import Link from "next/link";

export default function FinnishHomePage() {
  return (
    <main>
      <section className="page-section">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-5">
            <p className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm font-semibold uppercase tracking-wide">
              Teollinen ja kaupallinen metallin valmistus
            </p>
            <h1 className="text-4xl leading-tight md:text-6xl">
              Tarkkaa metallin valmistusta vaativiin kayttokohteisiin.
            </h1>
            <p className="max-w-xl text-lg text-[#34413c]">
              Convoy Customs toimittaa mittatilaustyona valmistettuja tera- ja
              alumiinirakenteita valmistajille, kalusto-operaattoreille ja
              rakennustiimeille. Prototyypeista sarjatuotantoon toteutamme osat,
              jotka toimivat asennuspaikalla ja valmistuvat aikataulussa.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/fi/contact" className="primary-button">
                Pyyda tarjous
              </Link>
              <Link href="/fi/about" className="secondary-button">
                Lue meista
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-[#212a2522]">
            <h2 className="text-2xl">Ydinpalvelut</h2>
            <ul className="mt-4 space-y-3 text-[#34413c]">
              <li>Mittatilauskiinnikkeet, rungot ja terasrakenteet</li>
              <li>CNC-leikkaus, muovaus, hitsaus ja viimeistely</li>
              <li>Korjaus, modernisointi ja pienet tuotantosarjat</li>
              <li>Asennusvalmis dokumentaatio ja toimitustuki</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="card-grid">
            <article className="info-card">
              <h3 className="text-xl">Nopea toimitus</h3>
              <p className="mt-2 text-[#34413c]">
                Tiukat aikataulut ovat meille arkea. Prosessi on rakennettu
                selkeille tarjouksille ja luotettaville toimitusajoille.
              </p>
            </article>
            <article className="info-card">
              <h3 className="text-xl">Laadunvarmistus</h3>
              <p className="mt-2 text-[#34413c]">
                Jokainen osa mitataan ja dokumentoidaan ennen toimitusta, jotta
                asennus sujuu ilman viivastyksia.
              </p>
            </article>
            <article className="info-card">
              <h3 className="text-xl">Teollisuudelle rakennettu</h3>
              <p className="mt-2 text-[#34413c]">
                Valmistamme ratkaisuja logistiikkaan, energiaan ja raskaaseen
                kalustoon, joissa toiminnallisuus on ensisijaista.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section bg-[var(--surface-muted)]">
        <div className="container grid gap-6 md:grid-cols-3">
          <article className="rounded-xl bg-[var(--surface)] p-5">
            <p className="text-sm uppercase tracking-wider text-[#3f4f48]">
              Vaihe 1
            </p>
            <h3 className="mt-1 text-xl">Tarpeen kartoitus</h3>
            <p className="mt-2 text-[#34413c]">
              Toimita piirustukset tai konsepti. Arvioimme vaatimukset,
              toleranssit ja materiaalit ennen tarjousta.
            </p>
          </article>
          <article className="rounded-xl bg-[var(--surface)] p-5">
            <p className="text-sm uppercase tracking-wider text-[#3f4f48]">
              Vaihe 2
            </p>
            <h3 className="mt-1 text-xl">Valmistus</h3>
            <p className="mt-2 text-[#34413c]">
              Tuotanto etenee selkeilla valivaiheilla: leikkaus, hitsaus,
              viimeistely ja tarkastus.
            </p>
          </article>
          <article className="rounded-xl bg-[var(--surface)] p-5">
            <p className="text-sm uppercase tracking-wider text-[#3f4f48]">
              Vaihe 3
            </p>
            <h3 className="mt-1 text-xl">Toimitus</h3>
            <p className="mt-2 text-[#34413c]">
              Pakkaamme ja merkitsemme osat asennusjarjestyksen mukaan, jotta
              tyomaalla tulee mahdollisimman vahan viivetta.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
