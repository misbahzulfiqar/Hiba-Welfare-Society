import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PAYMENT_CHECKOUT_STORAGE_KEY } from "@/lib/paymentCheckout"
import { verifyEasypaisaDonation } from "@/lib/paymentApi"
import { navigateTo } from "@/lib/navigation"
import { formatPkr } from "@/components/donate/DonationCartSheet"
import { ConfettiCelebration } from "@/components/donate/ConfettiCelebration"

export function DonationSuccessPage() {
  const [state, setState] = useState<
    | { phase: "loading" }
    | {
        phase: "pending"
        orderRef: string
        amountPkr: number
        donorName: string
        transactionId: string
      }
    | {
        phase: "ok"
        orderRef: string
        amountPkr: number
        donorName: string
        transactionId: string
      }
    | { phase: "failed"; detail?: string; orderRef: string }
    | { phase: "error"; message: string }
  >({ phase: "loading" })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const orderRef = params.get("orderRef")?.trim()
    if (!orderRef) {
      setState({
        phase: "error",
        message: "Missing payment reference. If you completed a donation, contact us with your receipt.",
      })
      return
    }

    let cancelled = false

    const applyResult = async () => {
      const result = await verifyEasypaisaDonation(orderRef)
      if (cancelled) return result
      if (!result.ok) {
        setState({ phase: "error", message: result.error ?? "Could not verify payment." })
        return result
      }
      if (result.status === "failed") {
        setState({ phase: "failed", detail: result.detail, orderRef: result.orderRef })
        return result
      }
      if (result.status === "pending") {
        setState({
          phase: "pending",
          orderRef: result.orderRef,
          amountPkr: result.amountPkr,
          donorName: result.donorName,
          transactionId: result.transactionId,
        })
        return result
      }
      sessionStorage.removeItem(PAYMENT_CHECKOUT_STORAGE_KEY)
      setState({
        phase: "ok",
        orderRef: result.orderRef,
        amountPkr: result.amountPkr,
        donorName: result.donorName,
        transactionId: result.transactionId,
      })
      return result
    }

    void applyResult()

    // While pending, poll so donor sees “Thanks” after admin marks received
    const poll = window.setInterval(() => {
      void (async () => {
        const result = await verifyEasypaisaDonation(orderRef)
        if (cancelled || !result.ok) return
        if (result.status === "success") {
          sessionStorage.removeItem(PAYMENT_CHECKOUT_STORAGE_KEY)
          setState({
            phase: "ok",
            orderRef: result.orderRef,
            amountPkr: result.amountPkr,
            donorName: result.donorName,
            transactionId: result.transactionId,
          })
          window.clearInterval(poll)
        } else if (result.status === "failed") {
          setState({ phase: "failed", detail: result.detail, orderRef: result.orderRef })
          window.clearInterval(poll)
        }
      })()
    }, 4000)

    return () => {
      cancelled = true
      window.clearInterval(poll)
    }
  }, [])

  const showConfetti = state.phase === "ok"

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ececec] px-4 py-14">
      <ConfettiCelebration active={showConfetti} delayMs={1000} />

      <div className="relative z-10 mx-auto max-w-lg rounded-2xl border border-neutral-200 bg-white px-6 py-10 shadow-sm">
        {state.phase === "loading" ? (
          <p className="text-center text-sm text-neutral-600">Confirming your donation…</p>
        ) : state.phase === "error" ? (
          <>
            <h1 className="text-xl font-semibold text-neutral-900">Could not confirm</h1>
            <p className="mt-3 text-sm text-neutral-600">{state.message}</p>
            <Button className="mt-8 w-full" variant="outline" onClick={() => navigateTo("/donate")}>
              Back to donate
            </Button>
          </>
        ) : state.phase === "failed" ? (
          <>
            <h1 className="text-xl font-semibold text-neutral-900">Payment not completed</h1>
            <p className="mt-3 text-sm text-neutral-600">
              {state.detail ?? "Bank transfer could not be verified."}
            </p>
            <p className="mt-2 text-xs text-neutral-500">Reference: {state.orderRef}</p>
            <Button className="mt-8 w-full" onClick={() => navigateTo("/donate")}>
              Back to donate
            </Button>
          </>
        ) : state.phase === "pending" ? (
          <>
            <h1 className="text-xl font-semibold text-neutral-900">Awaiting verification</h1>
            <p className="mt-3 text-sm text-neutral-600">
              Your transfer proof has been submitted. Our team will verify and confirm your donation
              shortly. Keep this page open — it updates when payment is received.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              Amount: <span className="font-semibold text-neutral-900">{formatPkr(state.amountPkr)}</span>
            </p>
            {state.transactionId ? (
              <p className="mt-2 text-xs text-neutral-500">
                Transfer Ref: <span className="font-mono">{state.transactionId}</span>
              </p>
            ) : null}
            <p className="mt-2 text-xs text-neutral-500">Order: {state.orderRef}</p>
            <Button className="mt-8 h-11 w-full" onClick={() => navigateTo("/donate")}>
              Done
            </Button>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00a651]/15 text-[#00a651]">
                <CheckCircle2 className="h-9 w-9" aria-hidden />
              </div>
            </div>
            <h1 className="mt-6 text-center text-2xl font-semibold text-neutral-900">
              Thanks for donation
            </h1>
            <p className="mt-3 text-center text-sm text-neutral-600">
              Payment received
              {state.donorName ? (
                <>
                  {" "}
                  — thank you, <span className="font-medium text-neutral-800">{state.donorName}</span>
                </>
              ) : null}
              . Your donation of{" "}
              <span className="font-semibold text-neutral-900">{formatPkr(state.amountPkr)}</span> has
              been confirmed.
            </p>
            {state.transactionId ? (
              <p className="mt-4 text-center text-xs text-neutral-500">
                Transaction ID: <span className="font-mono">{state.transactionId}</span>
              </p>
            ) : null}
            <p className="mt-2 text-center text-xs text-neutral-400">Order: {state.orderRef}</p>
            <Button
              className="mt-10 h-11 w-full bg-[#00a651] font-semibold text-white hover:bg-[#008f45]"
              onClick={() => navigateTo("/donate")}
            >
              Done
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
