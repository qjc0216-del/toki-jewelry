import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToBag } from "@/components/AddToBag";
import { ProductCard } from "@/components/ProductCard";
import { fallbackProducts, getFallbackProduct } from "@/lib/catalog";

export function generateStaticParams() {
  return fallbackProducts.map(product => ({ handle: product.handle }));
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getFallbackProduct(handle);
  if (!product) notFound();

  const related = fallbackProducts.filter(item => item.handle !== product.handle).slice(0, 3);

  return (
    <main>
      <section className="pdp">
        <div className="pdp-media">
          <Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 60vw" />
        </div>
        <div className="pdp-info">
          <p className="pdp-category">{product.category}</p>
          <h1>{product.title}</h1>
          <strong className="pdp-price">{product.price}</strong>
          <p className="pdp-note">{product.note}</p>
          <p className="pdp-description">{product.description}</p>
          <AddToBag product={product} />
          <div className="pdp-details">
            <details open><summary>Details</summary><p>Natural pearl character. Each piece can vary slightly in contour, texture and lustre.</p></details>
            <details><summary>Care</summary><p>Store dry. Avoid perfume, lotions and harsh chemicals. Wipe gently after wear.</p></details>
            <details><summary>Shipping & returns</summary><p>Complimentary shipping over $120. Returns accepted within 30 days on unworn pieces.</p></details>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-title-row"><h2>You may also like</h2></div>
        <div className="product-grid product-grid--three">
          {related.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </main>
  );
}
