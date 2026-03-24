import { ArrowUpToLine } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { label: "Ramadan Sehri & Iftari", href: "#sehri-iftari" },
  { label: "Ramadan Ration", href: "#ration" },
  { label: "Zakat", href: "#zakat" },
]

export function StickyBottomBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center rounded-t-lg border-t border-white/25 bg-support-blue px-3 py-1.5 text-white shadow-lg sm:px-4 sm:py-2"
      style={{ bottom: 0 }}
    >
      <div className="flex w-full items-center justify-between gap-2 overflow-hidden">
        <nav className="flex min-w-0 flex-1 items-center gap-3 overflow-x-auto py-1 md:gap-10">
          {quickLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 text-xs font-semibold text-white hover:underline sm:text-sm md:text-base"
            >
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="h-7 w-7 shrink-0 rounded-full text-white hover:bg-white/15 hover:text-white sm:h-8 sm:w-8"
          aria-label="Scroll to top"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
