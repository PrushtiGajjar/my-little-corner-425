import { createFileRoute } from "@tanstack/react-router";
import village from "@/assets/village.jpg";
import rivers from "@/assets/rivers.jpg";
import earth from "@/assets/earth.jpg";
import tirthImg from "@/assets/tirth.jpg";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History of Balsana Tirth — Vimalnath Jain Tirth" },
      {
        name: "description",
        content:
          "The history of Balsana: a village of eleven Hanumanji temples, the Triveni Sangam of Kesar, Khari and Burai, and the revelation of Vimalnath Dada's pratimaji.",
      },
      { property: "og:title", content: "History of Balsana Tirth" },
      {
        property: "og:description",
        content:
          "How a buried stone in a village footpath turned Balsana into a tirthdham.",
      },
    ],
  }),
  component: History,
});

const sections = [
  {
    img: village,
    eyebrow: "The village",
    title: "Importance of Balsana Village",
    paras: [
      "Balsana may fairly be called a village of temples. Eleven temples of Hanumanji stood within it, and one greeted every traveller at the very entrance of the village.",
      "To the north lies a beautiful well, known even today as the Yogi Well. One sees an architectural marvel in almost every temple of Balsana, and each carries its own significance.",
    ],
  },
  {
    img: rivers,
    eyebrow: "Triveni Sangam",
    title: "Where the three rivers merge",
    paras: [
      "The Kesar river flows down from the north to meet the Khari, and the two merge ahead with the Burai.",
      "On the outskirts of the village a three-storied Tapeshwar Mahadev temple welcomes the flow of these three rivers. To its left stands the Sati Stambh, and the samadhi of Navnarh Baba lies nearby.",
    ],
  },
  {
    img: earth,
    eyebrow: "An exciting revelation",
    title: "The stone that hurt his feet",
    paras: [
      "Why would a simple, illiterate and poor man go and pray at the derasar in front of his house? A sculpture of Vimalnath Prabhu that ten or fifteen people would struggle to lift, this man could raise with ease. Such instances may be seen elsewhere too — but this villager saw something, and experienced something. What was it?",
      "Each day, as he left his home and walked a couple of steps, he was hurt in the feet by some kind of protruding stone. After some days he called other villagers for help, cleaned the surroundings a little, and requested his friends to help him dig at that place.",
    ],
  },
  {
    img: tirthImg,
    eyebrow: "Balsana Tirthdham",
    title: "The pratimaji emerged on its own",
    paras: [
      "As the villagers went to fetch tools to dig, this man saw something emerging out of the ground on its own — the pratimaji of Vimalnath Dada. By the time the others returned with their tools, he had already set the sculpture gently to one side.",
      "From that day onwards, the small village of Balsana has been known as Balsana Tirthdham. The 2200-year-old tirth of Shri Vimalnath Prabhu is today being renewed through jirnoddhar of the jinalaya.",
    ],
  },
];

function History() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      <p className="eyebrow">The story</p>
      <h1 className="mt-4 text-5xl text-marble sm:text-6xl">
        History of Balsana Tirth
      </h1>
      <div className="rule-gold my-14" />
      <div className="space-y-24">
        {sections.map((s) => (
          <article key={s.title}>
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              width={1600}
              height={912}
              className="h-72 w-full rounded-lg border border-border/60 object-cover"
            />
            <p className="eyebrow mt-8">{s.eyebrow}</p>
            <h2 className="mt-3 text-3xl text-marble sm:text-4xl">{s.title}</h2>
            {s.paras.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
