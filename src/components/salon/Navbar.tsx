import { Flower2, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SALON, WA_DEFAULT, waLink } from "@/lib/salon";
import { WhatsAppIcon } from "@/components/salon/shared";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "border-b border-rosegold/15 bg-ivory/90 shadow-[0_8px_30px_rgba(92,58,69,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand — scales in gracefully on page load */}
        <a
          href="#home"
          className="logo-scale-in group flex items-center gap-3"
          aria-label="Nimra Khan Salon — home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rosegold to-rosegold-dark text-white shadow-lg shadow-rosegold/30 transition-transform duration-300 group-hover:scale-105">
            <Flower2 className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block font-script text-[26px] text-berry">
              Nimra Khan
            </span>
            <span className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.42em] text-rosegold">
              Salon
            </span>
          </span>
        </a>

        {/* Desktop links — underline slides in on hover */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-bold text-berry-soft transition-colors duration-300 hover:text-rosegold"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="btn-shimmer h-10 rounded-full bg-gradient-to-r from-rosegold to-rosegold-dark px-6 text-sm font-bold shadow-lg shadow-rosegold/30 hover:shadow-rosegold/40"
          >
            <a href="#book">Book Appointment</a>
          </Button>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${SALON.phoneTel}`}
            aria-label={`Call Nimra Khan Salon at ${SALON.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rosegold/30 bg-white/70 text-rosegold-dark transition hover:bg-blush"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rosegold/30 bg-white/70 text-berry transition hover:bg-blush"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu — smooth CSS open/close with staggered items */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ivory transition-[opacity,visibility] duration-300 ease-in-out md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="bg-texture-dots absolute inset-0 opacity-60" aria-hidden="true" />
        <nav
          className="relative flex flex-1 flex-col items-center justify-center gap-7"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.06 + i * 0.06}s` : "0s" }}
              className={cn(
                "font-serif text-3xl text-berry transition-all duration-300 ease-in-out hover:text-rosegold",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              {link.label}
            </a>
          ))}

          <div
            style={{ transitionDelay: open ? "0.32s" : "0s" }}
            className={cn(
              "mt-4 flex flex-col items-center gap-3 transition-all duration-300 ease-in-out",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-shimmer inline-flex h-12 items-center rounded-full bg-gradient-to-r from-rosegold to-rosegold-dark px-8 text-[15px] font-bold text-white shadow-lg shadow-rosegold/30"
            >
              Book Appointment
            </a>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SALON.phoneTel}`}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-rosegold/40 bg-white px-6 text-sm font-bold text-rosegold-dark"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={waLink(WA_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
