import { useState } from "react"
import { Building2, Copy, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type BankAccountDetail = {
  accountTitle: string
  accountNumber: string
  iban: string
  branchCode: string
  swiftCode: string
}

type BankRecord = {
  id: string
  bankName: string
  bankSubtitle: string
  restricted: BankAccountDetail
  unrestricted: BankAccountDetail
}

const bankRecords: BankRecord[] = [
  {
    id: "mcb",
    bankName: "MCB Islamic Bank",
    bankSubtitle: "MCB Islamic Bank Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust - Wajiba",
      accountNumber: "132100018966001",
      iban: "PK29MCBL132100018966001",
      branchCode: "132",
      swiftCode: "MCIBPKI",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust - Nafil",
      accountNumber: "132100018966002",
      iban: "PK29MCBL132100018966002",
      branchCode: "132",
      swiftCode: "MCIBPKI",
    },
  },
  {
    id: "dubai-islamic",
    bankName: "Dubai Islamic Bank",
    bankSubtitle: "Dubai Islamic Bank Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "0011036001",
      iban: "PK86DUIB0000000011036001",
      branchCode: "001",
      swiftCode: "DUIBPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "0011036010",
      iban: "PK86DUIB0000000011036010",
      branchCode: "010",
      swiftCode: "DUIBPKKA",
    },
  },
  {
    id: "habib-metro",
    bankName: "Habib Metro Bank",
    bankSubtitle: "Habib Metroplolitan Bank",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust (Wajiba)",
      accountNumber: "A/C-86-31867-716-10760",
      iban: "PK78MHCB0006173186771610760",
      branchCode: "016",
      swiftCode: "MPBLPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust (Nafila)",
      accountNumber: "A/C-86-31867-716-10711",
      iban: "PK78MHCB0006173186771610711",
      branchCode: "016",
      swiftCode: "MPBLPKKA",
    },
  },
  {
    id: "ubl",
    bankName: "U Bank",
    bankSubtitle: "U Bank Microfinance",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust (Wajiba)",
      accountNumber: "50-100001/797261",
      iban: "PK56UBPA0006400017970261",
      branchCode: "8144",
      swiftCode: "No Swift code",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust (Nafila)",
      accountNumber: "Unrestricted/797262",
      iban: "PK56UBPA0006400017970262",
      branchCode: "2666",
      swiftCode: "No Swift code",
    },
  },
  {
    id: "meezan",
    bankName: "Meezan Bank",
    bankSubtitle: "Meezan Bank Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "132-0161140134",
      iban: "PK77MEZN0011320161140134",
      branchCode: "0132",
      swiftCode: "MEZNPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "012-0140180512",
      iban: "PK77MEZN0011320140180512",
      branchCode: "0132",
      swiftCode: "MEZNPKKA",
    },
  },
  {
    id: "alfalah",
    bankName: "Al Baraka Bank",
    bankSubtitle: "Al Baraka (Pakistan) Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "011018/860462",
      iban: "PK61AIBL000011018860462",
      branchCode: "0118",
      swiftCode: "ALBPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "011020/860467",
      iban: "PK61AIBL000011020860467",
      branchCode: "0118",
      swiftCode: "ALBPKKA",
    },
  },
  {
    id: "bank-islami",
    bankName: "Bank Islami",
    bankSubtitle: "Bank Islami Pakistan Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "1wasee/wajiba/01",
      iban: "PK46BIPK0010000318057691",
      branchCode: "1001",
      swiftCode: "BIPKPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "1wasee/nafila/01",
      iban: "PK46BIPK0010000318057693",
      branchCode: "1001",
      swiftCode: "BIPKPKKA",
    },
  },
  {
    id: "united-bank",
    bankName: "United Bank",
    bankSubtitle: "United Bank Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "869718001614",
      iban: "PK74UNIL0112869718001614",
      branchCode: "0891",
      swiftCode: "UNILPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "611289247/0086",
      iban: "PK74UNIL6112892470086",
      branchCode: "0142",
      swiftCode: "UNILPKKA",
    },
  },
  {
    id: "faysal-bank",
    bankName: "Faysal Bank",
    bankSubtitle: "Faysal Bank Limited",
    restricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "001408000080168",
      iban: "PK75FAYS014080000080168",
      branchCode: "4081",
      swiftCode: "FAYSPKKA",
    },
    unrestricted: {
      accountTitle: "Hiba welfare Welfare International Trust",
      accountNumber: "009140000081164",
      iban: "PK75FAYS009140000081164",
      branchCode: "4081",
      swiftCode: "FAYSPKKA",
    },
  },
]

function formatBankPayload(bank: BankRecord): string {
  return [
    `${bank.bankName} (${bank.bankSubtitle})`,
    "",
    "Restricted (Zakat/Wajiba):",
    `Account Title: ${bank.restricted.accountTitle}`,
    `Account Number: ${bank.restricted.accountNumber}`,
    `IBAN: ${bank.restricted.iban}`,
    `Branch Code: ${bank.restricted.branchCode}`,
    `Swift Code: ${bank.restricted.swiftCode}`,
    "",
    "Unrestricted (Sadqah/Nafila):",
    `Account Title: ${bank.unrestricted.accountTitle}`,
    `Account Number: ${bank.unrestricted.accountNumber}`,
    `IBAN: ${bank.unrestricted.iban}`,
    `Branch Code: ${bank.unrestricted.branchCode}`,
    `Swift Code: ${bank.unrestricted.swiftCode}`,
  ].join("\n")
}

function AccountBlock({
  label,
  account,
}: {
  label: "restricted" | "unrestricted"
  account: BankAccountDetail
}) {
  const isRestricted = label === "restricted"
  const badgeClass = isRestricted
    ? "bg-red-50 text-red-600 border-red-200"
    : "bg-emerald-50 text-emerald-700 border-emerald-200"

  return (
    <div className="rounded-xl border border-black/10 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <Badge variant="outline" className={`${badgeClass} text-[10px]`}>
          {isRestricted ? "Restricted (Zakat/Wajiba)" : "Unrestricted (Sadqah/Nafila)"}
        </Badge>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">PKR</span>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div className="rounded-md border border-input bg-background px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Account Title</p>
          <p className="truncate text-xs font-medium text-foreground">{account.accountTitle}</p>
        </div>
        <div className="rounded-md border border-input bg-background px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Account Number</p>
          <p className="truncate text-xs font-medium text-foreground">{account.accountNumber}</p>
        </div>
      </div>

      <div className="mt-2 rounded-md border border-input bg-background px-3 py-2">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">IBAN</p>
        <p className="truncate text-xs font-medium text-foreground">{account.iban}</p>
      </div>

      <div className="mt-2 grid gap-2 md:grid-cols-2">
        <div className="rounded-md border border-input bg-background px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Branch Code</p>
          <p className="truncate text-xs font-medium text-foreground">{account.branchCode}</p>
        </div>
        <div className="rounded-md border border-input bg-background px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Swift Code</p>
          <p className="truncate text-xs font-medium text-foreground">{account.swiftCode}</p>
        </div>
      </div>
    </div>
  )
}

export function BankDetailsPage() {
  const [copiedBankId, setCopiedBankId] = useState<string | null>(null)

  const handleCopyDetails = async (bank: BankRecord) => {
    try {
      await navigator.clipboard.writeText(formatBankPayload(bank))
      setCopiedBankId(bank.id)
      window.setTimeout(() => setCopiedBankId((prev) => (prev === bank.id ? null : prev)), 1800)
    } catch {
      setCopiedBankId(null)
    }
  }

  return (
    <section className="bg-[hsl(120,8%,92%)] pb-10">
      <div className="bg-[#061633] px-4 py-12 text-center md:py-16">
        <Badge className="mb-4 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-emerald-300">
          Direct Bank Transfer Information
        </Badge>
        <h1 className="text-5xl font-extrabold text-white md:text-6xl">Bank Details</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-100/90">
          You can support our various causes through direct bank transfers. Please find our official bank account
          details below.
        </p>
      </div>

      <div className="mx-auto -mt-6 w-[96%] max-w-[1400px] sm:-mt-8 md:-mt-10">
        <div className="grid gap-4 md:grid-cols-2">
          {bankRecords.map((bank) => (
            <Card key={bank.id} className="rounded-2xl border border-black/10 bg-[#f8fafb] shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b border-black/10 px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white text-green-deep">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold leading-tight text-[#0f172a]">{bank.bankName}</h2>
                    <p className="text-xs text-muted-foreground">{bank.bankSubtitle}</p>
                  </div>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="rounded-full border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800"
                  onClick={() => void handleCopyDetails(bank)}
                >
                  {copiedBankId === bank.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedBankId === bank.id ? "Copied" : "Copy Details"}
                </Button>
              </CardHeader>

              <CardContent className="space-y-3 p-4">
                <AccountBlock label="restricted" account={bank.restricted} />
                <AccountBlock label="unrestricted" account={bank.unrestricted} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
