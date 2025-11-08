"use client";
import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          200px at ${mousePos.x}px ${mousePos.y}px,
          rgba(29, 78, 216, 0.25),
          transparent 80%
        )`,
        transition: "background 0.1s ease-out",
      }}
    ></div>
  );
}
