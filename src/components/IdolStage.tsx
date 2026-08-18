import idol from "@/assets/idol.png";
import village from "@/assets/village.jpg";
import rivers from "@/assets/rivers.jpg";
import earth from "@/assets/earth.jpg";
import sanctum from "@/assets/sanctum.jpg";
import tirth from "@/assets/tirth.jpg";
import { chapters } from "@/data/temple";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const scenes = [village, rivers, earth, earth, sanctum, tirth];

/** Triangular falloff around a chapter's center. */
function weight(p: number, index: number, count: number) {
  const step = 1 / count;
  const center = step * (index + 0.5);
  const d = Math.abs(p - center) / step;
  return Math.max(0, 1 - d);
}

export function IdolStage() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const count = chapters.length;
  const active = Math.min(count - 1, Math.floor(progress * count));

  // Idol grows through the story, blazing at the revelation chapter.
  const scale = 0.62 + progress * 0.5;
  const glow = 0.15 + Math.pow(progress, 1.4) * 0.95;

  return (
    <div ref={ref} style={{ height: `${count * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Environment layers */}
        {scenes.map((src, i) => (
          <div
            key={i}
            className="motion-layer absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: weight(progress, i, count) * 0.85,
              transform: `scale(${1.05 + weight(progress, i, count) * 0.06})`,
            }}
            aria-hidden="true"
          />
        ))}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 52%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 58%)",
            opacity: glow,
          }}
          aria-hidden="true"
        />

        {/* Halo rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="animate-ring absolute aspect-square w-[46vh] rounded-full border border-primary/40"
              style={{ animationDelay: `${i * 2.3}s`, opacity: glow * 0.6 }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Light motes */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="animate-drift absolute bottom-0 h-1 w-1 rounded-full bg-primary/70"
              style={{
                left: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 7) * 1.6}s`,
                animationDuration: `${11 + (i % 5) * 2}s`,
              }}
            />
          ))}
        </div>

        {/* The idol — always centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={idol}
            alt="Pratimaji of Shri Vimalnath Dada at Balsana Tirth"
            width={1024}
            height={1280}
            className="motion-layer h-[74vh] w-auto object-contain transition-transform duration-500 ease-out"
            style={{
              transform: `scale(${scale})`,
              filter: `drop-shadow(0 0 ${20 + glow * 90}px color-mix(in oklab, var(--color-primary) ${
                30 + glow * 45
              }%, transparent))`,
            }}
          />
        </div>

        {/* Chapter copy */}
        <div className="pointer-events-none absolute inset-0">
          {chapters.map((c, i) => {
            const w = weight(progress, i, count);
            const side = i % 2 === 0;
            return (
              <div
                key={c.id}
                className={`motion-layer absolute top-1/2 hidden max-w-sm -translate-y-1/2 transition-all duration-500 md:block ${
                  side ? "left-[6vw]" : "right-[6vw] text-right"
                }`}
                style={{
                  opacity: w,
                  transform: `translateY(calc(-50% + ${(1 - w) * 24}px))`,
                }}
              >
                <p className="eyebrow">{c.eyebrow}</p>
                <h2 className="mt-3 text-4xl leading-tight text-marble lg:text-5xl">
                  {c.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            );
          })}

          {/* Mobile: copy under the idol */}
          <div className="absolute inset-x-0 bottom-10 px-6 text-center md:hidden">
            <p className="eyebrow">{chapters[active].eyebrow}</p>
            <h2 className="mt-2 text-3xl text-marble">{chapters[active].title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {chapters[active].body}
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {chapters.map((c, i) => (
            <span
              key={c.id}
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                i === active ? "scale-150 bg-primary" : "bg-border"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
