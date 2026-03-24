import { CalendarDays, Download, FileText, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AnnualNewsletterPage() {
  return (
    <section className="bg-[hsl(120,18%,96%)]">
      <div className="bg-[#081431] pb-36 pt-14 text-white">
        <div className="w-[90%] mx-auto text-center">
          <Badge className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-amber-200">
            Stay Informed
          </Badge>
          <h1 className="mt-4 text-6xl font-extrabold">Annual Newsletter</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/80">
            Stay updated with our latest initiatives, success stories, and impact reports. Our annual
            newsletter highlights the lives we&apos;ve touched and the difference we&apos;re making together.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto -mt-24">
        <Card className="overflow-hidden rounded-3xl border bg-white shadow-sm">
          <div className="grid md:grid-cols-[1fr_1.4fr]">
            <div className="bg-[hsl(120,18%,90%)] p-8">
              <div className="mx-auto flex h-80 w-56 flex-col justify-between rounded-xl bg-gradient-to-b from-green-400 to-support-blue p-5 text-white shadow-lg">
                <div>
                  <FileText className="h-7 w-7" />
                  <div className="mt-3 h-0.5 w-full bg-white/40" />
                  <p className="mt-3 text-xs uppercase tracking-[0.1em] text-white/90">Annual Report</p>
                </div>
                <p className="text-6xl font-extrabold">2024</p>
                <span className="inline-flex w-fit rounded-full bg-white/20 px-2 py-1 text-[10px] font-semibold">
                  Full Report
                </span>
              </div>
            </div>

            <CardContent className="p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-green-deep">
                Latest Release
              </p>
              <h2 className="mt-2 text-5xl font-extrabold text-foreground">Annual Newsletter 2024</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Discover our most recent achievements, new programs launched, and the incredible impact
                we&apos;ve made in communities across Pakistan.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border bg-[hsl(120,18%,96%)] p-3">
                  <p className="text-[10px] font-semibold uppercase text-muted-foreground">Pages</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-foreground">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    24 Pages
                  </p>
                </div>
                <div className="rounded-xl border bg-[hsl(120,18%,96%)] p-3">
                  <p className="text-[10px] font-semibold uppercase text-muted-foreground">Published</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm font-bold text-foreground">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    Dec 2024
                  </p>
                </div>
              </div>

              <Button className="mt-6 rounded-full bg-green-deep px-7 text-white hover:bg-green-deep/90">
                Download PDF
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="w-[90%] mx-auto py-16">
        <div className="rounded-[22px] bg-gradient-to-r from-green-500 to-support-blue px-6 py-14 text-center text-white">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mt-6 text-5xl font-extrabold">Never Miss an Update</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90">
            Join our community of supporters and receive the latest news, impact stories, and event
            invitations directly in your inbox.
          </p>

          <div className="mx-auto mt-7 flex max-w-md items-center gap-2 rounded-full border border-white/60 bg-white/10 p-1">
            <Input
              placeholder="Enter your email address"
              className="h-11 border-0 bg-transparent text-white placeholder:text-white/80 focus-visible:ring-0"
            />
            <Button className="h-10 rounded-full bg-white px-5 text-green-deep hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
