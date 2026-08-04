import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type Testimonial = {
  name: string
  title: string
  rating: number
  quote: string
  time: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Arshad Wali Muhammad",
    title: "Group Director, Meny's Group",
    rating: 4.5,
    quote:
      "Hiba Welfare Trust is a name that needs no introduction today. The journey this team embarked upon was made possible owing to their zeal, enthusiasm & commitment to the society and by the grace of Allah (SWT), it has become a name that we need and not just the one we want. I wish Hiba Welfare's team all the success and blessing that they deserve for future, May God bless Hiba Welfare and ensure prosperity and happiness for our people, Ameen!",
    time: "4 Days Ago",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&fit=crop&q=80",
  },
  {
    name: "Asif Ismail",
    title: "COO & Director, Premier Cables Pvt. Ltd",
    rating: 4.5,
    quote:
      "When we talk about serving humanity, no second thought occurs other than Hiba Welfare Trust. Hiba Welfare is doing a tremendous job in terms of everything they do for a troubled humanity. From offering food to the hungry to arranging jobs for jobless people, arranging marriages and dowry for orphaned girls, offering free medical facilities, and much more. We sincerely wish them success in their future endeavors and in raising their standards of serving mankind in a better and more professional way.",
    time: "4 Days Ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&q=80",
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"
          )}
        />
      ))}
      <span className="ml-1.5 text-sm text-muted-foreground">({rating})</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="border-t bg-muted/30 py-12 sm:py-16 md:py-24">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Our Testimonials
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            What We Are <span className="text-primary underline decoration-2 underline-offset-2">Say?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Making a difference in the lives of thousands every day through comprehensive welfare
            programs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="overflow-hidden bg-card shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="flex shrink-0 flex-col items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <p className="mt-3 text-center text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-center text-xs text-muted-foreground">
                      {t.title}
                    </p>
                    <div className="mt-2">
                      <Stars rating={t.rating} />
                    </div>
                  </div>
                  <div className="relative flex-1 min-w-0">
                    <Quote className="absolute right-0 top-0 h-10 w-10 text-muted-foreground/40" />
                    <p className="text-sm text-foreground leading-relaxed pr-8">
                      {t.quote}
                    </p>
                    <p className="mt-3 text-right text-xs text-muted-foreground">
                      {t.time}
                    </p>
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
