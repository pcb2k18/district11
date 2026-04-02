"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  candidates: [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Apply Now", href: "/candidates" },
    { name: "Career Advice", href: "/services" },
    { name: "FAQ", href: "/contact" },
  ],
  employers: [
    { name: "Hire Staff", href: "/employers" },
    { name: "Our Services", href: "/services" },
    { name: "Staffing Solutions", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ],
}

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to subscribe")
      }

      toast.success("Successfully subscribed to our newsletter!")
      setEmail("")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to subscribe")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="border-t bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-tight text-sidebar-foreground">
                  Browns
                </span>
                <span className="text-xs uppercase tracking-widest text-sidebar-foreground/70">
                  Healthcare
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-sidebar-foreground/70">
              Connecting skilled healthcare professionals with leading care facilities across the UK. 
              Your trusted partner in healthcare recruitment.
            </p>
            
            {/* Contact info */}
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href="tel:+441234567890" className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground">
                <Phone className="size-4" />
                <span>+44 (0) 123 456 7890</span>
              </a>
              <a href="mailto:info@brownshealthcare.co.uk" className="flex items-center gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground">
                <Mail className="size-4" />
                <span>info@brownshealthcare.co.uk</span>
              </a>
              <div className="flex items-start gap-2 text-sidebar-foreground/70">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>123 Healthcare House<br />London, UK, EC1A 1BB</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a 
                href="#" 
                className="flex size-9 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              <a 
                href="#" 
                className="flex size-9 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </a>
              <a 
                href="#" 
                className="flex size-9 items-center justify-center rounded-full bg-sidebar-accent text-sidebar-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="font-semibold text-sidebar-foreground">Company</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground">Candidates</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.candidates.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sidebar-foreground">Employers</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.employers.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-sidebar-foreground/70 transition-colors hover:text-sidebar-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 rounded-xl bg-sidebar-accent p-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="font-semibold text-sidebar-foreground">Subscribe to our newsletter</h3>
              <p className="text-sm text-sidebar-foreground/70">
                Get the latest job opportunities and healthcare news delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full gap-2 md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-sidebar-border bg-sidebar text-sidebar-foreground placeholder:text-sidebar-foreground/50 md:w-64"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sidebar-border pt-8 text-sm text-sidebar-foreground/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Browns Healthcare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-sidebar-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sidebar-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
