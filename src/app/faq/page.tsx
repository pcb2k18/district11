"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/data";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors pr-8">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-white/50 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">FAQ</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Got
            <br />
            <span className="text-white/25">Questions?</span>
          </h1>
          <p className="text-white/40 text-lg mt-8 max-w-xl">
            Here are the most common things people ask before booking. If you
            need anything else, reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#0a0a0a] px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
          <div>
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#111111] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl font-bold uppercase mb-2"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Still have questions?
            </h2>
            <p className="text-white/40 text-sm">
              We&apos;re happy to help. Reach out directly.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm hover:bg-[#f5f0e8] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/233XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 text-white/60 rounded-full font-semibold text-sm hover:border-white/30 hover:text-white transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
