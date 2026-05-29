"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { openCart, totalItems } = useCartStore();
  const count = totalItems();

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-cream/80 backdrop-blur-md border-b border-brand-border">
      <nav className="max-w-[1488px] mx-auto px-12 py-5 flex items-center justify-between">
        {/* Left — nav links */}
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-body font-medium text-sm text-brand-warm hover:text-brand-pink transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Centre — brand name */}
        <Link
          href="/"
          className="font-heading font-bold text-[30px] leading-none text-brand-pink hover:opacity-90 transition-opacity absolute left-1/2 -translate-x-1/2"
        >
          Lillie&apos;s Treats
        </Link>

        {/* Right — Menu button + Cart */}
        <div className="flex items-center gap-3">
          {/* Menu — placeholder for mobile / category drawer (future step) */}
          <button className="bg-brand-pink text-white font-body font-medium text-sm px-5 py-2 rounded-full hover:bg-brand-pink-hover transition-colors">
            Menu
          </button>

          {/* Cart icon */}
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative bg-white border border-brand-border rounded-full w-11 h-11 flex items-center justify-center shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow"
          >
            <ShoppingBag className="w-[18px] h-[18px] text-brand-warm" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-pink text-white font-body font-bold text-[10px] leading-none w-5 h-5 rounded-full flex items-center justify-center">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
