import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/integrations/shopify/products";

const quickLinks = [
  ["New arrivals", "/#new"],
  ["Baroque pearls", "/collections"],
  ["Earrings", "/collections?category=earrings"],
  ["Necklaces", "/collections?category=necklaces"],
  ["Rings", "/collections?category=rings"],
  ["Gifts", "/collections"]
];

export default async function HomePage() {
  const products = await getProducts(8);

  return (
    <main className="ll-home">
      <section className="ll-quicklinks" aria-label="Shop TOKI categories">
        {quickLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </section>

      <section className="ll-hero">
        <Image
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=92&w=2400"
          alt="TOKI baroque pearl campaign"
          fill
          priority
          sizes="100vw"
        />
        <div className="ll-hero__shade" />
        <div className="ll-hero__content">
          <p>THE BAROQUE EDIT</p>
          <h1>Pearls, without the rules.</h1>
          <p className="ll-hero__copy">Irregular by nature. Easy by design. Modern pearl jewelry for every version of your day.</p>
          <div className="ll-hero__buttons">
            <Link href="/collections" className="ll-button ll-button--light">Shop new arrivals</Link>
            <Link href="/collections?category=earrings" className="ll-button ll-button--light">Shop earrings</Link>
          </div>
        </div>
      </section>

      <section className="ll-editorial-pair">
        <article className="ll-story-card">
          <div className="ll-story-card__media">
            <Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=90&w=1400" alt="TOKI pearl earrings" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="ll-story-card__copy">
            <h2>Everything you need, right here.</h2>
            <p>Light-catching earrings that keep the look polished without making it feel precious.</p>
            <Link href="/collections?category=earrings">Shop earrings</Link>
          </div>
        </article>

        <article className="ll-story-card">
          <div className="ll-story-card__media">
            <Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=90&w=1400" alt="TOKI pearl necklace" fill sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="ll-story-card__copy">
            <h2>Layer it your way.</h2>
            <p>Clean pearl strands and pendants designed for tanks, tailoring, dresses and bare skin.</p>
            <Link href="/collections?category=necklaces">Shop necklaces</Link>
          </div>
        </article>
      </section>

      <section className="ll-product-section" id="new">
        <div className="ll-section-heading">
          <h2>New in TOKI</h2>
          <Link href="/collections">Shop all</Link>
        </div>
        <div className="ll-product-rail">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="ll-wide-campaign">
        <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=92&w=2400" alt="TOKI modern pearl styling" fill sizes="100vw" />
        <div className="ll-wide-campaign__shade" />
        <div className="ll-wide-campaign__copy">
          <p>MADE FOR NOW</p>
          <h2>Jewelry that moves with your life.</h2>
          <p>Workdays. Weekends. Travel. Dinner that runs late. Pieces that stay on while the day changes around you.</p>
          <Link href="/collections" className="ll-button ll-button--light">Shop the collection</Link>
        </div>
      </section>

      <section className="ll-story-grid">
        <article>
          <div className="ll-story-grid__media"><Image src="https://images.unsplash.com/photo-1608508644127-ba99d7732fee?auto=format&fit=crop&q=88&w=1000" alt="Pearl earrings" fill /></div>
          <h3>Small piece. Big difference.</h3>
          <p>Easy earrings that sharpen a simple look in seconds.</p>
          <Link href="/collections?category=earrings">Shop earrings</Link>
        </article>
        <article>
          <div className="ll-story-grid__media"><Image src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=88&w=1000" alt="TOKI rings" fill /></div>
          <h3>Stack, switch, repeat.</h3>
          <p>Sculptural rings designed to work alone or together.</p>
          <Link href="/collections?category=rings">Shop rings</Link>
        </article>
        <article>
          <div className="ll-story-grid__media"><Image src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=88&w=1000" alt="Pearl necklaces" fill /></div>
          <h3>Your everyday layer.</h3>
          <p>Pearl necklaces with modern proportions and soft movement.</p>
          <Link href="/collections?category=necklaces">Shop necklaces</Link>
        </article>
        <article>
          <div className="ll-story-grid__media"><Image src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=88&w=1000" alt="TOKI gift jewelry" fill /></div>
          <h3>Worth keeping.</h3>
          <p>Pieces for birthdays, milestones, new chapters and no reason at all.</p>
          <Link href="/collections">Shop gifts</Link>
        </article>
      </section>

      <section className="ll-category-section">
        <div className="ll-section-heading ll-section-heading--center">
          <h2>TOKI essentials</h2>
        </div>
        <div className="ll-category-row">
          <Link href="/collections?category=earrings" className="ll-category-card">
            <div><Image src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=88&w=1000" alt="Earrings" fill /></div>
            <span>Earrings</span>
          </Link>
          <Link href="/collections?category=necklaces" className="ll-category-card">
            <div><Image src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=88&w=1000" alt="Necklaces" fill /></div>
            <span>Necklaces</span>
          </Link>
          <Link href="/collections?category=rings" className="ll-category-card">
            <div><Image src="https://images.unsplash.com/photo-1603561596112-db1d18d140b3?auto=format&fit=crop&q=88&w=1000" alt="Rings" fill /></div>
            <span>Rings</span>
          </Link>
        </div>
      </section>

      <section className="ll-brand-panel">
        <div className="ll-brand-panel__copy">
          <p>WEAR YOUR OWN TIME</p>
          <h2>Made for the woman you are becoming.</h2>
          <p>TOKI is about choosing your own rhythm. Jewelry should move through real life with you, not wait in a box for an occasion.</p>
          <Link href="/collections" className="ll-button ll-button--dark">Meet the collection</Link>
        </div>
        <div className="ll-brand-panel__media">
          <Image src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=90&w=1500" alt="TOKI everyday jewelry styling" fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </section>

      <section className="ll-service-row" id="stores">
        <div><strong>Complimentary shipping</strong><span>On orders over $120</span></div>
        <div><strong>30-day returns</strong><span>Simple, considered returns</span></div>
        <div><strong>Natural baroque pearls</strong><span>Every piece is visually unique</span></div>
        <div><strong>Secure checkout</strong><span>Protected payments</span></div>
      </section>

      <section className="ll-newsletter" id="newsletter">
        <div>
          <h2>Be first to know.</h2>
          <p>New pieces, limited drops and TOKI stories, sent occasionally.</p>
        </div>
        <form>
          <label htmlFor="toki-email">Email address</label>
          <div><input id="toki-email" type="email" placeholder="Email address" /><button type="submit">Sign up</button></div>
        </form>
      </section>
    </main>
  );
}
