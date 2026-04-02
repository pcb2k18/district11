import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  ArrowLeft, 
  Share2, 
  CheckCircle,
  Building2,
  PoundSterling
} from "lucide-react"

interface JobPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: job } = await supabase
    .from("jobs")
    .select("title, description, location")
    .eq("id", id)
    .single()

  if (!job) {
    return { title: "Job Not Found" }
  }

  return {
    title: job.title,
    description: `${job.title} position in ${job.location}. ${job.description.slice(0, 150)}...`,
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data: job, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single()

  if (error || !job) {
    notFound()
  }

  // Parse requirements if stored as text with newlines
  const requirements = job.requirements
    ? job.requirements.split("\n").filter((r: string) => r.trim())
    : []

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
          <div className="container mx-auto px-4">
            <Link 
              href="/jobs" 
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to Jobs
            </Link>

            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{job.profession}</Badge>
                  <Badge variant="outline">{job.job_type}</Badge>
                </div>
                <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {job.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="size-4" />
                    {job.job_type}
                  </span>
                  {job.salary_range && (
                    <span className="flex items-center gap-1 font-medium text-primary">
                      <PoundSterling className="size-4" />
                      {job.salary_range}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon">
                  <Share2 className="size-4" />
                  <span className="sr-only">Share job</span>
                </Button>
                <Button size="lg" asChild>
                  <Link href={`/candidates?job=${job.id}`}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-neutral max-w-none">
                      <p className="whitespace-pre-line text-muted-foreground">
                        {job.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {requirements.length > 0 && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="flex flex-col gap-2">
                        {requirements.map((requirement: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Quick Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Job Details</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Building2 className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Profession</p>
                        <p className="font-medium">{job.profession}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Job Type</p>
                        <p className="font-medium">{job.job_type}</p>
                      </div>
                    </div>
                    {job.salary_range && (
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <PoundSterling className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Salary</p>
                          <p className="font-medium">{job.salary_range}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Clock className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Posted</p>
                        <p className="font-medium">
                          {new Date(job.created_at).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Apply Card */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground">Interested in this role?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Apply now and one of our consultants will be in touch within 24 hours.
                    </p>
                    <Button size="lg" className="mt-4 w-full" asChild>
                      <Link href={`/candidates?job=${job.id}`}>
                        Apply Now
                      </Link>
                    </Button>
                    <p className="mt-3 text-center text-xs text-muted-foreground">
                      Or call us on +44 (0) 123 456 7890
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
