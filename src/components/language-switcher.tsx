"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function toFinnishPath(pathname: string): string {
  if (pathname.startsWith("/fi")) {
    return pathname;
  }

  return pathname === "/" ? "/fi" : `/fi${pathname}`;
}

function toSwedishPath(pathname: string): string {
  if (!pathname.startsWith("/fi")) {
    return pathname;
  }

  const nextPath = pathname.replace(/^\/fi/, "");
  return nextPath === "" ? "/" : nextPath;
}

export default function LanguageSwitcher() {
  const pathname = usePathname() ?? "/";
  const swedishPath = toSwedishPath(pathname);
  const finnishPath = toFinnishPath(pathname);
  const isFinnish = pathname.startsWith("/fi");
  const label = isFinnish ? "Finnish" : "Swedish";
  const activeFlag = isFinnish ? "🇫🇮" : "🇸🇪";
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }, [pathname]);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  };

  return (
    <details className="lang-menu" ref={menuRef}>
      <summary className="lang-trigger" aria-label="Language menu">
        <span className="lang-flag" aria-hidden="true">
          {activeFlag}
        </span>
        <span className="visually-hidden">{label}</span>
      </summary>
      <div className="lang-panel">
        <Link
          href={swedishPath}
          className={isFinnish ? "lang-option" : "lang-option lang-option-active"}
          aria-label="Swedish"
          onClick={closeMenu}
        >
          <span className="lang-flag" aria-hidden="true">
            🇸🇪
          </span>
          <span className="visually-hidden">Swedish</span>
        </Link>
        <Link
          href={finnishPath}
          className={isFinnish ? "lang-option lang-option-active" : "lang-option"}
          aria-label="Finnish"
          onClick={closeMenu}
        >
          <span className="lang-flag" aria-hidden="true">
            🇫🇮
          </span>
          <span className="visually-hidden">Finnish</span>
        </Link>
      </div>
    </details>
  );
}
