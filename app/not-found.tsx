import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] gap-5 text-center px-6">
      <span className="text-7xl">🍰</span>
      <h1 className="font-heading font-bold text-5xl text-brand-dark">
        Page Not Found
      </h1>
      <p className="font-body text-brand-muted text-lg max-w-sm">
        Looks like this treat has sold out! The page you&apos;re looking for
        doesn&apos;t exist.
      </p>
      <div className="flex items-center gap-4 mt-2">
        <Link
          href="/"
          className="bg-brand-pink text-white font-body font-semibold text-sm px-6 py-3 rounded-full hover:bg-brand-pink-hover transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/shop"
          className="border border-brand-border text-brand-warm font-body font-medium text-sm px-6 py-3 rounded-full hover:border-brand-pink hover:text-brand-pink transition-colors"
        >
          Shop All Treats
        </Link>
      </div>
    </section>
  );
}
