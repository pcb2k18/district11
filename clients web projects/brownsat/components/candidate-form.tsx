'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Upload, X, FileText, Loader2, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

const professions = [
  'Registered Nurse (RGN)',
  'Registered Mental Health Nurse (RMN)',
  'Learning Disability Nurse (RNLD)',
  'Healthcare Assistant (HCA)',
  'Senior Healthcare Assistant',
  'Support Worker',
  'Care Assistant',
  'Nursing Associate',
  'Other',
]

const countries = [
  'United Kingdom',
  'Ireland',
  'India',
  'Philippines',
  'Nigeria',
  'Zimbabwe',
  'Ghana',
  'Kenya',
  'South Africa',
  'Other',
]

interface UploadedFile {
  name: string
  url: string
  key: string
}

export function CandidateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const jobId = searchParams.get('job')
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [cvFile, setCvFile] = useState<UploadedFile | null>(null)
  const [certificatesFile, setCertificatesFile] = useState<UploadedFile | null>(null)
  const [isUploadingCv, setIsUploadingCv] = useState(false)
  const [isUploadingCerts, setIsUploadingCerts] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    profession: '',
  })

  const handleFileUpload = async (
    file: File,
    folder: string,
    setUploading: (v: boolean) => void,
    setFile: (f: UploadedFile | null) => void
  ) => {
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Upload failed')
      }

      const data = await response.json()
      setFile({ name: file.name, url: data.url, key: data.key })
      toast.success('File uploaded successfully')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to upload file')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!cvFile) {
      toast.error('Please upload your CV')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          cvUrl: cvFile.url,
          certificatesUrl: certificatesFile?.url || null,
          jobId: jobId || null,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Submission failed')
      }

      setIsSuccess(true)
      toast.success('Application submitted successfully!')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit application')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="size-10 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-semibold text-foreground">Application Submitted!</h3>
        <p className="mb-6 max-w-md text-muted-foreground">
          Thank you for your application. Our recruitment team will review your details and 
          contact you within 48 hours.
        </p>
        <Button onClick={() => router.push('/jobs')}>Browse More Jobs</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {jobId && (
        <div className="rounded-lg bg-primary/10 p-4">
          <p className="text-sm text-primary">
            You&apos;re applying for a specific job position. We&apos;ll match your application accordingly.
          </p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="John Smith"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 7XXX XXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country of Residence *</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
            required
          >
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="profession">Profession *</Label>
        <Select
          value={formData.profession}
          onValueChange={(value) => setFormData({ ...formData, profession: value })}
          required
        >
          <SelectTrigger id="profession">
            <SelectValue placeholder="Select your profession" />
          </SelectTrigger>
          <SelectContent>
            {professions.map((profession) => (
              <SelectItem key={profession} value={profession}>
                {profession}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* CV Upload */}
      <div className="space-y-2">
        <Label>CV/Resume *</Label>
        {cvFile ? (
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <FileText className="text-primary" />
              <span className="text-sm font-medium">{cvFile.name}</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setCvFile(null)}
            >
              <X className="size-4" />
            </Button>
          </div>
        ) : (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-6 transition-colors hover:border-primary/50 hover:bg-muted/50">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  handleFileUpload(file, 'cvs', setIsUploadingCv, setCvFile)
                }
              }}
              disabled={isUploadingCv}
            />
            {isUploadingCv ? (
              <Loader2 className="mb-2 size-8 animate-spin text-primary" />
            ) : (
              <Upload className="mb-2 size-8 text-muted-foreground" />
            )}
            <span className="text-sm font-medium text-foreground">
              {isUploadingCv ? 'Uploading...' : 'Upload CV'}
            </span>
            <span className="mt-1 text-xs text-muted-foreground">PDF, DOC, DOCX (max 10MB)</span>
          </label>
        )}
      </div>

      {/* Certificates Upload */}
      <div className="space-y-2">
        <Label>Certificates (Optional)</Label>
        {certificatesFile ? (
          <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex items-center gap-3">
              <FileText className="text-primary" />
              <span className="text-sm font-medium">{certificatesFile.name}</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setCertificatesFile(null)}
            >
              <X className="size-4" />
            </Button>
          </div>
        ) : (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-6 transition-colors hover:border-primary/50 hover:bg-muted/50">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  handleFileUpload(file, 'certificates', setIsUploadingCerts, setCertificatesFile)
                }
              }}
              disabled={isUploadingCerts}
            />
            {isUploadingCerts ? (
              <Loader2 className="mb-2 size-8 animate-spin text-primary" />
            ) : (
              <Upload className="mb-2 size-8 text-muted-foreground" />
            )}
            <span className="text-sm font-medium text-foreground">
              {isUploadingCerts ? 'Uploading...' : 'Upload Certificates'}
            </span>
            <span className="mt-1 text-xs text-muted-foreground">PDF, DOC, DOCX, JPG, PNG (max 10MB)</span>
          </label>
        )}
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || isUploadingCv || isUploadingCerts}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Application'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>
        {' '}and consent to being contacted by our recruitment team.
      </p>
    </form>
  )
}
