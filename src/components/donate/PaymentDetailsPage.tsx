import { useEffect, useMemo, useState } from "react"
import { Building2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { formatPkr } from "@/components/donate/DonationCartSheet"
import {
  PAYMENT_CHECKOUT_STORAGE_KEY,
  readPaymentCheckoutPayload,
  type PaymentCheckoutPayload,
} from "@/lib/paymentCheckout"
import { createEasypaisaDonation, submitBankTransferProof } from "@/lib/paymentApi"
import { navigateTo } from "@/lib/navigation"

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-3 text-xs sm:text-sm">
      <span className="font-bold uppercase tracking-wide text-neutral-900">{label}</span>
      <span className="max-w-[60%] text-right font-medium text-neutral-500">{value}</span>
    </div>
  )
}

function BankMark() {
  return (
    <div className="mx-auto flex w-max flex-col items-center rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0057B8] text-white shadow-inner">
        <Building2 className="h-8 w-8" aria-hidden />
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-700">
        Faysal Bank transfer
      </span>
    </div>
  )
}

export function PaymentDetailsPage() {
  const [payload, setPayload] = useState<PaymentCheckoutPayload | null>(null)
  const [isLoadingOrder, setIsLoadingOrder] = useState(false)
  const [isSubmittingProof, setIsSubmittingProof] = useState(false)
  const [orderRef, setOrderRef] = useState("")
  const [transferId, setTransferId] = useState("")
  const [senderName, setSenderName] = useState("")
  const [senderPhone, setSenderPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [bankDetails, setBankDetails] = useState<{
    bankName: string
    accountTitle: string
    accountNumber: string
    iban: string
    swiftCode: string
    branchName: string
    branchCode: string
  } | null>(null)

  useEffect(() => {
    const p = readPaymentCheckoutPayload()
    if (!p) {
      toast.error("Payment session expired. Start again from donations.")
      navigateTo("/donate")
      return
    }
    setPayload(p)
    setSenderName(p.donor?.name ?? "")
  }, [])

  const hasOrder = orderRef.length > 0 && bankDetails !== null
  const transferHelpText = useMemo(
    () =>
      "Transfer this amount using your banking app, then submit your reference so our team can verify and confirm.",
    [],
  )

  const handleGenerateOrder = async () => {
    if (!payload) return
    setIsLoadingOrder(true)
    try {
      const body: Record<string, unknown> = {
        totalPayable: payload.totalPayable,
        merchantName: payload.merchantName,
        order: payload.order,
        orderDescription: payload.orderDescription,
        donationAmount: payload.donationAmount,
        bankCharges: payload.bankCharges,
        gateway: payload.gateway,
        donationFrequency: payload.donationFrequency,
        donor: payload.donor ?? null,
        cartLines: payload.cartLines ?? null,
      }

      const result = await createEasypaisaDonation(body)
      if (!result.ok) {
        toast.error(result.error ?? "Could not create donation reference")
        return
      }
      setOrderRef(result.orderRef)
      setBankDetails(result.bankDetails)
      toast.success("Reference generated. Complete transfer and submit proof.")
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Try again.")
    } finally {
      setIsLoadingOrder(false)
    }
  }

  const handleSubmitProof = async () => {
    if (!hasOrder) return
    const tx = transferId.trim()
    if (!tx) {
      toast.error("Enter your transfer transaction/reference ID")
      return
    }
    setIsSubmittingProof(true)
    try {
      const r = await submitBankTransferProof({
        orderRef,
        transactionId: tx,
        senderName: senderName.trim() || undefined,
        senderPhone: senderPhone.trim() || undefined,
        notes: notes.trim() || undefined,
      })
      if (!r.ok) {
        toast.error(r.error ?? "Could not submit transfer proof")
        return
      }
      navigateTo(`/donation-success?orderRef=${encodeURIComponent(orderRef)}`)
    } finally {
      setIsSubmittingProof(false)
    }
  }

  if (!payload) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f0f0f0]">
        <p className="text-sm text-neutral-500">Loading…</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#ececec] px-4 py-10 md:py-14">
      <div className="mx-auto max-w-lg">
        <BankMark />
        <h1 className="mt-8 text-center text-2xl font-semibold tracking-tight text-neutral-900 md:text-[1.65rem]">
          Complete your donation
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-neutral-600">
          Pay directly to our Faysal Bank account, then submit your transfer reference for verification.
        </p>

        <div className="mt-10">
          <SummaryRow label="Name" value={payload.merchantName} />
          <SummaryRow label="Order" value={payload.order} />
          <SummaryRow label="Order description" value={payload.orderDescription} />
          <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-3 text-xs sm:text-sm">
            <span className="font-bold uppercase tracking-wide text-neutral-900">Amount (PKR)</span>
            <span className="font-bold text-neutral-900">{formatPkr(payload.totalPayable)}</span>
          </div>
        </div>

        <div className="mt-10">
          <Button
            type="button"
            className="h-12 w-full rounded-md border-0 bg-[#0057B8] font-bold text-white shadow-sm hover:bg-[#00408a] disabled:opacity-60"
            onClick={() => void handleGenerateOrder()}
            disabled={isLoadingOrder || hasOrder}
          >
            {hasOrder ? "Reference created" : isLoadingOrder ? "Creating reference…" : "Generate transfer reference"}
          </Button>
        </div>

        {hasOrder && bankDetails ? (
          <div className="mt-6 space-y-3 rounded-xl border border-neutral-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wide text-neutral-500">Donation Reference</p>
            <p className="font-mono text-sm font-semibold text-neutral-900">{orderRef}</p>
            <p className="text-xs text-neutral-600">{transferHelpText}</p>

            <div className="grid gap-2 text-sm text-neutral-700">
              <div><span className="font-semibold">Bank:</span> {bankDetails.bankName}</div>
              <div><span className="font-semibold">Account Title:</span> {bankDetails.accountTitle}</div>
              <div><span className="font-semibold">Account Number:</span> {bankDetails.accountNumber}</div>
              <div><span className="font-semibold">IBAN:</span> {bankDetails.iban}</div>
              <div><span className="font-semibold">Swift Code:</span> {bankDetails.swiftCode}</div>
              <div><span className="font-semibold">Branch:</span> {bankDetails.branchName} ({bankDetails.branchCode})</div>
            </div>

            <div className="space-y-3 pt-2">
              <Input
                placeholder="Transfer reference / transaction ID *"
                value={transferId}
                onChange={(e) => setTransferId(e.target.value)}
              />
              <Input
                placeholder="Sender name (optional)"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
              <Input
                placeholder="Sender phone (optional)"
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
              />
              <Input
                placeholder="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <Button
                type="button"
                className="h-11 w-full rounded-md border-0 bg-[#00a651] font-bold text-white shadow-sm hover:bg-[#008f45] disabled:opacity-60"
                onClick={() => void handleSubmitProof()}
                disabled={isSubmittingProof}
              >
                {isSubmittingProof ? "Submitting proof…" : "I have transferred, submit proof"}
              </Button>
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => {
            sessionStorage.removeItem(PAYMENT_CHECKOUT_STORAGE_KEY)
            navigateTo("/donate")
          }}
          className="mt-4 text-sm font-semibold text-green-deep underline-offset-2 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
