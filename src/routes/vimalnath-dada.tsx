import { createFileRoute } from "@tanstack/react-router";
import idol from "@/assets/idol.png";
import { dadaFacts } from "@/data/temple";

export const Route = createFileRoute("/vimalnath-dada")({
  head: () => ({
    meta: [
      { title: "Shri Vimalnath Dada — Kalyanaks & Details" },
      {
        name: "description",
        content:
          "Shri Vimalnath Dada: parents Shyama Rani and Krutvarma Raja, the five kalyanaks, lanchan Varah, yaksh Shanmukh, yakshini Vijita and more.",
      },
      { property: "og:title", content: "Shri Vimalnath Dada" },
      {
        property: "og:description",
        content:
          "The kalyanaks and details of the thirteenth Tirthankar, Shri Vimalnath Prabhu.",
      },
    ],
  }),
  component: Dada,
});

function Dada() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-32 pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="relative flex justify-center">
          <div className="animate-lamp absolute h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <img
            src={idol}
            alt="Pratimaji of Shri Vimalnath Dada"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative h-[52vh] w-auto object-contain"
          />
        </div>
        <div>
          <p className="eyebrow">Thirteenth Tirthankar</p>
          <h1 className="mt-4 text-5xl text-marble">Shri Vimalnath Dada</h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The name itself carries its meaning: the mind and body of Vimalnath
            Dada's mother became pristine and pure once he came into her womb.
          </p>
        </div>
      </div>

      <div className="rule-gold my-16" />

      <dl className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 sm:grid-cols-2">
        {dadaFacts.map((f) => (
          <div key={f.label} className="bg-card/70 px-6 py-5">
            <dt className="eyebrow">{f.label}</dt>
            <dd className="mt-2 text-marble">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
