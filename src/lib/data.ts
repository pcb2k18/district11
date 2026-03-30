// Site content data — edit here to update the website

export const siteConfig = {
  name: "District Eleven",
  tagline: "Elevate Your Ideas Into Digital Reality",
  subtagline: "A premium creative space in Osu built for brands, creators and visionaries.",
  domain: "districtelevengh.com",
  contact: {
    phone: "+233 XX XXX XXXX",
    email: "hello@districtelevengh.com",
    whatsapp: "+233XXXXXXXXX",
    address: "Osu, Accra (Opposite MTN)",
    hours: "Monday – Saturday, 9am – 6pm",
    instagram: "https://instagram.com/districtelevengh",
    tiktok: "https://tiktok.com/@districtelevengh",
    youtube: "",
  },
}

export const services = [
  {
    id: "brand-media",
    title: "Brand & Media Management",
    slug: "brand-media-management",
    description:
      "We build, position and scale personal brands and businesses through strategic content, visual identity and growth systems.",
    icon: "📡",
    packages: [
      {
        name: "Brand Foundation",
        price: "GHS 6,000",
        description: "For startups and individuals building from scratch.",
        features: [
          "Brand positioning session",
          "Content direction strategy",
          "Visual brand alignment guidance",
          "Social media structure setup",
          "30-day content roadmap",
        ],
      },
      {
        name: "Brand Growth Package",
        price: "GHS 10,000",
        description: "For growing brands ready to scale visibility.",
        features: [
          "Monthly strategy call",
          "Content planning (30 days)",
          "Social media optimization",
          "Content direction support",
          "Growth advisory",
          "Performance review",
        ],
      },
      {
        name: "Brand Authority Package",
        price: "GHS 45,000",
        badge: "Premium",
        description: "For CEOs, influencers & public figures building industry dominance.",
        features: [
          "Full brand strategy blueprint",
          "Personal brand positioning",
          "Authority content strategy",
          "Media direction & oversight",
          "Content production supervision",
          "Monthly performance analytics",
          "High-level advisory support",
        ],
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    slug: "photography",
    description:
      "Premium visual storytelling for brands, creators and professionals.",
    icon: "📷",
    packages: [
      {
        name: "Essential Shoot",
        price: "GHS 2,200",
        description: "Clean, sharp imagery for personal and brand use.",
        features: [
          "1-hour studio session",
          "Professional lighting setup",
          "10 edited images",
          "Studio background options",
        ],
      },
      {
        name: "Branding Shoot",
        price: "GHS 5,000",
        description: "A full creative session built around your brand identity.",
        features: [
          "2–3 hour session",
          "Multiple outfit/scene changes",
          "Creative direction included",
          "25 edited images",
        ],
      },
      {
        name: "Premium Editorial",
        price: "GHS 12,000",
        badge: "Premium",
        description: "High-end editorial production with full art direction.",
        features: [
          "Half-day production",
          "Creative concept development",
          "Full art direction",
          "40+ edited images",
          "High-end retouching",
        ],
      },
    ],
    retainers: [
      {
        name: "Monthly Personal Brand Retainer",
        price: "From GHS 4,000",
      },
      {
        name: "Corporate Retainer",
        price: "Custom pricing",
      },
    ],
  },
  {
    id: "podcast",
    title: "Podcast Production",
    slug: "podcast-production",
    description:
      "Multi-camera podcast production designed for creators serious about growth.",
    icon: "🎙️",
    packages: [
      {
        name: "Podcast Basic Retainer",
        price: "GHS 1,200",
        description: "Essential podcast production for consistent creators.",
        features: [
          "2 recording sessions per month",
          "Multi-camera setup",
          "Professional audio setup",
          "Audio balancing & cleanup",
          "Fully edited episodes",
        ],
      },
      {
        name: "Podcast Growth Retainer",
        price: "GHS 13,000",
        description: "Full production pipeline for serious growth.",
        features: [
          "4 recording sessions per month",
          "Multi-camera production",
          "Full video editing",
          "8 social media clips",
          "Thumbnail design",
          "Upload-ready files",
        ],
      },
    ],
  },
  {
    id: "content-studio",
    title: "Content Studio",
    slug: "content-studio",
    description:
      "A fully equipped creative environment for reels, TikTok, YouTube and brand content.",
    icon: "🎬",
    packages: [
      {
        name: "Studio Rental",
        price: "Custom",
        description: "Book the studio for your own production.",
        features: [
          "Fully equipped studio",
          "Lighting setup included",
          "Flexible hourly/day rates",
          "Available 7 days a week",
        ],
      },
    ],
  },
]

export const creatorAuthorityRetainer = {
  name: "Creator Authority Retainer",
  price: "GHS 17,000",
  period: "per month",
  description:
    "Our most powerful offer. Designed for influencers, CEOs, public figures and serious brands.",
  badge: "Limited Availability — Application Required",
  features: [
    "2 podcast sessions per month",
    "1 branding shoot per month",
    "8 social media clips",
    "Brand advisory session",
    "Content direction support",
    "Creative oversight",
  ],
  targets: ["Influencers", "CEOs", "Public Figures", "Brands"],
}

export const stats = [
  { value: "100+", label: "Brands Worked With" },
  { value: "500+", label: "Content Pieces Produced" },
  { value: "4", label: "Core Services" },
  { value: "100%", label: "Client Satisfaction" },
]

export const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We start with a free strategy call to understand your brand, goals and vision.",
    details: [
      "Free 30-minute consultation",
      "Clear project scope",
      "Tailored recommendations",
    ],
  },
  {
    number: "02",
    title: "Create",
    description:
      "Our team executes with precision — photography, podcast production, brand strategy.",
    details: [
      "Professional studio environment",
      "Expert creative direction",
      "Multi-format production",
    ],
  },
  {
    number: "03",
    title: "Grow",
    description:
      "You receive polished, publish-ready content and a roadmap to build your presence.",
    details: [
      "Fully edited deliverables",
      "Content strategy included",
      "Ongoing advisory available",
    ],
  },
]

export const faqs = [
  {
    question: "Where are you located?",
    answer:
      "We are located in Osu, Accra, opposite MTN. Exact address will be shared upon booking confirmation.",
  },
  {
    question: "Do I need to pay a deposit to book?",
    answer:
      "Yes, a 50% deposit is required to secure your booking. The balance is due on the day of the session.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer Brand & Media Management, Photography, Podcast Production, and Content Studio rental. Each service has multiple tiers — see our Services or Pricing page.",
  },
  {
    question: "Can I combine services?",
    answer:
      "Absolutely. Our Creator Authority Retainer bundles podcast, photography, and brand advisory into one monthly package. We can also build custom packages.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 5–7 days in advance to secure your preferred date. For the Creator Authority Retainer, applications are reviewed within 48 hours.",
  },
  {
    question: "Do you offer post-production editing?",
    answer:
      "Yes. All podcast and photography packages include professional editing. Additional social media clips and retouching are available as add-ons.",
  },
  {
    question: "Can I book the studio for my own team?",
    answer:
      "Yes. Our Content Studio is available for hire. Contact us for hourly and full-day rates.",
  },
  {
    question: "How do I apply for the Creator Authority Retainer?",
    answer:
      "Click the Apply Now button on the Creator Authority section or contact us via WhatsApp. We review all applications and respond within 48 hours.",
  },
]
