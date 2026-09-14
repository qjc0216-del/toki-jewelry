"use client";

import Link from "next/link";
import { MapPin, Menu, Search, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useCart } from "@/components/CartProvider";

const navLinks = [
  ["New", "/#new"],
  ["Baroque Pearls", "/collections"],
  ["Earrings", "/collections?category=earrings"],
  ["Necklaces", "/collections?category=necklaces"],
  ["Rings", "/collections?category=rings"],
  ["Gifts", "/collections"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <>
      <div className="ll-promo">Complimentary shipping over $120 · 30-day returns</div>
      <div className="ll-utility">
        <div className="ll-utility__inner">
          <Link href="/cart">Track order & returns</Link>
          <a href="#newsletter">Newsletter</a>
          <a href="#stores"><MapPin size={14} strokeWidth={1.8} /> Stores</a>
        </div>
      </div>

      <header className="ll-header">
        <div className="ll-header__main">
          <button className="ll-mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={23} strokeWidth={1.8} />
          </button>

          <Link href="/" className="ll-header__logo" aria-label="TOKI home">
            <BrandLogo compact />
          </Link>

          <nav className="ll-nav" aria-label="Primary navigation">
            {navLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>

          <div className="ll-header__actions">
            <Link href="/search" className="ll-search-link"><Search size={20} strokeWidth={1.8} /><span>Search</span></Link>
            <button className="ll-icon-button" aria-label="Account"><UserRound size={21} strokeWidth={1.7} /></button>
            <Link href="/cart" className="ll-bag" aria-label={`Shopping bag with ${count} items`}>
              <ShoppingBag size={21} strokeWidth={1.7} /><span>{count}</span>
            </Link>
          </div>
        </div>
      </header>

      {open && (
        <div className="ll-drawer">
          <div className="ll-drawer__top">
            <BrandLogo compact />
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button>
          </div>
          <nav>
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
          </nav>
          <div className="ll-drawer__bottom">
            <Link href="/search" onClick={() => setOpen(false)}>Search</Link>
            <Link href="/cart" onClick={() => setOpen(false)}>Bag ({count})</Link>
            <span>Wear Your Own Time.</span>
          </div>
        </div>
      )}
    </>
  );
}
