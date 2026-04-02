import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendEmployerRequestNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { companyName, contactPerson, email, phone, jobRole, numberOfStaff, location, additionalInfo } = body

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phone || !jobRole || !numberOfStaff || !location) {
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

    // Parse number of staff
    const staffCount = numberOfStaff === '50+' ? 50 : parseInt(numberOfStaff.split('-')[0])

    const supabase = await createClient()

    // Insert employer request into database
    const { data, error } = await supabase
      .from('employers')
      .insert({
        company_name: companyName,
        contact_person: contactPerson,
        email,
        phone,
        job_role_needed: jobRole,
        number_of_staff: staffCount,
        location,
        additional_info: additionalInfo || null,
        status: 'pending',
      })
      .select()
      .single()

    if (error || !data) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to submit request' },
        { status: 500 }
      )
    }

    void sendEmployerRequestNotification({
      companyName,
      contactPerson,
      email,
      phone,
      jobRole,
      numberOfStaff: staffCount,
      location,
      additionalInfo,
    })

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error('Employers API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
