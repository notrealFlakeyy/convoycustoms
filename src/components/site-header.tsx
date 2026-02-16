"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/language-switcher";
import { siteAssets } from "@/lib/site-assets";

export default function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const isFinnish = pathname.startsWith("/fi");

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href={isFinnish ? "/fi" : "/"} className="brand brand-logo" aria-label="Convoy Customs">
          <Image
            src={siteAssets.branding.logo}
            alt="Convoy Customs logo"
            className="brand-logo-image"
            width={320}
            height={80}
            priority
          />
        </Link>
        <div className="header-right">
          <nav className="main-nav" aria-label={isFinnish ? "Päävalikko" : "Primar"}>
            <Link href={isFinnish ? "/fi" : "/"}>{isFinnish ? "Koti" : "Hem"}</Link>
            <Link href={isFinnish ? "/fi/about" : "/about"}>
              {isFinnish ? "Projektit" : "Projekt"}
            </Link>
            <Link href={isFinnish ? "/fi/contact" : "/contact"}>
              {isFinnish ? "Ota yhteyttä" : "Kontakt"}
            </Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
