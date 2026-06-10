import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Instagram", href: "https://instagram.com", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-cream">
      <div className="max-w-[1488px] mx-auto px-6 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-xl text-brand-pink">
            Lillie&apos;s Treats
          </span>
          <span className="font-body text-sm text-brand-muted">
            Baked with love, delivered with joy.
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6">
          {FOOTER_LINKS.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="font-body font-medium text-sm text-brand-warm hover:text-brand-pink transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-brand-muted">
          © {new Date().getFullYear()} Lillie&apos;s Treats. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
