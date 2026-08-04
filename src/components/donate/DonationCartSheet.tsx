import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export type DonationCartLine = {
  id: string
  causeLabel: string
  typeLabel: string
  tag?: string
  unitPkr: number
  quantity: number
  image: string
}

export function formatPkr(n: number) {
  return `PKR ${n.toLocaleString("en-PK", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

type DonationCartSheetProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  lines: DonationCartLine[]
  onChangeQuantity: (id: string, quantity: number) => void
  onRemoveLine: (id: string) => void
  onAddMore: () => void
  onProceedToPay: () => void
}

export function DonationCartSheet({
  open,
  onOpenChange,
  lines,
  onChangeQuantity,
  onRemoveLine,
  onAddMore,
  onProceedToPay,
}: DonationCartSheetProps) {
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0)
  const subtotal = lines.reduce((sum, line) => sum + line.unitPkr * line.quantity, 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className={cn(
          "flex h-full w-full max-w-[min(100vw,520px)] flex-col gap-0 border-l border-neutral-200 bg-white p-0 md:max-w-[min(560px,48vw)]",
          "[&>button.absolute]:hidden",
        )}
      >
        <div className="relative shrink-0 border-b border-neutral-200 px-6 py-5">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-black"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex flex-wrap items-center gap-3 pr-12">
            <SheetTitle className="text-left text-lg font-bold text-black">Your Donation Cart</SheetTitle>
            <span className="rounded-full bg-[#d8f0d0] px-3 py-1 text-xs font-semibold text-green-deep">
              {totalQuantity} Items
            </span>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            {lines.map((line) => (
              <div
                key={line.id}
                className="relative flex gap-3 rounded-xl border border-neutral-200 bg-white p-3 pr-10 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => onRemoveLine(line.id)}
                  className="absolute right-2 top-2 rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
                  aria-label="Remove item"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                  <img src={line.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-black">{line.causeLabel}</p>
                  <p className="text-sm font-medium text-green-deep">{line.typeLabel}</p>
                  {line.tag ? (
                    <span className="mt-1 inline-block rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600">
                      {line.tag}
                    </span>
                  ) : null}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onChangeQuantity(line.id, Math.max(1, line.quantity - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums">
                      {line.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onChangeQuantity(line.id, line.quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="shrink-0 self-start pt-1 text-right">
                  <p className="text-sm font-bold text-green-deep">
                    {formatPkr(line.unitPkr * line.quantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="shrink-0 space-y-4 border-t border-neutral-200 bg-white px-6 py-5">
          <div className="flex justify-between text-sm text-neutral-600">
            <span>Subtotal</span>
            <span>{formatPkr(subtotal)}</span>
          </div>
          <div className="flex justify-between border-t border-neutral-100 pt-3">
            <span className="text-base font-bold text-black">Total Donation</span>
            <span className="text-xl font-bold text-green-deep">{formatPkr(subtotal)}</span>
          </div>
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-12 flex-1 rounded-xl border-neutral-300 font-semibold text-black hover:bg-neutral-50"
              onClick={onAddMore}
            >
              Add More
            </Button>
            <Button
              type="button"
              className="h-12 flex-1 rounded-xl bg-green-deep font-semibold text-white shadow-md hover:bg-green-deep/90"
              onClick={onProceedToPay}
              disabled={lines.length === 0}
            >
              Proceed to Pay
            </Button>
          </div>
          <p className="text-center text-xs text-neutral-400">Secure 256-bit SSL encrypted donation</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
