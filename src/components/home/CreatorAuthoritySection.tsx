"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { creatorAuthorityRetainer } from "@/lib/data";

export default function CreatorAuthoritySection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-10">Flagship Offer</div>

        <div className="relative rounded-3xl overflow-hidden border border-[#c9a84c]/30 bg-gradient-to-br from-[#111111] via-[#0f0f0f] to-[#0a0a0a]">
          {/* Gold line top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-10 lg:p-16 border-r border-white/5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 text-[#c9a84c] text-xs font-semibold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                {creatorAuthorityRetainer.badge}
              </div>

              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight mb-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {creatorAuthorityRetainer.name}
              </h2>

              <p className="text-white/50 text-lg leading-relaxed mb-10">
                {creatorAuthorityRetainer.description}
              </p>

              <div className="mb-10">
                <div className="text-white/30 text-sm uppercase tracking-widest mb-2">
                  Starting at
                </div>
                <div
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {creatorAuthorityRetainer.price}
                </div>
                <div className="text-white/30 text-sm mt-1">
                  {creatorAuthorityRetainer.period}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/booking?package=creator-authority"
                  className="px-7 py-3.5 bg-[#c9a84c] text-[#0a0a0a] rounded-full font-bold text-sm tracking-wide uppercase hover:bg-[#d4b05c] transition-colors duration-200"
                >
                  Apply Now →
                </Link>
                <Link
                  href="/pricing#creator-authority"
                  className="px-7 py-3.5 border border-white/10 text-white/60 rounded-full font-semibold text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="p-10 lg:p-16">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-8">
                What&apos;s Included
              </h4>
              <ul className="space-y-4 mb-12">
                {creatorAuthorityRetainer.features.map((feature) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 text-white/70"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a84c] text-xs">✓</span>
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  Built For
                </h4>
                <div className="flex flex-wrap gap-2">
                  {creatorAuthorityRetainer.targets.map((target) => (
                    <span
                      key={target}
                      className="px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-sm"
                    >
                      {target}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
