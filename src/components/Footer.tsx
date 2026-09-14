import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <BrandLogo />
          <p>Modern pearls and keepsakes for the life you are becoming.</p>
        </div>
        <div className="footer-links">
          <div><h4>Shop</h4><Link href="/collections">All jewelry</Link><Link href="/#new">New arrivals</Link><Link href="/collections?category=earrings">Earrings</Link></div>
          <div><h4>About</h4><Link href="/#story">Our story</Link><a href="#">Materials & care</a><a href="#">Journal</a></div>
          <div><h4>Help</h4><a href="#">Shipping</a><a href="#">Returns</a><a href="#">Contact</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 TOKI</span><span>Instagram · TikTok · Pinterest</span></div>
    </footer>
  );
}
