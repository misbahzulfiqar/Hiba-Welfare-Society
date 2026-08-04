import { useEffect, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { Check, ChevronRight, HandHeart, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { clearDonorSession, getDonorSession, getDonorToken } from "@/lib/donorSession"
import { isAuthApiError, useDonorMe } from "@/hooks/useDonorAuth"
import { navigateTo } from "@/lib/navigation"

type AccountTab = "donations" | "subscriptions" | "settings"

export function DonorAccountDashboard() {
  const qc = useQueryClient()
  const [tab, setTab] = useState<AccountTab>("donations")
  const session = getDonorSession()
  const token = getDonorToken()
  const { data: me, isLoading, isError, error } = useDonorMe()

  useEffect(() => {
    if (!token) {
      navigateTo("/donor-login")
    }
  }, [token])

  useEffect(() => {
    if (isError && isAuthApiError(error, 401)) {
      clearDonorSession()
      qc.removeQueries({ queryKey: ["auth"] })
      navigateTo("/donor-login")
    }
  }, [isError, error, qc])

  const handleLogout = () => {
    clearDonorSession()
    qc.removeQueries({ queryKey: ["auth"] })
    navigateTo("/donor-login")
  }

  if (!token || !session) {
    return null
  }

  const displayName = me?.name ?? session.name
  const displayEmail = me?.email ?? session.email
  const verified = me?.verified ?? session.verified

  return (
    <section className="bg-white py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1100px] px-6 md:px-10">
        {isLoading && !me ? (
          <p className="text-sm text-neutral-500">Loading your account…</p>
        ) : null}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 space-y-3">
            <h1 className="text-2xl font-bold tracking-tight text-black md:text-[28px]">
              Welcome, {displayName}
            </h1>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500 md:text-base">
              <span>
                Email: <span className="text-neutral-600">{displayEmail}</span>
              </span>
              {verified ? (
                <span className="inline-flex items-center gap-1 font-medium text-[#28A745]">
                  Verified
                  <Check className="h-4 w-4 shrink-0 stroke-[2.5]" aria-hidden />
                </span>
              ) : null}
            </div>
          </div>
          <Button
            type="button"
            onClick={handleLogout}
            className="h-10 shrink-0 rounded-md bg-[#D32F2F] px-4 text-sm font-semibold text-white hover:bg-[#b71c1c] sm:self-start"
          >
            <LogOut className="mr-2 h-4 w-4" aria-hidden />
            Logout
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(
            [
              ["donations", "Donations"],
              ["subscriptions", "Subscriptions"],
              ["settings", "Settings"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                tab === key
                  ? "border-neutral-300 bg-white text-black"
                  : "border-neutral-200 bg-white text-black hover:bg-neutral-50",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "donations" ? (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-black md:text-xl">Recent Donations</h2>
            <div className="mt-4 border-t border-neutral-200" />
            <div className="mt-4 grid grid-cols-5 gap-2 text-xs font-bold uppercase tracking-wide text-black sm:text-sm">
              <span>DN #</span>
              <span>Date</span>
              <span>Status</span>
              <span>Amount</span>
              <span className="text-right sm:text-left">Receipt</span>
            </div>
            <p className="mt-6 text-center text-sm text-neutral-500">A list of your recent donations.</p>

            <div className="mx-auto mt-12 flex max-w-md flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100">
                <HandHeart className="h-7 w-7 text-black" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-6 text-lg font-bold text-black">No Donations Yet</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                You haven&apos;t created any donations yet.
                <br />
                Get started by making your first donation.
              </p>
              <Button
                type="button"
                className="mt-8 h-11 rounded-md bg-[#5CB85C] px-6 text-base font-semibold text-white hover:bg-[#4cae4c]"
                onClick={() => navigateTo("/donate")}
              >
                Donate Now
                <ChevronRight className="ml-1 h-5 w-5" aria-hidden />
              </Button>
            </div>
          </div>
        ) : null}

        {tab === "subscriptions" ? (
          <div className="mt-10 rounded-lg border border-neutral-200 bg-white px-6 py-16 text-center">
            <p className="text-sm text-neutral-500">You have no active subscriptions.</p>
          </div>
        ) : null}

        {tab === "settings" ? (
          <div className="mt-10 rounded-lg border border-neutral-200 bg-white px-6 py-16 text-center">
            <p className="text-sm text-neutral-500">Account settings will be available soon.</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
