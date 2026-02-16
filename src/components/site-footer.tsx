"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const isFinnish = pathname.startsWith("/fi");

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>
          Convoy Customs
        </p>
        <p>Vasavägen 837, 66710 Kaitsor</p>
        <p> 0456625484 | info@convoycustoms.fi</p>
      </div>
    </footer>
  );
}
