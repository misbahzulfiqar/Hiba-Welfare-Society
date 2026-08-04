import { useEffect, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { formatPkr } from "@/components/donate/DonationCartSheet"
import { estimatedBankCharges, type PaymentGatewayId } from "@/lib/paymentCheckout"

type PaymentInformationDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  donationAmountPkr: number
  onProceedToPayment: (opts: {
    gateway: PaymentGatewayId
    donationType: "once" | "recurring"
  }) => void
}

function RadioDot({ selected }: { selected: boolean }) {
  return (
    <span
      className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2",
        selected ? "border-green-deep bg-green-deep" : "border-neutral-300 bg-white",
      )}
    >
      {selected ? <span className="h-1.5 w-1.5 rounded-full bg-white" /> : null}
    </span>
  )
}

function GatewayLogoStrip({ variant }: { variant: "cards" | "multi" }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {variant === "cards" ? (
        <>
          <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1a1f71]">
            VISA
          </span>
          <span className="rounded border border-neutral-200 bg-white px-2 py-0.5 text-[10px] font-semibold text-[#eb001b]">
            MC
          </span>
        </>
      ) : (
        <>
          <span className="rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[9px] font-bold text-[#1a1f71]">
            VISA
          </span>
          <span className="rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[9px] font-bold text-[#eb001b]">
            MC
          </span>
          <span className="rounded border border-neutral-200 bg-[#fff5f5] px-1.5 py-0.5 text-[9px] font-bold text-green-700">
            EP
          </span>
          <span className="rounded border border-neutral-200 bg-[#fff8e6] px-1.5 py-0.5 text-[9px] font-bold text-amber-800">
            JC
          </span>
          <span className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[8px] font-bold text-neutral-700">
            1Link
          </span>
        </>
      )}
    </div>
  )
}

export function PaymentInformationDialog({
  open,
  onOpenChange,
  donationAmountPkr,
  onProceedToPayment,
}: PaymentInformationDialogProps) {
  const [gateway, setGateway] = useState<PaymentGatewayId>("ubl")
  const [donationType, setDonationType] = useState<"once" | "recurring">("once")

  useEffect(() => {
    if (open) {
      setGateway("ubl")
      setDonationType("once")
    }
  }, [open])

  const charges = estimatedBankCharges(donationAmountPkr)
  const total = Number((donationAmountPkr + charges).toFixed(2))

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-[100]",
            "bg-black/50",
            "transition-opacity duration-300 ease-in-out",
            "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[100] w-[calc(100%-1.5rem)] max-w-[460px] -translate-x-1/2 -translate-y-1/2 outline-none",
            "rounded-[18px] bg-white shadow-2xl",
            "transition-[opacity,transform] duration-300 ease-in-out",
            "data-[state=closed]:scale-[0.97] data-[state=closed]:opacity-0",
            "data-[state=open]:scale-100 data-[state=open]:opacity-100",
          )}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="relative rounded-t-[18px] bg-green-deep px-6 pb-10 pt-5 text-center">
            <DialogPrimitive.Title className="text-lg font-bold text-white">Payment Information</DialogPrimitive.Title>
            <DialogPrimitive.Close
              type="button"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </DialogPrimitive.Close>
          </div>

          <div className="-mt-6 space-y-5 rounded-t-[18px] bg-white px-5 pb-6 pt-5 sm:px-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <span className="font-medium text-slate-500">Donation Amount</span>
                <span className="font-bold text-slate-900">{formatPkr(donationAmountPkr)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="font-medium text-slate-500">Estimated Bank Charges</span>
                <span className="font-bold text-slate-900">{formatPkr(charges)}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-neutral-100 pt-3">
                <span className="font-semibold text-slate-800">Total Payable</span>
                <span className="text-lg font-bold text-slate-900">{formatPkr(total)}</span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 font-bold text-slate-900">Select Payment Gateway</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGateway("ubl")}
                  className={cn(
                    "rounded-xl border-2 bg-white p-3 text-left transition-colors",
                    gateway === "ubl" ? "border-green-deep" : "border-neutral-200",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-900">UBL Digital</span>
                    <RadioDot selected={gateway === "ubl"} />
                  </div>
                  <GatewayLogoStrip variant="cards" />
                </button>
                <button
                  type="button"
                  onClick={() => setGateway("blinq")}
                  className={cn(
                    "rounded-xl border-2 bg-white p-3 text-left transition-colors",
                    gateway === "blinq" ? "border-green-deep" : "border-neutral-200",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-900">Blinq</span>
                    <RadioDot selected={gateway === "blinq"} />
                  </div>
                  <GatewayLogoStrip variant="multi" />
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-neutral-100 px-4 py-4">
              <p className="mb-3 font-bold text-slate-900">Donation Type</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="donation-type"
                    className="sr-only"
                    checked={donationType === "once"}
                    onChange={() => setDonationType("once")}
                  />
                  <RadioDot selected={donationType === "once"} />
                  <span className={cn("text-sm", donationType === "once" ? "text-slate-900" : "text-slate-500")}>
                    One Time
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="donation-type"
                    className="sr-only"
                    checked={donationType === "recurring"}
                    onChange={() => setDonationType("recurring")}
                  />
                  <RadioDot selected={donationType === "recurring"} />
                  <span
                    className={cn(
                      "text-sm",
                      donationType === "recurring" ? "font-medium text-slate-900" : "text-slate-400",
                    )}
                  >
                    Recurring
                  </span>
                </label>
              </div>
            </div>

            <Button
              type="button"
              className="h-12 w-full rounded-full bg-green-deep text-base font-bold text-white shadow-md transition hover:bg-green-deep/90"
              onClick={() => onProceedToPayment({ gateway, donationType: donationType })}
            >
              Proceed to Payment
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
