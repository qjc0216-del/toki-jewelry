import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  return (
    <main>
      <SiteHeader />
      <section className="pdp">
        <div className="pdp-gallery"><div className="pdp-main"><Image src={product.image} alt={product.name} fill priority /></div><div className="pdp-secondary"><Image src={product.hoverImage || product.image} alt={`${product.name} detail`} fill /></div></div>
        <div className="pdp-info">
          <p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="pdp-subtitle">{product.subtitle}</p><p className="pdp-price">${product.price}</p><p className="pdp-description">{product.description}</p>
          <button className="add-to-bag">Add to bag</button>
          <div className="pdp-accordions"><details open><summary>Details</summary><ul>{product.details.map((d) => <li key={d}>{d}</li>)}</ul></details><details><summary>Care</summary><p>Store dry, avoid perfume and harsh chemicals, and wipe gently after wear.</p></details><details><summary>Shipping & returns</summary><p>Prototype policy copy — connect your final fulfillment rules before launch.</p></details></div>
        </div>
      </section>
      <section className="section"><div className="section-heading product-heading"><div><p className="eyebrow">YOU MAY ALSO LIKE</p><h2>Continue the story</h2></div></div><div className="product-grid related-grid">{related.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}</div></section>
      <Footer />
    </main>
  );
}
