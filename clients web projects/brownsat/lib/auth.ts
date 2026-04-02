import { createClient } from '@/lib/supabase/server'

export async function requireAdminUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAdmin = user && (user.app_metadata as { role?: string } | null)?.role === 'admin'

  if (!user || !isAdmin) {
    return { user: null }
  }

  return { user }
}

