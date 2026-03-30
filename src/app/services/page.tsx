import type { Metadata } from "next";
import Link from "next/link";
import { services, creatorAuthorityRetainer } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | District Eleven",
  description:
    "Brand & Media Management, Photography, Podcast Production and Content Studio — premium creative services in Osu, Accra.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">Our Services</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What We
            <br />
            <span className="text-white/25">Offer.</span>
          </h1>
        </div>
      </section>

      {/* Services */}
      {services.map((service, si) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 px-6 ${si % 2 === 0 ? "bg-[#111111]" : "bg-[#0a0a0a]"}`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {service.title}
              </h2>
              <p className="text-white/50 text-lg max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col p-8 rounded-2xl border ${
                    pkg.badge === "Premium"
                      ? "border-[#c9a84c]/30 bg-gradient-to-b from-[#1a1a1a] to-[#111111] pricing-featured"
                      : "border-white/5 bg-[#111111]"
                  }`}
                >
                  {pkg.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20 mb-4 w-fit">
                      {pkg.badge}
                    </span>
                  )}
                  <h3
                    className="text-xl font-bold uppercase tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-white mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-white/40 text-sm mb-6">{pkg.description}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-white/60"
                      >
                        <span className="text-white/30 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/booking?service=${service.id}&package=${pkg.name}`}
                    className="block text-center py-3 rounded-full border border-white/10 text-white/60 text-sm font-semibold hover:border-white/30 hover:text-white transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>
              ))}
            </div>

            {/* Retainers if any */}
            {"retainers" in service && service.retainers && (
              <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-[#111111]">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  Retainer Options
                </h4>
                <div className="flex flex-wrap gap-4">
                  {service.retainers.map(
                    (r: { name: string; price: string }) => (
                      <div
                        key={r.name}
                        className="flex items-center justify-between gap-8 p-4 rounded-xl border border-white/5 bg-[#0a0a0a] flex-1 min-w-[200px]"
                      >
                        <span className="text-sm text-white/60">{r.name}</span>
                        <span className="text-sm font-bold text-white">
                          {r.price}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Creator Authority */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-10">Flagship Offer</div>
          <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/30 bg-gradient-to-br from-[#111111] to-[#0a0a0a] p-10 lg:p-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                  {creatorAuthorityRetainer.badge}
                </div>
                <h2
                  className="text-4xl font-bold uppercase leading-tight mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {creatorAuthorityRetainer.name}
                </h2>
                <p className="text-white/50 mb-8">{creatorAuthorityRetainer.description}</p>
                <div className="text-5xl font-bold mb-1">{creatorAuthorityRetainer.price}</div>
                <div className="text-white/30 text-sm mb-8">{creatorAuthorityRetainer.period}</div>
                <Link
                  href="/booking?package=creator-authority"
                  className="inline-flex px-7 py-3.5 bg-[#c9a84c] text-[#0a0a0a] rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#d4b05c] transition-colors"
                >
                  Apply Now →
                </Link>
              </div>
              <div>
                <ul className="space-y-4">
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
        </div>
      </section>
    </div>
  );
}
