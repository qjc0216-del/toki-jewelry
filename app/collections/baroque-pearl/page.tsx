import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, media } from "@/lib/products";

export default function CollectionPage() {
  return (
    <main>
      <SiteHeader />
      <section className="collection-hero">
        <div><p className="section-kicker">Baroque Pearl</p><h1>Perfectly<br />imperfect.</h1><p>Natural pearls with shape, texture and character — styled for now.</p></div>
        <Image src={media.pearls} alt="TOKI baroque pearl collection" fill priority />
      </section>
      <section className="collection-page section">
        <div className="collection-toolbar"><p>{products.length} pieces</p><div><button>Category</button><button>Sort: Featured</button></div></div>
        <div className="product-grid collection-products">{products.map((p) => <div key={p.slug} id={p.category.toLowerCase()}><ProductCard product={p} /></div>)}</div>
      </section>
      <section className="collection-quote"><p>No two pearls. No two women. No two moments exactly the same.</p><span>TOKI</span></section>
      <Footer />
    </main>
  );
}
