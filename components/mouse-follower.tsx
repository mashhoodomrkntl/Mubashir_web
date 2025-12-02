"use client";

import { useEffect, useState } from "react";

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block overflow-hidden" aria-hidden="true">
      {/* Spotlight Glow */}
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 blur-[100px] transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: 0,
          top: 0,
        }}
      />
      
      {/* Outer Ring */}
      <div
        className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: 0,
          top: 0,
        }}
      />
      
      {/* Inner Dot */}
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/50 transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}

