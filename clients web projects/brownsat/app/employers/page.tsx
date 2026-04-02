import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EmployerForm } from '@/components/employer-form'
import { CheckCircle, Clock, Shield, Users, Star, Headphones } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Healthcare Staff | Browns Healthcare',
  description: 'Find qualified healthcare professionals for your facility. We provide registered nurses, HCAs, and support workers for care homes, hospitals, and clinics across the UK.',
}

const benefits = [
  {
    icon: Users,
    title: 'Qualified Staff',
    description: 'All candidates are thoroughly vetted with verified credentials and references',
  },
  {
    icon: Clock,
    title: 'Fast Recruitment',
    description: 'We can provide staff within 24-48 hours for urgent requirements',
  },
  {
    icon: Shield,
    title: 'Compliance Assured',
    description: 'All staff are DBS checked and compliant with CQC requirements',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account managers available round the clock',
  },
]

const testimonials = [
  {
    quote: "Browns Healthcare has been instrumental in helping us maintain consistent staffing levels. Their candidates are always professional and well-prepared.",
    author: "Sarah Mitchell",
    role: "Director of Nursing",
    company: "Sunrise Care Homes",
    rating: 5,
  },
  {
    quote: "The turnaround time is exceptional. When we need staff urgently, Browns Healthcare delivers every time without compromising on quality.",
    author: "Dr. James Okonkwo",
    role: "Clinical Director",
    company: "Meadow View Hospital",
    rating: 5,
  },
]

const stats = [
  { value: '200+', label: 'Partner Facilities' },
  { value: '98%', label: 'Client Retention' },
  { value: '24hrs', label: 'Average Response Time' },
  { value: '15+', label: 'Years Experience' },
]

export default function EmployersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-foreground to-foreground/90 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
                For Employers
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl text-balance">
                Find Qualified Healthcare Staff Today
              </h1>
              <p className="text-lg text-background/80 md:text-xl text-pretty">
                Partner with Browns Healthcare for reliable, compliant healthcare staffing solutions. 
                We supply registered nurses, HCAs, and support workers to facilities across the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="mb-1 text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Why Partner With Us?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We understand the challenges of healthcare staffing. Our dedicated team works tirelessly 
                to match you with the right professionals.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-accent/10">
                    <benefit.icon className="text-accent" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                What Our Partners Say
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.author}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-foreground">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-16 lg:py-20" id="request">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Request Staff
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Tell us about your staffing needs and our team will get back to you with 
                  available candidates within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">No Obligation Quote</p>
                      <p className="text-sm text-muted-foreground">Get transparent pricing with no hidden fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Flexible Arrangements</p>
                      <p className="text-sm text-muted-foreground">Temporary, permanent, or contract staffing options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Quality Guarantee</p>
                      <p className="text-sm text-muted-foreground">Free replacement if you&apos;re not satisfied</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                  <EmployerForm />
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
