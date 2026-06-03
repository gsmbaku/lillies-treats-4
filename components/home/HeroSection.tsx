"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// Hero product image from Figma — replace with permanent URL before launch
const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/cbf9cc98-5b49-4bca-9a5c-e3a67312e021";

const BADGES = [
  { emoji: "🧁", label: "Freshly Baked" },
  { emoji: "🌿", label: "Natural Ingredients" },
  { emoji: "💕", label: "Made with Love" },
];

/** Framer Motion variants */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" as const, delay: 0.15 } },
};

export default function HeroSection() {
  return (
    <section className="w-full py-20 px-12 max-w-[1488px] mx-auto">
      <div className="flex items-center justify-between gap-10">
        {/* ── Left — Text content ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5 max-w-[616px] shrink-0"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold leading-[1.1]"
          >
            <span className="text-[72px] text-brand-dark block">
              It&apos;s All About
            </span>
            <span className="text-[72px] text-brand-pink block">
              the Sweets
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="font-body text-base text-brand-muted leading-7 max-w-[487px]"
          >
            From our kitchen to your table — handcrafted chin chin, and desserts
            made with the finest natural ingredients.{" "}
            <span className="text-brand-pink">♥</span>
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 bg-brand-pink text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-btn hover:bg-brand-pink-hover active:scale-95 transition-all"
            >
              Shop All Treats
              <ArrowRight className="w-[18px] h-[18px]" />
            </Link>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 flex-wrap"
          >
            {BADGES.map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/70 border border-brand-border rounded-full px-4 py-2"
              >
                <span className="text-base">{emoji}</span>
                <span className="font-body font-medium text-xs text-brand-warm whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right — Product image ── */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="show"
          className="relative flex-1 max-w-[616px] min-h-[314px] hidden md:block"
        >
          {/* Pink glow blurs — matching Figma */}
          <div
            className="absolute inset-[-48px] rounded-full blur-[64px] pointer-events-none"
            style={{
              background:
                "linear-gradient(149deg, rgba(250,218,221,0.5) 0%, rgba(255,224,204,0.4) 100%)",
            }}
          />
          <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full bg-brand-pink/10 blur-[40px] pointer-events-none" />

          {/* Image */}
          <div className="relative w-full h-[314px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <Image
              src={HERO_IMAGE}
              alt="Lillie's Treats — handcrafted sweets"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 0px, 576px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
