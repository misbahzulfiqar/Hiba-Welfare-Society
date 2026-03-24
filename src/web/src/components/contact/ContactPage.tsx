import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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

          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-sm font-semibold text-[#111827]">
                  Name
                </label>
                <Input id="contact-name" placeholder="Your full name" className="bg-white" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-sm font-semibold text-[#111827]">
                  Email
                </label>
                <Input id="contact-email" type="email" placeholder="you@example.com" className="bg-white" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className="text-sm font-semibold text-[#111827]">
                Subject
              </label>
              <Input id="contact-subject" placeholder="How can we help?" className="bg-white" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="text-sm font-semibold text-[#111827]">
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Type your message here..."
                className="min-h-[130px] resize-none bg-white"
              />
            </div>

            <Button type="submit" className="w-full bg-green-deep text-white hover:bg-green-deep/90">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
