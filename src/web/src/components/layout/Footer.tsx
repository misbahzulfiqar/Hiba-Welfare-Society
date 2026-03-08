import { Logo } from "@/components/layout/Logo"
import { MapPin, Mail, Phone, Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
  { label: "Bank Details", href: "/bank-details" },
  { label: "Donor Login Account", href: "/donor-login" },
]

const donationCategories = [
  { label: "Ramzan 2026", href: "#ramzan" },
  { label: "Sadqa e Jariah", href: "#sadqa-jariah" },
  { label: "Sadqa / Aqiqah Animal", href: "#sadqa-aqiqah" },
  { label: "Food Donation", href: "#food" },
  { label: "Education", href: "#education" },
  { label: "Medical & Healthcare", href: "#medical" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, description, social */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 font-semibold text-xl">
              <Logo size={64} className="h-16 w-16" />
              Hiba Welfare
            </a>
            <p className="text-sm text-white/90 leading-relaxed">
              Hiba Welfare International Trust is dedicated to uplifting the impoverished through
              comprehensive support services including food, health, and education.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/5 text-white hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="font-semibold text-white">Pages</h3>
            <ul className="mt-4 space-y-2">
              {pages.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/90 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Donation Categories */}
          <div>
            <h3 className="font-semibold text-white">Donation Categories</h3>
            <ul className="mt-4 space-y-2">
              {donationCategories.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/90 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact us */}
          <div>
            <h3 className="font-semibold text-white">Contact us</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/90">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>A-25, Bahadurabad Chowrangi Karachi, Pakistan</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:hibawelfaresociety@gmail.com" className="hover:text-white">
                  hibawelfaresociety@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <a href="tel:03454906001" className="hover:text-white">0345-4906001</a>
                </div>
                <span className="pl-8">
                  <a href="tel:+923216703735" className="hover:text-white">+923216703735</a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/80 sm:flex-row">
          <p>Copyright © 2026 Hiba Welfare International Trust. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
