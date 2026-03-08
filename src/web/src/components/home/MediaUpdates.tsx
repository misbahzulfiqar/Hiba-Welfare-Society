import { Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const updates = [
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    date: "19/1/2025",
    title: "Maulana Abdul Habib Attari Visits Hiba Welfare Zaitoon Ashra Center",
    excerpt: "EMPLOYMENT OPPORTUNITIES BY KAACIB AND HIBA WELFARE",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    date: "18/1/2025",
    title: "Hiba Welfare Education Drive Reaches 50 New Villages",
    excerpt: "PAKISTAN KPK – Education for All Initiative",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80",
    date: "17/1/2025",
    title: "Daily Langar Distribution Crosses 450,000 Meals",
    excerpt: "Making a difference in the lives of thousands every day",
  },
]

export function MediaUpdates() {
  return (
    <section className="border-t bg-muted/30 py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Latest Update
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Media <span className="text-primary">Updates</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Making a difference in the lives of thousands every day through comprehensive welfare
            programs
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <Card key={item.title} className="overflow-hidden border-0 shadow-md">
              <div className="relative aspect-video overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute top-3 right-3 rounded-md bg-primary text-primary-foreground border-0">
                  Video
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
            <a href="#media">
              SEE MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
