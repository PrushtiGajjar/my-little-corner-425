import { createFileRoute, Link } from "@tanstack/react-router";
import { IdolStage } from "@/components/IdolStage";
import { timeline, temple } from "@/data/temple";
import { useReveal } from "@/hooks/use-scroll-progress";
import sanctum from "@/assets/sanctum.jpg";
import tirthImg from "@/assets/tirth.jpg";
import rivers from "@/assets/rivers.jpg";
import village from "@/assets/village.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balsana Vimalnath Jain Tirth — A 2200 Year Old Darshan" },
      {
        name: "description",
        content:
          "The story of Shri Vimalnath Dada at Balsana Tirth: the village of temples, the Triveni Sangam and the pratimaji that rose from the earth.",
      },
      { property: "og:title", content: "Balsana Vimalnath Jain Tirth" },
      {
        property: "og:description",
        content:
          "Scroll through the history of Balsana Tirth, where the pratimaji of Vimalnath Dada revealed itself.",
      },
    ],
  }),
  component: Home,
});

function Home() {

  const tl = useReveal<HTMLDivElement>();

  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_top_10%] md:bg-center opacity-40"
          style={{ backgroundImage: `url(${sanctum})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div className="animate-lamp pointer-events-none absolute h-[60vh] w-[60vh] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 px-6 text-center">
          <p className="eyebrow animate-rise">{temple.age} of devotion</p>
          <h1
            className="animate-rise mt-5 text-3xl leading-[1.1] text-marble sm:text-5xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Shri Vimalnath Dada
            <span className="block text-gold">of Balsana</span>
          </h1>
          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.2s" }}
          >
            A pratimaji that rose from the earth of a small village, and turned
            it into a tirthdham.
          </p>
          <div
            className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/history"
              className="rounded-full border border-primary/50 px-6 py-2.5 text-sm tracking-[0.2em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Read the history
            </Link>
            <Link
              to="/visit"
              className="rounded-full border border-border px-6 py-2.5 text-sm tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-marble"
            >
              Plan a darshan
            </Link>
          </div>
        </div>
        <p className="absolute bottom-8 text-xs tracking-[0.35em] uppercase text-muted-foreground">
          Scroll
        </p>
      </section>

      {/* Pinned cinematic story */}
      <IdolStage />

      {/* Timeline */}
      <section
        ref={tl.ref}
        className="mx-auto max-w-5xl px-6 py-28"
        aria-labelledby="timeline-heading"
      >
        <p className="eyebrow text-center">The thread of time</p>
        <h2
          id="timeline-heading"
          className="mt-4 text-center text-4xl text-marble sm:text-5xl"
        >
          From buried stone to tirthdham
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/40 sm:grid-cols-2">
          {timeline.map((t, i) => (
            <div
              key={t.year}
              className={`bg-card/70 p-8 transition-all duration-700 ${
                tl.shown ? "opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p className="eyebrow">{t.year}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="relative overflow-hidden border-y border-border/50 py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow">Darshan</p>
          <h2 className="mt-4 text-4xl text-marble">
            The dwar opens at 5:30 in the morning
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Evening aarti at 8:10 PM. Bhojanshala, upashrays and rooms are
            available for pilgrims.
          </p>
          <a
            href={temple.directions}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full border border-primary/50 px-6 py-2.5 text-sm tracking-[0.2em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Get directions
          </a>
        </div>
      </section>
    </div>
  );
}
