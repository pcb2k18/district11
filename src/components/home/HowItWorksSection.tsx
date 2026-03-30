"use client";

import { motion } from "framer-motion";
import { steps } from "@/lib/data";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f5f0e8] text-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label on-light mb-6">Our Process</div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Simple Three
              <br />
              Step Process.
            </h2>
          </div>
          <p className="text-[#0a0a0a]/50 max-w-xs text-sm leading-relaxed">
            It couldn&apos;t be easier to book, create and grow — without the
            stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]/30" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0a0a0a]/40">
                  Step {step.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[clamp(3rem,6vw,5rem)] font-bold uppercase leading-none mb-6 text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {step.title}
              </h3>

              <p className="text-[#0a0a0a]/60 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2 text-sm text-[#0a0a0a]/60"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#0a0a0a]/10 flex items-center justify-center text-xs text-[#0a0a0a]/60">
                      ✓
                    </span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
