import type { Metadata, Viewport } from "next";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./global.css";
import "./retail-home.css";

export const metadata: Metadata = {
  title: "TOKI Jewelry — Wear Your Own Time",
  description: "Modern baroque pearls and keepsakes designed for your own rhythm."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
