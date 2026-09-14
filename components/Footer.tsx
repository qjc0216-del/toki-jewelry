import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand"><BrandLogo light /><p>Modern keepsakes for women who move in their own rhythm.</p></div>
        <div className="footer-cols">
          <div><h4>Shop</h4><Link href="/collections/baroque-pearl">Baroque pearls</Link><Link href="/#shop">New in</Link><Link href="/collections/baroque-pearl#earrings">Earrings</Link><Link href="/collections/baroque-pearl#rings">Rings</Link></div>
          <div><h4>TOKI</h4><Link href="/#story">Our story</Link><a href="mailto:hello@toki.example">Contact</a><a href="#">Shipping & returns</a><a href="#">Care</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 TOKI</span><span>Wear Your Own Time.</span><span>Instagram · Pinterest · TikTok</span></div>
    </footer>
  );
}
