'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

const jobRoles = [
  'Registered Nurse (RGN)',
  'Registered Mental Health Nurse (RMN)',
  'Learning Disability Nurse (RNLD)',
  'Healthcare Assistant (HCA)',
  'Senior Healthcare Assistant',
  'Support Worker',
  'Care Assistant',
  'Nursing Associate',
  'Multiple Roles',
  'Other',
]

const staffCounts = [
  { value: '1-5', label: '1-5 staff members' },
  { value: '6-10', label: '6-10 staff members' },
  { value: '11-20', label: '11-20 staff members' },
  { value: '21-50', label: '21-50 staff members' },
  { value: '50+', label: 'More than 50 staff members' },
]

export function EmployerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    jobRole: '',
    numberOfStaff: '',
    location: '',
    additionalInfo: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/employers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Submission failed')
      }

      setIsSuccess(true)
      toast.success('Request submitted successfully!')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit request')
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
        <h3 className="mb-2 text-2xl font-semibold text-foreground">Request Submitted!</h3>
        <p className="mb-6 max-w-md text-muted-foreground">
          Thank you for your enquiry. A member of our client services team will contact you 
          within 24 hours to discuss your staffing requirements.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Submit Another Request</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company/Facility Name *</Label>
          <Input
            id="companyName"
            placeholder="e.g., Sunrise Care Home"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person *</Label>
          <Input
            id="contactPerson"
            placeholder="Full name"
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+44 XXX XXX XXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="jobRole">Job Role Needed *</Label>
          <Select
            value={formData.jobRole}
            onValueChange={(value) => setFormData({ ...formData, jobRole: value })}
            required
          >
            <SelectTrigger id="jobRole">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              {jobRoles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="numberOfStaff">Number of Staff Required *</Label>
          <Select
            value={formData.numberOfStaff}
            onValueChange={(value) => setFormData({ ...formData, numberOfStaff: value })}
            required
          >
            <SelectTrigger id="numberOfStaff">
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
              {staffCounts.map((count) => (
                <SelectItem key={count.value} value={count.value}>
                  {count.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location/Area *</Label>
        <Input
          id="location"
          placeholder="e.g., Manchester, Greater Manchester"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo">Additional Information</Label>
        <Textarea
          id="additionalInfo"
          placeholder="Tell us more about your requirements, shift patterns, start dates, etc."
          value={formData.additionalInfo}
          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>
        {' '}and consent to being contacted by our team.
      </p>
    </form>
  )
}
