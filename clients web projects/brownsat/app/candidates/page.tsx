import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CandidateForm } from '@/components/candidate-form'
import { CheckCircle, FileText, Clock, Users, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Join Our Team | Browns Healthcare',
  description: 'Apply to join Browns Healthcare as a healthcare professional. We connect nurses, HCAs, and support workers with rewarding opportunities across the UK.',
}

const benefits = [
  {
    icon: Award,
    title: 'Competitive Pay',
    description: 'Excellent rates with weekly payments and holiday pay',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Work when it suits you with shifts that fit your lifestyle',
  },
  {
    icon: Users,
    title: 'Supportive Team',
    description: '24/7 support from our dedicated recruitment consultants',
  },
  {
    icon: Globe,
    title: 'UK Sponsorship',
    description: 'Visa sponsorship available for eligible international candidates',
  },
]

const steps = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Fill out our simple online form with your details and upload your CV',
  },
  {
    step: '02',
    title: 'Initial Screening',
    description: 'Our team will review your application and contact you within 48 hours',
  },
  {
    step: '03',
    title: 'Interview & Verification',
    description: 'Complete our interview process and document verification',
  },
  {
    step: '04',
    title: 'Start Working',
    description: 'Get matched with suitable positions and begin your new role',
  },
]

export default function CandidatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
                Join Our Team
              </span>
              <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
                Start Your Healthcare Career Journey
              </h1>
              <p className="text-lg text-primary-foreground/90 md:text-xl text-pretty">
                Whether you&apos;re a registered nurse, healthcare assistant, or support worker, 
                we have exciting opportunities waiting for you across the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Why Work With Us?
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Join hundreds of healthcare professionals who have found rewarding careers through Browns Healthcare
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-muted/50 py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Our simple 4-step process gets you working in no time
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {step.step}
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 lg:py-20" id="apply">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Apply Now
                </h2>
                <p className="mb-8 text-muted-foreground">
                  Ready to take the next step in your healthcare career? Fill out the form and 
                  our recruitment team will be in touch within 48 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Quick Application</p>
                      <p className="text-sm text-muted-foreground">Takes less than 5 minutes to complete</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Fast Response</p>
                      <p className="text-sm text-muted-foreground">We&apos;ll contact you within 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Document Upload</p>
                      <p className="text-sm text-muted-foreground">Upload your CV and certificates securely</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                  <CandidateForm />
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
