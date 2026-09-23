import { useEffect, useRef } from "react";

const PETAL_COLORS = [
  "oklch(0.86 0.08 356 / 0.9)",
  "oklch(0.9 0.055 300 / 0.9)",
  "oklch(0.88 0.09 80 / 0.85)",
  "oklch(0.72 0.15 18 / 0.85)",
];

export function BlossomTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = 0;
    const spawn = (x: number, y: number) => {
      const petal = document.createElement("span");
      const size = 6 + Math.random() * 7;
      petal.className = "petal-drift pointer-events-none absolute";
      petal.style.cssText = [
        `left:${x}px`,
        `top:${y}px`,
        `width:${size.toFixed(1)}px`,
        `height:${(size * 0.72).toFixed(1)}px`,
        `background:${PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]}`,
        "border-radius:150% 12% 150% 12%",
        "opacity:0",
        `--px:${Math.round(Math.random() * 90 - 45)}px`,
        `--pr:${Math.floor(Math.random() * 360)}deg`,
        `--po:${(0.5 + Math.random() * 0.35).toFixed(2)}`,
      ].join(";");
      container.appendChild(petal);
      petal.addEventListener("animationend", () => petal.remove());
    };
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 70) return;
      last = now;
      spawn(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={containerRef} aria-hidden className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" />;
}
