# Balsana Vimalnath Jain Tirth — Cinematic History Website

A dark, scroll-driven experience in the style of the video you shared. Where the earbuds stayed centered in that reference, here **Vimalnath Dada's pratimaji stays fixed at the center of the screen** while the story, light and environment change around it as the visitor scrolls.

## The core idea (home page)

One long scroll. The idol is pinned in the middle of the viewport the whole way; only its scale, glow and surrounding world change per chapter:

```text
        [ fixed idol in center ]
scroll ->  chapter text swaps left/right
           halo rings, particles, background hue shift
```

Chapters, based on the temple's own history page:

1. **Balsana — village of temples.** Faint outlines of the eleven Hanumanji temples, the Yogi well, the three-storied Tapeshwar Mahadev, Sati Stambh, Navnarh Baba samadhi. Idol small, distant, dim.
2. **Triveni Sangam.** Kesar, Khari and Burai rivers drawn as flowing light lines that converge behind the idol.
3. **The stone in the path.** Dark earth tones, a stone half-buried; the villager who kept hurting his foot on it.
4. **The self-revealing pratimaji.** The turning point — the idol rises out of the ground on its own, light blooms, gold halo expands. Biggest visual moment.
5. **Balsana Tirthdham.** Idol fully lit in the sanctum, 2200-year-old tirth, jirnoddhar / new development.
6. **Darshan today.** Timings, aarti, the living tirth.

Below the pinned sequence: a timeline strip (ancient origin -> revelation -> tirthdham -> present jirnoddhar), a gallery, and a quiet closing section with timings and directions.

## Other pages

- **/history** — the full narrative in long form (village significance, the revelation, becoming a tirthdham).
- **/vimalnath-dada** — the Tirthankar's details as an elegant data panel: parents Shyama Rani and Krutvarma Raja, the five kalyanaks, lanchan Varah, yaksh Shanmukh, yakshini Vijita, ayushya, gandhars, sangh numbers, meaning of the name.
- **/tirth** — Rang Mandap, Shraman & Shramni Upashray, Bhojanshala, Gurudev Acharya Vijay Ratnasundersuri Maharaj Saheb.
- **/visit** — timings (dwar 5:30 AM, puja 6–9 AM, pakshal 9:15 AM, evening aarti 8:10 PM, close 8:20 PM), booking and enquiry numbers, directions to Balsana.

Thin translucent nav and a simple footer across all pages.

## Look and feel

- Near-black sanctum background, warm gold/saffron light, ivory marble tones. No cold blue — the reference's neon is replaced with lamp and brass glow.
- Display serif headings with a clean sans for body; devotional but restrained.
- Motion: slow fades, parallax, scale-on-scroll, expanding halo rings, drifting light motes. Respectful pacing, nothing flashy around the idol.
- Reduced-motion preference disables the animation and shows a clean stacked layout.

## Technical notes

- Design tokens in `src/styles.css` (oklch): sanctum background, gold primary + glow, gradients, glow shadows; fonts loaded via `<link>` in `__root.tsx`.
- Pinned sequence built with sticky positioning plus a scroll-progress hook (IntersectionObserver + rAF-throttled scroll), driving CSS variables for scale/opacity/hue. No heavy animation library.
- Static content in a small typed data module so the temple text is easy to edit later.
- Per-route `head()` metadata (title, description, og/twitter) for each page.

## Content and images

Text is taken from the temple's own site (history, Vimalnath Dada details, timings, contact numbers). For imagery I will generate cinematic idol and temple visuals matched to the dark-gold direction; when you send the temple's own high-resolution photos I will swap them in — those will look better than anything generated.
