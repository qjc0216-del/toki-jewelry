import { fallbackProducts, type Product } from "@/lib/catalog";

type ShopifyProductNode = {
  id: string;
  handle: string;
  title: string;
  featuredImage?: { url: string; altText?: string | null } | null;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
};

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_GRAPHQL_ENDPOINT;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode
  }).format(Number(amount));
}

function mapProduct(node: ShopifyProductNode): Product {
  const amount = Number(node.priceRange.minVariantPrice.amount);
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    price: formatPrice(String(amount), node.priceRange.minVariantPrice.currencyCode),
    numericPrice: amount,
    image: node.featuredImage?.url || fallbackProducts[0].image,
    imageAlt: node.featuredImage?.altText || node.title,
    category: "Earrings",
    note: "TOKI Jewelry",
    description: "A TOKI piece selected for modern everyday wear."
  };
}

export async function getProducts(limit = 8): Promise<Product[]> {
  if (!endpoint || !token) return fallbackProducts.slice(0, limit);

  try {
    const query = `
      query Products($first: Int!) {
        products(first: $first) {
          nodes {
            id handle title
            featuredImage { url altText }
            priceRange { minVariantPrice { amount currencyCode } }
          }
        }
      }
    `;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token
      },
      body: JSON.stringify({ query, variables: { first: limit } }),
      next: { revalidate: 120 }
    });

    if (!response.ok) return fallbackProducts.slice(0, limit);
    const json = await response.json();
    const nodes: ShopifyProductNode[] = json?.data?.products?.nodes || [];
    return nodes.length ? nodes.map(mapProduct) : fallbackProducts.slice(0, limit);
  } catch {
    return fallbackProducts.slice(0, limit);
  }
}
