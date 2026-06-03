import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import ProductCard from "@/components/shop/ProductCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Pre-render all known product slugs at build time */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Lillie's Treats`,
    description: product.longDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="max-w-[1488px] mx-auto px-12 py-16">
      {/* Main product section */}
      <ProductDetailClient product={product} />

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-24">
          <div className="text-center mb-10">
            <p className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-2">
              You Might Also Like
            </p>
            <h2 className="font-heading font-bold text-3xl text-brand-dark">
              More Treats
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
