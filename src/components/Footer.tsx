import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  return (
    <footer className="ll-footer">
      <div className="ll-footer__top">
        <div className="ll-footer__brand">
          <BrandLogo />
          <p>Modern pearls and keepsakes for the life you are becoming.</p>
        </div>
        <div className="ll-footer__links">
          <div>
            <h4>Help</h4>
            <a href="#">Contact us</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <Link href="/cart">Order status</Link>
          </div>
          <div>
            <h4>Shop</h4>
            <Link href="/collections">All jewelry</Link>
            <Link href="/#new">New arrivals</Link>
            <Link href="/collections?category=earrings">Earrings</Link>
            <Link href="/collections?category=necklaces">Necklaces</Link>
          </div>
          <div>
            <h4>About TOKI</h4>
            <a href="#">Our story</a>
            <a href="#">Materials & care</a>
            <a href="#">Journal</a>
            <a href="#">Privacy</a>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
      <div className="ll-footer__bottom">
        <span>© 2026 TOKI. Wear Your Own Time.</span>
        <span>Terms · Privacy · Accessibility</span>
      </div>
    </footer>
  );
}
