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

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TOKI JEWELRY · BAROQUE PEARL 01</p>
          <h1>Nature never<br />repeats itself.</h1>
          <p className="hero-lead">Neither should you.</p>
          <p className="hero-body">Irregular pearls, soft gold and modern silhouettes — pieces chosen for the woman you are becoming.</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/collections/baroque-pearl">Shop Baroque Pearls</Link>
            <a className="text-link" href="#story">Discover TOKI <span>↗</span></a>
          </div>
        </div>
        <div className="hero-media">
          <Image src={media.portrait} alt="TOKI woman wearing baroque pearl jewelry" fill priority sizes="(max-width: 800px) 100vw, 56vw" />
          <div className="hero-caption"><span>01</span><p>BAROQUE PEARL<br />COLLECTION</p></div>
        </div>
      </section>

      <section className="philosophy-strip">
        <p>REAL PEARLS</p><i />
        <p>IRREGULAR BY NATURE</p><i />
        <p>MODERN KEEPSAKES</p><i />
        <p>WEAR YOUR OWN TIME</p>
      </section>

      <section className="section collection-intro" id="new">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">THE FIRST EDIT</p><h2>Pieces that feel<br />already yours.</h2></div>
          <p>Not perfection. Character. Each pearl carries its own surface, contour and light — the details that make it impossible to duplicate.</p>
        </div>
        <div className="category-grid">
          <Link href="/collections/baroque-pearl#earrings" className="category-card tall"><Image src={media.earrings} alt="Baroque pearl earrings" fill /><div><span>01</span><h3>Earrings</h3><p>Light, movement, individuality.</p></div></Link>
          <Link href="/collections/baroque-pearl#rings" className="category-card"><Image src={media.ringsSatin} alt="Baroque pearl ring" fill /><div><span>02</span><h3>Rings</h3><p>Sculptural details for every day.</p></div></Link>
          <Link href="/collections/baroque-pearl#necklaces" className="category-card"><Image src={media.pearls} alt="Baroque pearl necklace" fill /><div><span>03</span><h3>Necklaces</h3><p>Modern keepsakes, close to you.</p></div></Link>
        </div>
      </section>

      <section className="section products-section">
        <div className="section-heading product-heading"><div><p className="eyebrow">THE TOKI EDIT</p><h2>Signature pieces</h2></div><Link href="/collections/baroque-pearl" className="text-link">View all pieces <span>↗</span></Link></div>
        <div className="product-grid">{products.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}</div>
      </section>

      <section className="editorial" id="story">
        <div className="editorial-image"><Image src={media.portrait} alt="TOKI editorial portrait" fill /></div>
        <div className="editorial-copy">
          <p className="eyebrow light">OUR STORY</p>
          <h2>More than jewelry.<br />A part of your story.</h2>
          <p>TOKI is about time — not the kind measured by a clock, but the kind you remember. A morning you chose yourself. A city you finally visited. A version of you that felt more certain.</p>
          <p>We create pieces to live inside those moments.</p>
          <a className="light-link" href="#craft">Our philosophy <span>↗</span></a>
        </div>
      </section>

      <section className="section craft" id="craft">
        <div className="craft-copy">
          <p className="eyebrow">NATURALLY UNIQUE</p>
          <h2>Imperfection is<br />the signature.</h2>
          <p>Baroque pearls grow without a template. Their ridges, curves and subtle variations are not flaws to hide — they are the reason no two TOKI pieces feel exactly the same.</p>
          <div className="craft-points">
            <div><span>01</span><h4>Selected for character</h4><p>Shape, lustre and personality over uniformity.</p></div>
            <div><span>02</span><h4>Designed for now</h4><p>Clean, modern settings balance organic pearl forms.</p></div>
            <div><span>03</span><h4>Made to be kept</h4><p>Jewelry meant to gather memory, not chase a season.</p></div>
          </div>
        </div>
        <div className="craft-image"><Image src={media.ringsBook} alt="TOKI rings and baroque pearl jewelry" fill /></div>
      </section>

      <section className="store-story">
        <Image src={media.ringsSatin} alt="TOKI boutique mood" fill />
        <div className="store-overlay"><p className="eyebrow light">A TOKI WORLD</p><h2>Wear your own time.</h2><p>Soft light. Quiet confidence. Objects worth keeping.</p><Link className="btn ivory" href="/collections/baroque-pearl">Enter the collection</Link></div>
      </section>

      <section className="newsletter">
        <p className="eyebrow">TOKI NOTES</p>
        <h2>A little beauty,<br />sent slowly.</h2>
        <p>New pieces, styling stories and the quiet things worth noticing.</p>
        <form className="newsletter-form"><input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Join the list</button></form>
      </section>

      <Footer />
    </main>
  );
}
