import idol from "@/assets/vimalnath-idol.png";
import village from "@/assets/village.jpg";
import rivers from "@/assets/rivers.jpg";
import earth from "@/assets/earth.jpg";
import sanctum from "@/assets/sanctum.jpg";
import tirth from "@/assets/tirth.jpg";
import { chapters } from "@/data/temple";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


export function IdolStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const idolRef = useRef<HTMLImageElement>(null);


  const idolRevealGroupRef = useRef<HTMLDivElement>(null);
  const idolGlowRef = useRef<HTMLDivElement>(null);

  // Background layers
  const bgRiversRef = useRef<HTMLDivElement>(null);
  const bgVillageRef = useRef<HTMLDivElement>(null);
  const bgEarthRef = useRef<HTMLDivElement>(null);
  const bgSanctumRef = useRef<HTMLDivElement>(null);
  const bgTirthRef = useRef<HTMLDivElement>(null);

  // Text refs
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { isMobile } = context.conditions as any;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=1600%", // Extends the scroll length for this slow cinematic experience
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. Initial State Setup
          
          // Completely hide the idol reveal group structurally until Scene 4
          gsap.set(idolRevealGroupRef.current, {
            autoAlpha: 0,
          });

          // Idol begins hidden within the group, perfectly centered
          gsap.set(idolRef.current, { 
            opacity: 0, 
            scale: 0.45, 
            y: "0vh", 
            x: "0vw",
            filter: "drop-shadow(0px 15px 35px rgba(0,0,0,0.5))",
            clipPath: "circle(0% at 50% 50%)" // Hidden from the exact center via circle
          });
          
          gsap.set(idolGlowRef.current, { opacity: 0 });

          // Backgrounds starting positions
          // S1: Rivers
          gsap.set(bgRiversRef.current, { scale: 1.05, x: "0%", y: "0%", autoAlpha: 1, filter: "brightness(1)" });
          
          // S2: Village
          gsap.set(bgVillageRef.current, { scale: 1.1, x: "5vw", y: "0vh", autoAlpha: 0 });

          // S3: Earth
          gsap.set(bgEarthRef.current, { scale: 1.05, x: "5vw", y: "-2vh", autoAlpha: 0, filter: "brightness(1) blur(0px)" });
          
          // S5-S7: Sanctum / Tirth
          gsap.set(bgSanctumRef.current, { autoAlpha: 0, scale: 1.08 });
          gsap.set(bgTirthRef.current, { autoAlpha: 0, scale: 1.04 });

          // Text defaults
          textRefs.current.forEach((t) =>
            gsap.set(t, { autoAlpha: 0 })
          );

          // === SCENE 1 — RIVERS (12%) ===
          tl.addLabel("rivers", 0);
          tl.to(bgRiversRef.current, { scale: 1.1, x: "-2vw", y: "-1vh", duration: 12, ease: "none" }, "rivers")
            .fromTo(textRefs.current[0], { x: "5vw", autoAlpha: 0 }, { autoAlpha: 1, x: "0vw", duration: 4 }, "rivers+=2")
            .to(textRefs.current[0], { autoAlpha: 0, x: "-10vw", duration: 4 }, "rivers+=8");

          // === SCENE 2 — VILLAGE (15%) ===
          tl.addLabel("village", 12);
          tl.to(bgRiversRef.current, { autoAlpha: 0, duration: 4 }, "village")
            .fromTo(bgVillageRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 4, ease: "power1.inOut" }, "village")
            .to(bgVillageRef.current, { x: "-2vw", y: "0vh", duration: 15, ease: "none" }, "village")
            .fromTo(textRefs.current[1], { x: "10vw", autoAlpha: 0 }, { autoAlpha: 1, x: "0vw", duration: 4 }, "village+=3")
            .to(textRefs.current[1], { autoAlpha: 0, x: "-10vw", duration: 4 }, "village+=11");

          // === SCENE 3 — EARTH / STONE (20%) ===
          tl.addLabel("earth", 27);
          tl.to(bgVillageRef.current, { autoAlpha: 0, duration: 4 }, "earth")
            .fromTo(bgEarthRef.current, 
               { x: "5vw", autoAlpha: 0, scale: 1.05 }, 
               { x: "-2vw", y: "0vh", autoAlpha: 1, scale: 1.12, duration: 20, ease: "power1.out" }, "earth")
            .fromTo(textRefs.current[2], { x: "8vw", autoAlpha: 0 }, { autoAlpha: 1, x: "0vw", duration: 4 }, "earth+=2")
            .to(textRefs.current[2], { autoAlpha: 0, x: "-8vw", duration: 4 }, "earth+=16");

          // === SCENE 4 — THE IDOL EMERGES (25%) ===
          tl.addLabel("idolReveal", 47);
          
          // Activate the idol reveal group layer structurally
          tl.set(idolRevealGroupRef.current, { autoAlpha: 1 }, "idolReveal");

          // Earth environment fades to dark and blurs synchronously with idol appearing
          tl.to(bgEarthRef.current, { filter: "brightness(0.12) blur(8px)", scale: 1.35, duration: 25, ease: "power1.inOut" }, "idolReveal")
          
          // Spiritual golden glow fades in behind the idol
          tl.fromTo(idolGlowRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 25, ease: "power2.out" }, "idolReveal")
          
          // Idol organically uncovers from the exact center via a growing circle
            .to(idolRef.current, 
               { opacity: 1, scale: 0.95, clipPath: "circle(100% at 50% 50%)", duration: 25, ease: "power2.out" }, "idolReveal")
            // Text enters slightly from the right as idol emerges
            .fromTo(textRefs.current[3], { x: "8vw", autoAlpha: 0 }, { autoAlpha: 1, x: "0vw", duration: 5 }, "idolReveal+=6")
            .to(textRefs.current[3], { autoAlpha: 0, x: "-8vw", duration: 5 }, "idolReveal+=18");

          // === SCENE 5 — IDOL INSIDE THE TEMPLE (12%) ===
          tl.addLabel("templeIntegration", 72);
          // Earth recedes, temple appears, idol becomes slightly smaller and integrates
          tl.to(bgEarthRef.current, { autoAlpha: 0, duration: 12, ease: "power1.inOut" }, "templeIntegration")
            .to(idolRef.current, { scale: 0.8, duration: 12, ease: "power1.inOut" }, "templeIntegration")
            .fromTo(bgSanctumRef.current, { autoAlpha: 0, scale: 1.08 }, { autoAlpha: 1, scale: 1.04, duration: 12, ease: "power1.out" }, "templeIntegration")
            .fromTo(textRefs.current[4], { y: "10vh", autoAlpha: 0 }, { autoAlpha: 1, y: "0vh", duration: 3 }, "templeIntegration+=2")
            .to(textRefs.current[4], { autoAlpha: 0, y: "-10vh", duration: 3 }, "templeIntegration+=8");

          // === SCENE 6 — DARSHAN / SACRED MOMENT ===
          tl.addLabel("darshan", 84);
          // Idol and its glow gracefully disappear, sanctum fades out
          tl.to(idolRef.current, { opacity: 0, scale: 0.7, duration: 5, ease: "power2.inOut" }, "darshan")
            .to(idolGlowRef.current, { opacity: 0, duration: 5, ease: "power2.inOut" }, "darshan")
            .to(bgSanctumRef.current, { autoAlpha: 0, duration: 5 }, "darshan")
            // Final temple fades in
            .fromTo(bgTirthRef.current, { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1.06, x: "-1vw", duration: 6, ease: "power1.out" }, "darshan")
            // Deactivate the idol reveal group completely
            .set(idolRevealGroupRef.current, { autoAlpha: 0 }, "darshan+=5")
            // Text appears AFTER the idol is gone
            .fromTo(textRefs.current[5], { autoAlpha: 0, y: "5vh" }, { autoAlpha: 1, y: "0vh", duration: 3 }, "darshan+=5");
            
          // === SCENE 7 — FINAL TEMPLE HOLD ===
          tl.addLabel("finalTemple", 95);
          // The final temple image continues its slow pull
          tl.to(textRefs.current[5], { autoAlpha: 0, y: "-10vh", duration: 3 }, "finalTemple")
            .to(bgTirthRef.current, { scale: 1.08, x: "-2vw", y: "-1vh", duration: 10, ease: "none" }, "finalTemple");
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="h-screen w-full overflow-hidden bg-background"
      >
        {/* Environment layers */}
        <div
          ref={bgRiversRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${rivers})` }}
          aria-hidden="true"
        />
        <div
          ref={bgVillageRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${village})` }}
          aria-hidden="true"
        />
        <div
          ref={bgEarthRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${earth})` }}
          aria-hidden="true"
        />
        <div
          ref={bgSanctumRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${sanctum})` }}
          aria-hidden="true"
        />
        <div
          ref={bgTirthRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${tirth})` }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-veil)" }}
          aria-hidden="true"
        />

        {/* Light motes */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
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

        {/* The idol group - completely transparent and non-participating until Scene 4 */}
        <div 
          ref={idolRevealGroupRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Spiritual golden glow */}
          <div 
            ref={idolGlowRef}
            className="absolute inset-0 m-auto h-[70vh] w-[70vh] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, rgba(255, 190, 50, 0.7) 0%, rgba(255, 160, 0, 0.3) 50%, transparent 80%)' }}
          />
          <img
            ref={idolRef}
            src={idol}
            alt="Pratimaji of Shri Vimalnath Dada at Balsana Tirth"
            width={1024}
            height={1280}
            className="h-[74vh] w-auto object-contain will-change-transform"
          />
        </div>

        {/* Chapter copy */}
        <div className="pointer-events-none absolute inset-0">
          {chapters.map((c, i) => {
            const side = i % 2 === 0;
            return (
              <div
                key={c.id}
                ref={(el) => {
                  textRefs.current[i] = el;
                }}
                className={`absolute top-1/2 -translate-y-1/2 will-change-transform ${
                  side
                    ? "left-[6vw] md:left-[10vw]"
                    : "right-[6vw] md:right-[10vw] text-right"
                } w-[88vw] md:w-auto md:max-w-sm`}
              >
                <h2 className="text-3xl leading-tight text-marble lg:text-5xl">
                  {c.title}
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
