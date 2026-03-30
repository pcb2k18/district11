"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="section-label mb-6">Our Services</div>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Everything You Need
              <br />
              <span className="text-white/25">Under One Roof.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col h-full p-6 rounded-2xl border border-white/5 hover:border-white/15 bg-[#111111] hover:bg-[#141414] transition-all duration-300"
              >
                <div className="text-3xl mb-6">{service.icon}</div>
                <h3
                  className="text-lg font-bold uppercase tracking-wide mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors">
                  <span>Explore</span>
                  <span className="text-base">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
