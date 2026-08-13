import { ChevronDown, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { SALON, WA_DEFAULT, waLink } from "@/lib/salon";
import { Curve, Stars } from "@/components/salon/shared";

const SPARKLES = [
  { top: "16%", left: "10%", size: 14, delay: "0s" },
  { top: "28%", left: "90%", size: 18, delay: "0.6s" },
  { top: "62%", left: "5%", size: 12, delay: "1.1s" },
  { top: "76%", left: "74%", size: 16, delay: "0.3s" },
  { top: "12%", left: "56%", size: 10, delay: "1.4s" },
];

const LOCAL_PILLS = [
  "Women's Beauty Salon",
  "Gulzar-e-Hijri · Scheme 33",
  "University Road · Safora Chowk",
];

/* Deterministic, subtle floating particles for the hero background */
const HERO_PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  left: (i * 8.3 + 3) % 97,
  size: 3 + ((i * 7) % 4) * 2,
  duration: 11 + ((i * 5) % 7),
  delay: -((i * 3.7) % 11),
}));

/** Vanilla-JS typewriter for the hero heading ("Nimra Khan" → "Salon"). */
function useTypewriter(words: readonly string[], typeSpeed = 60, startDelay = 450) {
  const [parts, setParts] = useState<string[]>(() => words.map(() => ""));
  const [active, setActive] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let word = 0;
    let char = 0;
    let timer: number | undefined;

    const tick = () => {
      if (word >= words.length) {
        setDone(true);
        return;
      }
      char += 1;
      setParts(
        words.map((w, i) => (i < word ? w : i === word ? w.slice(0, char) : "")),
      );
      if (char >= words[word].length) {
        word += 1;
        char = 0;
        setActive(word);
        if (word >= words.length) {
          setDone(true);
          return;
        }
        timer = window.setTimeout(tick, 340); // short pause between lines
      } else {
        timer = window.setTimeout(tick, typeSpeed);
      }
    };

    timer = window.setTimeout(tick, startDelay);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { parts, active, done };
}

export default function Hero() {
  const { parts, active, done } = useTypewriter(["Nimra Khan", "Salon"]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-[#fbf2ee] to-white"
    >
      {/* Soft layered background */}
      <div className="bg-texture-floral absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-rosegold-light/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 top-1/3 h-[24rem] w-[24rem] rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-blush-deep/40 blur-3xl"
        aria-hidden="true"
      />

      {/* Twinkling gold sparkles */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="animate-sparkle absolute select-none text-gold"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}

      {/* Subtle floating particles */}
      {HERO_PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="hero-particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-5 pb-36 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-44 lg:pt-36">
        {/* ------- Text column: identity, trust, action ------- */}
        <div className="text-center lg:text-left">
          <p
            className="animate-fade-up font-script text-3xl text-rosegold sm:text-4xl"
            style={{ animationDelay: "0.15s" }}
          >
            {SALON.tagline}
          </p>

          {/* Typewriter heading */}
          <h1 className="mt-4 font-serif text-5xl leading-[1.04] text-berry sm:text-6xl lg:text-7xl">
            <span className="block">
              {parts[0]}
              {active === 0 && !done && (
                <span className="typewriter-cursor" aria-hidden="true" />
              )}
            </span>
            <span className="gold-text mt-1 block italic">
              {parts[1]}
              {active === 1 && !done && (
                <span className="typewriter-cursor" aria-hidden="true" />
              )}
            </span>
          </h1>

          {/* Social proof — the 4.0 / 226-reviews badge */}
          <div
            className="animate-fade-up mt-7 inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-full border border-gold/35 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur lg:justify-start"
            style={{ animationDelay: "0.42s" }}
          >
            <Stars value={SALON.rating} size={16} />
            <span className="text-[15px] font-extrabold text-berry">{SALON.rating}.0</span>
            <span className="text-[15px] text-mauve">·</span>
            <span className="text-[15px] font-bold text-berry-soft">
              {SALON.reviewCount} reviews
            </span>
          </div>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-berry-soft sm:text-lg lg:mx-0"
            style={{ animationDelay: "0.55s" }}
          >
            Karachi&apos;s premium beauty destination — expert stylists, luxurious
            treatments, and a warm, women-only space designed around you. Look
            stunning. Feel confident.
          </p>

          {/* Primary calls to action */}
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: "0.68s" }}
          >
            <a
              href="#book"
              className="btn-shimmer inline-flex h-[52px] items-center rounded-full bg-gradient-to-r from-rosegold to-rosegold-dark px-8 text-[15px] font-extrabold text-white shadow-xl shadow-rosegold/35 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-rosegold/45"
            >
              Book Appointment
            </a>
            <a
              href={`tel:${SALON.phoneTel}`}
              className="inline-flex h-[52px] items-center gap-2 rounded-full border border-rosegold/40 bg-white/80 px-7 text-[15px] font-extrabold text-rosegold-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-blush hover:shadow-lg hover:shadow-rosegold/20"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={SALON.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center gap-2 rounded-full px-5 text-[15px] font-bold text-berry-soft transition-colors duration-300 hover:text-rosegold"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>

          <p
            className="animate-fade-up mt-5 text-sm text-mauve"
            style={{ animationDelay: "0.85s" }}
          >
            Prefer WhatsApp?{" "}
            <a
              href={waLink(WA_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rosegold underline-offset-4 hover:underline"
            >
              We usually reply within minutes.
            </a>
          </p>

          {/* Local trust pills */}
          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            style={{ animationDelay: "1s" }}
          >
            {LOCAL_PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-rosegold/20 bg-white/60 px-3.5 py-1.5 text-xs font-bold text-berry-soft backdrop-blur"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* ------- Visual column: elegant medallion ------- */}
        <div
          className="animate-scale-in relative mx-auto flex h-[400px] w-[340px] items-center justify-center sm:h-[500px] sm:w-[440px]"
          style={{ animationDelay: "0.35s" }}
        >
          <div
            className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(227,183,190,0.55),transparent_66%)] blur-2xl"
            aria-hidden="true"
          />
          <div
            className="animate-slow-spin absolute inset-0 rounded-full border border-dashed border-rosegold/40"
            aria-hidden="true"
          />
          <div
            className="animate-slow-spin-reverse absolute inset-10 rounded-full border border-gold/35"
            aria-hidden="true"
          />

          {/* Medallion */}
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-blush via-white to-champagne p-2 shadow-2xl shadow-rosegold/25 ring-1 ring-rosegold/20 sm:h-80 sm:w-80">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_18%,#ffffff,#f9eef0_55%,#f2dbd6)]">
              <span className="font-script text-2xl text-gold" aria-hidden="true">
                ♥
              </span>
              <span className="mt-2 font-serif text-[40px] italic leading-none text-berry sm:text-[46px]">
                Nimra
              </span>
              <span className="font-serif text-[40px] italic leading-none text-berry sm:text-[46px]">
                Khan
              </span>
              <span className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.5em] text-rosegold">
                Salon
              </span>
              <span
                className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-rosegold/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Floating chips */}
          <div
            className="animate-fade-up absolute -left-1 top-6 sm:left-0"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="animate-float-soft flex items-center gap-2 rounded-full border border-rosegold/20 bg-white/90 px-4 py-2 shadow-lg shadow-rosegold/10 backdrop-blur">
              <Stars value={4} size={13} />
              <span className="text-xs font-extrabold text-berry">4.0</span>
              <span className="text-xs text-mauve">· {SALON.reviewCount} reviews</span>
            </div>
          </div>
          <div
            className="animate-fade-up absolute -right-1 bottom-20 sm:right-0"
            style={{ animationDelay: "1.25s" }}
          >
            <div className="animate-float-soft-slow rounded-2xl border border-gold/25 bg-white/90 px-4 py-3 shadow-lg shadow-rosegold/10 backdrop-blur">
              <p className="font-script text-xl leading-none text-rosegold">
                Bridal · Hair · Skin
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="animate-fade-up absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-rosegold lg:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em]">
          Discover
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>

      {/* Soft curve into the About section */}
      <Curve className="absolute bottom-0 left-0 right-0 text-white" />
    </section>
  );
}
