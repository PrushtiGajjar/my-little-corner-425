# Cinematic Temple History Website

A dark, immersive scroll-driven site in the style of the video you shared — full-screen visual chapters, large headlines that fade in, a subject that stays centered while the story changes around it — but themed around temple heritage instead of tech gadgets.

## Look and feel

- Deep midnight background with warm gold/amber glow (lamp and brass light) instead of the cold blue in the reference.
- Elegant display serif for headlines, clean sans for body text.
- Slow, cinematic motion: fades, gentle parallax, scale-on-scroll, glowing halo rings behind the temple imagery.
- All colors, gradients, glows and shadows defined once as design tokens.

## Pages

1. **Home (`/`)** — the cinematic scroll experience:
   - Hero: temple silhouette with radiating light rings, headline "Where Stone Remembers", subtle scroll cue.
   - Chapter sections, each full-screen with a sticky image and text that animates in: Origins, Architecture, Rituals & Festivals, Restoration.
   - Timeline strip: key eras (founding, expansions, invasions/rebuilds, present day) revealed as you scroll.
   - Gallery grid of temple details (carvings, gopuram, sanctum, courtyard).
   - Closing section: visiting hours, location, quiet call-to-action.
2. **History (`/history`)** — long-form narrative with era-by-era sections.
3. **Architecture (`/architecture`)** — annotated breakdown of structural elements.
4. **Visit (`/visit`)** — timings, guidelines, how to reach, contact.

Shared minimal top nav (thin, translucent) and footer.

## Content

Placeholder heritage copy written to read naturally; you can swap in the real temple name, dates and stories after. Imagery generated to match the cinematic dark-gold direction.

## Technical notes

- Tokens in `src/styles.css` (oklch): background, gold primary + glow, gradients, glow shadows, serif/sans font pairing loaded via `<link>` in `__root.tsx`.
- Scroll animation with an IntersectionObserver-based reveal hook plus CSS transitions and sticky positioning; no heavy libraries.
- Each route gets its own `head()` metadata (title, description, og/twitter tags).
- Reduced-motion respected so animations disable for users who prefer it.

## Open item

If you tell me the actual temple (name, place, era), I will write the copy around it instead of placeholders.
