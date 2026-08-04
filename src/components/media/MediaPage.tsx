import { Clock, PlayCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

type MediaSectionKey = "news" | "videos"

type NewsItem = {
  image: string
  date: string
  title: string
}

type VideoItem = {
  image: string
  title: string
}

const latestNewsItems: NewsItem[] = [
  {
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80",
    date: "1/20/2026",
    title: "Maulana Bashir Farooq Qadri reaches among flood victims in Khyber...",
  },
  {
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80",
    date: "1/20/2026",
    title: "A Heartfelt Visit of Saad Afridi CEO of Scents N Stories",
  },
  {
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=900&q=80",
    date: "1/20/2026",
    title: "Javed Alam Odho, Additional IG Karachi, at Hiba welfare Head Office.",
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
    date: "1/20/2026",
    title: "Hiba welfare Mega IT Exam 2025 - A Glimpse of the Future!",
  },
]

const latestVideoItems: VideoItem[] = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    title: "Maulana Abdul Habib Attari Visits Hiba welfare Zaitoon Ashraf IT Park",
  },
  {
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&q=80",
    title: "Hiba welfare Welfare Trust & KAACIB Job Fair",
  },
  {
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&q=80",
    title: "Khyber Pakhtunkhwa Floods - Hiba welfare Welfare Relief Report",
  },
]

function parseHashToSection(hashValue: string): MediaSectionKey {
  const normalized = hashValue.replace(/^#/, "").trim().toLowerCase()
  if (normalized === "videos") return "videos"
  return "news"
}

export function MediaPage() {
  const [section, setSection] = useState<MediaSectionKey>(() => parseHashToSection(window.location.hash))

  useEffect(() => {
    const onHashChange = () => {
      setSection(parseHashToSection(window.location.hash))
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const isNews = section === "news"
  const heading = isNews ? "LATEST NEWS" : "MEDIA GALLERY"
  return (
    <section className="bg-[hsl(120,10%,92%)] pb-16">
      <div className="bg-green-deep py-7 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide text-white md:text-5xl">{heading}</h1>
      </div>

      <div className="w-[95%] mx-auto pt-8">
        {isNews ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {latestNewsItems.map((item) => (
              <Card
                key={item.title}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <img src={item.image} alt={item.title} className="h-[180px] w-full object-cover" />
                </div>
                <CardContent className="space-y-3 p-4">
                  {"date" in item ? (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                  ) : null}
                  <h2 className="line-clamp-2 text-[25px] font-bold leading-tight text-[#111827]">
                    {item.title}
                  </h2>
                  <a
                    href="/media#news"
                    className="inline-block text-xs font-bold uppercase tracking-wide text-green-deep"
                  >
                    Read More
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestVideoItems.map((video) => (
              <a key={video.title} href="/media#videos" className="group block">
                <div className="relative overflow-hidden rounded-xl border border-black/10 bg-white">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="h-[170px] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-black/35 p-1.5 text-white">
                      <PlayCircle className="h-8 w-8" />
                    </span>
                  </div>
                </div>
                <p className="mt-2 line-clamp-2 text-[21px] font-semibold leading-tight text-[#101828]">
                  {video.title}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
