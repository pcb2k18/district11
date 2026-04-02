import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendContactSubmissionNotification } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email: email.toLowerCase(),
      phone: phone || null,
      subject,
      message,
    })

    if (error) {
      console.error("Contact submission error:", error)
      throw error
    }

    void sendContactSubmissionNotification({
      name,
      email: email.toLowerCase(),
      phone,
      subject,
      message,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    )
  }
}
