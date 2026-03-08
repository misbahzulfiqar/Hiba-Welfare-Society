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
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-[#2563eb] px-4 py-3 shadow-lg"
      style={{ bottom: 0 }}
    >
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-6 md:gap-10">
          {quickLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-white hover:underline md:text-base"
            >
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="shrink-0 rounded-full text-white hover:bg-white/20 hover:text-white"
          aria-label="Scroll to top"
        >
          <ArrowUpToLine className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
