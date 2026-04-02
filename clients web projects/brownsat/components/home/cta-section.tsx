import Link from "next/link"
import { ArrowRight, Briefcase, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* For Candidates */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground md:p-12">
            <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-xl bg-white/20">
                <Briefcase className="size-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold md:text-3xl">
                Looking for Your Next Healthcare Role?
              </h3>
              <p className="mt-4 max-w-md text-primary-foreground/90">
                Join our database of healthcare professionals and get matched with opportunities 
                that fit your skills, experience, and preferences.
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-primary-foreground/90">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  Competitive pay rates
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  Flexible working hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  Career development support
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/candidates">
                  Register as a Candidate
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Employers */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-8 text-accent-foreground md:p-12">
            <div className="absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="flex size-14 items-center justify-center rounded-xl bg-white/20">
                <Building2 className="size-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-bold md:text-3xl">
                Need Qualified Healthcare Staff?
              </h3>
              <p className="mt-4 max-w-md text-accent-foreground/90">
                Partner with us to find pre-screened, qualified healthcare professionals 
                for your facility. We handle recruitment so you can focus on care.
              </p>
              <ul className="mt-6 flex flex-col gap-2 text-sm text-accent-foreground/90">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-foreground" />
                  Pre-vetted candidates
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-foreground" />
                  Fast turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent-foreground" />
                  Ongoing support & compliance
                </li>
              </ul>
              <Button size="lg" variant="secondary" className="mt-8" asChild>
                <Link href="/employers">
                  Find Healthcare Staff
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
