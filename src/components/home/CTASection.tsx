import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-white text-[#0a0a0a] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="section-label on-light mb-8 mx-auto w-fit">
          Get Started
        </div>
        <h2
          className="text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Ready
          <br />
          To Create?
        </h2>
        <p className="text-[#0a0a0a]/50 text-lg max-w-md mx-auto mb-12">
          Book a session, send a message, or WhatsApp us directly. We respond
          within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/booking"
            className="px-8 py-4 bg-[#0a0a0a] text-white rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            Book Your Session →
          </Link>
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-[#0a0a0a] text-[#0a0a0a] rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-[#0a0a0a] hover:text-white transition-all duration-200"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
