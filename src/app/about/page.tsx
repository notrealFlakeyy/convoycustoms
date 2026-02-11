export default function AboutPage() {
  return (
    <main className="page-section">
      <div className="container grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl">Om Convoy Customs</h1>
          <p className="text-lg text-[#34413c]">
            Vi ar en fabrikationspartner med fokus pa praktisk ingenjorskonst
            och tillforlitligt hantverk. Sedan 2009 har vart team stottat
            entreprenorer, fordonsflottor och tillverkare med kundanpassat
            metallarbete for kravande miljoer.
          </p>
          <p className="text-[#34413c]">
            Var verkstad kombinerar modern CNC-kapacitet med erfarna team,
            vilket gor att vi kan jobba snabbt utan att kompromissa med
            kvalitet. Varje projekt planeras utifran hallbarhet,
            servicevanlighet och monteringsberedskap.
          </p>
        </section>

        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-2xl">Det har star vi for</h2>
          <ul className="mt-4 space-y-3 text-[#34413c]">
            <li>Tydlig kommunikation fran offert till leverans</li>
            <li>Sparbara kvalitetskontroller i varje produktionssteg</li>
            <li>Sakra arbetsmetoder med efterlevnad av gallande krav</li>
            <li>Langsiktiga samarbeten i stallet for engangsjobb</li>
          </ul>
        </section>
      </div>

      <div className="container mt-8 card-grid">
        <article className="info-card">
          <h3 className="text-xl">15+ ar</h3>
          <p className="mt-2 text-[#34413c]">
            Vi levererar till regionala och nationella industrikunder.
          </p>
        </article>
        <article className="info-card">
          <h3 className="text-xl">Certifierade svetsare</h3>
          <p className="mt-2 text-[#34413c]">
            Kompetens inom strukturell och serieanpassad svetsning.
          </p>
        </article>
        <article className="info-card">
          <h3 className="text-xl">Stod genom hela processen</h3>
          <p className="mt-2 text-[#34413c]">
            Designstod, tillverkning, kvalitetssakring och leveranssamordning.
          </p>
        </article>
      </div>
    </main>
  );
}
