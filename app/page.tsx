/**
 * Homepage — placeholder until Step 5 (HeroSection + Bestsellers + Newsletter).
 * The Navbar, CartSidebar, and Footer are already rendered by app/layout.tsx.
 */
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <h1 className="font-heading font-bold text-5xl text-brand-dark">
        It&apos;s All About
        <span className="text-brand-pink block">the Sweets</span>
      </h1>
      <p className="font-body text-brand-muted text-lg max-w-md">
        From our kitchen to your table — handcrafted chin chin, cupcakes, and
        desserts made with the finest natural ingredients.
      </p>
      <p className="font-body text-xs text-brand-muted/60 mt-4">
        Homepage sections coming in Step 5 ✦
      </p>
    </section>
  );
}
