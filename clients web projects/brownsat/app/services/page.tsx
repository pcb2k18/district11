import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Stethoscope, 
  HeartPulse, 
  Users, 
  Building, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Shield,
  GraduationCap
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Comprehensive healthcare recruitment services including nursing staff, healthcare assistants, support workers, and flexible staffing solutions.",
}

const services = [
  {
    id: "nursing",
    icon: Stethoscope,
    title: "Nursing Staff",
    description: "Qualified nursing professionals for all healthcare settings",
    details: [
      "Registered General Nurses (RGN)",
      "Mental Health Nurses (RMN)",
      "Learning Disability Nurses (RNLD)",
      "Paediatric Nurses",
      "Community Nurses",
      "Specialist Nursing Roles",
    ],
    features: [
      "NMC registered and verified",
      "DBS checked and compliant",
      "Mandatory training completed",
      "References verified",
    ],
  },
  {
    id: "hca",
    icon: HeartPulse,
    title: "Healthcare Assistants",
    description: "Trained HCAs for care homes, hospitals, and community settings",
    details: [
      "Care Home HCAs",
      "Hospital HCAs",
      "Community Care HCAs",
      "Live-in Carers",
      "Night Care Staff",
      "Complex Care HCAs",
    ],
    features: [
      "NVQ Level 2/3 qualified",
      "Care Certificate holders",
      "Moving & handling trained",
      "Medication administration certified",
    ],
  },
  {
    id: "support",
    icon: Users,
    title: "Support Workers",
    description: "Compassionate support workers for specialist care needs",
    details: [
      "Learning Disability Support",
      "Mental Health Support",
      "Autism Specialists",
      "Elderly Care Support",
      "Physical Disability Support",
      "Rehabilitation Support",
    ],
    features: [
      "Person-centred approach",
      "Specialist training completed",
      "Experience with challenging behaviour",
      "PBS trained where required",
    ],
  },
  {
    id: "staffing",
    icon: Building,
    title: "Staffing Solutions",
    description: "Flexible staffing solutions tailored to your needs",
    details: [
      "Temporary/Agency Staff",
      "Permanent Recruitment",
      "Temp-to-Perm Options",
      "Block Bookings",
      "Emergency Cover",
      "Managed Services",
    ],
    features: [
      "24/7 booking service",
      "Same-day availability",
      "Dedicated account manager",
      "Compliance guaranteed",
    ],
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "We understand urgent staffing needs. Our team responds quickly to fill shifts and permanent roles.",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description: "All candidates are fully vetted with DBS checks, references, and mandatory training completed.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Training",
    description: "We provide continuous professional development to ensure our staff stay up-to-date with best practices.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Services
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Comprehensive Healthcare Recruitment
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From temporary shifts to permanent placements, we provide skilled healthcare 
                professionals to meet all your staffing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <service.icon className="size-7" />
                    </div>
                    <h2 className="mt-4 font-serif text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-foreground/80">
                          <CheckCircle className="size-4 shrink-0 text-primary" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <CardHeader>
                      <CardTitle>Why Choose Our {service.title}?</CardTitle>
                      <CardDescription>Quality assured professionals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="flex flex-col gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <CheckCircle className="size-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                The Browns Healthcare Difference
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                What sets us apart from other healthcare recruitment agencies.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl bg-background p-6 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <benefit.icon className="size-7" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-primary-foreground/90">
                Whether you&apos;re looking for healthcare work or need to hire staff, we&apos;re here to help.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/candidates">
                    I&apos;m Looking for Work
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link href="/employers">
                    I Need to Hire Staff
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
