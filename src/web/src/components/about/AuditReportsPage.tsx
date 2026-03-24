import { BarChart3, Building2, CalendarDays, Download, Eye, FileText, Scale, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const summaryCards = [
  {
    title: "Independent Audits",
    subtitle: "Conducted by top-tier chartered accountancy firms",
    icon: ShieldCheck,
    iconClass: "text-support-blue bg-support-blue/10",
  },
  {
    title: "Financial Transparency",
    subtitle: "Full breakdown of income, expenses, and allocations",
    icon: BarChart3,
    iconClass: "text-green-deep bg-green-deep/10",
  },
  {
    title: "Accountability",
    subtitle: "Ensuring every donation creates maximum impact",
    icon: Scale,
    iconClass: "text-purple-600 bg-purple-100",
  },
]

const reports = [
  { year: "2025", firm: "Haseen Naeem & Co, Chartered Accountants", published: "January 15, 2025" },
  { year: "2024", firm: "Haseen Naeem & Co, Chartered Accountants", published: "July 10, 2024" },
  { year: "2023", firm: "Haseen Naeem & Co, Chartered Accountants", published: "July 10, 2023" },
  { year: "2022", firm: "Haseen Naeem & Co, Chartered Accountants", published: "July 10, 2022" },
  { year: "2021", firm: "F.Z. Merchant & Co, Chartered Accountants", published: "July 10, 2021" },
  { year: "2020", firm: "F.Z. Merchant & Co, Chartered Accountants", published: "July 10, 2020" },
]

export function AuditReportsPage() {
  return (
    <section className="bg-[hsl(120,18%,96%)] py-12 md:py-16">
      <div className="w-[90%] mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-deep/25 bg-green-deep/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-deep">
            Transparency
          </span>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-foreground">Audit Reports</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            As part of our commitment to transparency and accountability, we publish annual audit
            reports conducted by independent chartered accountants.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {summaryCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-lg ${card.iconClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-lg font-bold text-foreground">{card.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.subtitle}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border bg-white">
          <div className="border-b p-5">
            <h2 className="text-3xl font-extrabold text-foreground">Annual Reports</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Review our financial performance and impact over the years.
            </p>
          </div>

          <div>
            {reports.map((report) => (
              <div
                key={report.year}
                className="flex flex-col gap-4 border-b px-4 py-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-foreground">Annual Audit Report {report.year}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        Audited by: {report.firm}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        Published: {report.published}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="h-8 border-green-deep/25 text-xs">
                    <Eye className="mr-1 h-3.5 w-3.5" />
                    View PDF
                  </Button>
                  <Button size="sm" className="h-8 bg-green-deep text-xs text-white hover:bg-green-deep/90">
                    <Download className="mr-1 h-3.5 w-3.5" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border bg-[hsl(120,18%,94%)] p-6 text-center">
          <p className="text-xl font-extrabold text-foreground">Have Questions?</p>
          <p className="mt-1 text-xs text-muted-foreground">
            We are committed to absolute transparency. If you have any questions about our financial
            reports, please contact us.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="rounded-full border bg-white px-3 py-1.5">Email: info@saylaniwelfare.com</span>
            <span className="rounded-full border bg-white px-3 py-1.5">Phone: +92-21-111-729-526</span>
          </div>
        </div>
      </div>
    </section>
  )
}
