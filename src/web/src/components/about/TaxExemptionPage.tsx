import { BadgeCheck, Building2, CalendarDays, Download, Eye, FileText, Receipt, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const summaryCards = [
  {
    title: "Certified Compliance",
    subtitle: "Reviewed under relevant tax and charity compliance frameworks",
    icon: ShieldCheck,
    iconClass: "text-support-blue bg-support-blue/10",
  },
  {
    title: "Tax Benefit Clarity",
    subtitle: "Donors can review applicable exemptions and claim guidance",
    icon: Receipt,
    iconClass: "text-green-deep bg-green-deep/10",
  },
  {
    title: "Official Verification",
    subtitle: "Ensuring records are transparent and verifiable for all donors",
    icon: BadgeCheck,
    iconClass: "text-purple-600 bg-purple-100",
  },
]

const documents = [
  { year: "2025", title: "Tax Exemption Certificate 2025", issuedBy: "FBR & Relevant Authorities", issued: "January 15, 2025" },
  { year: "2024", title: "Tax Exemption Certificate 2024", issuedBy: "FBR & Relevant Authorities", issued: "July 10, 2024" },
  { year: "2023", title: "Tax Exemption Certificate 2023", issuedBy: "FBR & Relevant Authorities", issued: "July 10, 2023" },
  { year: "2022", title: "Tax Exemption Certificate 2022", issuedBy: "FBR & Relevant Authorities", issued: "July 10, 2022" },
]

export function TaxExemptionPage() {
  return (
    <section className="bg-[hsl(120,18%,96%)] py-12 md:py-16">
      <div className="w-[90%] mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-deep/25 bg-green-deep/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-deep">
            Transparency
          </span>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-foreground">Tax Exemption</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            We maintain clear and updated tax exemption documentation so donors can contribute with
            confidence and accountability.
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
            <h2 className="text-3xl font-extrabold text-foreground">Tax Documents</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              View available exemption certificates and compliance documents.
            </p>
          </div>

          <div>
            {documents.map((doc) => (
              <div
                key={doc.year}
                className="flex flex-col gap-4 border-b px-4 py-4 last:border-b-0 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-foreground">{doc.title}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        Issued by: {doc.issuedBy}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        Published: {doc.issued}
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
      </div>
    </section>
  )
}
