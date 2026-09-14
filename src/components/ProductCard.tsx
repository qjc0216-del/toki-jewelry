import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.handle}`} className="product-image">
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 760px) 72vw, 24vw" />
      </Link>
      <div className="product-copy">
        <Link className="product-title" href={`/products/${product.handle}`}>{product.title}</Link>
        <p className="product-note">{product.note}</p>
        <strong className="product-price">{product.price}</strong>
        <Link className="product-shop-link" href={`/products/${product.handle}`}>Shop now</Link>
      </div>
    </article>
  );
}
