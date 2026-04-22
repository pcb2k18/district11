"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const NOTIFY_TO = "info@techskavengers.com"
const INSTAGRAM_URL = "https://www.instagram.com/techskavengers/"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    const trimmed = email.trim()
    if (!trimmed) {
      setFormError("Please enter your email.")
      return
    }

    const subject = encodeURIComponent("Tech Skavengers — website waitlist")
    const body = encodeURIComponent(
      `Please add this email to the waitlist:\n\n${trimmed}\n`,
    )
    window.location.href = `mailto:${NOTIFY_TO}?subject=${subject}&body=${body}`

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <div className="w-full max-w-4xl text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold tracking-tight">
            TS
          </div>
          <div className="text-left">
            <div className="text-sm text-muted-foreground">Tech Skavengers</div>
            <div className="text-lg font-semibold leading-tight">
              Alliance of tech creators in Ghana
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Our website is <span className="text-primary">coming soon</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A group of top tech creators in Ghana formed into an alliance to achieve bigger goals.
        </p>

        <div className="max-w-md mx-auto space-y-3">
          <div className="text-left">
            <div className="text-lg font-semibold">Get notified when we launch</div>
            <div className="text-sm text-muted-foreground">
              Add your email and we&apos;ll open your mail app with a draft to {NOTIFY_TO}.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="whitespace-nowrap">
              {isSubmitted ? "Opening mail…" : "Notify me"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {formError && <p className="text-sm text-destructive">{formError}</p>}

          {isSubmitted && (
            <p className="text-sm text-green-600">
              Send the draft from your mail app to finish. If nothing opened, email{" "}
              <a className="underline" href={`mailto:${NOTIFY_TO}`}>
                {NOTIFY_TO}
              </a>
              .
            </p>
          )}
        </div>

        <div className="flex justify-center mt-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Tech Skavengers on Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
