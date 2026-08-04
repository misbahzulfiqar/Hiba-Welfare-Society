import { useState } from "react"
import { Building2, Copy, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type BankAccountDetail = {
  accountTitle: string
  accountNumber: string
  iban: string
}

type BankRecord = {
  id: string
  bankName: string
  bankSubtitle: string
  account: BankAccountDetail
}

const bankRecords: BankRecord[] = [
  {
    id: "faysal-bank",
    bankName: "Faysal Bank",
    bankSubtitle: "Faysal Bank Limited",
    account: {
      accountTitle: "HIBA WELFARE SOCIETY",
      accountNumber: "3395499000002377",
      iban: "PK83FAYS3395499000002377",
    },
  },
]

function formatBankPayload(bank: BankRecord): string {
  return [
    `${bank.bankName} (${bank.bankSubtitle})`,
    "",
    `Account Title: ${bank.account.accountTitle}`,
    `Account Number: ${bank.account.accountNumber}`,
    `IBAN: ${bank.account.iban}`,
  ].join("\n")
}

function CopyFieldButton({
  fieldKey,
  value,
  copiedKey,
  onCopy,
}: {
  fieldKey: string
  value: string
  copiedKey: string | null
  onCopy: (key: string, value: string) => void
}) {
  const isCopied = copiedKey === fieldKey
  return (
    <button
      type="button"
      onClick={() => onCopy(fieldKey, value)}
      className="ml-2 inline-flex shrink-0 items-center justify-center rounded-md border border-black/10 bg-white p-1.5 text-muted-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-700"
      aria-label={isCopied ? "Copied" : "Copy"}
      title={isCopied ? "Copied" : "Copy"}
    >
      {isCopied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

function FieldRow({
  label,
  value,
  fieldKey,
  copiedKey,
  onCopy,
  className = "",
}: {
  label: string
  value: string
  fieldKey: string
  copiedKey: string | null
  onCopy: (key: string, value: string) => void
  className?: string
}) {
  return (
    <div className={`rounded-md border border-input bg-background px-3 py-2 ${className}`}>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="mt-0.5 flex items-center justify-between gap-2">
        <p className="min-w-0 truncate text-xs font-medium text-foreground">{value}</p>
        <CopyFieldButton fieldKey={fieldKey} value={value} copiedKey={copiedKey} onCopy={onCopy} />
      </div>
    </div>
  )
}

function AccountBlock({
  bank,
  copiedKey,
  onCopyField,
}: {
  bank: BankRecord
  copiedKey: string | null
  onCopyField: (key: string, value: string) => void
}) {
  const { account } = bank
  const prefix = bank.id

  return (
    <div className="rounded-xl border border-black/10 bg-white p-4">
      <div className="mb-3 flex items-center justify-end">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">PKR</span>
      </div>

      <div className="grid gap-2">
        <FieldRow
          label="Bank Name"
          value={bank.bankName}
          fieldKey={`${prefix}-bankName`}
          copiedKey={copiedKey}
          onCopy={onCopyField}
        />
        <FieldRow
          label="Account Title"
          value={account.accountTitle}
          fieldKey={`${prefix}-accountTitle`}
          copiedKey={copiedKey}
          onCopy={onCopyField}
        />
        <FieldRow
          label="Account Number"
          value={account.accountNumber}
          fieldKey={`${prefix}-accountNumber`}
          copiedKey={copiedKey}
          onCopy={onCopyField}
        />
        <FieldRow
          label="IBAN"
          value={account.iban}
          fieldKey={`${prefix}-iban`}
          copiedKey={copiedKey}
          onCopy={onCopyField}
        />
      </div>
    </div>
  )
}

export function BankDetailsPage() {
  const [copiedBankId, setCopiedBankId] = useState<string | null>(null)
  const [copiedFieldKey, setCopiedFieldKey] = useState<string | null>(null)

  const handleCopyDetails = async (bank: BankRecord) => {
    try {
      await navigator.clipboard.writeText(formatBankPayload(bank))
      setCopiedBankId(bank.id)
      setCopiedFieldKey(null)
      window.setTimeout(() => setCopiedBankId((prev) => (prev === bank.id ? null : prev)), 1800)
    } catch {
      setCopiedBankId(null)
    }
  }

  const handleCopyField = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedFieldKey(key)
      setCopiedBankId(null)
      window.setTimeout(() => setCopiedFieldKey((prev) => (prev === key ? null : prev)), 1800)
    } catch {
      setCopiedFieldKey(null)
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4">
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
                <AccountBlock bank={bank} copiedKey={copiedFieldKey} onCopyField={(k, v) => void handleCopyField(k, v)} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
