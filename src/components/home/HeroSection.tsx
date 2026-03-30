"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    type: "image",
    bg: "bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a]",
    label: "Brand & Media",
  },
  {
    id: 2,
    type: "image",
    bg: "bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#0a0a0a]",
    label: "Photography",
  },
  {
    id: 3,
    type: "image",
    bg: "bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#1a1a1a]",
    label: "Podcast Production",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 ${slides[current].bg}`}
        >
          {/* Cinematic grain overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-transparent to-[#0a0a0a]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="section-label mb-6">
            Premium Creative Studio · Osu, Accra
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight mb-6 max-w-4xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Elevate Your Ideas
            <br />
            <span className="text-white/30">Into Digital Reality.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/50 text-lg max-w-md mb-10 leading-relaxed">
            A premium creative space in Osu built for brands, creators and
            visionaries.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="px-7 py-3.5 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm tracking-wide hover:bg-[#f5f0e8] transition-colors duration-200"
            >
              Book a Session →
            </Link>
            <Link
              href="/services"
              className="px-7 py-3.5 border border-white/20 text-white rounded-full font-semibold text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 right-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-8 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
