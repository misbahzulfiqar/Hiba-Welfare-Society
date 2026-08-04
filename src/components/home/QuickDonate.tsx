import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type QuickDonateTab = {
  id: string
  label: string
  active: boolean
}

type DonationOption = {
  amount: string
  value: string
}

const tabs: QuickDonateTab[] = [
  { id: "ramzan", label: "Ramsan Donation", active: true },
  { id: "general", label: "General", active: false },
  { id: "daily-food", label: "Daily Food", active: false },
  { id: "medical", label: "Medical", active: false },
  { id: "welfare", label: "Welfare", active: false },
  { id: "education", label: "Education", active: false },
]

const donationOptions: DonationOption[] = [
  { amount: "PKR 300", value: "7,000" },
  { amount: "USD $1", value: "$26" },
  { amount: "CAD $1.5", value: "$37" },
  { amount: "GBP £1", value: "£20" },
  { amount: "SAR 5", value: "100" },
  { amount: "EURO €1", value: "€23" },
  { amount: "AUD 2", value: "40" },
  { amount: "TRY 55", value: "" },
  { amount: "AED 5", value: "" },
]

export function QuickDonate() {
  return (
    <section className="border-t bg-white py-12 sm:py-16 md:py-20">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Quick <span className="text-primary">Donate</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Choose your cause and make an impact today
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Two Donation Cards */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Left Card - Ramzan Donation */}
          <div className="group relative overflow-hidden rounded-2xl bg-muted min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=400&q=80"
              alt="Ramzan Donations"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <span className="absolute top-4 right-4 rounded bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              RAMZAN
            </span>
            <div className="relative flex h-full flex-col p-4 pt-10 sm:p-6 sm:pt-12">
              <div className="flex flex-1 flex-col lg:flex-row lg:items-end lg:gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Ramzan Donation
                  </h3>
                  <p className="mt-2 max-w-sm text-xs sm:text-sm text-white/90">
                    Make your Ramzan Donation 2026 a source of mercy and reward.
                  </p>
                </div>
                <div className="mt-4 rounded-lg bg-black/40 p-2.5 sm:p-3 text-white backdrop-blur-sm lg:mt-0 lg:min-w-[200px]">
                  <p className="text-xs font-medium text-white/80">Zakat, Sehri and Iftari, Ration</p>
                  <div className="mt-1.5 sm:mt-2 space-y-0.5 text-[10px] sm:text-xs overflow-x-auto">
                    {donationOptions.map((opt) => (
                      <div key={opt.amount}>
                        {opt.amount}{opt.value ? ` → ${opt.value}` : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button
                  size="lg"
                  className="w-fit bg-white text-black hover:bg-white/90 shrink-0"
                  asChild
                >
                  <a href="#donate-ramzan">DONATE NOW</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card - Fitra, Fidya & Kaffara */}
          <div className="group relative overflow-hidden rounded-2xl bg-muted min-h-[320px] sm:min-h-[380px] md:min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=600&q=80"
              alt="Fitra, Fidya & Kaffara"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <span className="absolute top-4 right-4 rounded bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              RAMZAN
            </span>
            <div className="relative flex h-full flex-col p-4 pt-10 sm:p-6 sm:pt-12">
              <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Your&apos;s Fitra, Fidya & Kaffara
              </h3>
              <p className="mt-2 max-w-sm text-xs sm:text-sm text-white/90">
                Fulfill your religious obligations through Fitra, Fidya, and Kaffara.
              </p>
              <div className="mt-auto flex justify-end pt-6">
                <Button
                  size="lg"
                  className="w-fit bg-white text-black hover:bg-white/90"
                  asChild
                >
                  <a href="#donate-fitra">DONATE NOW</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Central CTA */}
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#donate">
              DONATE NOW
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
