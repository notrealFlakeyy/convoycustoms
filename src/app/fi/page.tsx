import Image from "next/image";
import Link from "next/link";
import { siteAssets } from "@/lib/site-assets";

export default function FinnishHomePage() {
  return (
    <main>
      <section className="page-section">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl leading-tight md:text-6xl">
              Räätälöidyt ratkaisut ajoneuvoosi
            </h1>
            <p className="max-w-xl text-lg text-[#34413c]">
              Convoy Customs on vastaperustettu yritys, jolla on usean vuoden kokemus
              mittatilauskaarien, lisävarusteiden ja lisätarvikkeiden
              valmistuksesta autoihin, kuorma-autoihin ja työkoneisiin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/fi/contact" className="primary-button">
                Pyydä tarjous
              </Link>
              <Link href="/fi/about" className="secondary-button">
                Aiemmat projektit
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-[#212a2522]">
            <h2 className="text-2xl">Bob-systems</h2>
            <p className="mt-4 text-[#34413c]">
              Bob-systemsin valtuutettuna jälleenmyyjänä huolehdimme myös
              huoltoautosi sisustuksesta. Asennamme ammattitason kalustukset,
              jotka maksimoivat työtilan ja pitävät tavarat järjestyksessä.
              Suunnittele oma ratkaisusi ja pyydä tarjous logon kautta{" "}
              <span aria-hidden="true" className="inline-block text-sm">
                ↓
              </span>
            </p>
            <div className="mt-4">
              <Link
                href="https://bobsystem.se/?reseller=13024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siirry Bob-systemsin sivulle"
                className="inline-flex"
              >
                <Image
                  src={siteAssets.branding.bobSystemsLogo}
                  alt="Bob-systems"
                  width={140}
                  height={40}
                  className="h-auto w-[140px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="card-grid">
            <article className="info-card">
              <h3 className="text-xl">Perusteellinen tarkkuus</h3>
              <p className="mt-2 text-[#34413c]">
                Kaaret ja tarvikkeet valmistetaan alusta asti asiakkaan
                tarpeiden ja piirustusten mukaan, jotta istuvuus ja toimivuus
                ovat tarkat.
              </p>
            </article>
            <article className="info-card">
              <h3 className="text-xl">Seuraa meitä somessa</h3>
              <p className="mt-2 text-[#34413c]">
                Pysy ajan tasalla uusimmista projekteista seuraamalla meitä
                Instagramissa. Julkaisemme säännöllisesti kuvia verstaalta ja
                valmistuneista toteutuksista.
              </p>
              <Link
                href="https://www.instagram.com/convoy.customs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#34413c] hover:text-[var(--brand-dark)]"
                aria-label="Seuraa meitä Instagramissa"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.5a.87.87 0 1 1 0 1.75.87.87 0 0 1 0-1.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
                Instagram
              </Link>
            </article>
            <article className="info-card">
              <h3 className="text-xl">Huolto ja korjaukset</h3>
              <p className="mt-2 text-[#34413c]">
                Teemme myös huollot ja korjaukset erikokoisiin ajoneuvoihin.
                Testilaitteiston avulla pystymme vianetsintään ja korjauksiin
                nopeasti.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
