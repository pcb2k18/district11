import Link from "next/link"
import { Stethoscope, HeartPulse, Users, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Nursing Staff",
    description: "Registered nurses, mental health nurses, and specialist nursing professionals for permanent and temporary positions.",
    href: "/services#nursing",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Assistants",
    description: "Trained HCAs for care homes, hospitals, and community care settings. NVQ qualified staff available.",
    href: "/services#hca",
  },
  {
    icon: Users,
    title: "Support Workers",
    description: "Compassionate support workers for learning disabilities, mental health, and elderly care services.",
    href: "/services#support",
  },
  {
    icon: Building,
    title: "Staffing Solutions",
    description: "Flexible staffing solutions for healthcare facilities including temporary, permanent, and contract placements.",
    href: "/services#staffing",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Comprehensive Healthcare Recruitment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From nurses to support workers, we provide skilled healthcare professionals 
            to meet your staffing needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
