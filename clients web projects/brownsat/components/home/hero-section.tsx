import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "CQC Registered Agency",
  "24/7 Support Available",
  "UK & International Candidates",
  "Fast Placement Process",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm backdrop-blur">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span className="font-medium text-foreground">Now Hiring Healthcare Professionals</span>
            </div>
            
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Your Career in{" "}
              <span className="text-primary">Healthcare</span>{" "}
              Starts Here
            </h1>
            
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Browns Healthcare connects skilled nursing and care professionals with leading 
              healthcare facilities across the UK. Find your perfect role or hire qualified staff today.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="size-4 text-primary" />
                  <span className="text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <Link href="/candidates">
                  Find Your Role
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/employers">Hire Healthcare Staff</Link>
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="size-full rounded-xl bg-muted">
                {/* Placeholder for hero image - using a decorative pattern */}
                <div className="flex size-full flex-col items-center justify-center gap-4 p-8">
                  <div className="flex size-32 items-center justify-center rounded-full bg-primary/10">
                    <div className="flex size-24 items-center justify-center rounded-full bg-primary/20">
                      <div className="flex size-16 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                        B
                      </div>
                    </div>
                  </div>
                  <p className="text-center font-serif text-2xl font-semibold text-foreground/80">
                    Caring for Carers
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    Trusted Healthcare Recruitment Since 2010
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating stat cards */}
            <div className="absolute -left-8 bottom-20 rounded-xl border bg-background p-4 shadow-lg">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Placed This Year</p>
            </div>
            <div className="absolute -right-4 top-20 rounded-xl border bg-background p-4 shadow-lg">
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
