import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/Logo"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact Us" },
  { href: "/bank-details", label: "Bank Details" },
]

export function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 sm:h-24 sm:px-6">
        <a href="/" className="flex shrink-0 items-center gap-2 font-semibold text-xl text-foreground sm:text-2xl">
          <Logo className="h-12 w-12 sm:h-20 sm:w-20" />
          <span className="inline">Hiba Welfare</span>
        </a>
        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map(({ href, label }) => (
            <Button key={href} variant="ghost" className="text-foreground font-medium" asChild>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden shrink-0" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <nav className="flex flex-col gap-2 pt-8">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
