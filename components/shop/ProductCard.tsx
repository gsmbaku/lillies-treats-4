"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

interface ProductCardProps {
  product: Product;
  index?: number; // for staggered animation delay
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, openCart } = useCartStore();
  const { toggle, has } = useWishlistStore();
  const wishlisted = has(product.id);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white border border-brand-border rounded-3xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow flex flex-col"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden shrink-0">
        <Link href={`/shop/${product.slug}`} tabIndex={-1}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Link>

        {/* Wishlist heart */}
        <button
          onClick={() => toggle(product.id)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-card flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted
                ? "fill-brand-pink text-brand-pink"
                : "text-brand-warm"
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/shop/${product.slug}`}>
          <h4 className="font-heading font-semibold text-lg text-brand-dark hover:text-brand-pink transition-colors">
            {product.name}
          </h4>
        </Link>
        <p className="font-body text-sm text-brand-muted mt-1 flex-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="font-body font-bold text-lg text-brand-pink">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-brand-pink text-white font-body font-medium text-sm px-5 py-2 rounded-full hover:bg-brand-pink-hover active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
