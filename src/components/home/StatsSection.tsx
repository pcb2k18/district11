"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function useCountUp(target: string, duration = 1500, start = false) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;
    const isPercent = target.includes("%");
    const isPlus = target.includes("+");
    const num = parseInt(target.replace(/[^0-9]/g, ""));
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(`${current}${isPlus ? "+" : ""}${isPercent ? "%" : ""}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, target, duration]);

  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 1800, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white leading-none mb-3"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {count}
      </div>
      <div className="text-white/40 text-sm uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
