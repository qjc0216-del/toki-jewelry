import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className="product-card reveal" style={{ animationDelay: `${index * 70}ms` }}>
      <Link href={`/products/${product.slug}`} className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image" />
        {product.hoverImage && <Image src={product.hoverImage} alt="" fill sizes="(max-width: 700px) 50vw, 25vw" className="product-image hover-image" />}
        <span className="quick-view">View piece</span>
      </Link>
      <div className="product-meta">
        <div>
          <p className="eyebrow">{product.category}</p>
          <Link href={`/products/${product.slug}`} className="product-name">{product.name}</Link>
          <p className="product-subtitle">{product.subtitle}</p>
        </div>
        <p className="price">${product.price}</p>
      </div>
    </article>
  );
}
