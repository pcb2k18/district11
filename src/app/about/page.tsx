import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | District Eleven",
  description:
    "Built for creators. Designed for impact. District Eleven is a premium creative and brand development studio in Osu, Accra.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-end pb-20 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="section-label mb-8">About Us</div>
          <h1
            className="text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Built for Creators.
            <br />
            <span className="text-white/25">Designed for Impact.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#f5f0e8] text-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-tight mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Who We Are
            </h2>
            <div className="space-y-6 text-[#0a0a0a]/60 leading-relaxed">
              <p>
                District Eleven is a premium creative and brand development
                studio located in the heart of Osu, Accra. We provide a
                professional environment for creators, entrepreneurs and brands
                to produce high-quality content and build powerful identities.
              </p>
              <p>
                We are at the beginning of our journey — but our vision is
                global. We combine strategy, production and brand development
                under one roof, giving our clients everything they need to stand
                out in a crowded world.
              </p>
              <p>
                We do not position ourselves as just a photo and podcast studio.
                We are a creative and brand development house that also offers
                production. That distinction matters.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Our Mission",
                body: "To help the next generation of brands and creators build authentic, powerful identities through world-class production and strategic guidance.",
              },
              {
                title: "Our Vision",
                body: "To become Africa's most recognised creative and brand development studio — starting from Osu, reaching the world.",
              },
              {
                title: "Our Values",
                body: "Quality over quantity. Intentionality over noise. Premium over average. We hold every project to the highest standard.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8"
              >
                <h3
                  className="text-lg font-bold uppercase tracking-wide mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#0a0a0a]/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-24 px-6 text-center">
        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Let&apos;s Build
          <br />
          <span className="text-white/25">Something Remarkable.</span>
        </h2>
        <Link
          href="/booking"
          className="inline-flex px-8 py-4 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-[#f5f0e8] transition-colors"
        >
          Book a Consultation →
        </Link>
      </section>
    </div>
  );
}
