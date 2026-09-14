"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { useCart } from "@/components/CartProvider";

export function AddToBag({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      className="add-button"
      onClick={() => {
        addItem(product);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1200);
      }}
    >
      <span>{added ? "Added to bag" : "Add to bag"}</span>
      <span>{product.price}</span>
    </button>
  );
}
