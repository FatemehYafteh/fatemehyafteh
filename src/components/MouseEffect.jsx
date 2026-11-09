"use client";
import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(
         600px at ${mousePos.x}px ${mousePos.y}px,
          rgba(29, 78, 216,0.15),
          transparent 80%
        )`,
        transition: "background 0.1s ease-out",
      }}
    ></div>
  );
}
