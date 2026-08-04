import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { navigateTo } from "@/lib/navigation"

export function DonationFailPage() {
  const orderRef = useMemo(() => new URLSearchParams(window.location.search).get("orderRef")?.trim(), [])

  return (
    <div className="min-h-screen bg-[#ececec] px-4 py-14">
      <div className="mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white px-6 py-10 shadow-sm">
        <h1 className="text-xl font-semibold text-neutral-900">Transfer cancelled or failed</h1>
        <p className="mt-3 text-sm text-neutral-600">
          You closed the transfer process before submitting proof, or transfer details were invalid. You can try again
          when ready.
        </p>
        {orderRef ? (
          <p className="mt-4 text-xs text-neutral-500">
            Reference: <span className="font-mono">{orderRef}</span>
          </p>
        ) : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" className="flex-1" onClick={() => navigateTo("/donate")}>
            Donate home
          </Button>
          <Button className="flex-1 bg-[#00a651] font-semibold text-white hover:bg-[#008f45]" onClick={() => navigateTo("/payment-details")}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
}
