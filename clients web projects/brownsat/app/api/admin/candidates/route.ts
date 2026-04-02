import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { requireAdminUser } from '@/lib/auth'

export async function PUT(request: NextRequest) {
  try {
    const { user } = await requireAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, status, notes } = body

    if (!id) {
      return NextResponse.json({ error: 'Candidate ID required' }, { status: 400 })
    }

    const supabase = await createClient()

    const { error } = await supabase
      .from('candidates')
      .update({
        ...(status ? { status } : {}),
        ...(typeof notes === 'string' ? { notes } : {}),
      })
      .eq('id', id)

    if (error) {
      console.error('Admin candidates update error:', error)
      return NextResponse.json({ error: 'Failed to update candidate' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin candidates API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { user } = await requireAdminUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Candidate ID required' }, { status: 400 })
    }

    const supabase = await createClient()
    const { error } = await supabase.from('candidates').delete().eq('id', id)

    if (error) {
      console.error('Admin candidates delete error:', error)
      return NextResponse.json({ error: 'Failed to delete candidate' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin candidates API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

