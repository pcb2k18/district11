import Link from "next/link";
import { siteConfig } from "@/lib/data";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Studios", href: "/studios" },
    { label: "Portfolio", href: "/portfolio" },
  ],
  Services: [
    { label: "Brand & Media", href: "/services#brand-media" },
    { label: "Photography", href: "/services#photography" },
    { label: "Podcast Production", href: "/services#podcast" },
    { label: "Content Studio", href: "/services#content-studio" },
  ],
  Support: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span
                className="text-white text-xl tracking-[0.2em] uppercase font-semibold"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                district{" "}
                <span className="bg-white text-[#0a0a0a] px-1.5 font-bold text-sm">
                  11
                </span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              A premium creative and brand development studio in Osu, Accra.
              Built for brands, creators and visionaries.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {siteConfig.contact.instagram && (
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all text-sm"
                  aria-label="Instagram"
                >
                  IG
                </a>
              )}
              {siteConfig.contact.tiktok && (
                <a
                  href={siteConfig.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all text-sm"
                  aria-label="TikTok"
                >
                  TK
                </a>
              )}
              {siteConfig.contact.youtube && (
                <a
                  href={siteConfig.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all text-sm"
                  aria-label="YouTube"
                >
                  YT
                </a>
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap gap-8 py-10 border-b border-white/5 text-sm text-white/40">
          <div>
            <span className="text-white/20 uppercase text-xs tracking-widest block mb-1">
              Email
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <span className="text-white/20 uppercase text-xs tracking-widest block mb-1">
              Phone
            </span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hover:text-white transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div>
            <span className="text-white/20 uppercase text-xs tracking-widest block mb-1">
              Location
            </span>
            <span>{siteConfig.contact.address}</span>
          </div>
          <div>
            <span className="text-white/20 uppercase text-xs tracking-widest block mb-1">
              Hours
            </span>
            <span>{siteConfig.contact.hours}</span>
          </div>
        </div>

        {/* Brand name + copyright */}
        <div className="pt-10 overflow-hidden">
          <div
            className="text-[clamp(3rem,12vw,10rem)] font-bold uppercase tracking-tighter text-white/[0.04] leading-none select-none mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            district eleven
          </div>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} District Eleven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
