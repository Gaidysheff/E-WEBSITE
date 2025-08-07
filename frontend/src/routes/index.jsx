import CategorySection from "@/components/sectionCategory/CategorySection.jsx";
import Hero from "@/components/hero/Hero.jsx";
import Introduction from "@/components/introduction/Introduction.jsx";
import ProductSection from "@/components/sectionProduct/ProductSection.jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-[90vh]">
      <Introduction />
      <Hero />
      <CategorySection />
      <ProductSection title="Featured Products" />
    </main>
  );
}
