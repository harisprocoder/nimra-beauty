import { Reveal, SectionHeader, WhatsAppIcon } from "@/components/salon/shared";
import { SERVICES, waLink } from "@/lib/salon";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-champagne py-24 sm:py-28">
      <div className="bg-texture-floral absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-36 sm:px-8">
        <SectionHeader
          kicker="Our Services"
          title="Signature beauty rituals"
          subtitle="From everyday polish to once-in-a-lifetime bridal glamour — every treatment is tailored to you."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.name} delay={(i % 5) * 0.08} className="h-full">
              <div className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-rosegold/10 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-rosegold/30 hover:shadow-xl hover:shadow-rosegold/15">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush text-rosegold transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-rosegold group-hover:to-rosegold-dark group-hover:text-white">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-[15px] font-semibold leading-snug text-berry">
                  {service.name}
                </h3>
                <p className="text-xs leading-relaxed text-mauve">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={0.1}>
          <p className="text-sm leading-relaxed text-berry-soft">
            Pricing varies by service &amp; package —{" "}
            <span className="font-bold text-rosegold">message us</span> for a
            personalised quote.
          </p>
          <a
            href={waLink(
              "Hi Nimra Khan Salon! I'd like to know more about your services and pricing.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-12 items-center gap-2 rounded-full border-2 border-rosegold bg-white px-7 text-[15px] font-extrabold text-rosegold-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-rosegold hover:text-white hover:shadow-xl hover:shadow-rosegold/30"
          >
            <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
          </a>
        </Reveal>
      </div>

      {/* Soft curve into the deep-berry booking section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-berry" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full sm:h-16 lg:h-20">
          <path fill="currentColor" d="M0,44 C240,96 480,8 720,30 C960,52 1200,74 1440,22 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
