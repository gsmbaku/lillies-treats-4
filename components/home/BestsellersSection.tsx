import ProductCard from "@/components/shop/ProductCard";
import { featuredProducts } from "@/data/products";

export default function BestsellersSection() {
  return (
    <section className="w-full py-16 px-12 max-w-[1488px] mx-auto bg-gradient-to-b from-transparent to-[rgba(252,238,242,0.4)]">
      {/* Section header */}
      <div className="text-center mb-12">
        <p className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-2">
          Customer Favorites
        </p>
        <h2 className="font-heading font-bold text-4xl text-brand-dark">
          Our Bestsellers
        </h2>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
