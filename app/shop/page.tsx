import ShopClient from "./ShopClient";
import { products, categories } from "@/data/products";

export const metadata = {
  title: "Shop All Treats | Lillie's Treats",
  description:
    "Browse our full menu of handcrafted cupcakes, chin chin, cookies and more.",
};

export default function ShopPage() {
  return (
    <div className="max-w-[1488px] mx-auto px-12 py-16">
      {/* Page header */}
      <div className="text-center mb-12">
        <p className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-2">
          Everything We Make
        </p>
        <h1 className="font-heading font-bold text-5xl text-brand-dark">
          Our Treats
        </h1>
      </div>

      {/* Interactive filter + grid */}
      <ShopClient products={products} categories={categories} />
    </div>
  );
}
