import type { Metadata } from "next";
import Link from "next/link";
import { services, creatorAuthorityRetainer } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing | District Eleven",
  description:
    "Transparent pricing for Brand & Media Management, Photography, Podcast Production and content studio services.",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">Pricing</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Flexible
            <br />
            <span className="text-white/25">Pricing.</span>
          </h1>
          <p className="text-white/40 text-lg mt-8 max-w-xl">
            Packages designed for every stage — from first shoot to full brand
            development.
          </p>
        </div>
      </section>

      {/* Creator Authority — highlighted first */}
      <section
        id="creator-authority"
        className="bg-[#0a0a0a] px-6 pb-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/40 bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-10 lg:p-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
              Most Popular · {creatorAuthorityRetainer.badge}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2
                  className="text-4xl font-bold uppercase mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {creatorAuthorityRetainer.name}
                </h2>
                <p className="text-white/50 mb-8">{creatorAuthorityRetainer.description}</p>
                <div className="text-6xl font-bold mb-1">{creatorAuthorityRetainer.price}</div>
                <div className="text-white/30 text-sm mb-8">{creatorAuthorityRetainer.period}</div>
                <Link
                  href="/booking?package=creator-authority"
                  className="inline-flex px-7 py-3.5 bg-[#c9a84c] text-[#0a0a0a] rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#d4b05c] transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
              <ul className="space-y-4 self-center">
                {creatorAuthorityRetainer.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] text-xs flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* All services pricing */}
      {services.map((service) => (
        <section key={service.id} className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-3xl">{service.icon}</span>
              <div>
                <h2
                  className="text-2xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {service.title}
                </h2>
                <p className="text-white/40 text-sm">{service.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col p-7 rounded-2xl border ${
                    pkg.badge === "Premium"
                      ? "pricing-featured"
                      : "border-white/5 bg-[#111111]"
                  }`}
                >
                  {pkg.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 mb-4 w-fit">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold uppercase mb-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-1">{pkg.price}</div>
                  <p className="text-white/40 text-xs mb-5">{pkg.description}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/55">
                        <span className="text-white/25 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/booking?service=${service.id}&package=${encodeURIComponent(pkg.name)}`}
                    className="block text-center py-3 rounded-full border border-white/10 text-white/50 text-xs font-semibold uppercase tracking-wide hover:border-white/30 hover:text-white transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
