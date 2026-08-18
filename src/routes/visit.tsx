import { createFileRoute } from "@tanstack/react-router";
import { temple } from "@/data/temple";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Balsana Tirth — Timings, Booking & Directions" },
      {
        name: "description",
        content:
          "Darshan timings at Balsana Vimalnath Jain Tirth, room and travel booking numbers, and directions to the tirth.",
      },
      { property: "og:title", content: "Visit Balsana Vimalnath Tirth" },
      {
        property: "og:description",
        content:
          "Dwar opens 5:30 AM, puja 6–9 AM, evening aarti 8:10 PM. Booking and enquiry numbers inside.",
      },
    ],
  }),
  component: Visit,
});

function Visit() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <p className="eyebrow">Plan your darshan</p>
      <h1 className="mt-4 text-5xl text-marble">Visit Balsana Tirth</h1>
      <div className="rule-gold my-12" />

      <section aria-labelledby="timings">
        <h2 id="timings" className="text-2xl text-marble">
          Tirth timings
        </h2>
        <ul className="mt-5 divide-y divide-border/60 rounded-lg border border-border/60 bg-card/60">
          {temple.timings.map((t) => (
            <li key={t.label} className="flex justify-between gap-6 px-6 py-4">
              <span className="text-sm text-muted-foreground">{t.label}</span>
              <span className="text-marble">{t.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact" className="mt-14">
        <h2 id="contact" className="text-2xl text-marble">
          Bookings & enquiry
        </h2>
        <ul className="mt-5 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 sm:grid-cols-2">
          {temple.contacts.map((c) => (
            <li key={c.label} className="bg-card/70 px-6 py-5">
              <p className="eyebrow">{c.label}</p>
              <a
                href={`tel:${c.value}`}
                className="mt-2 block text-lg text-marble hover:text-primary"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="reach" className="mt-14">
        <h2 id="reach" className="text-2xl text-marble">
          Reaching the tirth
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Balsana can be reached by road, rail or air, with travel and car
          bookings arranged through the tirth between 9 AM and 7 PM.
        </p>
        <a
          href={temple.directions}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full border border-primary/50 px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Get directions
        </a>
      </section>
    </div>
  );
}
