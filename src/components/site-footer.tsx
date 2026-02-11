"use client";

import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname() ?? "/";
  const isFinnish = pathname.startsWith("/fi");

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p>
          Convoy Customs{" "}
          {isFinnish ? "Metallin valmistuspalvelut" : "Metallfabrikation"}
        </p>
        <p>1024 Foundry Avenue, Columbus, OH 43215</p>
        <p>(614) 555-0188 | info@convoycustoms.com</p>
      </div>
    </footer>
  );
}
