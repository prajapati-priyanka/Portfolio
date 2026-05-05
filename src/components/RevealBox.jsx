import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * RevealBox
 * Wraps children in a div that fades+slides up when scrolled into view.
 * Uses useScrollReveal hook — no direct DOM class manipulation.
 *
 * @param {string} className - extra classes for the wrapper
 * @param {number} delay - animation delay in ms (for staggering siblings)
 */
export default function RevealBox({
  children,
  className = "",
  delay = 0,
  tag: Tag = "div",
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
