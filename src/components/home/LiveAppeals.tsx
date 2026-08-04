import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type LiveAppealItem = {
  title: string
  description: string
  image: string
  overlay: string
  link: string
}

const initiatives: LiveAppealItem[] = [
  {
    title: "Fitra, Fidya and Kaffara",
    description:
      "Fulfill your religious obligations through Fitra, Fidya, and Kaffara. Your contribution helps provide food and essential support to those in need across Pakistan.",
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    overlay: "Your's Fitra, Fidya & Kaffara hope for Poors",
    link: "#fitra",
  },
  {
    title: "Ramzan 2026",
    description:
      "Make your Ramzan Donation 2026 a source of mercy and reward. Your contribution supports food distribution, charity programs, and iftar for families in need.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
      overlay: "Ramzan Donation 2026",
    link: "#ramzan",
  },
  {
    title: "Medical",
    description:
      "Support medical causes that provide essential healthcare, treatment, and life saving support to those in need. Your donation helps improve access to quality care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    overlay: "HIBA WELFARE MEDICAL SERVICES",
    link: "#medical",
  },
  {
    title: "Child Education Campaign",
    description:
      "Empowering the next generation by providing quality education to underprivileged children. We offer free schooling, textbooks, and learning materials.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    overlay: "Child Education",
    link: "#education",
  },
]

export function LiveAppeals() {
  return (
    <section className="border-t bg-muted/30 py-12 sm:py-16 md:py-24">
      <div className="w-[90%] mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Initiatives
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Live <span className="text-primary">Appeals</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Making a difference in the lives of thousands every day through comprehensive welfare
            programs
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-xs font-medium text-white">
                  {item.overlay}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  variant="link"
                  className="h-auto p-0 text-primary font-medium hover:underline"
                  asChild
                >
                  <a href={item.link}>
                    Donate Now
                    <ArrowRight className="ml-1 inline h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
