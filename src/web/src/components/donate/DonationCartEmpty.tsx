import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DonationCartEmpty() {
  return (
    <section className="pt-8 pb-12">
      <div className="w-[90%] mx-auto">
        <div className="rounded-xl border bg-white shadow-sm">
          <div className="flex items-start justify-between gap-4 border-b px-5 py-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Your Donation Cart
              </h2>
              <div className="mt-1">
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  0 Items
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full"
              aria-label="Close cart"
              onClick={() => {
                // Placeholder (cart integration can be added later).
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-muted/30">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-muted-foreground"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7.5C4 6.67157 4.67157 6 5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 10H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 13L10 15L14 15L12 13Z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Your cart is empty
            </h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Start making a difference by exploring our causes and donation
              packages
            </p>

            <Button
              className="mt-7 h-12 rounded-full bg-[#4CAF50] px-10 text-white hover:bg-[#43A047]"
              onClick={() => {
                window.location.hash = "#donate"
              }}
            >
              Explore Causes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

