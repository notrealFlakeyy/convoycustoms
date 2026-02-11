export default function FinnishAboutPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Tietoa Convoy Customsista</h1>
          <p className="text-lg text-[#34413c]">
            Olemme metallin valmistuskumppani, joka yhdistaa kaytannon
            suunnittelun ja luotettavan toteutuksen. Vuodesta 2009 alkaen
            tiimimme on palvellut urakoitsijoita, kalusto-operaattoreita ja
            valmistavaa teollisuutta vaativissa kohteissa.
          </p>
          <p className="text-[#34413c]">
            Tuotantotilamme yhdistaa modernin CNC-kapasiteetin ja kokeneet
            valmistustiimit. Pystymme toimimaan nopeasti ilman kompromisseja
            laadussa. Jokainen projekti suunnitellaan kestavyyden,
            huollettavuuden ja asennusvalmiuden ehdoilla.
          </p>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl">Arvomme</h2>
          <ul className="mt-4 space-y-3 text-[#34413c]">
            <li>Selkea viestinta tarjouksesta toimitukseen</li>
            <li>Jaljitettavat laatutarkastukset jokaisessa vaiheessa</li>
            <li>Turvalliset ja standardien mukaiset tyotavat</li>
            <li>Pitkat asiakassuhteet kertaluonteisten toimeksiantojen sijaan</li>
          </ul>
        </section>
      </div>

      <div className="container mt-8 card-grid">
        <article className="info-card">
          <h3 className="text-xl">15+ vuotta</h3>
          <p className="mt-2 text-[#34413c]">
            Palvelua alueellisille ja valtakunnallisille teollisuusasiakkaille.
          </p>
        </article>
        <article className="info-card">
          <h3 className="text-xl">Sertifioidut hitsaajat</h3>
          <p className="mt-2 text-[#34413c]">
            Osaaminen rakenne- ja tuotantohitsauksen vaatimuksissa.
          </p>
        </article>
        <article className="info-card">
          <h3 className="text-xl">Tuki koko elinkaareen</h3>
          <p className="mt-2 text-[#34413c]">
            Suunnittelutuki, valmistus, laadunvarmistus ja toimituskoordinaatio.
          </p>
        </article>
      </div>
    </main>
  );
}
