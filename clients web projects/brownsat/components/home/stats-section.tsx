import { Users, Building2, Award, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "2,500+",
    label: "Healthcare Professionals",
    description: "Registered with our agency",
  },
  {
    icon: Building2,
    value: "150+",
    label: "Partner Facilities",
    description: "Care homes, hospitals & clinics",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "In healthcare recruitment",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "For urgent staffing needs",
  },
]

export function StatsSection() {
  return (
    <section className="border-y bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <stat.icon className="size-7 text-primary-foreground" />
              </div>
              <p className="mt-4 text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="mt-1 font-semibold text-primary-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
