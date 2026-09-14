import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><BrandLogo light /><p>Modern keepsakes for women who choose their own rhythm.</p></div>
      <div className="footer-cols">
        <div><h4>Shop</h4><Link href="/collections/baroque-pearl">Baroque Pearls</Link><a href="#new">New Arrivals</a><a href="#">Gift Edit</a></div>
        <div><h4>About</h4><a href="#story">Our Story</a><a href="#craft">Materials & Care</a><a href="#">Journal</a></div>
        <div><h4>Help</h4><a href="#">Shipping</a><a href="#">Returns</a><a href="#">Contact</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 TOKI. Wear Your Own Time.</span><span>Instagram · Pinterest · TikTok</span></div>
    </footer>
  );
}
