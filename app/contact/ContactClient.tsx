"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin, CheckCircle } from "lucide-react";

const INQUIRY_TYPES = [
  { value: "general", label: "General Question" },
  { value: "custom-order", label: "Custom Order Request" },
  { value: "wholesale", label: "Wholesale Inquiry" },
  { value: "feedback", label: "Feedback" },
];

const BUSINESS_INFO = [
  {
    Icon: Mail,
    label: "Email",
    value: "hello@lilliestreats.com",
    href: "mailto:hello@lilliestreats.com",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon – Sat: 9 am – 6 pm",
    href: null,
  },
  {
    Icon: MapPin,
    label: "Area",
    value: "Local delivery available",
    href: null,
  },
];

const inputBase =
  "w-full bg-white border border-brand-border rounded-2xl px-5 py-3.5 font-body text-sm text-brand-dark placeholder:text-brand-muted/60 outline-none focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/10 transition-all";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to email service (Resend / Formspree / EmailJS) in production
    await new Promise((r) => setTimeout(r, 900)); // simulate network
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="max-w-[1488px] mx-auto px-6 sm:px-12 py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-body font-medium text-sm text-brand-pink tracking-[2.8px] uppercase mb-3"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="font-heading font-bold text-5xl text-brand-dark mb-4"
        >
          We&apos;d Love to Hear From You
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="font-body text-base text-brand-muted leading-7"
        >
          Whether you have a question, want to place a custom order, or just
          want to say hello — fill in the form and we&apos;ll get back to you
          within one business day.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* ── Contact Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-brand-border rounded-3xl p-16 flex flex-col items-center text-center gap-5 shadow-card"
            >
              <CheckCircle className="w-16 h-16 text-brand-pink" />
              <h2 className="font-heading font-bold text-3xl text-brand-dark">
                Message Sent!
              </h2>
              <p className="font-body text-base text-brand-muted max-w-sm">
                Thank you, {form.name.split(" ")[0]}! We&apos;ll be in touch
                within one business day. Keep an eye on your inbox.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", type: "general", message: "" });
                }}
                className="mt-2 font-body font-medium text-sm text-brand-pink hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-brand-border rounded-3xl p-8 sm:p-10 flex flex-col gap-5 shadow-card"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-sm text-brand-warm">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Lillie Johnson"
                    className={inputBase}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-body font-medium text-sm text-brand-warm">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputBase}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-body font-medium text-sm text-brand-warm">
                  What can we help with?
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className={inputBase}
                >
                  {INQUIRY_TYPES.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom order hint */}
              {form.type === "custom-order" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-brand-pink-light border border-brand-pink/20 rounded-2xl px-5 py-4"
                >
                  <p className="font-body text-sm text-brand-dark">
                    💡 <strong>Custom orders:</strong> please include the event
                    date, quantity, flavours, and any dietary requirements in
                    your message. We recommend ordering at least 5 days in
                    advance.
                  </p>
                </motion.div>
              )}

              <div className="flex flex-col gap-2">
                <label className="font-body font-medium text-sm text-brand-warm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us what you need…"
                  className={`${inputBase} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full bg-brand-pink text-white font-body font-semibold text-base py-4 rounded-full hover:bg-brand-pink-hover active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        {/* ── Business info sidebar ── */}
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Info cards */}
          <div className="bg-white border border-brand-border rounded-3xl p-8 flex flex-col gap-6 shadow-card">
            <h2 className="font-heading font-semibold text-xl text-brand-dark">
              Reach Us
            </h2>
            {BUSINESS_INFO.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-pink-light flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brand-pink" />
                </div>
                <div>
                  <p className="font-body font-medium text-xs text-brand-muted uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-sm text-brand-dark hover:text-brand-pink transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-brand-dark">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Response promise */}
          <div
            className="rounded-3xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, #d4577a 0%, #e88da4 100%)",
            }}
          >
            <span className="text-4xl mb-3 block">⏰</span>
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Quick Response
            </h3>
            <p className="font-body text-sm text-white/80">
              We reply to all messages within one business day — usually much
              sooner.
            </p>
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
