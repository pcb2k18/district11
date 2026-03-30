import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | District Eleven",
  description:
    "Studio images, behind-the-scenes and sample work from District Eleven creative studio.",
};

const categories = [
  { label: "All", value: "all" },
  { label: "Photography", value: "photography" },
  { label: "Podcast", value: "podcast" },
  { label: "Brand", value: "brand" },
  { label: "Studio", value: "studio" },
];

const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: [
    "Studio Setup",
    "Photography Area",
    "Podcast Recording",
    "Lighting Rig",
    "Behind the Scenes",
    "Brand Shoot",
    "Content Creation",
    "Studio Interior",
    "Equipment",
    "Production",
    "Creative Direction",
    "Post Production",
  ][i],
  aspect: i % 5 === 0 || i % 7 === 0 ? "tall" : "normal",
}));

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">Our Work</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            A Few
            <br />
            <span className="text-white/25">Of Our Best.</span>
          </h1>
          <p className="text-white/40 text-lg mt-8 max-w-xl">
            Studio images, setups and behind-the-scenes. Full portfolio coming
            as we grow.
          </p>
        </div>
      </section>

      {/* Filter tabs (visual only for now) */}
      <section className="px-6 py-8 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat.value}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? "bg-white text-[#0a0a0a]"
                  : "border border-white/10 text-white/40 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {placeholders.map((item) => (
              <div
                key={item.id}
                className={`break-inside-avoid rounded-2xl bg-[#111111] border border-white/5 overflow-hidden relative ${
                  item.aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/5 text-4xl">📸</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/30 text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white/20 text-xs text-center mt-12 uppercase tracking-widest">
            Portfolio photos coming soon · Work in progress
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-20 px-6 text-center">
        <h2
          className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-tight mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Want to be featured here?
        </h2>
        <Link
          href="/booking"
          className="inline-flex px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#f5f0e8] transition-colors"
        >
          Book a Session →
        </Link>
      </section>
    </div>
  );
}
