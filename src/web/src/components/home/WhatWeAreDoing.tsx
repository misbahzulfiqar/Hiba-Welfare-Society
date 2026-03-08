import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "all", label: "All", active: true },
  { id: "medical", label: "Medical", active: false },
  { id: "welfare", label: "Welfare", active: false },
  { id: "education", label: "Education", active: false },
]

const initiatives = [
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    label: "Medical",
  },
  {
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    label: "Welfare",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
    label: "Education",
  },
  {
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80",
    label: "Ramzan",
  },
  {
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80",
    label: "Daily Food",
  },
  {
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80",
    label: "Clean Water",
  },
]

export function WhatWeAreDoing() {
  return (
    <section className="border-t bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            What We Are <span className="text-primary">Doing</span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={tab.active ? "default" : "ghost"}
              size="sm"
              className={cn(
                "rounded-full",
                tab.active && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              asChild={!tab.active}
            >
              {tab.active ? (
                <span>{tab.label}</span>
              ) : (
                <a href={`#${tab.id}`}>{tab.label}</a>
              )}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <Card key={item.label} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block rounded bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
                    {item.label}
                  </span>
                </div>
              </div>
              <CardContent className="p-0" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
