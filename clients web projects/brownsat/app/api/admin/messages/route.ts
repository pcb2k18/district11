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
    const { id, isRead } = body

    if (!id || typeof isRead !== 'boolean') {
      return NextResponse.json({ error: 'Message ID and isRead flag required' }, { status: 400 })
    }

    const supabase = await createClient()
    const { error } = await supabase
      .from('contact_submissions')
      .update({ is_read: isRead })
      .eq('id', id)

    if (error) {
      console.error('Admin messages update error:', error)
      return NextResponse.json({ error: 'Failed to update message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin messages API error:', error)
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
      return NextResponse.json({ error: 'Message ID required' }, { status: 400 })
    }

    const supabase = await createClient()
    const { error } = await supabase.from('contact_submissions').delete().eq('id', id)

    if (error) {
      console.error('Admin messages delete error:', error)
      return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Admin messages API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

