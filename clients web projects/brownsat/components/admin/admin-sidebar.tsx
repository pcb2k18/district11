'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Heart,
  LayoutDashboard,
  Briefcase,
  Users,
  Building2,
  Mail,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { User } from '@supabase/supabase-js'
import { useState } from 'react'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { name: 'Candidates', href: '/admin/candidates', icon: Users },
  { name: 'Employers', href: '/admin/employers', icon: Building2 },
  { name: 'Messages', href: '/admin/messages', icon: Mail },
]

interface AdminSidebarProps {
  user: User
}

export function AdminSidebar({ user }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  return (
    <aside
      className={cn(
        'relative flex flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary">
            <Heart className="size-4 text-sidebar-primary-foreground" />
          </div>
          {!isCollapsed && (
            <span className="font-serif text-lg font-bold text-sidebar-foreground">
              Admin
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/admin' && pathname.startsWith(item.href))
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
              )}
            >
              <item.icon className="size-5 shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-2">
        {!isCollapsed && (
          <div className="mb-2 px-3 py-2">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {user.email}
            </p>
            <p className="text-xs text-sidebar-foreground/60">Administrator</p>
          </div>
        )}
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
            isCollapsed && 'justify-center px-2'
          )}
          onClick={handleLogout}
        >
          <LogOut className="size-5 shrink-0" />
          {!isCollapsed && <span className="ml-3">Sign Out</span>}
        </Button>
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm hover:text-foreground"
      >
        {isCollapsed ? (
          <ChevronRight className="size-4" />
        ) : (
          <ChevronLeft className="size-4" />
        )}
      </button>
    </aside>
  )
}
