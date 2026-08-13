import { Flower2, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { SALON, SERVICES, WA_DEFAULT, waLink } from "@/lib/salon";
import { WhatsAppIcon } from "@/components/salon/shared";

const EXPLORE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book an Appointment", href: "#book" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#432a34] text-ivory">
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rosegold to-rosegold-dark text-white shadow-lg shadow-black/20">
                <Flower2 className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block font-script text-[26px] text-ivory">Nimra Khan</span>
                <span className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.42em] text-gold-soft">
                  Salon
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-blush/80">
              Karachi&apos;s premium women&apos;s beauty salon — where every visit
              feels like a ritual. Bridal, hair, skin and everything in between.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Nimra Khan Salon on Instagram (coming soon)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-white/10 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-gold hover:bg-gold hover:text-[#432a34]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Nimra Khan Salon on Facebook (coming soon)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-white/10 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-gold hover:bg-gold hover:text-[#432a34]"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={waLink(WA_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Nimra Khan Salon on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 bg-white/10 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="font-serif text-lg font-semibold text-gold-soft">Explore</h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blush/85 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-soft">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <a href="#services" className="text-sm text-blush/85 transition-colors hover:text-gold-soft">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-soft">Get in touch</h3>
            <ul className="mt-5 space-y-4 text-sm text-blush/85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${SALON.phoneTel}`} className="shake-hover font-bold text-ivory transition-colors duration-300 hover:text-gold-soft">
                  {SALON.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{SALON.address}</span>
              </li>
              <li>
                <a
                  href={SALON.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold-soft underline-offset-4 hover:underline"
                >
                  Get directions →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-6 text-center text-[13px] text-blush/70 sm:flex-row">
          <p>© {year} {SALON.name}. All rights reserved.</p>
          <p>Made with ♥ for every woman in Karachi</p>
        </div>
      </div>
    </footer>
  );
}
