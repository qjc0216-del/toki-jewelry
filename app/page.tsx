import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, media } from "@/lib/products";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-young">
        <div className="hero-young-media">
          <Image src={media.portrait} alt="TOKI woman wearing contemporary jewelry" fill priority sizes="(max-width: 800px) 100vw, 58vw" />
          <div className="hero-badge">Baroque Pearl 01</div>
        </div>
        <div className="hero-young-copy">
          <p className="hero-kicker">TOKI Jewelry</p>
          <h1>Pearls with<br />personality.</h1>
          <p className="hero-lead">Organic shapes. Soft gold. Modern pieces made to feel like you, not everyone else.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/collections/baroque-pearl">Shop the pearl edit</Link>
            <a className="plain-link" href="#shop">See bestsellers</a>
          </div>
          <p className="hero-note">Natural baroque pearls · Each one visually unique</p>
        </div>
      </section>

      <nav className="shop-nav" aria-label="Shop by category">
        <Link href="/#shop">New in</Link>
        <Link href="/collections/baroque-pearl#earrings">Earrings</Link>
        <Link href="/collections/baroque-pearl#necklaces">Necklaces</Link>
        <Link href="/collections/baroque-pearl#rings">Rings</Link>
        <Link href="/collections/baroque-pearl">All pearls</Link>
      </nav>

      <section className="shop-section" id="shop">
        <div className="shop-heading">
          <div>
            <p className="section-kicker">The TOKI edit</p>
            <h2>Wear now. Keep forever.</h2>
          </div>
          <Link href="/collections/baroque-pearl" className="plain-link">Shop all</Link>
        </div>
        <div className="product-grid">{products.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="style-story">
        <div className="style-story-copy">
          <p className="section-kicker">Baroque, but make it everyday</p>
          <h2>Less “special occasion.”<br />More your signature.</h2>
          <p>Irregular pearls bring texture and character without trying too hard. Wear one statement piece or layer them into your everyday look.</p>
          <Link className="btn dark" href="/collections/baroque-pearl">Explore Baroque Pearl</Link>
        </div>
        <div className="style-story-grid">
          <div className="style-shot large"><Image src={media.earrings} alt="Baroque pearl earrings" fill /></div>
          <div className="style-shot"><Image src={media.ringsSatin} alt="Modern pearl ring" fill /></div>
          <div className="style-shot"><Image src={media.pearls} alt="Baroque pearl necklace" fill /></div>
        </div>
      </section>

      <section className="category-edit">
        <Link href="/collections/baroque-pearl#earrings" className="category-edit-card">
          <Image src={media.earrings} alt="Shop earrings" fill />
          <div><h3>Earrings</h3><span>Shop the edit</span></div>
        </Link>
        <Link href="/collections/baroque-pearl#rings" className="category-edit-card">
          <Image src={media.ringsBook} alt="Shop rings" fill />
          <div><h3>Rings</h3><span>Shop the edit</span></div>
        </Link>
        <Link href="/collections/baroque-pearl#necklaces" className="category-edit-card">
          <Image src={media.pearls} alt="Shop necklaces" fill />
          <div><h3>Necklaces</h3><span>Shop the edit</span></div>
        </Link>
      </section>

      <section className="brand-story-modern" id="story">
        <div className="brand-story-logo">
          <img src="/toki-logo-final.webp" alt="TOKI — Wear Your Own Time" />
          <span>JEWELRY</span>
        </div>
        <div className="brand-story-copy">
          <h2>Jewelry for the version of you you’re becoming.</h2>
          <p>TOKI is about time — the moments that change your pace, your taste, and the way you see yourself. We make modern keepsakes to live inside those moments.</p>
          <p className="brand-quote">Wear Your Own Time.</p>
        </div>
      </section>

      <section className="newsletter-modern">
        <div><p className="section-kicker">TOKI Notes</p><h2>New pieces. Good styling.<br />No noise.</h2></div>
        <form className="newsletter-form"><input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Join</button></form>
      </section>

      <Footer />
    </main>
  );
}
