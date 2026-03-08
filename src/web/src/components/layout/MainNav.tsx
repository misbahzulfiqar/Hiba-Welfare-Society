import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/Logo"

export function MainNav() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact Us" },
    { href: "/bank-details", label: "Bank Details" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-24 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold text-2xl text-foreground">
          <Logo size={80} className="h-20 w-20" />
          Hiba Welfare
        </a>
        <nav className="flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Button key={href} variant="ghost" className="text-foreground font-medium" asChild>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
