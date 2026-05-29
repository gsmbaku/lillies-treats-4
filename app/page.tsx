/**
 * Temporary design-system smoke-test page.
 * Verifies fonts, brand colours, and Tailwind v4 tokens are wired up correctly.
 * Will be replaced by the real homepage in a future step.
 */
export default function Home() {
  const swatches = [
    { label: "brand-pink",   bg: "bg-brand-pink",   hex: "#d4577a" },
    { label: "brand-dark",   bg: "bg-brand-dark",   hex: "#3b2416" },
    { label: "brand-warm",   bg: "bg-brand-warm",   hex: "#6b4c3b" },
    { label: "brand-muted",  bg: "bg-brand-muted",  hex: "#8b7355" },
    { label: "brand-cream",  bg: "bg-brand-cream border border-brand-border", hex: "#fff7f3" },
  ];

  return (
    <main className="min-h-screen bg-brand-cream px-10 py-16 font-body">
      {/* Brand name — Playfair Display */}
      <h1 className="font-heading text-5xl font-bold text-brand-pink mb-2">
        Lillie&apos;s Treats
      </h1>
      <p className="font-body text-brand-muted text-lg mb-12">
        Design-system smoke test · Step 1 &amp; 2 complete
      </p>

      {/* Colour palette */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-4">
          Brand Colours
        </h2>
        <div className="flex flex-wrap gap-4">
          {swatches.map(({ label, bg, hex }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`w-20 h-20 rounded-xl ${bg}`} />
              <span className="font-body text-xs text-brand-warm font-medium">{label}</span>
              <span className="font-body text-xs text-brand-muted">{hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-4">
          Typography
        </h2>
        <p className="font-heading text-4xl font-bold text-brand-dark mb-1">
          Playfair Display — Heading
        </p>
        <p className="font-heading text-2xl text-brand-pink mb-6">
          It&apos;s All About the Sweets
        </p>
        <p className="font-body text-base text-brand-muted mb-1">
          Poppins — Body copy, regular weight
        </p>
        <p className="font-body text-sm font-medium text-brand-warm">
          Poppins Medium — Navigation links, labels
        </p>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-4">
          Buttons
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-brand-pink text-white font-body font-semibold text-sm px-8 py-3 rounded-full hover:bg-brand-pink-hover transition-colors">
            Shop All Treats →
          </button>
          <button className="bg-brand-dark text-white font-body font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
            Get My Discount
          </button>
          <button className="border border-brand-border bg-white/70 text-brand-warm font-body text-sm px-6 py-2 rounded-full hover:bg-white transition-colors">
            🧁 Freshly Baked
          </button>
        </div>
      </section>

      {/* Card preview */}
      <section>
        <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-4">
          Product Card Shell
        </h2>
        <div className="w-64 rounded-3xl border border-brand-border bg-white shadow-card overflow-hidden">
          <div className="h-36 bg-brand-pink-light flex items-center justify-center text-4xl">
            🧁
          </div>
          <div className="p-5">
            <h4 className="font-heading text-lg font-semibold text-brand-dark mb-1">
              Strawberry Dream
            </h4>
            <p className="font-body text-sm text-brand-muted mb-3">
              Fluffy vanilla sponge with strawberry buttercream
            </p>
            <div className="flex items-center justify-between">
              <span className="font-body font-bold text-brand-pink text-lg">$4.99</span>
              <button className="bg-brand-pink text-white font-body font-medium text-xs px-4 py-2 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
