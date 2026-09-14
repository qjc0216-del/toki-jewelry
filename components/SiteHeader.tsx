"use client";

import Link from "next/link";
import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";

const nav = [
  ["New in", "/#shop"],
  ["Baroque pearls", "/collections/baroque-pearl"],
  ["Earrings", "/collections/baroque-pearl#earrings"],
  ["Necklaces", "/collections/baroque-pearl#necklaces"],
  ["Rings", "/collections/baroque-pearl#rings"],
  ["Our story", "/#story"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement">TOKI Jewelry · Modern keepsakes for your own time</div>
      <header className="site-header">
        <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(!open)}><span /><span /></button>
        <nav className="desktop-nav left-nav">{nav.slice(0, 3).map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
        <Link href="/" className="brand-lockup" aria-label="TOKI Jewelry home">
          <BrandLogo compact />
          <span className="brand-descriptor">JEWELRY</span>
        </Link>
        <nav className="desktop-nav right-nav">{nav.slice(3).map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav>
        <div className="header-actions"><button aria-label="Search">Search</button><button aria-label="Shopping bag">Bag <span className="bag-count">0</span></button></div>
      </header>
      {open && <div className="mobile-menu">{nav.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<div className="mobile-menu-note">Wear Your Own Time.</div></div>}
    </>
  );
}
