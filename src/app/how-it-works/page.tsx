import type { Metadata } from "next";
import Link from "next/link";
import { steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "How It Works | District Eleven",
  description:
    "Our simple three-step process: Consult, Create, Grow. Book a session with District Eleven.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#f5f0e8] text-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label on-light mb-8">The Process</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Simple.
            <br />
            <span className="text-[#0a0a0a]/20">Three Steps.</span>
          </h1>
          <p className="text-[#0a0a0a]/50 text-lg mt-8 max-w-xl">
            Book, create and grow without the stress. Here&apos;s exactly how
            it works.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, i) => (
        <section
          key={step.number}
          className={`py-24 px-6 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Step number visual */}
              <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                <div
                  className="text-[clamp(8rem,20vw,16rem)] font-bold leading-none text-white/5 select-none"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-first" : ""}>
                <div className="section-label mb-6">Step {step.number}</div>
                <h2
                  className="text-[clamp(3rem,6vw,6rem)] font-bold uppercase leading-none mb-8"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  {step.description}
                </p>
                <ul className="space-y-4">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-white/60"
                    >
                      <span className="w-5 h-5 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs text-white/40">
                        ✓
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-white text-[#0a0a0a] py-24 px-6 text-center">
        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready to Start?
        </h2>
        <p className="text-[#0a0a0a]/50 max-w-md mx-auto mb-10">
          Book a free consultation and we&apos;ll walk you through exactly how
          we can help.
        </p>
        <Link
          href="/booking"
          className="inline-flex px-8 py-4 bg-[#0a0a0a] text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#1a1a1a] transition-colors"
        >
          Book a Free Consultation →
        </Link>
      </section>
    </div>
  );
}
