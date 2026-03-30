"use client";

import Link from "next/link";

const placeholders = [
  { label: "Photography Studio", aspect: "tall" },
  { label: "Podcast Setup", aspect: "tall" },
  { label: "Lighting Rig", aspect: "wide" },
  { label: "Behind the Scenes", aspect: "wide" },
];

export default function StudioPreviewSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-6">The Space</div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Inside
              <br />
              <span className="text-white/25">District Eleven.</span>
            </h2>
          </div>
          <Link
            href="/studios"
            className="text-sm font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            View Studios →
          </Link>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[500px] md:h-[600px]">
          {/* Large left image */}
          <div className="col-span-2 row-span-2 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 flex items-end p-6">
              <span className="text-white/20 text-sm uppercase tracking-widest">
                {placeholders[0].label}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/5 text-6xl">📷</span>
            </div>
          </div>

          {/* Top right */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden relative group">
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-white/20 text-xs uppercase tracking-widest">
                {placeholders[1].label}
              </span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/5 text-4xl">🎙️</span>
            </div>
          </div>

          {/* Top right 2 */}
          <div className="col-span-1 row-span-1 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-white/20 text-xs uppercase tracking-widest">
                {placeholders[2].label}
              </span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/5 text-4xl">💡</span>
            </div>
          </div>

          {/* Bottom right wide */}
          <div className="col-span-2 row-span-1 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-white/20 text-xs uppercase tracking-widest">
                {placeholders[3].label}
              </span>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/5 text-4xl">🎬</span>
            </div>
          </div>
        </div>

        <p className="text-white/20 text-xs text-center mt-4 uppercase tracking-widest">
          Studio photos coming soon
        </p>
      </div>
    </section>
  );
}
