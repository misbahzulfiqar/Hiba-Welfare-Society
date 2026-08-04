import { createPortal } from "react-dom"
import { ShieldCheck, Loader2 } from "lucide-react"

type PaymentGatewayLoadingOverlayProps = {
  open: boolean
}

export function PaymentGatewayLoadingOverlay({ open }: PaymentGatewayLoadingOverlayProps) {
  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[250] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a]/95 via-[#14532d]/90 to-[#0f172a]/95 backdrop-blur-md transition-opacity duration-300 ease-out"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-green-deep/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center px-6">
        <div className="relative mb-10">
          <div className="absolute inset-0 animate-ping rounded-full bg-white/10" style={{ animationDuration: "2s" }} />
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
            <ShieldCheck className="h-14 w-14 text-emerald-300" strokeWidth={1.25} />
            <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-deep shadow-lg">
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Connecting to payment gateway
        </h2>
        <p className="mt-3 max-w-sm text-center text-sm leading-relaxed text-white/75 md:text-base">
          Please wait while we prepare a secure session. Your details are encrypted.
        </p>

        <div className="mt-10 h-1.5 w-56 overflow-hidden rounded-full bg-white/15 md:w-72">
          <div className="payment-gateway-loading-bar h-full w-2/5 rounded-full bg-gradient-to-r from-emerald-400 via-white to-emerald-400" />
        </div>
      </div>

      <style>{`
        @keyframes paymentGatewayBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(350%); }
        }
        .payment-gateway-loading-bar {
          animation: paymentGatewayBar 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>,
    document.body,
  )
}
