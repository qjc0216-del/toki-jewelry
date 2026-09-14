import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/integrations/shopify/products";

export default async function HomePage() {
  const products = await getProducts(8);
  const firstShelf = products.slice(0, 4);
  const secondShelf = products.slice(4, 8).length ? products.slice(4, 8) : products.slice(0, 4);

  return (
    <main className="lulu-home">
      <section className="retail-hero">
        <div className="retail-hero-media">
          <Image
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=92&w=2200"
            alt="TOKI modern pearl jewelry campaign"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="retail-hero-content">
          <p>NEW SEASON · TOKI JEWELRY</p>
          <h1>The new pearl uniform.</h1>
          <p className="retail-hero-copy">Natural baroque pearls, clean proportions and pieces made for every day—not only special occasions.</p>
          <div className="retail-hero-actions">
            <Link href="/collections" className="retail-btn retail-btn--light">Shop new arrivals</Link>
            <Link href="/collections?category=earrings" className="retail-btn retail-btn--ghost">Shop earrings</Link>
          </div>
        </div>
      </section>

      <section className="campaign-intro">
        <h2>Jewelry that moves with your life.</h2>
        <p>Easy enough for the morning. Distinctive enough for the night. TOKI is designed to stay on while the day changes around you.</p>
      </section>

      <section className="feature-pair">
        <article className="feature-story">
          <div className="feature-story-image">
            <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=90&w=1400" alt="Baroque pearl earrings" fill />
          </div>
          <div className="feature-story-copy">
            <h3>Everything you need, nothing you don’t.</h3>
            <p>Lightweight earrings and compact silhouettes that make getting dressed feel effortless.</p>
            <Link href="/collections?category=earrings">Shop earrings</Link>
          </div>
        </article>

        <article className="feature-story">
          <div className="feature-story-image">
            <Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=90&w=1400" alt="Modern pearl necklace" fill />
          </div>
          <div className="feature-story-copy">
            <h3>Made to layer. Made to keep.</h3>
            <p>Modern pearl necklaces built for T-shirts, tailoring, dresses and everything in between.</p>
            <Link href="/collections?category=necklaces">Shop necklaces</Link>
          </div>
        </article>
      </section>

      <section className="retail-shelf" id="new">
        <div className="retail-shelf-head">
          <div>
            <p>New arrivals</p>
            <h2>Fresh into TOKI</h2>
          </div>
          <Link href="/collections">Shop all</Link>
        </div>
        <div className="retail-product-grid">
          {firstShelf.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="wide-campaign">
        <div className="wide-campaign-media">
          <Image src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=92&w=2200" alt="TOKI pearl styling" fill />
        </div>
        <div className="wide-campaign-copy">
          <p>BAROQUE, BY NATURE</p>
          <h2>No two pearls. No two women. No two moments exactly the same.</h2>
          <Link href="/collections" className="retail-btn retail-btn--dark">Explore baroque pearls</Link>
        </div>
      </section>

      <section className="category-strip" aria-label="Shop by category">
        <Link href="/collections?category=earrings" className="category-tile">
          <div><Image src="https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&fit=crop&q=88&w=1000" alt="Earrings" fill /></div>
          <span>Earrings</span>
        </Link>
        <Link href="/collections?category=necklaces" className="category-tile">
          <div><Image src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=88&w=1000" alt="Necklaces" fill /></div>
          <span>Necklaces</span>
        </Link>
        <Link href="/collections?category=rings" className="category-tile">
          <div><Image src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=88&w=1000" alt="Rings" fill /></div>
          <span>Rings</span>
        </Link>
      </section>

      <section className="retail-shelf" id="best">
        <div className="retail-shelf-head">
          <div>
            <p>Most loved</p>
            <h2>Best sellers</h2>
          </div>
          <Link href="/collections">View collection</Link>
        </div>
        <div className="retail-product-grid">
          {secondShelf.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="everyday-banner">
        <div className="everyday-banner-copy">
          <p>WEAR YOUR OWN TIME</p>
          <h2>Designed for the life happening now.</h2>
          <p>Workdays, weekends, travel, dinners, slow mornings. Pieces that feel polished without feeling precious.</p>
          <Link href="/collections" className="retail-btn retail-btn--dark">Shop the collection</Link>
        </div>
        <div className="everyday-banner-image">
          <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=90&w=1500" alt="TOKI everyday jewelry" fill />
        </div>
      </section>

      <section className="service-row">
        <div><strong>Complimentary shipping</strong><span>On orders over $120</span></div>
        <div><strong>30-day returns</strong><span>Simple, considered returns</span></div>
        <div><strong>Natural baroque pearls</strong><span>Every piece is visually unique</span></div>
        <div><strong>Secure checkout</strong><span>Protected payments</span></div>
      </section>

      <section className="newsletter retail-newsletter" id="newsletter">
        <div>
          <p className="section-overline">TOKI Notes</p>
          <h2>New pieces. Styling ideas. No noise.</h2>
        </div>
        <form><input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Join</button></form>
      </section>
    </main>
  );
}
