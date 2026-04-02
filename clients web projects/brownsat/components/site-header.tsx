"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Candidates", href: "/candidates" },
  { name: "Employers", href: "/employers" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="hidden border-b bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+441onal234567" className="flex items-center gap-2 hover:opacity-80">
              <Phone className="size-4" />
              <span>+44 (0) 123 456 7890</span>
            </a>
            <a href="mailto:info@brownshealthcare.co.uk" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="size-4" />
              <span>info@brownshealthcare.co.uk</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/candidates" className="hover:underline">
              Looking for work?
            </Link>
            <span className="text-primary-foreground/50">|</span>
            <Link href="/employers" className="hover:underline">
              Hiring staff?
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-tight">
                Browns
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" asChild>
              <Link href="/candidates">Apply Now</Link>
            </Button>
            <Button asChild>
              <Link href="/employers">Hire Staff</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t pt-4">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/candidates" onClick={() => setIsOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/employers" onClick={() => setIsOpen(false)}>
                      Hire Staff
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-col gap-2 border-t pt-4 text-sm text-muted-foreground">
                  <a href="tel:+441234567890" className="flex items-center gap-2">
                    <Phone className="size-4" />
                    <span>+44 (0) 123 456 7890</span>
                  </a>
                  <a href="mailto:info@brownshealthcare.co.uk" className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span>info@brownshealthcare.co.uk</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
