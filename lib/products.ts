export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  description: string;
  details: string[];
};

const img = {
  portrait: "https://images.unsplash.com/photo-1772615492676-991f7ba90440?auto=format&fit=crop&q=88&w=1800",
  earrings: "https://images.unsplash.com/photo-1782135933410-9fa74bdadf8c?auto=format&fit=crop&q=88&w=1600",
  ringsBook: "https://images.unsplash.com/photo-1573575154350-35e29dfd6cdc?auto=format&fit=crop&q=88&w=1600",
  ringsSatin: "https://images.unsplash.com/photo-1783061339627-37483d51349c?auto=format&fit=crop&q=88&w=1600",
  pearls: "https://images.unsplash.com/photo-1668718003065-9e776554620c?auto=format&fit=crop&q=88&w=1600",
};

export const media = img;

export const products: Product[] = [
  {
    slug: "aurelia-baroque-drops",
    name: "Aurelia Baroque Drops",
    subtitle: "Organic pearl · sculptural gold finish",
    price: 118,
    image: img.earrings,
    hoverImage: img.portrait,
    category: "Earrings",
    description: "A pair designed around the individuality of each pearl. Softly luminous, intentionally irregular, quietly memorable.",
    details: ["Natural baroque pearl", "Gold-finished setting", "Each pair is visually unique"],
  },
  {
    slug: "mira-pearl-signet",
    name: "Mira Pearl Signet",
    subtitle: "Baroque pearl · statement ring",
    price: 96,
    image: img.ringsSatin,
    hoverImage: img.ringsBook,
    category: "Rings",
    description: "A modern signet silhouette softened by a luminous irregular pearl — made to feel collected, not manufactured.",
    details: ["Natural baroque pearl", "Sculptural band", "Statement scale"],
  },
  {
    slug: "elle-keepsake-necklace",
    name: "Elle Keepsake Necklace",
    subtitle: "Pearl strand · medallion detail",
    price: 132,
    image: img.pearls,
    hoverImage: img.portrait,
    category: "Necklaces",
    description: "An imperfect pearl strand with a simple keepsake medallion — a piece that feels personal from the first wear.",
    details: ["Natural baroque pearls", "Adjustable chain detail", "Signature TOKI medallion concept"],
  },
  {
    slug: "luna-pearl-ring",
    name: "Luna Pearl Ring",
    subtitle: "Single pearl · organic setting",
    price: 89,
    image: img.ringsBook,
    hoverImage: img.ringsSatin,
    category: "Rings",
    description: "A softly irregular pearl held in a fluid gold-finished frame. Minimal from afar, expressive up close.",
    details: ["Natural pearl", "Organic sculptural setting", "Made for everyday styling"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
