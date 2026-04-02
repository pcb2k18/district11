import { createClient } from '@/lib/supabase/server'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Mail, Phone, MapPin, Users, Clock, Briefcase } from 'lucide-react'

interface Employer {
  id: string
  company_name: string
  contact_person: string
  email: string
  phone: string
  job_role_needed: string
  number_of_staff: number
  location: string
  additional_info: string | null
  status: string
  notes: string | null
  created_at: string
}

async function getEmployers() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('employers')
    .select('*')
    .order('created_at', { ascending: false })
  return data as Employer[] || []
}

const statusColors: Record<string, string> = {
  pending: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  contacted: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  negotiating: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  active: 'bg-green-500/10 text-green-600 border-green-500/20',
  closed: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
}

export default async function AdminEmployersPage() {
  const employers = await getEmployers()

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Employer Requests</h1>
        <p className="mt-1 text-muted-foreground">
          Manage staffing requests from employers ({employers.length} total)
        </p>
      </div>

      {employers.length > 0 ? (
        <div className="grid gap-4">
          {employers.map((employer) => (
            <Card key={employer.id} className="transition-all hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {employer.company_name}
                      </h3>
                      <Badge className={statusColors[employer.status] || statusColors.pending}>
                        {employer.status.charAt(0).toUpperCase() + employer.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="mb-1 text-sm text-muted-foreground">
                      Contact: {employer.contact_person}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="size-4" />
                        {employer.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="size-4" />
                        {employer.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {employer.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="rounded-lg bg-primary/10 px-3 py-1.5">
                        <span className="flex items-center gap-1 text-sm font-medium text-primary">
                          <Briefcase className="size-4" />
                          {employer.job_role_needed}
                        </span>
                      </div>
                      <div className="rounded-lg bg-accent/10 px-3 py-1.5">
                        <span className="flex items-center gap-1 text-sm font-medium text-accent">
                          <Users className="size-4" />
                          {employer.number_of_staff} staff needed
                        </span>
                      </div>
                      <div className="rounded-lg bg-muted px-3 py-1.5">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="size-4" />
                          {new Date(employer.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/employers/${employer.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
                {employer.additional_info && (
                  <div className="mt-4 rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Additional Info:</strong> {employer.additional_info}
                    </p>
                  </div>
                )}
                {employer.notes && (
                  <div className="mt-2 rounded-lg bg-primary/5 p-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Internal Notes:</strong> {employer.notes}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Building2 className="mb-4 size-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">No employer requests yet</h3>
            <p className="text-muted-foreground">
              Employer staffing requests will appear here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
