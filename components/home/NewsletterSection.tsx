"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to email service (Mailchimp, Resend, etc.) in a future step
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="w-full px-12 py-12 max-w-[1488px] mx-auto mb-4">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl px-16 py-14 text-center"
        style={{
          background: "linear-gradient(135deg, #d4577a 0%, #e88da4 100%)",
        }}
      >
        {/* Decorative circles — matching Figma */}
        <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute right-[-56px] bottom-[-56px] w-56 h-56 rounded-full bg-white/10 pointer-events-none" />

        <p className="font-body font-medium text-sm text-white/80 tracking-[2.8px] uppercase mb-3">
          Special Offer
        </p>
        <h2 className="font-heading font-bold text-4xl text-white mb-4">
          Get 15% Off Your First Order
        </h2>
        <p className="font-body text-base text-white/80 max-w-md mx-auto mb-8">
          Sign up for our newsletter and receive a special discount on your
          first sweet delivery.
        </p>

        {submitted ? (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-body font-semibold text-white text-lg"
          >
            🎉 You&apos;re in! Check your inbox for your discount code.
          </motion.p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white rounded-full px-5 py-3 font-body text-sm text-brand-warm placeholder:text-brand-muted outline-none focus:ring-2 focus:ring-brand-dark/20"
            />
            <button
              type="submit"
              className="bg-brand-dark text-white font-body font-semibold text-sm px-6 py-3 rounded-full whitespace-nowrap hover:opacity-90 active:scale-95 transition-all"
            >
              Get My Discount
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
