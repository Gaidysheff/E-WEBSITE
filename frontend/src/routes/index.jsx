import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-[90vh]">
      <section className="text-2xl text-primaryLight">
        Hello, I am Index-Page "/"!
      </section>
      <section className="text-2xl text-primaryBase italic">
        Hello, I am Index-Page "/"!
      </section>
      <section className="text-2xl text-primaryDark font-bold">
        Привет, Я Главная страница "/"!
      </section>
    </main>
  );
}
