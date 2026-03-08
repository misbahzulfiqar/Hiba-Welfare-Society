import { Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    date: "6/3/2026",
    title: "The Virtue of Giving on Taak Raat: Why Odd Nights in Ramadan Matter",
    excerpt:
      "Taak Raat, odd nights Ramadan, charity in Ramadan, Laylat al-Qadr charity, giving in the last ashra...",
  },
  {
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    date: "5/3/2026",
    title: "How Your Sadaqah Reaches Families in Need This Ramadan",
    excerpt:
      "Sadaqah, Ramadan donation, family support, food distribution, welfare programs, community impact...",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80",
    date: "4/3/2026",
    title: "Stories from the Field: A Day at Our Iftar Distribution",
    excerpt:
      "Iftar distribution, volunteer stories, Ramadan 2026, community service, free meals, underprivileged...",
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
    date: "3/3/2026",
    title: "Zakat Guide 2026: Calculating and Distributing Your Zakat",
    excerpt:
      "Zakat guide, Zakat calculation, Zakat distribution, Islamic charity, welfare trust, 2026...",
  },
]

export function OurBlogs() {
  return (
    <section className="border-t bg-white py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Latest Blogs
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our <span className="text-primary">Blogs</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay updated with insights, stories, and news from our welfare initiatives
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogs.map((item) => (
            <Card key={item.title} className="overflow-hidden border-0 shadow-md">
              <div className="relative aspect-[5/3] overflow-hidden rounded-t-lg bg-muted">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute top-3 right-3 rounded-md bg-primary text-primary-foreground border-0">
                  Blog
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
            <a href="#blogs">
              SEE MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
