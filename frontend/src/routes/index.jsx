import Hero from "./../components/hero/Hero.jsx";
import Introduction from "./../components/introduction/Introduction.jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-[90vh]">
      <Introduction />
      <Hero />
    </main>
  );
}
