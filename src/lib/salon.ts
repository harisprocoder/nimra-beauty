import {
  Crown,
  Feather,
  Flower,
  Flower2,
  Hand,
  Palette,
  Scissors,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Central business details — edit the salon's info here and it updates
 * everywhere on the site (navbar, hero, contact, footer, SEO).
 */
export const SALON = {
  name: "Nimra Khan Salon",
  tagline: "Where Beauty Meets Elegance",
  phoneDisplay: "0310 0707222",
  phoneTel: "+923100707222",
  whatsappNumber: "923100707222",
  address:
    "R4 Prem Villas, University Road, Safora Chowk, Gulzar-e-Hijri, Scheme 33, Karachi, Pakistan",
  addressShort: "University Road, Safora Chowk, Karachi",
  rating: 4,
  reviewCount: 226,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Nimra Khan Salon, R4 Prem Villas, University Road, Safora Chowk, Gulzar-e-Hijri, Scheme 33, Karachi, Pakistan",
    ),
};

/** Build a WhatsApp deep-link with a prefilled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SALON.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT =
  "Hello Nimra Khan Salon! I'd like to book an appointment.";

export interface Service {
  name: string;
  desc: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    name: "Haircut & Styling",
    desc: "Precision cuts, soft waves & everyday glamour.",
    icon: Scissors,
  },
  {
    name: "Hair Color & Highlights",
    desc: "Rich tones and seamless, sun-kissed blends.",
    icon: Palette,
  },
  {
    name: "Bridal Makeup",
    desc: "Your dream look, perfected for your big day.",
    icon: Crown,
  },
  {
    name: "Party & Event Makeup",
    desc: "Radiant looks for every celebration.",
    icon: Sparkles,
  },
  {
    name: "Facials & Skin Care",
    desc: "Glow that starts deep within your skin.",
    icon: Flower2,
  },
  {
    name: "Threading & Waxing",
    desc: "Gentle, precise and flawlessly smooth.",
    icon: Feather,
  },
  {
    name: "Manicure & Pedicure",
    desc: "Polished hands and happy, pampered feet.",
    icon: Hand,
  },
  {
    name: "Mehndi & Henna",
    desc: "Intricate, elegant artistry for any occasion.",
    icon: Flower,
  },
  {
    name: "Hair Smoothening & Keratin",
    desc: "Silky, manageable, salon-sleek results.",
    icon: Waves,
  },
  {
    name: "Bleach & Cleanup",
    desc: "Fresh, even and luminous-looking skin.",
    icon: Sun,
  },
];
