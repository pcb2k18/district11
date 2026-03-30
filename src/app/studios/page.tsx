import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Studios | District Eleven",
  description:
    "Explore our professional photography studio and podcast recording space in Osu, Accra.",
};

const studios = [
  {
    name: "Photography Studio",
    slug: "photography",
    description:
      "A fully equipped photography space with professional lighting, multiple backdrop options and creative direction.",
    specs: [
      "Professional studio flash lighting",
      "Multiple backdrop options",
      "Full-length mirror & styling area",
      "High-resolution camera equipment",
      "Print-ready and digital outputs",
    ],
    available: "By appointment",
  },
  {
    name: "Podcast Recording Room",
    slug: "podcast",
    description:
      "Multi-camera podcast setup with acoustic treatment, professional microphones and cinematic lighting.",
    specs: [
      "Multi-camera setup",
      "Acoustic treatment",
      "Professional condenser microphones",
      "Cinematic lighting rig",
      "Up to 4 guests",
      "Live monitoring",
    ],
    available: "By appointment",
  },
  {
    name: "Content Studio",
    slug: "content",
    description:
      "Versatile creative space for reels, TikTok content, YouTube videos and brand shoots.",
    specs: [
      "Flexible set configurations",
      "Ring lights & LED panels",
      "Teleprompter available",
      "Green screen option",
      "High-speed WiFi",
    ],
    available: "Hourly & full-day rates",
  },
];

export default function StudiosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">The Space</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our
            <br />
            <span className="text-white/25">Studios.</span>
          </h1>
          <p className="text-white/40 text-lg mt-8 max-w-xl">
            Purpose-built spaces in Osu, Accra. Designed for creators who take
            their work seriously.
          </p>
        </div>
      </section>

      {/* Studios */}
      {studios.map((studio, i) => (
        <section
          key={studio.slug}
          className={`py-24 px-6 ${i % 2 === 0 ? "bg-[#f5f0e8] text-[#0a0a0a]" : "bg-[#111111] text-white"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder */}
              <div
                className={`aspect-[4/3] rounded-2xl flex items-center justify-center ${
                  i % 2 === 0
                    ? "bg-[#e8e3db] border border-[#0a0a0a]/5"
                    : "bg-[#1a1a1a] border border-white/5"
                }`}
              >
                <span className={`text-6xl ${i % 2 === 0 ? "opacity-10" : "opacity-5"}`}>
                  {i === 0 ? "📷" : i === 1 ? "🎙️" : "🎬"}
                </span>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-first" : ""}>
                <div className={`section-label mb-6 ${i % 2 === 0 ? "on-light" : ""}`}>
                  Studio 0{i + 1}
                </div>
                <h2
                  className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-tight mb-6"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {studio.name}
                </h2>
                <p
                  className={`text-lg leading-relaxed mb-8 ${
                    i % 2 === 0 ? "text-[#0a0a0a]/60" : "text-white/50"
                  }`}
                >
                  {studio.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {studio.specs.map((spec) => (
                    <li
                      key={spec}
                      className={`flex items-center gap-3 text-sm ${
                        i % 2 === 0 ? "text-[#0a0a0a]/60" : "text-white/60"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                        i % 2 === 0 ? "bg-[#0a0a0a]/10 text-[#0a0a0a]/50" : "bg-white/10 text-white/40"
                      }`}>
                        ✓
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/booking?studio=${studio.slug}`}
                    className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors ${
                      i % 2 === 0
                        ? "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"
                        : "bg-white text-[#0a0a0a] hover:bg-[#f5f0e8]"
                    }`}
                  >
                    Book This Studio
                  </Link>
                  <span
                    className={`text-xs uppercase tracking-widest ${
                      i % 2 === 0 ? "text-[#0a0a0a]/30" : "text-white/30"
                    }`}
                  >
                    {studio.available}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 px-6 text-center">
        <h2
          className="text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready To Step Inside?
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
