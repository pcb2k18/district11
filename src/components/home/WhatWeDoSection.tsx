"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  { title: "Brand & Media Management", href: "/services#brand-media" },
  { title: "Photography", href: "/services#photography" },
  { title: "Podcast Production", href: "/services#podcast" },
  { title: "Content Studio", href: "/services#content-studio" },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#f5f0e8] text-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label on-light mb-8">What We Do</div>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase leading-[1] tracking-tight mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              More Than Content.
              <br />
              <span className="text-[#0a0a0a]/30">We Build Brands.</span>
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:opacity-60 transition-opacity"
            >
              Our Story →
            </Link>
          </div>

          {/* Right */}
          <div>
            <p className="text-[#0a0a0a]/60 text-lg leading-relaxed mb-10">
              District Eleven is a modern creative house built for the next
              generation of brands and creators. We combine strategy, production
              and brand development under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={pillar.href}
                    className="flex items-center justify-between p-4 border border-[#0a0a0a]/10 rounded-xl hover:bg-[#0a0a0a]/5 transition-colors group"
                  >
                    <span className="font-medium text-sm">{pillar.title}</span>
                    <span className="text-[#0a0a0a]/30 group-hover:text-[#0a0a0a] transition-colors text-lg">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
