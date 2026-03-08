import { Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const news = [
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
    date: "20/1/2026",
    title: "Maulana Bashir Farooq Qadri reaches among flood victims in Sindh",
    excerpt: "Flood relief, Sindh, emergency response, welfare distribution...",
  },
  {
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    date: "19/1/2026",
    title: "Hiba Welfare Ramzan 2026 Campaign Launched Across 100+ Cities",
    excerpt: "Ramzan 2026, campaign launch, food distribution, nationwide...",
  },
  {
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    date: "18/1/2026",
    title: "Free Medical Camp Serves Over 5,000 Patients in Lahore",
    excerpt: "Medical camp, Lahore, free healthcare, community health...",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    date: "17/1/2026",
    title: "New Education Centers Open in Balochistan and KPK",
    excerpt: "Education, Balochistan, KPK, schools, literacy...",
  },
]

export function LatestNews() {
  return (
    <section className="border-t bg-white py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Latest News
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay informed about our latest activities, events, and community impact
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <Card key={item.title} className="overflow-hidden border-0 shadow-md">
              <div className="relative aspect-[5/3] overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute top-3 right-3 rounded-md bg-primary text-primary-foreground border-0">
                  News
                </Badge>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-2 font-semibold text-foreground line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-lg bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#news">
              SEE MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
