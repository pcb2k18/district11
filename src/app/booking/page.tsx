"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

const serviceOptions = [
  "Brand Foundation – GHS 6,000",
  "Brand Growth Package – GHS 10,000",
  "Brand Authority Package – GHS 45,000",
  "Essential Shoot – GHS 2,200",
  "Branding Shoot – GHS 5,000",
  "Premium Editorial – GHS 12,000",
  "Podcast Basic Retainer – GHS 1,200",
  "Podcast Growth Retainer – GHS 13,000",
  "Creator Authority Retainer – GHS 17,000/mo",
  "Content Studio Rental",
  "Free Consultation",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with actual API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">Book a Session</div>
          <h1
            className="text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s
            <br />
            <span className="text-white/25">Create Together.</span>
          </h1>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-[#0a0a0a] pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start gap-6 py-12">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h2
                  className="text-3xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Request Received
                </h2>
                <p className="text-white/50 leading-relaxed">
                  Thank you. We&apos;ll review your request and get back to you
                  within 24 hours. You can also reach us directly on WhatsApp
                  for a faster response.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm"
                >
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "+233 XX XXX XXXX" },
                  { name: "date", label: "Preferred Date", type: "date", placeholder: "" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.name === "name" || field.name === "email"}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#111111] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl bg-[#111111] border border-white/5 text-white focus:outline-none focus:border-white/20 transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-[#111111]">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111111]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your project..."
                    className="w-full px-5 py-3.5 rounded-xl bg-[#111111] border border-white/5 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-white text-[#0a0a0a] rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#f5f0e8] transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit Booking Request →"}
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {/* Quick response */}
            <div className="p-8 rounded-2xl border border-white/5 bg-[#111111]">
              <h3
                className="text-lg font-bold uppercase mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Quick Response
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We respond to all booking requests within 24 hours. For urgent
                enquiries, WhatsApp is the fastest way to reach us.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-8 rounded-2xl border border-white/5 bg-[#111111] hover:border-white/15 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-xl flex-shrink-0">
                💬
              </div>
              <div>
                <div className="font-semibold mb-0.5 group-hover:text-white transition-colors">
                  Message on WhatsApp
                </div>
                <div className="text-white/40 text-sm">
                  {siteConfig.contact.whatsapp}
                </div>
              </div>
              <span className="ml-auto text-white/20 group-hover:text-white/60 transition-colors">
                →
              </span>
            </a>

            {/* Contact details */}
            <div className="p-8 rounded-2xl border border-white/5 bg-[#111111] space-y-4">
              <h3
                className="text-lg font-bold uppercase mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Contact Details
              </h3>
              {[
                { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { label: "Location", value: siteConfig.contact.address, href: null },
                { label: "Hours", value: siteConfig.contact.hours, href: null },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs uppercase tracking-widest text-white/25 mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/60">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
