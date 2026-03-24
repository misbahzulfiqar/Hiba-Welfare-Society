import { useEffect, useRef, useState } from "react"
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

const servicesSections = [
  {
    title: "Health",
    items: [
      "Mother & Child Care",
      "Blood Bank & Thalassemia",
      "Medical Equipment",
      "Hijama",
      "Laboratory",
      "X-Ray & Ultrasound",
      "Mobile Clinic",
    ],
  },
  {
    title: "Education",
    items: [
      "Schooling System",
      "SMIT",
      "PIAIC",
      "Madarisa",
      "Online Quran Academy",
      "SBIL",
      "Motorbike Mechanic",
      "Mobile Repairing",
    ],
  },
  {
    title: "Food & Ration",
    items: [
      "Ration Support",
      "Hiba welfare Dastarkhwan",
      "Hiba welfare Breakfast",
      "Meat Distribution",
      "Mobile Dastarkhwan",
      "Mezban Hiba welfare",
      "Roti Bank",
    ],
  },
  {
    title: "Social Welfare",
    items: [
      "Kafalat Program",
      "Wedding Support",
      "Apna Karobaar",
      "Job Bank",
      "Laptop Financing",
      "Housing",
    ],
  },
  {
    title: "Sadiqah Jariah",
    items: ["Construction of Masajid", "Clean Drinking Water", "Plantation"],
  },
  {
    title: "Disaster Aid",
    items: ["Corona Relief", "Rain Relief", "Fire Fighting & Rescue"],
  },
  {
    title: "Hiba welfare Ehsaas",
    items: ["Langar Khana", "Panah Gaah", "Koi Bhooka Na Soyega"],
  },
]

export function MainNav() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [pinned, setPinned] = useState(false)
  const [activePath, setActivePath] = useState<string>("")

  const closeTimers = useRef<{
    about: ReturnType<typeof setTimeout> | null
    services: ReturnType<typeof setTimeout> | null
    media: ReturnType<typeof setTimeout> | null
  }>({
    about: null,
    services: null,
    media: null,
  })

  useEffect(() => {
    const onScroll = () => {
      // Pin navbar after passing the top bar area.
      setPinned(window.scrollY > 40)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const update = () => setActivePath(window.location.pathname)
    update()
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  const normalizePath = (p: string) => {
    const normalized = p.replace(/\/+$/, "")
    return normalized === "" ? "/" : normalized
  }

  const isActive = (href: string) => {
    const current = normalizePath(activePath)
    const target = normalizePath(href)
    if (target === "/") return current === "/"
    return current === target || current.startsWith(`${target}/`)
  }

  const openAbout = () => {
    if (closeTimers.current.about) window.clearTimeout(closeTimers.current.about)
    setAboutOpen(true)
  }
  const closeAbout = () => {
    if (closeTimers.current.about) window.clearTimeout(closeTimers.current.about)
    setAboutOpen(false)
  }

  const openServices = () => {
    if (closeTimers.current.services) window.clearTimeout(closeTimers.current.services)
    setServicesOpen(true)
  }
  const closeServices = () => {
    if (closeTimers.current.services) window.clearTimeout(closeTimers.current.services)
    setServicesOpen(false)
  }

  const openMedia = () => {
    if (closeTimers.current.media) window.clearTimeout(closeTimers.current.media)
    setMediaOpen(true)
  }
  const closeMedia = () => {
    if (closeTimers.current.media) window.clearTimeout(closeTimers.current.media)
    setMediaOpen(false)
  }

  return (
    <>
      <header
        className={`z-50 w-full transition-all duration-300 py-0 after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-px after:left-[170px] sm:after:left-[220px] md:after:left-[260px] after:bg-black/10 ${
          pinned
            ? "fixed left-0 right-0 top-0 bg-white/95 backdrop-blur shadow-sm"
            : "relative bg-white"
        }`}
      >
      <div className="relative w-[95.5%] mx-auto py-1.5">
        <a
          href="/"
          className="pointer-events-auto absolute left-0 top-1/2 z-10 flex w-fit -translate-y-1/2 items-center gap-2 font-semibold text-xl text-foreground sm:text-xl"
        >
          <Logo className="h-20 w-20 sm:h-20 sm:w-20" />
          <span className="inline text-sm">Hiba Welfare Society</span>
        </a>
        {/* Desktop nav */}
        <nav className="mt-1 hidden items-center justify-center gap-2 md:flex lg:gap-3">
          {links.map(({ href, label }) => {
            if (label === "Media") {
              return (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={openMedia}
                  onMouseLeave={closeMedia}
                >
                  <Button
                    variant="ghost"
                    className={`h-8 px-2 text-xs font-medium ${
                      isActive(href)
                        ? "bg-green-deep text-white hover:bg-green-deep hover:text-white rounded-sm"
                        : "text-gray-700 hover:text-gray-800"
                    }`}
                    asChild
                  >
                    <a href={href}>Media</a>
                  </Button>

                  <div
                    role="menu"
                    aria-label="Media dropdown"
                    className={`absolute left-1/2 top-full z-50 mt-1 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border bg-white px-5 py-4 shadow-lg transform-gpu transition-all duration-500 ease-in-out will-change-transform ${
                      mediaOpen
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "translate-y-[50px] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="space-y-8">
                      <a href="/media#news" className="block">
                        <p className="text-xs font-semibold text-gray-700">News</p>
                        <p className="mt-1 text-xs text-muted-foreground">Recent news</p>
                      </a>
                      <a href="/media#videos" className="block">
                        <p className="text-xs font-semibold text-gray-700">Videos</p>
                        <p className="mt-1 text-xs text-muted-foreground">Video gallery</p>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }

            if (label === "Services") {
              return (
                <div
                  key={href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <Button
                    variant="ghost"
                    className={`h-8 px-2 text-xs font-medium ${
                      isActive(href)
                        ? "bg-green-deep text-white hover:bg-green-deep hover:text-white rounded-sm"
                        : "text-gray-700 hover:text-gray-800"
                    }`}
                    asChild
                  >
                    <a href={href}>Services</a>
                  </Button>

                  <div
                    role="menu"
                    aria-label="Services dropdown"
                  className={`absolute left-1/2 top-full z-50 mt-1 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border bg-white px-5 py-4 shadow-lg transform-gpu transition-all duration-500 ease-in-out will-change-transform ${
                      servicesOpen
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "translate-y-[50px] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 xl:grid-cols-4">
                      {servicesSections.map((section) => (
                        <div key={section.title} className="space-y-3">
                          <h3 className="border-b pb-1 text-xs font-semibold text-primary">
                            {section.title}
                          </h3>
                            <ul>
                            {section.items.map((item) => (
                              <li key={item}>
                                <a
                                  href={`/services#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                  className="text-xs text-gray-700 hover:text-gray-800"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            if (label !== "About") {
              return (
                <Button
                  key={href}
                  variant="ghost"
                  className={`h-8 px-2 text-xs font-medium ${
                    isActive(href)
                      ? "bg-green-deep text-white hover:bg-green-deep hover:text-white rounded-sm"
                      : "text-gray-700 hover:text-gray-800"
                  }`}
                  asChild
                >
                  <a href={href}>{label}</a>
                </Button>
              )
            }

            return (
              <div
                key={href}
                className="relative"
                onMouseEnter={openAbout}
                onMouseLeave={closeAbout}
              >
                <Button
                  variant="ghost"
                  className={`h-8 px-2 text-xs font-medium ${
                    isActive(href)
                      ? "bg-green-deep text-white hover:bg-green-deep hover:text-white rounded-sm"
                      : "text-gray-700 hover:text-gray-800"
                  }`}
                  asChild
                >
                  <a href={href}>About</a>
                </Button>

                <div
                  role="menu"
                  aria-label="About dropdown"
                  className={`absolute left-1/2 top-full z-50 mt-1 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-xl border bg-white px-6 py-5 shadow-lg transform-gpu transition-all duration-500 ease-in-out will-change-transform ${
                    aboutOpen
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "translate-y-[50px] opacity-0 pointer-events-none"
                  }`}
                >
                  <a href="/about/chairman-message" className="block text-center">
                    <p className="text-xs font-semibold text-gray-700">
                      Chairman&apos;s Message
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Message from the chairman
                    </p>
                  </a>

                  <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-5">
                      <a href="/about/audit-reports" className="block">
                        <p className="text-xs font-semibold text-gray-700">Audit Reports</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Financial transparency
                        </p>
                      </a>
                      <a href="/about/tax-exemption" className="block">
                        <p className="text-xs font-semibold text-gray-700">
                          Tax Exemption
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Tax deduction benefits
                        </p>
                      </a>
                      <a href="/about/ebook" className="block">
                        <p className="text-xs font-semibold text-gray-700">E-Book</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Digital publications
                        </p>
                      </a>
                      <a href="/about/privacy-policy" className="block">
                        <p className="text-xs font-semibold text-gray-700">
                          Privacy Policy
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Privacy information
                        </p>
                      </a>
                    </div>

                    <div className="space-y-5">
                      <a href="/about/certificates" className="block">
                        <p className="text-xs font-semibold text-gray-700">
                          Certificates
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Our certifications
                        </p>
                      </a>
                      <a href="/about/newsletter" className="block">
                        <p className="text-xs font-semibold text-gray-700">Newsletter</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Subscribe to updates
                        </p>
                      </a>
                      <a href="/about/terms" className="block">
                        <p className="text-xs font-semibold text-gray-700">
                          Terms &amp; Conditions
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Terms of service
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </nav>
        {/* Mobile menu */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="shrink-0" aria-label="Open menu">
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
                    className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-muted hover:text-gray-800"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </header>
      <div aria-hidden="true" className={pinned ? "h-[56px] md:h-[96px]" : "h-0"} />
    </>
  )
}
