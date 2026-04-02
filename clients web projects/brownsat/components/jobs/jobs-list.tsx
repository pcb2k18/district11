import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Briefcase, ArrowRight, Building2 } from "lucide-react"

interface JobsListProps {
  filters: {
    profession?: string
    location?: string
    type?: string
    search?: string
  }
}

export async function JobsList({ filters }: JobsListProps) {
  const supabase = await createClient()

  let query = supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false })

  // Apply filters
  if (filters.profession && filters.profession !== "all") {
    query = query.ilike("profession", `%${filters.profession}%`)
  }
  if (filters.location && filters.location !== "all") {
    query = query.ilike("location", `%${filters.location}%`)
  }
  if (filters.type && filters.type !== "all") {
    query = query.ilike("job_type", `%${filters.type}%`)
  }
  if (filters.search) {
    query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
  }

  const { data: jobs, error } = await query

  if (error) {
    console.error("Error fetching jobs:", error)
    return (
      <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 text-center">
        <p className="text-destructive">Failed to load jobs. Please try again later.</p>
      </div>
    )
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="rounded-xl border bg-muted/50 p-12 text-center">
        <Building2 className="mx-auto size-12 text-muted-foreground/50" />
        <h3 className="mt-4 font-semibold text-foreground">No Jobs Found</h3>
        <p className="mt-2 text-muted-foreground">
          {filters.search || filters.profession || filters.location || filters.type
            ? "Try adjusting your filters to see more results."
            : "Check back soon for new opportunities."}
        </p>
        <Button variant="outline" asChild className="mt-4">
          <Link href="/candidates">Register Your Interest</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">{jobs.length}</span> job{jobs.length !== 1 ? "s" : ""} found
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {jobs.map((job) => (
          <Card key={job.id} className="group transition-shadow hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-xl group-hover:text-primary">
                    <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                  </CardTitle>
                  <CardDescription className="mt-1 flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="size-4" />
                      {job.job_type}
                    </span>
                    {job.salary_range && (
                      <span className="font-medium text-primary">{job.salary_range}</span>
                    )}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="shrink-0">
                  {job.profession}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-muted-foreground">
                {job.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="size-4" />
                  <span>Posted {formatDate(job.created_at)}</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/jobs/${job.id}`}>
                    View Details
                    <ArrowRight className="ml-1 size-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return "today"
  if (diffDays === 1) return "yesterday"
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? "s" : ""} ago`
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}
