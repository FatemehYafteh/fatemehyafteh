"use client";
import { useEffect, useRef, useState } from "react";

// Desktop-width screens only, and not for people who prefer reduced motion.
const QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

export default function MouseEffect() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    let frame = 0;
    let x = -100;
    let y = -100;

    // Move the glow with CSS variables, at most once per animation frame.
    // This avoids a React re-render on every mouse move.
    const apply = () => {
      frame = 0;
      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleMouseMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={
        /** @type {import("react").CSSProperties} */ ({
          "--mouse-x": "-100px",
          "--mouse-y": "-100px",
          background: `radial-gradient(
         600px at var(--mouse-x) var(--mouse-y),
          rgba(29, 78, 216,0.15),
          transparent 80%
        )`,
        })
      }
    ></div>
  );
}
