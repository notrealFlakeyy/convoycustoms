import Image from "next/image";
import Link from "next/link";
import { siteAssets } from "@/lib/site-assets";

export default function Home() {
  return (
    <main>
      <section className="page-section">
        <div className="container grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl leading-tight md:text-6xl">
              Skräddarsydda lösningar till ditt fordon
            </h1>
            <p className="max-w-xl text-lg text-[#34413c]">
              Convoy Customs är ett nygrundat företag med flera års erfarenhet av att tillverka kundanpassade bågar, tilläggsutrustning och tillbehör för dig som vill ha det lilla extra på din bil, lastbil eller arbetsmaskin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="primary-button">
                Begär offert
              </Link>
              <Link href="/about" className="secondary-button">
                Tidigare projekt
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-[#212a2522]">
            <h2 className="text-2xl">Bob-systems</h2>
            <p className="mt-4 text-[#34413c]">
              Som auktoriserad återförsäljare av Bob-systems tar vi dessutom hand om
              insidan av din servicebil. Vi monterar professionell bilinredning som
              maximerar din arbetsyta och håller årdning på prylarna. Rita upp din
              egna inredning och begär offert via logon nedan{" "}
              <span aria-hidden="true" className="inline-block text-sm">↓</span>
            </p>
            <div className="mt-4">
              <Link
                href="https://bobsystem.se/?reseller=13024"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besok Bob-systems"
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
              <h3 className="text-xl">Grundlig noggrannhet</h3>
              <p className="mt-2 text-[#34413c]">
                Alla bågar och tillbehör blir tillverkade från grunden enligt kundens behov och ritningar, vilket garanterar en perfekt passform och funktion.
              </p>
            </article>
            <article className="info-card">
              <h3 className="text-xl">Följ oss gärna på Sociala medier</h3>
              <p className="mt-2 text-[#34413c]">
                Håll dig uppdaterad med våra senaste projekt och inspiration genom att följa oss på Instagram. Vi delar regelbundet bilder från vår verkstad, så att du kan se hur vi förvandlar idéer till verklighet.
              </p>
              <Link
                href="https://www.instagram.com/convoy.customs"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#34413c] hover:text-[var(--brand-dark)]"
                aria-label="Folj oss pa Instagram"
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
              <h3 className="text-xl">Service och reparationer</h3>
              <p className="mt-2 text-[#34413c]">
                Vi utför även servicear och reparationer på fordon stora som små. Med våran testutrustning kan vi enkelt och smidigt felsöka och åtgärda problem.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
