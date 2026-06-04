// Static product catalog — replace image URLs with your own CDN/storage before launch.
// Figma asset URLs expire after 7 days; swap them for permanent URLs once real
// product photography is available.

export type Category = "cupcake" | "chin-chin" | "cookie" | "other";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: Category;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "strawberry-dream",
    slug: "strawberry-dream",
    name: "Strawberry Dream",
    description: "Fluffy vanilla sponge with strawberry buttercream",
    longDescription:
      "Light as a cloud and bursting with fresh strawberry flavour. Our signature vanilla sponge is layered with house-made strawberry buttercream and finished with a fresh berry on top. Every bite is sunshine in cupcake form.",
    price: 4.99,
    image:
      "https://www.figma.com/api/mcp/asset/b1c0c8f3-ac16-43db-b132-38fc35df35dd",
    category: "cupcake",
    featured: true,
  },
  {
    id: "red-velvet-bliss",
    slug: "red-velvet-bliss",
    name: "Red Velvet Bliss",
    description: "Classic red velvet with cream cheese frosting",
    longDescription:
      "The Southern classic, perfected. Rich cocoa-kissed red velvet sponge crowned with a silky cream cheese frosting that melts on the tongue. A timeless treat made fresh daily.",
    price: 5.49,
    image:
      "https://www.figma.com/api/mcp/asset/51024868-b011-4656-b160-0012d99ae040",
    category: "cupcake",
    featured: true,
  },
  {
    id: "chin-chin-classic",
    slug: "chin-chin-classic",
    name: "Chin Chin Classic",
    description: "Crunchy, golden, irresistibly addictive",
    longDescription:
      "Made fresh in small batches from our grandmother's recipe. Golden, crispy, lightly sweetened — the snack you can never stop eating. Shared at every family gathering, now available at your door.",
    price: 6.99,
    image:
      "https://www.figma.com/api/mcp/asset/495d5621-1a01-4c35-874e-39fce245702e",
    category: "chin-chin",
    featured: true,
  },
  {
    id: "lemon-sunshine",
    slug: "lemon-sunshine",
    name: "Lemon Sunshine",
    description: "Zesty lemon curd cupcake with vanilla cream",
    longDescription:
      "Bright, citrusy, and impossible to resist. A moist lemon sponge hides a pocket of homemade lemon curd, all topped with whipped vanilla cream and a twist of lemon zest.",
    price: 4.99,
    image:
      "https://www.figma.com/api/mcp/asset/b1c0c8f3-ac16-43db-b132-38fc35df35dd",
    category: "cupcake",
    featured: false,
  },
  {
    id: "spiced-chin-chin",
    slug: "spiced-chin-chin",
    name: "Spiced Chin Chin",
    description: "Warm cinnamon and nutmeg in every crispy bite",
    longDescription:
      "A bold twist on the classic. The same golden crunch you love, now infused with warm cinnamon, a whisper of nutmeg, and just the right amount of sweet. Perfect with a cup of tea.",
    price: 7.49,
    image:
      "https://www.figma.com/api/mcp/asset/495d5621-1a01-4c35-874e-39fce245702e",
    category: "chin-chin",
    featured: false,
  },
  {
    id: "cookies-and-cream",
    slug: "cookies-and-cream",
    name: "Cookies & Cream",
    description: "Chocolate cookie crumble meets silky cream filling",
    longDescription:
      "Two chocolate cookie discs sandwich a cloud of whipped cream filling. Inspired by the classic biscuit, elevated with dark cocoa and house-churned cream. A crowd favourite for all ages.",
    price: 3.99,
    image:
      "https://www.figma.com/api/mcp/asset/51024868-b011-4656-b160-0012d99ae040",
    category: "cookie",
    featured: false,
  },
];

/** Featured products shown on the homepage Bestsellers section */
export const featuredProducts = products.filter((p) => p.featured);

/** All unique categories present in the catalog */
export const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All Treats" },
  { value: "cupcake", label: "Cupcakes" },
  { value: "chin-chin", label: "Chin Chin" },
  { value: "cookie", label: "Cookies" },
];

/** Find a single product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Get related products (same category, excluding current) */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
