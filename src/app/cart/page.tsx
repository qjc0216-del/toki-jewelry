"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, removeItem, total } = useCart();

  if (!items.length) {
    return (
      <main className="empty-cart">
        <p>Your bag is empty.</p>
        <h1>Find something worth keeping.</h1>
        <Link className="button button--dark" href="/collections">Shop jewelry</Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-list">
        <h1>Your bag</h1>
        {items.map(item => (
          <article key={item.handle} className="cart-item">
            <div className="cart-image"><Image src={item.image} alt={item.imageAlt} fill /></div>
            <div className="cart-copy">
              <Link href={`/products/${item.handle}`}>{item.title}</Link>
              <span>{item.note}</span>
              <span>Qty {item.quantity}</span>
              <button onClick={() => removeItem(item.handle)}>Remove</button>
            </div>
            <strong>${(item.numericPrice * item.quantity).toFixed(2)}</strong>
          </article>
        ))}
      </section>
      <aside className="cart-summary">
        <p>Subtotal</p>
        <strong>${total.toFixed(2)}</strong>
        <button>Continue to checkout</button>
        <span>Shopify checkout connection will be enabled with your Storefront API.</span>
      </aside>
    </main>
  );
}
