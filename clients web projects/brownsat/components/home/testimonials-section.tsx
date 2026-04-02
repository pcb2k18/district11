import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "Browns Healthcare found me a permanent nursing position within two weeks. The team was supportive throughout the entire process and matched me with a role that perfectly fits my experience.",
    author: "Sarah Mitchell",
    role: "Registered Nurse",
    initials: "SM",
  },
  {
    quote: "We&apos;ve been using Browns Healthcare for our staffing needs for over 3 years. Their candidates are always well-qualified, professional, and ready to work. They understand the healthcare sector.",
    author: "James Thompson",
    role: "Care Home Manager",
    initials: "JT",
  },
  {
    quote: "The team at Browns Healthcare helped me transition from overseas nursing to working in the UK. They guided me through compliance, training, and finding the right placement.",
    author: "Priya Sharma",
    role: "Mental Health Nurse",
    initials: "PS",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from healthcare professionals and employers who have worked with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative">
              <CardContent className="pt-6">
                <Quote className="size-8 text-primary/20" />
                <p className="mt-4 text-foreground/90">
                  {testimonial.quote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
