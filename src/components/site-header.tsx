"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/language-switcher";

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const isFinnish = pathname.startsWith("/fi");

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href={isFinnish ? "/fi" : "/"} className="brand" aria-label="Convoy Customs">
          Convoy Customs
        </Link>
        <div className="header-right">
          <nav className="main-nav" aria-label={isFinnish ? "Paavalikko" : "Primar"}>
            <Link href={isFinnish ? "/fi" : "/"}>{isFinnish ? "Koti" : "Hem"}</Link>
            <Link href={isFinnish ? "/fi/about" : "/about"}>
              {isFinnish ? "Tietoa meista" : "Om oss"}
            </Link>
            <Link href={isFinnish ? "/fi/contact" : "/contact"}>
              {isFinnish ? "Yhteys" : "Kontakt"}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
