"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function ResearchReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...root.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    if (!motion.matches)
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > innerHeight)
          element.dataset.reveal = "pending";
        observer.observe(element);
      });
    const revealAll = () => {
      if (motion.matches) {
        elements.forEach((element) => {
          element.dataset.reveal = "visible";
        });
        observer.disconnect();
      }
    };
    motion.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", revealAll);
    };
  }, []);
  return <div ref={ref}>{children}</div>;
}
