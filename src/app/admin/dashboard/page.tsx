import Link from "next/link";

const adminSections = [
  {
    title: "Pricing & Packages",
    description: "Edit service packages, prices and features",
    icon: "💰",
    href: "/admin/dashboard/pricing",
    status: "coming-soon",
  },
  {
    title: "Booking Submissions",
    description: "View and manage booking form submissions",
    icon: "📋",
    href: "/admin/dashboard/bookings",
    status: "coming-soon",
  },
  {
    title: "Portfolio",
    description: "Add, remove or reorder portfolio images",
    icon: "🖼️",
    href: "/admin/dashboard/portfolio",
    status: "coming-soon",
  },
  {
    title: "FAQ",
    description: "Edit frequently asked questions",
    icon: "❓",
    href: "/admin/dashboard/faq",
    status: "coming-soon",
  },
  {
    title: "Site Content",
    description: "Update contact details, studio info and about text",
    icon: "✏️",
    href: "/admin/dashboard/content",
    status: "coming-soon",
  },
  {
    title: "Settings",
    description: "Admin password, notifications and integrations",
    icon: "⚙️",
    href: "/admin/dashboard/settings",
    status: "coming-soon",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div
              className="text-lg font-bold uppercase tracking-[0.2em] text-white mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              District{" "}
              <span className="bg-white text-[#0a0a0a] px-1.5 font-bold text-sm">
                11
              </span>
            </div>
            <div className="text-white/30 text-xs uppercase tracking-widest">
              Admin Dashboard
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/30 transition-all"
            >
              View Site ↗
            </Link>
            <button className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-xs hover:text-white hover:border-white/30 transition-all">
              Sign Out
            </button>
          </div>
        </div>

        {/* Welcome */}
        <div className="mb-10">
          <h1
            className="text-3xl font-bold uppercase mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Welcome Back
          </h1>
          <p className="text-white/40 text-sm">
            Manage your website content from here.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminSections.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-2xl border border-white/5 bg-[#111111] relative"
            >
              <div className="text-3xl mb-4">{section.icon}</div>
              <h3
                className="font-bold uppercase tracking-wide mb-2 text-sm"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {section.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed mb-4">
                {section.description}
              </p>
              {section.status === "coming-soon" ? (
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/25 text-xs uppercase tracking-widest">
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={section.href}
                  className="inline-block px-4 py-2 rounded-full bg-white text-[#0a0a0a] text-xs font-semibold hover:bg-[#f5f0e8] transition-colors"
                >
                  Manage →
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="text-white/15 text-xs text-center mt-12 uppercase tracking-widest">
          Admin panel — full functionality coming in next phase
        </p>
      </div>
    </div>
  );
}
