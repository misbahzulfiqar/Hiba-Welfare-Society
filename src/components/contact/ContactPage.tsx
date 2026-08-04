import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ApiError } from "@/lib/api"
import { useContactMutation } from "@/hooks/useContactMutation"

type ContactInfoItem = {
  label: string
  value: string
  href?: string
}

const contactInfo: ContactInfoItem[] = [
  {
    label: "Address",
    value: "A-25, Bahadurabad Chowrangi\nKarachi, Pakistan",
  },
  {
    label: "Email",
    value: "info@saylaniwelfare.com",
    href: "mailto:info@saylaniwelfare.com",
  },
  {
    label: "Phone",
    value: "+92 21 111 729 526\n021 38729526",
    href: "tel:+9221111729526",
  },
]

export function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const contactMutation = useContactMutation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const n = name.trim()
    const em = email.trim()
    const s = subject.trim()
    const m = message.trim()
    if (!n || !em || !s || !m) {
      toast.error("Please fill in all fields")
      return
    }
    contactMutation.mutate(
      { name: n, email: em, subject: s, message: m },
      {
        onSuccess: () => {
          toast.success("Message sent", {
            description: "Thank you — we will get back to you soon.",
          })
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
        },
        onError: (err) => {
          const msg = err instanceof ApiError ? err.message : "Could not send message"
          toast.error(msg)
        },
      },
    )
  }

  return (
    <section className="bg-[hsl(120,10%,92%)] py-8 md:py-10">
      <div className="w-[95%] mx-auto grid gap-8 lg:grid-cols-[1.55fr_1fr]">
        <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
          <iframe
            title="Hiba welfare Welfare Map"
            src="https://maps.google.com/maps?q=Hiba welfare%20Welfare%20International%20Trust%20Head%20Office%20Bahadurabad%20Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-[500px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-4 left-4 right-4 max-w-[480px] rounded-md bg-white/95 p-5 shadow-md">
            <div className="grid gap-5 sm:grid-cols-3">
              {contactInfo.map((item) => (
                <div key={item.label} className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1f2937]">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="whitespace-pre-line text-sm text-green-deep hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="whitespace-pre-line text-sm text-[#111827]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm md:p-7">
          <h1 className="text-4xl font-extrabold text-[#111827]">Get in Touch</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Whether you're reaching out for support, want to get involved, or simply have a question, our team is
            always ready to listen. Share your details below and we'll connect with you as soon as possible.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-sm font-semibold text-[#111827]">
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your full name"
                  className="bg-white"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-sm font-semibold text-[#111827]">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="text-sm font-semibold text-[#111827]">
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="How can we help?"
                className="bg-white"
                value={subject}
                onChange={(ev) => setSubject(ev.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-sm font-semibold text-[#111827]">
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Type your message here..."
                className="min-h-[130px] resize-none bg-white"
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
              />
            </div>

            <Button
              type="submit"
              disabled={contactMutation.isPending}
              className="w-full bg-green-deep text-white hover:bg-green-deep/90"
            >
              {contactMutation.isPending ? "Sending…" : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
