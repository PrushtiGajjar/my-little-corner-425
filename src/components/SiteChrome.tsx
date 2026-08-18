import { Link } from "@tanstack/react-router";
import { temple } from "@/data/temple";

const nav = [
  { to: "/", label: "Darshan" },
  { to: "/history", label: "History" },
  { to: "/vimalnath-dada", label: "Vimalnath Dada" },
  { to: "/tirth", label: "The Tirth" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="leading-tight">
          <span className="block font-display text-lg text-marble">Balsana</span>
          <span className="eyebrow block">Vimalnath Tirth</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-xs tracking-wide text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              className="transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-2xl text-marble">{temple.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            A {temple.age} old tirth of Shri Vimalnath Prabhu at Balsana.
          </p>
        </div>
        <div>
          <p className="eyebrow">Timings</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {temple.timings.map((t) => (
              <li key={t.label} className="flex justify-between gap-4">
                <span>{t.label}</span>
                <span className="text-marble">{t.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {temple.contacts.map((c) => (
              <li key={c.label} className="flex justify-between gap-4">
                <span>{c.label}</span>
                <a href={`tel:${c.value}`} className="text-marble hover:text-primary">
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">
        Shri Balsana Vimalnath Jain Tirth
      </p>
    </footer>
  );
}
