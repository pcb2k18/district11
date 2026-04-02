import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle, Award, Users, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Browns Healthcare - your trusted partner in healthcare recruitment with over 15 years of experience connecting healthcare professionals with leading facilities.",
}

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We understand the importance of care in healthcare. Our approach is centered on treating candidates and clients with empathy and respect.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in recruitment, ensuring every placement meets rigorous quality and compliance requirements.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with both candidates and employers, supporting them throughout their journey with us.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "Transparency and honesty are at the core of everything we do. We deliver on our promises and communicate openly.",
  },
]

const timeline = [
  { year: "2010", event: "Browns Healthcare founded in London" },
  { year: "2013", event: "Expanded to cover the South East region" },
  { year: "2016", event: "Launched international recruitment programme" },
  { year: "2019", event: "Achieved CQC registration for complex care" },
  { year: "2022", event: "Opened Manchester and Birmingham offices" },
  { year: "2024", event: "Celebrating 2,500+ successful placements" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Browns Healthcare
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Caring for Those Who Care
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                For over 15 years, Browns Healthcare has been connecting dedicated healthcare 
                professionals with facilities that share their commitment to exceptional care.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 flex flex-col gap-4 text-muted-foreground">
                  <p>
                    Browns Healthcare was founded in 2010 with a simple mission: to improve healthcare 
                    staffing by treating both candidates and clients as partners, not transactions.
                  </p>
                  <p>
                    Our founder, having worked in the NHS for over a decade, understood the challenges 
                    faced by both healthcare professionals seeking fulfilling roles and facilities 
                    struggling to find qualified staff.
                  </p>
                  <p>
                    Today, we&apos;ve grown from a small London office to a nationwide agency with 
                    international reach. But our core values remain unchanged: compassion, excellence, 
                    and genuine care for the people we work with.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl bg-muted p-8">
                  <div className="flex flex-col gap-4">
                    {timeline.map((item, index) => (
                      <div key={item.year} className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                            {item.year.slice(2)}
                          </div>
                          {index < timeline.length - 1 && (
                            <div className="h-full w-0.5 bg-border" />
                          )}
                        </div>
                        <div className="pb-4">
                          <p className="font-semibold text-foreground">{item.year}</p>
                          <p className="text-sm text-muted-foreground">{item.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do at Browns Healthcare.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl bg-background p-6">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CQC & Compliance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Compliance & Quality
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We maintain the highest standards of compliance and quality assurance in healthcare recruitment.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border p-6">
                  <p className="text-2xl font-bold text-primary">CQC</p>
                  <p className="mt-2 text-sm text-muted-foreground">Registered healthcare provider</p>
                </div>
                <div className="rounded-xl border p-6">
                  <p className="text-2xl font-bold text-primary">REC</p>
                  <p className="mt-2 text-sm text-muted-foreground">Recruitment & Employment Confederation member</p>
                </div>
                <div className="rounded-xl border p-6">
                  <p className="text-2xl font-bold text-primary">ICO</p>
                  <p className="mt-2 text-sm text-muted-foreground">Data protection registered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
