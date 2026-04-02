import { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { JobsList } from "@/components/jobs/jobs-list"
import { JobsFilters } from "@/components/jobs/jobs-filters"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata: Metadata = {
  title: "Healthcare Jobs",
  description: "Browse healthcare job opportunities including nursing, care assistant, and support worker positions across the UK.",
}

interface JobsPageProps {
  searchParams: Promise<{
    profession?: string
    location?: string
    type?: string
    search?: string
  }>
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Job Opportunities
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Find Your Next Healthcare Role
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse our current vacancies and find the perfect position for your skills and experience.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1">
                <JobsFilters 
                  currentFilters={{
                    profession: params.profession,
                    location: params.location,
                    type: params.type,
                    search: params.search,
                  }}
                />
              </aside>

              {/* Jobs List */}
              <div className="lg:col-span-3">
                <Suspense fallback={<JobsListSkeleton />}>
                  <JobsList filters={params} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function JobsListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="rounded-xl border p-6">
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="mt-2 h-4 w-1/3" />
          <Skeleton className="mt-4 h-16 w-full" />
          <div className="mt-4 flex gap-2">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
      ))}
    </div>
  )
}
