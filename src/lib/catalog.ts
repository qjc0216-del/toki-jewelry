export type Product = {
  id: string;
  handle: string;
  title: string;
  price: string;
  numericPrice: number;
  image: string;
  imageAlt: string;
  category: "Earrings" | "Necklaces" | "Rings";
  note: string;
  description: string;
};

export const fallbackProducts: Product[] = [
  {
    id: "toki-01",
    handle: "muse-baroque-drops",
    title: "Muse Baroque Drops",
    price: "$118",
    numericPrice: 118,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Baroque pearl drop earrings",
    category: "Earrings",
    note: "Natural baroque pearl · gold finish",
    description: "Light-catching baroque pearls with a clean gold setting. Each pair keeps the irregular character that makes the pearl feel personal."
  },
  {
    id: "toki-02",
    handle: "halo-pearl-necklace",
    title: "Halo Pearl Necklace",
    price: "$136",
    numericPrice: 136,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Modern pearl necklace",
    category: "Necklaces",
    note: "Freshwater pearls · adjustable length",
    description: "A clean pearl line with enough irregularity to feel modern. Easy with a tank, slip dress, blazer, or bare skin."
  },
  {
    id: "toki-03",
    handle: "nova-pearl-ring",
    title: "Nova Pearl Ring",
    price: "$98",
    numericPrice: 98,
    image: "https://images.unsplash.com/photo-1603561596112-db1d18d140b3?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Pearl statement ring",
    category: "Rings",
    note: "Organic pearl · sculptural band",
    description: "A single luminous pearl held in a soft sculptural frame. Designed to read minimal from a distance and expressive up close."
  },
  {
    id: "toki-04",
    handle: "echo-pearl-hoops",
    title: "Echo Pearl Hoops",
    price: "$106",
    numericPrice: 106,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Gold hoop earrings with pearl detail",
    category: "Earrings",
    note: "Pearl charm · slim hoop",
    description: "A sharper, younger way to wear pearls: slim hoops, soft movement, and a removable pearl detail."
  },
  {
    id: "toki-05",
    handle: "tide-baroque-strand",
    title: "Tide Baroque Strand",
    price: "$152",
    numericPrice: 152,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Baroque pearl strand necklace",
    category: "Necklaces",
    note: "Baroque strand · signature clasp",
    description: "Organic pearls selected for shape and lustre, finished with a quiet TOKI signature clasp."
  },
  {
    id: "toki-06",
    handle: "soft-form-ring",
    title: "Soft Form Ring",
    price: "$92",
    numericPrice: 92,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=88&w=1200",
    imageAlt: "Modern gold pearl ring",
    category: "Rings",
    note: "Fluid gold finish · natural pearl",
    description: "An everyday ring with an organic curve and a small pearl focal point. Quiet enough to stack, distinct enough to wear alone."
  }
];

export function getFallbackProduct(handle: string) {
  return fallbackProducts.find((product) => product.handle === handle);
}
