"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/components/CartProvider";

const links = [
  ["New", "/#new"],
  ["Pearls", "/collections"],
  ["Earrings", "/collections?category=earrings"],
  ["Necklaces", "/collections?category=necklaces"],
  ["Rings", "/collections?category=rings"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <div className="announcement">Complimentary shipping over $120 · 30-day returns</div>
      <header className="site-header">
        <button className="mobile-menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} strokeWidth={1.7} />
        </button>

        <nav className="desktop-nav">
          {links.slice(0, 3).map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>

        <Link href="/" className="header-logo" aria-label="TOKI Jewelry home">
          <BrandLogo compact />
        </Link>

        <nav className="desktop-nav desktop-nav--right">
          {links.slice(3).map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link href="/search" aria-label="Search"><Search size={20} strokeWidth={1.6} /></Link>
          <Link href="/cart" className="cart-link" aria-label={`Shopping bag with ${count} items`}>
            <ShoppingBag size={20} strokeWidth={1.6} /><span>{count}</span>
          </Link>
        </div>
      </header>

      {open && (
        <div className="mobile-drawer">
          <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button>
          <Link href="/" onClick={() => setOpen(false)} className="drawer-logo"><BrandLogo /></Link>
          <nav>
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          </nav>
          <p>Wear Your Own Time.</p>
        </div>
      )}
    </>
  );
}
