"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/components/CartProvider";

const links = [
  ["New", "/#new"],
  ["Best Sellers", "/#best"],
  ["Baroque Pearls", "/collections"],
  ["Earrings", "/collections?category=earrings"],
  ["Necklaces", "/collections?category=necklaces"],
  ["Rings", "/collections?category=rings"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <div className="announcement">
        <span>Complimentary shipping over $120</span>
        <Link href="/collections">Shop now</Link>
      </div>

      <div className="utility-bar">
        <div />
        <nav>
          <Link href="/cart">Order status & returns</Link>
          <a href="#newsletter">TOKI Notes</a>
          <Link href="/collections">Gift edit</Link>
        </nav>
      </div>

      <header className="site-header retail-header">
        <button className="mobile-menu-button" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} strokeWidth={1.7} />
        </button>

        <Link href="/" className="header-logo retail-logo" aria-label="TOKI Jewelry home">
          <BrandLogo compact />
        </Link>

        <nav className="retail-nav">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>

        <div className="header-actions retail-actions">
          <form action="/search" method="get" className="header-search">
            <Search size={18} strokeWidth={1.6} />
            <input name="q" placeholder="Search" aria-label="Search TOKI" />
          </form>
          <Link href="/cart" className="cart-link" aria-label={`Shopping bag with ${count} items`}>
            <ShoppingBag size={21} strokeWidth={1.6} /><span>{count}</span>
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
