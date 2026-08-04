import { useState, type FormEvent } from "react"
import { Mail, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ApiError } from "@/lib/api"
import { useNewsletterMutation } from "@/hooks/useNewsletterMutation"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const newsletterMutation = useNewsletterMutation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const em = email.trim().toLowerCase()
    if (!em || !em.includes("@")) {
      toast.error("Please enter a valid email")
      return
    }
    newsletterMutation.mutate(
      { email: em },
      {
        onSuccess: () => {
          toast.success("Subscribed", { description: "Thank you for joining our newsletter." })
          setEmail("")
        },
        onError: (err) => {
          const msg = err instanceof ApiError ? err.message : "Could not subscribe"
          toast.error(msg)
        },
      },
    )
  }

  return (
    <section className="bg-primary py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
            Subscribe Our Newsletter
          </h2>
          <p className="mt-4 text-primary-foreground/90">
            Our organization has a long tradition of serving humanity and empowering the underprivileged.
          </p>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            onSubmit={handleSubmit}
          >
            <div className="relative flex-1 sm:max-w-md">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Type your email"
                className="h-11 rounded-lg border-0 bg-white pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary-foreground/20"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                autoComplete="email"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={newsletterMutation.isPending}
              className="h-11 rounded-lg bg-white px-6 text-primary hover:bg-white/90"
            >
              {newsletterMutation.isPending ? "…" : "Subscribe"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
