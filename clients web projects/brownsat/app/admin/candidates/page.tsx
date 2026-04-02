import { createClient } from '@/lib/supabase/server'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Mail, Phone, MapPin, FileText, ExternalLink, Clock } from 'lucide-react'

interface Candidate {
  id: string
  full_name: string
  email: string
  phone: string
  country_of_residence: string
  profession: string
  cv_url: string
  certificates_url: string | null
  status: string
  notes: string | null
  created_at: string
  job_id: string | null
}

async function getCandidates() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('candidates')
    .select('*')
    .order('created_at', { ascending: false })
  return data as Candidate[] || []
}

const statusColors: Record<string, string> = {
  pending: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
  reviewing: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  interviewed: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  accepted: 'bg-green-500/10 text-green-600 border-green-500/20',
  rejected: 'bg-red-500/10 text-red-600 border-red-500/20',
}

export default async function AdminCandidatesPage() {
  const candidates = await getCandidates()

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Candidates</h1>
        <p className="mt-1 text-muted-foreground">
          Review and manage candidate applications ({candidates.length} total)
        </p>
      </div>

      {candidates.length > 0 ? (
        <div className="grid gap-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="transition-all hover:border-primary/30">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {candidate.full_name}
                      </h3>
                      <Badge className={statusColors[candidate.status] || statusColors.pending}>
                        {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="mb-3 font-medium text-primary">{candidate.profession}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="size-4" />
                        {candidate.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="size-4" />
                        {candidate.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {candidate.country_of_residence}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {new Date(candidate.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={candidate.cv_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-1 size-4" />
                        View CV
                        <ExternalLink className="ml-1 size-3" />
                      </a>
                    </Button>
                    {candidate.certificates_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={candidate.certificates_url} target="_blank" rel="noopener noreferrer">
                          Certificates
                          <ExternalLink className="ml-1 size-3" />
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/candidates/${candidate.id}`}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </div>
                {candidate.notes && (
                  <div className="mt-4 rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Notes:</strong> {candidate.notes}
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
            <Users className="mb-4 size-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">No candidates yet</h3>
            <p className="text-muted-foreground">
              Candidate applications will appear here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
