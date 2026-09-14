import { ProductCard } from "@/components/ProductCard";
import { fallbackProducts } from "@/lib/catalog";

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q = "" } = await searchParams;
  const needle = q.toLowerCase();
  const results = needle
    ? fallbackProducts.filter(product =>
        `${product.title} ${product.category} ${product.note}`.toLowerCase().includes(needle)
      )
    : fallbackProducts;

  return (
    <main className="search-page">
      <form className="search-form">
        <input name="q" defaultValue={q} placeholder="Search TOKI" aria-label="Search products" />
        <button type="submit">Search</button>
      </form>
      <p className="search-count">{results.length} results</p>
      <div className="product-grid">
        {results.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}
