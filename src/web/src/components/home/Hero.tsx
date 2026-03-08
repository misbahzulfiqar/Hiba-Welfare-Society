import { Logo } from "@/components/layout/Logo"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container px-4 py-12 sm:py-16 md:py-24">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-primary">
            <Logo className="h-6 w-6 sm:h-8 sm:w-8" />
            Pakistan&apos;s Largest Welfare NGO
          </div>
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-primary">Hiba Welfare</span>
              <br />
              International Trust
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-muted-foreground">
              The largest NGO offering free daily meals to underprivileged families in 63+ areas.
              Working with local communities to support those in need across Pakistan. Together,
              we&apos;re making a difference every single day.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8">
              DONATE NOW
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10" asChild>
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
          <Card className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:left-6 sm:right-6 md:right-auto md:w-72 shadow-lg border-0 bg-white">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground">450,000+</p>
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
