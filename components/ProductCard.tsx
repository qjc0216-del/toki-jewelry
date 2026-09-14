import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product; index?: number }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image-wrap" aria-label={`View ${product.name}`}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 82vw, 25vw" className="product-image" />
        {product.hoverImage && <Image src={product.hoverImage} alt="" fill sizes="(max-width: 700px) 82vw, 25vw" className="product-image hover-image" />}
        <span className="product-view">View piece</span>
      </Link>
      <div className="product-meta">
        <p className="product-category">{product.category}</p>
        <Link href={`/products/${product.slug}`} className="product-name">{product.name}</Link>
        <p className="price">${product.price}</p>
        <p className="product-subtitle">{product.subtitle}</p>
      </div>
    </article>
  );
}
