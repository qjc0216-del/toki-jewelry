import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.handle}`} className="product-image">
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 760px) 50vw, 25vw" />
        <span className="product-view">View</span>
      </Link>
      <div className="product-copy">
        <div>
          <Link className="product-title" href={`/products/${product.handle}`}>{product.title}</Link>
          <p className="product-note">{product.note}</p>
        </div>
        <strong className="product-price">{product.price}</strong>
      </div>
    </article>
  );
}
