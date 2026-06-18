"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      root.classList.add("motion-reduced");
      return;
    }

    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
    const reveal = (element: HTMLElement) => element.classList.add("is-visible");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    elements.forEach((element, index) => {
      if (!element.style.getPropertyValue("--motion-delay")) {
        element.style.setProperty("--motion-delay", `${Math.min((index % 6) * 80, 400)}ms`);
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
