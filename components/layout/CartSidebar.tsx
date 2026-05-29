"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import CartItem from "./CartItem";

export default function CartSidebar() {
  const { isOpen, closeCart, items, subtotal } = useCartStore();

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-brand-dark/30 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-[420px] bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
              <h2 className="font-heading font-bold text-2xl text-brand-dark">
                Your Cart
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="w-10 h-10 rounded-full flex items-center justify-center text-brand-warm hover:text-brand-pink hover:bg-brand-cream transition-colors"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              {items.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                  <ShoppingBag className="w-14 h-14 text-brand-border" />
                  <p className="font-heading text-xl text-brand-dark">
                    Your cart is empty
                  </p>
                  <p className="font-body text-sm text-brand-muted max-w-[200px]">
                    Add some treats and they&apos;ll show up here.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-2 bg-brand-pink text-white font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-pink-hover transition-colors"
                  >
                    Shop All Treats
                  </button>
                </div>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      <CartItem item={item} />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer — subtotal + checkout */}
            {items.length > 0 && (
              <div className="border-t border-brand-border px-6 py-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-body font-medium text-base text-brand-warm">
                    Subtotal
                  </span>
                  <span className="font-body font-bold text-xl text-brand-dark">
                    ${subtotal().toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full bg-brand-dark text-white font-body font-semibold text-base py-4 rounded-full text-center hover:opacity-90 transition-opacity"
                >
                  Checkout
                </Link>

                <p className="font-body text-xs text-brand-muted text-center">
                  Shipping &amp; taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
