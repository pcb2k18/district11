import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Browns Healthcare. We're here to help with your healthcare recruitment needs.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+44 (0) 123 456 7890", "+44 (0) 123 456 7891 (24hr)"],
    href: "tel:+441234567890",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@brownshealthcare.co.uk", "recruitment@brownshealthcare.co.uk"],
    href: "mailto:info@brownshealthcare.co.uk",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Healthcare House", "London, UK, EC1A 1BB"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon-Fri: 8am - 6pm", "24/7 Emergency Line Available"],
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Have a question or need assistance? Our team is here to help with all your 
                healthcare recruitment needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Reach out to us through any of the following channels. We aim to respond 
                  to all enquiries within 24 hours.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="rounded-xl border p-6">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <info.icon className="size-5" />
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">{info.title}</h3>
                      <div className="mt-2 flex flex-col gap-1">
                        {info.details.map((detail) => (
                          <p key={detail} className="text-sm text-muted-foreground">
                            {info.href ? (
                              <a href={info.href} className="hover:text-primary">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Department contacts */}
                <div className="mt-8 rounded-xl bg-muted p-6">
                  <h3 className="font-semibold text-foreground">Department Contacts</h3>
                  <div className="mt-4 flex flex-col gap-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Candidate Enquiries:</span>
                      <a href="mailto:recruitment@brownshealthcare.co.uk" className="text-primary hover:underline">
                        recruitment@brownshealthcare.co.uk
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Employer Enquiries:</span>
                      <a href="mailto:clients@brownshealthcare.co.uk" className="text-primary hover:underline">
                        clients@brownshealthcare.co.uk
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">General Enquiries:</span>
                      <a href="mailto:info@brownshealthcare.co.uk" className="text-primary hover:underline">
                        info@brownshealthcare.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="rounded-xl border bg-card p-6 md:p-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
