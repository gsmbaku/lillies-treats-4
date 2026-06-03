"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const BADGES = [
  { emoji: "🧁", label: "Freshly Baked" },
  { emoji: "🌿", label: "Natural Ingredients" },
  { emoji: "💕", label: "Made with Love" },
];

const CATEGORY_LABELS: Record<string, string> = {
  cupcake: "Cupcake",
  "chin-chin": "Chin Chin",
  cookie: "Cookie",
  other: "Special",
};

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const [qty, setQty] = useState(1);
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const wishlisted = has(product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    openCart();
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-body text-sm text-brand-muted mb-10">
        <Link href="/" className="hover:text-brand-pink transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-brand-pink transition-colors">
          Shop
        </Link>
        <span>/</span>
        <span className="text-brand-dark font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative"
        >
          {/* Pink glow decoration */}
          <div
            className="absolute inset-[-32px] rounded-full blur-[64px] pointer-events-none opacity-60"
            style={{
              background:
                "linear-gradient(149deg, rgba(250,218,221,0.6) 0%, rgba(255,224,204,0.4) 100%)",
            }}
          />
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-card-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Wishlist on image */}
          <button
            onClick={() => toggle(product.id)}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-card flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                wishlisted
                  ? "fill-brand-pink text-brand-pink"
                  : "text-brand-warm"
              }`}
            />
          </button>
        </motion.div>

        {/* ── Right: Info ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Category badge */}
          <span className="inline-flex items-center self-start bg-brand-pink-light text-brand-pink font-body font-medium text-xs px-3 py-1 rounded-full">
            {CATEGORY_LABELS[product.category] ?? "Treat"}
          </span>

          {/* Name */}
          <h1 className="font-heading font-bold text-4xl text-brand-dark leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <p className="font-body font-bold text-3xl text-brand-pink">
            ${product.price.toFixed(2)}
          </p>

          {/* Long description */}
          <p className="font-body text-base text-brand-muted leading-7">
            {product.longDescription}
          </p>

          {/* Quantity selector */}
          <div className="flex items-center gap-4">
            <span className="font-body font-medium text-sm text-brand-warm">
              Quantity
            </span>
            <div className="flex items-center gap-3 bg-white border border-brand-border rounded-full px-4 py-2">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                disabled={qty <= 1}
                className="text-brand-warm hover:text-brand-pink disabled:opacity-30 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-body font-semibold text-base text-brand-dark w-6 text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
                className="text-brand-warm hover:text-brand-pink transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-3 bg-brand-pink text-white font-body font-semibold text-base py-4 rounded-full shadow-btn hover:bg-brand-pink-hover active:scale-95 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Add {qty > 1 ? `${qty} ` : ""}to Cart —{" "}
            ${(product.price * qty).toFixed(2)}
          </button>

          {/* Feature badges */}
          <div className="flex items-center gap-3 flex-wrap pt-2">
            {BADGES.map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/70 border border-brand-border rounded-full px-4 py-2"
              >
                <span>{emoji}</span>
                <span className="font-body font-medium text-xs text-brand-warm">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Back to shop */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-body text-sm text-brand-muted hover:text-brand-pink transition-colors self-start mt-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
