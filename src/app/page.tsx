import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/integrations/shopify/products";

export default async function HomePage() {
  const products = await getProducts(6);

  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=90&w=1800"
            alt="Modern pearl jewelry"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-panel">
          <p className="hero-kicker">TOKI Jewelry</p>
          <h1>Pearls,<br />without the rules.</h1>
          <p className="hero-copy">Modern baroque pieces made to move between work, weekends, dinners and the moments you keep.</p>
          <div className="hero-actions">
            <Link href="/collections" className="button button--dark">Shop the edit</Link>
            <Link href="/#story" className="inline-link">Meet TOKI <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="TOKI values">
        <span>Natural baroque pearls</span><i />
        <span>Modern keepsakes</span><i />
        <span>Designed for everyday</span><i />
        <span>Wear your own time</span>
      </section>

      <section className="section" id="new">
        <div className="section-title-row">
          <div><p className="section-overline">New in</p><h2>The TOKI edit</h2></div>
          <Link href="/collections" className="inline-link">Shop all <ArrowUpRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="category-editorial">
        <Link href="/collections?category=earrings" className="category-block category-block--image">
          <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=88&w=1200" alt="Pearl earrings" fill />
          <span>Earrings</span>
        </Link>
        <div className="category-block category-block--copy">
          <p>Made for now</p>
          <h2>Not your grandmother&apos;s pearls.</h2>
          <p className="category-text">Less ceremony, more personality. Organic shapes, clean metal, easy proportions.</p>
          <Link href="/collections" className="button button--outline">Explore the collection</Link>
        </div>
        <Link href="/collections?category=necklaces" className="category-block category-block--image">
          <Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=88&w=1200" alt="Pearl necklace" fill />
          <span>Necklaces</span>
        </Link>
      </section>

      <section className="story" id="story">
        <div className="story-copy">
          <p className="section-overline">Wear Your Own Time</p>
          <h2>Jewelry for the woman you are becoming.</h2>
          <p>TOKI is about time you choose for yourself: the trip you finally take, the new job, the quiet morning, the dinner that runs late, the version of you that feels more certain.</p>
          <p>Our pieces are designed to live inside those moments — not sit in a box waiting for an occasion.</p>
        </div>
        <div className="story-image">
          <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=88&w=1400" alt="TOKI modern jewelry styling" fill />
        </div>
      </section>

      <section className="newsletter">
        <div>
          <p className="section-overline">TOKI Notes</p>
          <h2>New pieces. Styling ideas. No noise.</h2>
        </div>
        <form><input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Join</button></form>
      </section>
    </main>
  );
}
