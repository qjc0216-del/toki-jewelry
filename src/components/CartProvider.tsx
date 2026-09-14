"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/catalog";

type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (handle: string) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("toki-cart");
    if (raw) {
      try { setItems(JSON.parse(raw)); } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toki-cart", JSON.stringify(items));
  }, [items]);

  const value = useMemo(() => ({
    items,
    addItem(product: Product) {
      setItems(current => {
        const exists = current.find(item => item.handle === product.handle);
        return exists
          ? current.map(item => item.handle === product.handle ? { ...item, quantity: item.quantity + 1 } : item)
          : [...current, { ...product, quantity: 1 }];
      });
    },
    removeItem(handle: string) {
      setItems(current => current.filter(item => item.handle !== handle));
    },
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0)
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
