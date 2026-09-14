import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/integrations/shopify/products";

export default async function CollectionsPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams;
  const products = await getProducts(24);
  const filtered = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;

  return (
    <main>
      <section className="collection-head">
        <p>TOKI Jewelry</p>
        <h1>{category ? category[0].toUpperCase() + category.slice(1) : "All jewelry"}</h1>
        <span>{filtered.length} pieces</span>
      </section>
      <section className="section collection-section">
        <div className="collection-filters">
          <a href="/collections">All</a>
          <a href="/collections?category=earrings">Earrings</a>
          <a href="/collections?category=necklaces">Necklaces</a>
          <a href="/collections?category=rings">Rings</a>
        </div>
        <div className="product-grid">
          {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
