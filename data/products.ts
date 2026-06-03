// Static product catalog — replace image URLs with your own CDN/storage before launch.
// Figma asset URLs expire after 7 days; swap them for permanent URLs once real
// product photography is available.

export type Category = "cupcake" | "chin-chin" | "cookie" | "other";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
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
      "Light as a cloud and bursting with fresh strawberry flavour. Our signature vanilla sponge is layered with house-made strawberry buttercream and finished with a fresh berry on top.",
    price: 4.99,
    // Figma asset — swap for permanent URL before launch
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
      "The Southern classic, perfected. Rich cocoa-kissed red velvet sponge crowned with a silky cream cheese frosting that melts on the tongue.",
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
      "Made fresh in small batches from our grandmother's recipe. Golden, crispy, lightly sweetened — the snack you can never stop eating.",
    price: 6.99,
    image:
      "https://www.figma.com/api/mcp/asset/495d5621-1a01-4c35-874e-39fce245702e",
    category: "chin-chin",
    featured: true,
  },
];

/** Featured products shown on the homepage Bestsellers section */
export const featuredProducts = products.filter((p) => p.featured);
