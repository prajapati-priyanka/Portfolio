import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Observes a ref element and returns `isVisible` boolean.
 * Parent can use this to conditionally apply a CSS class — no direct DOM manipulation.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {{ ref, isVisible }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
