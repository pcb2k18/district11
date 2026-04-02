import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Plus, Pencil, MapPin, Clock, Briefcase } from 'lucide-react'

interface Job {
  id: string
  title: string
  location: string
  job_type: string
  profession: string
  salary_range: string | null
  is_active: boolean
  created_at: string
}

async function getJobs() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false })
  return data as Job[] || []
}

export default async function AdminJobsPage() {
  const jobs = await getJobs()

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Jobs</h1>
          <p className="mt-1 text-muted-foreground">
            Manage job listings on your website
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/jobs/new">
            <Plus className="mr-2 size-4" />
            Add New Job
          </Link>
        </Button>
      </div>

      {jobs.length > 0 ? (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="transition-all hover:border-primary/30">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <Badge variant={job.is_active ? 'default' : 'secondary'}>
                      {job.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="size-4" />
                      {job.job_type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-4" />
                      {new Date(job.created_at).toLocaleDateString()}
                    </span>
                    {job.salary_range && (
                      <span>{job.salary_range}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/jobs/${job.id}`}>
                      <Pencil className="mr-1 size-4" />
                      Edit
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Briefcase className="mb-4 size-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">No jobs yet</h3>
            <p className="mb-4 text-muted-foreground">
              Create your first job listing to start receiving applications
            </p>
            <Button asChild>
              <Link href="/admin/jobs/new">
                <Plus className="mr-2 size-4" />
                Add New Job
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
