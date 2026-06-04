"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product, Category } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

interface ShopClientProps {
  products: Product[];
  categories: { value: Category | "all"; label: string }[];
}

export default function ShopClient({ products, categories }: ShopClientProps) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter chips */}
      <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
        {categories.map(({ value, label }) => {
          const isActive = active === value;
          return (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`relative font-body font-medium text-sm px-6 py-2.5 rounded-full transition-all ${
                isActive
                  ? "bg-brand-pink text-white shadow-btn"
                  : "bg-white border border-brand-border text-brand-warm hover:border-brand-pink hover:text-brand-pink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-brand-pink rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {label}
            </button>
          );
        })}
      </div>

      {/* Product count */}
      <p className="font-body text-sm text-brand-muted mb-8">
        Showing{" "}
        <span className="font-semibold text-brand-dark">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "treat" : "treats"}
      </p>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.length > 0 ? (
            filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center py-24 gap-3">
              <span className="text-5xl">🍰</span>
              <p className="font-heading text-2xl text-brand-dark">
                Nothing here yet
              </p>
              <p className="font-body text-sm text-brand-muted">
                More treats coming soon — check back later!
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
