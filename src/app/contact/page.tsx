"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#0a0a0a]" />
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="section-label mb-8">Contact</div>
            <h1
              className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s
              <br />
              <span className="text-white/25">Talk.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-lg leading-relaxed">
              Available seven days a week for enquiries. We respond Monday –
              Saturday, 9am – 6pm.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2
              className="text-2xl font-bold uppercase mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Have a project in mind?
            </h2>
            {submitted ? (
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">✓</div>
                <p className="text-white/60">
                  Message received. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                  { name: "email", label: "Email", type: "email", placeholder: "name@inbox.com" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof typeof form]}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
                      }
                      placeholder={f.placeholder}
                      required
                      className="w-full px-5 py-3.5 rounded-xl bg-[#111111] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-white/20 text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full px-5 py-3.5 rounded-xl bg-[#111111] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-white/20 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#f5f0e8] transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Quick Response", icon: "⚡", body: "We respond to all enquiries promptly. Faster via WhatsApp." },
                { label: "Clear Next Steps", icon: "🗺️", body: "After contact, we share a clear plan tailored to your needs." },
              ].map((card) => (
                <div key={card.label} className="p-6 rounded-2xl bg-[#111111] border border-white/5">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <div className="font-semibold text-sm mb-2">{card.label}</div>
                  <p className="text-white/40 text-xs leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="p-8 rounded-2xl bg-[#111111] border border-white/5 space-y-5">
              {[
                { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { label: "Location", value: siteConfig.contact.address, href: "https://maps.google.com/?q=Osu+Accra+Ghana" },
                { label: "Hours", value: siteConfig.contact.hours, href: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-xs uppercase tracking-widest text-white/25 w-20 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/60">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Google Maps placeholder */}
            <div className="rounded-2xl overflow-hidden bg-[#111111] border border-white/5 h-48 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Osu+Accra+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
              >
                <span className="text-3xl">📍</span>
                <span className="text-xs uppercase tracking-widest">
                  View on Google Maps
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
