"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/store/cartStore";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-start gap-3 py-4 border-b border-brand-border last:border-0">
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-brand-pink-light">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-body font-medium text-sm text-brand-dark truncate">
          {item.name}
        </h3>
        <p className="font-body font-bold text-sm text-brand-pink mt-0.5">
          ${item.price.toFixed(2)}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
            className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-pink hover:text-brand-pink transition-colors text-brand-warm"
          >
            <Minus className="w-3 h-3" />
          </button>

          <span className="font-body font-medium text-sm text-brand-dark w-6 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
            className="w-7 h-7 rounded-full border border-brand-border flex items-center justify-center hover:border-brand-pink hover:text-brand-pink transition-colors text-brand-warm"
          >
            <Plus className="w-3 h-3" />
          </button>

          {/* Remove */}
          <button
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
            className="ml-auto text-brand-muted hover:text-brand-pink transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
