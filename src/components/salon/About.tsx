import { Check, MapPin } from "lucide-react";
import { Reveal, SectionHeader, Stars } from "@/components/salon/shared";
import { SALON } from "@/lib/salon";

const HIGHLIGHTS = [
  {
    title: "Expert beauticians & stylists",
    desc: "Trained hands, current trends, flawless results.",
  },
  {
    title: "Premium, skin-safe products",
    desc: "Only trusted brands ever touch your hair and skin.",
  },
  {
    title: "Spotless & hygienic space",
    desc: "Immaculate tools and a fresh, welcoming atmosphere.",
  },
  {
    title: "Personalised to you",
    desc: "Every service starts with a conversation — never a template.",
  },
];

const STATS = [
  { value: `${SALON.reviewCount}+`, label: "Happy Reviews" },
  { value: `${SALON.rating}.0`, label: "Star Rating", stars: true },
  { value: "10+", label: "Signature Services" },
  { value: "100%", label: "Women's Salon" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-28">
      <div className="bg-texture-dots absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          kicker="About Us"
          title="A sanctuary of beauty in the heart of Karachi"
          subtitle="A calm, elegant escape where every woman is welcomed with warmth and leaves glowing with confidence."
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          {/* Narrative */}
          <Reveal>
            <p className="text-[17px] leading-8 text-berry-soft">
              At Nimra Khan Salon, beauty isn&apos;t a service — it&apos;s a ritual.
              Tucked beside Safora Chowk on University Road, our salon pairs
              premium products with modern hygiene standards and genuine
              artistry. From a quick refresh to a full bridal transformation,
              every visit is crafted around you.
            </p>

            <ul className="mt-8 space-y-4">
              {HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rosegold/15 text-rosegold">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-serif text-[17px] font-semibold text-berry">
                      {h.title}
                    </p>
                    <p className="text-sm leading-relaxed text-mauve">{h.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gold/25 bg-champagne/60 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rosegold" />
              <p className="text-sm leading-relaxed text-berry-soft">
                Conveniently located at{" "}
                <span className="font-bold text-berry">{SALON.addressShort}</span>{" "}
                — easy to reach from anywhere in Karachi.
              </p>
            </div>
          </Reveal>

          {/* Trust stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.09} className="h-full">
                <div className="flex h-full flex-col items-center justify-center gap-1.5 rounded-3xl border border-rosegold/15 bg-gradient-to-br from-white to-blush/50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rosegold/15">
                  <span className="font-serif text-4xl font-bold text-berry sm:text-[2.75rem]">
                    {stat.value}
                  </span>
                  {stat.stars ? (
                    <Stars value={SALON.rating} size={14} />
                  ) : (
                    <span
                      className="h-px w-8 bg-gradient-to-r from-transparent via-rosegold/60 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-rosegold">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
