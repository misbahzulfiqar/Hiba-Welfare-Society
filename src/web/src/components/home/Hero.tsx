import { Logo } from "@/components/layout/Logo"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Logo size={32} className="h-8 w-8" />
            Pakistan&apos;s Largest Welfare NGO
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-primary">Hiba Welfare</span>
              <br />
              International Trust
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              The largest NGO offering free daily meals to underprivileged families in 63+ areas.
              Working with local communities to support those in need across Pakistan. Together,
              we&apos;re making a difference every single day.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              DONATE NOW
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#ramzan">Ramzan With Hiba Welfare</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
            <img
              src="https://picsum.photos/seed/hero-children/800/600"
              alt="Children supported by Hiba Welfare"
              className="h-full w-full object-cover"
            />
          </div>
          <Card className="absolute -bottom-6 left-6 right-6 md:right-auto md:w-72 shadow-lg border-0 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-3xl font-bold text-foreground">450,000+</p>
                  <p className="mt-1 text-sm font-medium text-foreground">People Served Daily</p>
                  <p className="text-xs text-muted-foreground">Across 100+ areas in Pakistan</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
