"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    emoji: "🧁",
    title: "Freshly Baked",
    body: "Every treat is made to order — never stored, never frozen. You get it fresh from our oven to your door.",
  },
  {
    emoji: "🌿",
    title: "Natural Ingredients",
    body: "No artificial colours, no mystery preservatives. Just real butter, fresh eggs, and ingredients you can pronounce.",
  },
  {
    emoji: "💕",
    title: "Made with Love",
    body: "Baking isn't just our business — it's how we show care. Every bite carries the warmth of a home kitchen.",
  },
  {
    emoji: "🏡",
    title: "Community Rooted",
    body: "We're a local business, proud of it. Every order supports real people in your neighbourhood.",
  },
];

const STATS = [
  { value: "500+", label: "Happy Customers" },
  { value: "20+", label: "Signature Recipes" },
  { value: "5 yrs", label: "Baking Experience" },
  { value: "100%", label: "Made from Scratch" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function AboutClient() {
  return (
    <div className="max-w-[1488px] mx-auto px-6 sm:px-12">
      {/* ── Hero ── */}
      <section className="text-center py-20 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-3"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading font-bold text-5xl sm:text-6xl text-brand-dark mb-6 leading-tight"
        >
          Baked with Love,{" "}
          <span className="text-brand-pink">Delivered with Joy</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg text-brand-muted leading-8"
        >
          Lillie&apos;s Treats started in a small kitchen with one recipe, a
          grandmother&apos;s wisdom, and an unshakeable belief that great food
          brings people together. Today we bring that same spirit to every box
          we pack.
        </motion.p>
      </section>

      {/* ── Stats bar ── */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-border rounded-3xl overflow-hidden mb-24">
        {STATS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white flex flex-col items-center justify-center py-10 gap-1"
          >
            <span className="font-heading font-bold text-4xl text-brand-pink">
              {value}
            </span>
            <span className="font-body text-sm text-brand-muted">{label}</span>
          </motion.div>
        ))}
      </section>

      {/* ── Founder note ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        {/* Decorative image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div
            className="absolute inset-[-24px] rounded-full blur-[48px] pointer-events-none opacity-70"
            style={{
              background:
                "linear-gradient(149deg, rgba(250,218,221,0.6) 0%, rgba(255,224,204,0.4) 100%)",
            }}
          />
          <div className="relative rounded-3xl overflow-hidden bg-brand-pink-light aspect-square flex flex-col items-center justify-center gap-4 shadow-card-lg">
            <span className="text-8xl">👩🏾‍🍳</span>
            <p className="font-heading font-semibold text-xl text-brand-dark">
              Lillie
            </p>
            <p className="font-body text-sm text-brand-muted">
              Founder & Head Baker
            </p>
          </div>
        </motion.div>

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <p className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase">
            From the Founder
          </p>
          <h2 className="font-heading font-bold text-4xl text-brand-dark leading-tight">
            Every recipe tells a story
          </h2>
          <div className="flex flex-col gap-4 font-body text-base text-brand-muted leading-7">
            <p>
              My grandmother made chin chin every Sunday. The whole house smelled
              like warm dough and sugar. I grew up thinking that was just normal
              — that every home felt that way on Sundays. It wasn&apos;t until I
              moved out that I realised how rare that feeling was.
            </p>
            <p>
              Lillie&apos;s Treats is my attempt to bottle that feeling and share
              it. Every batch of chin chin, every cupcake — I want you to taste
              that Sunday afternoon. I want your home to smell the way mine did.
            </p>
            <p className="font-medium text-brand-dark">
              — Lillie, Founder
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Values grid ── */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <p className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-3">
            What We Stand For
          </p>
          <h2 className="font-heading font-bold text-4xl text-brand-dark">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ emoji, title, body }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="bg-white border border-brand-border rounded-3xl p-8 flex flex-col gap-4 hover:shadow-card-lg transition-shadow"
            >
              <span className="text-4xl">{emoji}</span>
              <h3 className="font-heading font-semibold text-xl text-brand-dark">
                {title}
              </h3>
              <p className="font-body text-sm text-brand-muted leading-6">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="text-center pb-24">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16"
          style={{
            background: "linear-gradient(135deg, #d4577a 0%, #e88da4 100%)",
          }}
        >
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
          <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 rounded-full bg-white/10 pointer-events-none" />
          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Ready to taste the difference?
          </h2>
          <p className="font-body text-base text-white/80 mb-8 max-w-md mx-auto">
            Every treat is a little piece of home. Order yours today.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-white text-brand-pink font-body font-semibold text-base px-8 py-4 rounded-full hover:bg-brand-cream active:scale-95 transition-all"
          >
            Shop All Treats
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
