import { MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeader, WhatsAppIcon } from "@/components/salon/shared";
import { SALON, SERVICES, waLink } from "@/lib/salon";

const SPARKLES = [
  { top: "10%", left: "8%", size: 13, delay: "0s" },
  { top: "22%", left: "92%", size: 15, delay: "0.7s" },
  { top: "70%", left: "4%", size: 11, delay: "1.2s" },
  { top: "85%", left: "80%", size: 14, delay: "0.4s" },
];

const inputClass =
  "glow-focus h-11 rounded-lg border-rosegold/25 bg-white/80 text-berry placeholder:text-mauve/70 focus-visible:ring-rosegold/40";

export default function Booking() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const date = String(data.get("date") ?? "");
    const time = String(data.get("time") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "Hello Nimra Khan Salon! I'd like to book an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      date && `Preferred date: ${date}`,
      time && `Preferred time: ${time}`,
      message && `Notes: ${message}`,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="book"
      className="relative overflow-hidden bg-berry py-24 text-ivory sm:py-28"
    >
      {/* Decorative glows on the dark section */}
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-rosegold/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="bg-texture-dots absolute inset-0 opacity-40" aria-hidden="true" />
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="animate-sparkle absolute select-none text-gold-soft"
          style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          dark
          kicker="Book Your Visit"
          title="Reserve your moment of beauty"
          subtitle="Tell us what you need — we'll confirm your slot personally over WhatsApp or a quick call."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ---- Contact shortcuts ---- */}
          <div className="space-y-5">
            <Reveal>
              <a
                href={`tel:${SALON.phoneTel}`}
                className="group flex items-start gap-4 rounded-3xl border border-ivory/15 bg-white/10 p-6 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-white/15"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg text-ivory">Call us — the fastest way</span>
                  <span className="shake-hover mt-1 block text-lg font-extrabold text-gold-soft group-hover:underline">
                    {SALON.phoneDisplay}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-blush/80">
                    Tap to call · we&apos;ll help you choose a service and time.
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <a
                href={waLink("Hello Nimra Khan Salon! I'd like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-3xl border border-ivory/15 bg-white/10 p-6 backdrop-blur transition-all duration-300 hover:border-gold/50 hover:bg-white/15"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/25 text-[#7ce7a8] transition-transform duration-300 group-hover:scale-110">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg text-ivory">Chat on WhatsApp</span>
                  <span className="mt-1 block text-sm leading-relaxed text-blush/80">
                    Fast replies, price quotes &amp; booking confirmations.
                  </span>
                  <span className="mt-2 inline-block text-sm font-bold text-gold-soft group-hover:underline">
                    Start a chat →
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex items-start gap-4 rounded-3xl border border-ivory/15 bg-white/10 p-6 backdrop-blur">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg text-ivory">Visit us</span>
                  <span className="mt-1 block text-sm leading-relaxed text-blush/90">
                    {SALON.address}
                  </span>
                  <a
                    href={SALON.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-bold text-gold-soft underline-offset-4 hover:underline"
                  >
                    Get directions on Google Maps →
                  </a>
                </span>
              </div>
            </Reveal>
          </div>

          {/* ---- Booking form ---- */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] bg-white p-6 text-berry shadow-2xl shadow-black/20 sm:p-9"
            >
              <h3 className="font-serif text-2xl font-semibold text-berry">
                Request an appointment
              </h3>
              <p className="mt-1 text-sm text-mauve">
                No online payment needed — we confirm every booking personally.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bk-name" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Your name
                  </label>
                  <Input id="bk-name" name="name" placeholder="e.g. Ayesha R." required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="bk-phone" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Phone number
                  </label>
                  <Input
                    id="bk-phone"
                    name="phone"
                    type="tel"
                    placeholder="03XX XXXXXXX"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bk-service" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Service required
                  </label>
                  <select
                    id="bk-service"
                    name="service"
                    required
                    defaultValue=""
                    className="glow-focus h-11 w-full rounded-lg border border-rosegold/25 bg-white/80 px-3 text-sm text-berry outline-none transition focus:border-rosegold focus:ring-2 focus:ring-rosegold/40"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Other / Not sure">Other / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bk-date" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Preferred date
                  </label>
                  <Input
                    id="bk-date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="bk-time" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Preferred time
                  </label>
                  <Input id="bk-time" name="time" type="time" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bk-message" className="mb-1.5 block text-sm font-bold text-berry-soft">
                    Message <span className="font-normal text-mauve">(optional)</span>
                  </label>
                  <Textarea
                    id="bk-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about the look you have in mind…"
                    className="glow-focus rounded-lg border-rosegold/25 bg-white/80 text-berry placeholder:text-mauve/70 focus-visible:ring-rosegold/40"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="btn-shimmer mt-7 h-12 w-full rounded-full bg-gradient-to-r from-rosegold to-rosegold-dark text-[15px] font-extrabold shadow-lg shadow-rosegold/30 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-rosegold/40"
              >
                <Send className="h-4 w-4" /> Send booking request on WhatsApp
              </Button>

              <p className="mt-4 text-center text-xs leading-relaxed text-mauve">
                {sent ? (
                  <span className="font-bold text-rosegold">
                    ✓ WhatsApp should have opened with your booking details — we&apos;ll
                    confirm your slot shortly!
                  </span>
                ) : (
                  <>
                    Submitting opens WhatsApp with your details prefilled. Prefer
                    to talk? Call{" "}
                    <a href={`tel:${SALON.phoneTel}`} className="font-bold text-rosegold hover:underline">
                      {SALON.phoneDisplay}
                    </a>
                    .
                  </>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
