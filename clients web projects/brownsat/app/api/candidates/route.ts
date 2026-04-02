import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendCandidateApplicationNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, country, profession, cvUrl, certificatesUrl, jobId } = body

    // Validate required fields
    if (!fullName || !email || !phone || !country || !profession || !cvUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Insert candidate into database
    const { data, error } = await supabase
      .from('candidates')
      .insert({
        full_name: fullName,
        email,
        phone,
        country_of_residence: country,
        profession,
        cv_url: cvUrl,
        certificates_url: certificatesUrl,
        job_id: jobId,
        status: 'pending',
      })
      .select()
      .single()

    if (error || !data) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      )
    }

    // Fire-and-forget email notification; failures are logged but don't break the response
    void sendCandidateApplicationNotification({
      fullName,
      email,
      phone,
      country,
      profession,
      cvUrl,
      certificatesUrl,
      jobId,
    })

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error('Candidates API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
