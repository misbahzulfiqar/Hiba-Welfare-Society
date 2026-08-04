import {
  BookOpen,
  Building2,
  Download,
  Globe,
  GraduationCap,
  HeartHandshake,
  Landmark,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type AllianceGroup = {
  title: string
  subtitle: string
  icon: typeof Globe
  iconWrap: string
  chips: string[]
}

const allianceGroups: AllianceGroup[] = [
  {
    title: "Corporate Partners",
    subtitle: "Leading businesses driving social impact",
    icon: Building2,
    iconWrap: "bg-support-blue/10 text-support-blue",
    chips: [
      "Alfalah", "Aisha", "Bahria", "Bank Al Habib", "BYCO", "Dawlance", "EFU",
      "Engro", "Faysal Bank", "Gul Ahmed", "Habib Metro", "HBL", "ICI", "Imtiaz",
      "K-Electric", "KASB", "Meezan", "National Foods", "Nestle", "Nishat", "PAKCO",
      "Pepsi", "Searle", "Shan Foods", "Summit Bank", "Tapal Tea", "UBL", "Unilever",
      "Yunus", "Zapp",
    ],
  },
  {
    title: "International NGOs",
    subtitle: "Global organizations amplifying reach",
    icon: Globe,
    iconWrap: "bg-green-deep/10 text-green-deep",
    chips: ["Dosti Reach", "Rotary International", "TIKA", "Turkiye Diyanet Vakfi"],
  },
  {
    title: "Government Bodies",
    subtitle: "Official partnerships for policy impact",
    icon: Landmark,
    iconWrap: "bg-amber-100 text-amber-600",
    chips: [
      "NLC", "Pakistan Air Force", "Pakistan Army", "Pakistan Navy", "WASA Lahore",
      "Government of Punjab", "Ehsaas Program", "Governor of Sindh", "Sindh Government",
      "Pakistan Railway",
    ],
  },
  {
    title: "Educational Institutions",
    subtitle: "Academic partnerships for skill development",
    icon: GraduationCap,
    iconWrap: "bg-purple-100 text-purple-600",
    chips: [
      "ICAP", "IQRA University", "Imam Ahmed Raza University", "Greenwich Education",
      "NexTech Academy", "Hiba welfare Mass IT Training", "SBIL",
    ],
  },
  {
    title: "Healthcare Partners",
    subtitle: "Medical institutions and suppliers",
    icon: HeartHandshake,
    iconWrap: "bg-rose-100 text-rose-600",
    chips: [
      "Hiba welfare Medical & Diagnostic Center", "Hiba welfare Blood Bank", "Mother & Child Care Center",
      "Hiba welfare Eye Care Clinic",
    ],
  },
]

export function EbookPage() {
  return (
    <section className="bg-[hsl(120,18%,96%)]">
      <div className="bg-[#0f1d3a] pb-36 pt-14 text-white">
        <div className="w-[90%] mx-auto text-center">
          <span className="inline-flex rounded-full border border-green-deep/40 bg-green-deep/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-300">
            Annual Publication
          </span>
          <h1 className="mt-4 text-5xl font-extrabold">Annual Impact E-Book</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
            Explore our comprehensive annual e-book featuring key statistics, achievements, and
            strategic partnerships that have amplified our impact across communities.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto -mt-24">
        <Card className="overflow-hidden rounded-2xl border shadow-sm">
          <div className="grid md:grid-cols-[1fr_1.3fr]">
            <div className="bg-[hsl(120,22%,90%)] p-8">
              <div className="mx-auto flex h-52 w-36 items-center justify-center rounded-lg bg-green-700 shadow-xl">
                <div className="w-[72%]">
                  <div className="h-3 w-3 rounded-full bg-white/30" />
                  <div className="mt-3 h-0.5 w-full bg-white/25" />
                  <div className="mt-2 h-0.5 w-4/5 bg-white/25" />
                  <p className="mt-24 text-3xl font-bold text-white">2024</p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-green-deep">
                Latest Edition
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-foreground">
                Impact Report & Partnership E-Book 2024
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A comprehensive digital report showcasing our year&apos;s achievements, key performance
                metrics, and strategic partnerships with leading organizations.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-md border bg-muted/40 px-3 py-2 text-xs">
                  <p className="font-semibold text-foreground">Digital Format</p>
                  <p className="text-muted-foreground">PDF v2024.0</p>
                </div>
                <div className="rounded-md border bg-muted/40 px-3 py-2 text-xs">
                  <p className="font-semibold text-foreground">File Size</p>
                  <p className="text-muted-foreground">~15 MB</p>
                </div>
              </div>

              <Button className="mt-5 rounded-full bg-green-deep px-8 text-white hover:bg-green-deep/90">
                <Download className="mr-2 h-4 w-4" />
                Download E-Book
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      <div className="w-[90%] mx-auto py-12">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-foreground">Strategic Alliances</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Collaborating with global leaders to drive sustainable change.
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {allianceGroups.map((group) => {
            const Icon = group.icon
            return (
              <Card key={group.title} className="rounded-2xl">
                <CardContent className="p-5">
                  <div className="grid gap-4 md:grid-cols-[220px_1fr] md:items-start">
                    <div>
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${group.iconWrap}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-lg font-bold text-foreground">{group.title}</p>
                      <p className="text-xs text-muted-foreground">{group.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.chips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="outline"
                          className="rounded-full border bg-[hsl(120,18%,96%)] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-7 rounded-3xl bg-[#0f1d3a] px-6 py-10 text-center text-white">
          <p className="text-4xl font-extrabold">Interested in Partnering?</p>
          <p className="mt-2 text-sm text-white/80">
            Join our network of changemakers and help us multiply our impact across Pakistan.
          </p>
          <Button variant="outline" className="mt-5 rounded-full border-white/40 bg-transparent text-white hover:bg-white/10">
            <BookOpen className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
