"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-brand-cream/90 backdrop-blur-md border-b border-brand-border">
        <nav className="max-w-[1488px] mx-auto px-6 sm:px-12 py-4 sm:py-5 flex items-center justify-between relative">

          {/* Left — desktop nav links / mobile hamburger */}
          <div className="flex items-center gap-6">
            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`font-body font-medium text-sm transition-colors ${
                      pathname === href
                        ? "text-brand-pink"
                        : "text-brand-warm hover:text-brand-pink"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-brand-warm hover:text-brand-pink transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Centre — brand name */}
          <Link
            href="/"
            className="font-heading font-bold text-2xl sm:text-[30px] leading-none text-brand-pink hover:opacity-90 transition-opacity absolute left-1/2 -translate-x-1/2"
          >
            Lillie&apos;s Treats
          </Link>

          {/* Right — Menu pill (desktop) + Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop "Menu" pill — triggers mobile sheet on small, acts as visual accent on large */}
            <button
              onClick={() => setMenuOpen(true)}
              className="hidden sm:flex bg-brand-pink text-white font-body font-medium text-sm px-5 py-2 rounded-full hover:bg-brand-pink-hover transition-colors"
            >
              Menu
            </button>

            {/* Cart icon */}
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative bg-white border border-brand-border rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow"
            >
              <ShoppingBag className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-brand-warm" />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-pink text-white font-body font-bold text-[10px] leading-none w-5 h-5 rounded-full flex items-center justify-center">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile menu drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-brand-dark/30 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              key="menu-drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-brand-cream shadow-2xl flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-border">
                <Link
                  href="/"
                  className="font-heading font-bold text-2xl text-brand-pink"
                  onClick={() => setMenuOpen(false)}
                >
                  Lillie&apos;s Treats
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-brand-warm hover:text-brand-pink hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-6 gap-1 flex-1">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center font-body font-medium text-lg px-4 py-3 rounded-2xl transition-colors ${
                        pathname === href
                          ? "bg-brand-pink text-white"
                          : "text-brand-warm hover:bg-white hover:text-brand-pink"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div className="p-6 border-t border-brand-border">
                <button
                  onClick={() => { setMenuOpen(false); openCart(); }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-pink text-white font-body font-semibold text-sm py-3 rounded-full hover:bg-brand-pink-hover transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  View Cart
                  {count > 0 && (
                    <span className="bg-white text-brand-pink font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
