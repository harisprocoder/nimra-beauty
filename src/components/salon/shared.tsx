import { Sparkle, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Observe when an element scrolls into view (fires once). */
export function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * Fade-in + slide-up reveal when a section scrolls into view.
 * Pure CSS transitions; `.is-visible` is toggled by an IntersectionObserver.
 * `delay` staggers elements (used by the services grid).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

/** Section heading: script kicker, serif title and an ornamental divider. */
export function SectionHeader({
  kicker,
  title,
  subtitle,
  dark = false,
  className,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      <p
        className={cn(
          "font-script text-2xl sm:text-3xl",
          dark ? "text-gold-soft" : "text-rosegold",
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          "mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-ivory" : "text-berry",
        )}
      >
        {title}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3">
        <span
          className={cn(
            "h-px w-14 bg-gradient-to-r from-transparent",
            dark ? "to-gold/70" : "to-rosegold/60",
          )}
        />
        <Sparkle className={cn("h-4 w-4", dark ? "text-gold" : "text-rosegold")} />
        <span
          className={cn(
            "h-px w-14 bg-gradient-to-l from-transparent",
            dark ? "to-gold/70" : "to-rosegold/60",
          )}
        />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed",
            dark ? "text-blush/90" : "text-mauve",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/** Gold star row (e.g. ★★★★☆ for the 4.0 rating) with one-by-one twinkle. */
export function Stars({
  value = 4,
  size = 16,
  className,
}: {
  value?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("stars-twinkle inline-flex items-center gap-0.5", className)}
      aria-label={`${value} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className={cn(
            "text-gold",
            i < value ? "star-filled fill-gold" : "opacity-30",
          )}
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}

/** Soft wave divider used to transition between sections. */
export function Curve({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={cn("pointer-events-none", flip && "rotate-180", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 lg:h-20"
      >
        <path
          fill="currentColor"
          d="M0,44 C240,96 480,8 720,30 C960,52 1200,74 1440,22 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

/**
 * Counts up from 0 when it scrolls into view (e.g. "0" → "226+").
 * Vanilla JS: IntersectionObserver + requestAnimationFrame, 0.8s ease-out.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.3);
  const [display, setDisplay] = useState(() => {
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) return value;
    const decimals = match[1].includes(".") ? 1 : 0;
    return `${(0).toFixed(decimals)}${match[2]}`;
  });

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? 1 : 0;
    const duration = 800;

    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

/** Recognizable WhatsApp brand glyph. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
