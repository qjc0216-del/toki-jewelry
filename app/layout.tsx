import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOKI Jewelry — Modern Keepsakes",
  description: "TOKI Jewelry. Modern keepsakes, baroque pearls, and pieces made for your own time.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
