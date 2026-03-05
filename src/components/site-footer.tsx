"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const isFinnish = pathname.startsWith("/fi");

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-left">
          <p>Convoy Customs</p>
          <p>Vasavägen 837, 66710 Kaitsor</p>
          <p>0456625484 | info@convoycustoms.fi</p>
        </div>
        <div className="site-footer-right">
          <p className="site-footer-credit">
            {isFinnish ? "Luonut Lumix Systems" : "Skapat av Lumix Systems"}
          </p>
        </div>
      </div>
    </footer>
  );
}

