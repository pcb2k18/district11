import { createClient } from '@/lib/supabase/server'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react'

interface Message {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
  is_read: boolean
  created_at: string
}

async function getMessages() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
  return data as Message[] || []
}

export default async function AdminMessagesPage() {
  const messages = await getMessages()
  const unreadCount = messages.filter(m => !m.is_read).length

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="mt-1 text-muted-foreground">
          Contact form submissions ({unreadCount} unread)
        </p>
      </div>

      {messages.length > 0 ? (
        <div className="grid gap-4">
          {messages.map((message) => (
            <Card 
              key={message.id} 
              className={`transition-all hover:border-primary/30 ${!message.is_read ? 'border-l-4 border-l-primary' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {message.subject}
                      </h3>
                      {!message.is_read && (
                        <Badge variant="default">New</Badge>
                      )}
                    </div>
                    <p className="mb-1 font-medium text-foreground">{message.name}</p>
                    <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="size-4" />
                        {message.email}
                      </span>
                      {message.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="size-4" />
                          {message.phone}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {new Date(message.created_at).toLocaleDateString()} at{' '}
                        {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-muted-foreground line-clamp-2">{message.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/messages/${message.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}>
                        Reply
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <MessageSquare className="mb-4 size-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">No messages yet</h3>
            <p className="text-muted-foreground">
              Contact form submissions will appear here
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
