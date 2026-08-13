import { Phone } from "lucide-react";
import { SALON, WA_DEFAULT, waLink } from "@/lib/salon";
import { WhatsAppIcon } from "@/components/salon/shared";

/** Floating call + WhatsApp buttons with a pulsing WhatsApp ring. */
export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <a
        href={`tel:${SALON.phoneTel}`}
        aria-label={`Call Nimra Khan Salon at ${SALON.phoneDisplay}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rosegold to-rosegold-dark text-white shadow-xl shadow-rosegold/40 transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink(WA_DEFAULT)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nimra Khan Salon on WhatsApp"
        className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
