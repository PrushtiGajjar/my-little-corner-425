import { createFileRoute } from "@tanstack/react-router";
import { tirthPlaces } from "@/data/temple";
import tirthImg from "@/assets/tirth.jpg";
import sanctum from "@/assets/sanctum.jpg";

export const Route = createFileRoute("/tirth")({
  head: () => ({
    meta: [
      { title: "The Tirth — Rang Mandap, Upashrays & Bhojanshala" },
      {
        name: "description",
        content:
          "Inside Balsana Vimalnath Tirth: the Rang Mandap, Shraman and Shramni Upashray, Bhojanshala, and Gurudev Acharya Vijay Ratnasundersuri Maharaj Saheb.",
      },
      { property: "og:title", content: "The Tirth at Balsana" },
      {
        property: "og:description",
        content:
          "Rang Mandap, upashrays, bhojanshala and the guidance behind Balsana Vimalnath Tirth.",
      },
    ],
  }),
  component: Tirth,
});

function Tirth() {
  return (
    <div className="pt-24 pb-24">
      <section className="relative h-[52vh] overflow-hidden">
        <img
          src={tirthImg}
          alt="Balsana Vimalnath Tirth complex at night"
          width={1600}
          height={912}
          className="h-full w-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-10">
            <p className="eyebrow">The complex</p>
            <h1 className="mt-3 text-5xl text-marble">The Tirth</h1>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 md:grid-cols-2">
          {tirthPlaces.map((p) => (
            <article key={p.title} className="bg-card/70 p-8">
              <h2 className="text-2xl text-marble">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        <img
          src={sanctum}
          alt="Marble sanctum interior lit with oil lamps"
          loading="lazy"
          width={1600}
          height={912}
          className="mt-16 h-80 w-full rounded-lg border border-border/60 object-cover"
        />
      </div>
    </div>
  );
}
