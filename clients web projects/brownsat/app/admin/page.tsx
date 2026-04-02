import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Briefcase, Users, Building2, Mail, ArrowRight, Clock, TrendingUp } from 'lucide-react'

async function getStats() {
  const supabase = await createClient()
  
  const [jobsResult, candidatesResult, employersResult, messagesResult] = await Promise.all([
    supabase.from('jobs').select('id', { count: 'exact', head: true }),
    supabase.from('candidates').select('id', { count: 'exact', head: true }),
    supabase.from('employers').select('id', { count: 'exact', head: true }),
    supabase.from('contact_submissions').select('id', { count: 'exact', head: true }).eq('is_read', false),
  ])

  return {
    totalJobs: jobsResult.count || 0,
    totalCandidates: candidatesResult.count || 0,
    totalEmployers: employersResult.count || 0,
    unreadMessages: messagesResult.count || 0,
  }
}

async function getRecentActivity() {
  const supabase = await createClient()
  
  const [candidates, employers] = await Promise.all([
    supabase
      .from('candidates')
      .select('id, full_name, profession, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
    supabase
      .from('employers')
      .select('id, company_name, job_role_needed, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
  ])

  return {
    recentCandidates: candidates.data || [],
    recentEmployers: employers.data || [],
  }
}

export default async function AdminDashboardPage() {
  const stats = await getStats()
  const activity = await getRecentActivity()

  const statCards = [
    {
      title: 'Active Jobs',
      value: stats.totalJobs,
      icon: Briefcase,
      href: '/admin/jobs',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Candidates',
      value: stats.totalCandidates,
      icon: Users,
      href: '/admin/candidates',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
    {
      title: 'Employers',
      value: stats.totalEmployers,
      icon: Building2,
      href: '/admin/employers',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'Unread Messages',
      value: stats.unreadMessages,
      icon: Mail,
      href: '/admin/messages',
      color: 'text-rose-600',
      bgColor: 'bg-rose-600/10',
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back! Here&apos;s an overview of your recruitment activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                  <stat.icon className={`size-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Candidates */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Candidates</CardTitle>
              <p className="text-sm text-muted-foreground">Latest applications</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/candidates">
                View all
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {activity.recentCandidates.length > 0 ? (
              <div className="space-y-4">
                {activity.recentCandidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="font-medium text-foreground">{candidate.full_name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.profession}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {new Date(candidate.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Users className="mb-2 size-10 text-muted-foreground/50" />
                <p className="text-muted-foreground">No candidates yet</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Employers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Employer Requests</CardTitle>
              <p className="text-sm text-muted-foreground">Latest staffing enquiries</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/employers">
                View all
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {activity.recentEmployers.length > 0 ? (
              <div className="space-y-4">
                {activity.recentEmployers.map((employer) => (
                  <div
                    key={employer.id}
                    className="flex items-center justify-between rounded-lg border border-border p-3"
                  >
                    <div>
                      <p className="font-medium text-foreground">{employer.company_name}</p>
                      <p className="text-sm text-muted-foreground">{employer.job_role_needed}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      {new Date(employer.created_at).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Building2 className="mb-2 size-10 text-muted-foreground/50" />
                <p className="text-muted-foreground">No employer requests yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/admin/jobs/new">
                <Briefcase className="mr-2 size-4" />
                Post New Job
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin/candidates">
                <Users className="mr-2 size-4" />
                Review Candidates
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin/employers">
                <Building2 className="mr-2 size-4" />
                View Employer Requests
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
