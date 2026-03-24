import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  HandHeart,
  Lock,
  MapPin,
  Minus,
  Package,
  Plus,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/svgs/WhatsAppIcon"

const programs = [
  {
    title: "Ramzan Ration",
    subtitle:
      "Ek ration bag ghareeb gharon tak pohanchta hai aur poore Ramzan ka sahara ban jata hai.",
    cta: "Donate Ramzan Ration",
    amounts: ["PKR 500", "Zakat"],
    icon: Package,
  },
  {
    title: "Sehri & Iftari",
    subtitle:
      "1 waqt ka khana, rozay ki taqat banta hai aur duaon ka sabab banta hai.",
    cta: "Donate Sehri & Iftari",
    amounts: ["General Donation"],
    icon: Users,
  },
  {
    title: "Zakat",
    subtitle:
      "Aap ki zakat, haqiqi madad aur mustahiq tak amanat ke sath pohanchti jati hai.",
    cta: "Donate Zakat",
    amounts: ["PKR 500", "PKR 1,000", "PKR 2,500"],
    icon: HandHeart,
  },
  {
    title: "Sadqah",
    subtitle:
      "Chhoti si yad ki madad bhi kisi ki zindagi mein roshni ka sabab banti hai.",
    cta: "Donate Sadqah",
    amounts: ["PKR 500", "PKR 1,000", "PKR 2,500"],
    icon: ShieldCheck,
  },
]

const initiatives = [
  {
    title: "Ration Distribution",
    description:
      "Har ration bag, ek ghar ko kai rozon ke liye sahara deta hai aur barkat barhata hai.",
    icon: Package,
    image: "https://picsum.photos/seed/ration-distribution/420/280",
  },
  {
    title: "Daily Iftar & Sehri",
    description:
      "Rozadar bhai behnon ko iftar aur sehri ka khana izzat aur pyaar ke sath diya jata hai.",
    icon: Users,
    image: "https://picsum.photos/seed/daily-iftar-sehri/420/280",
  },
  {
    title: "Community Support",
    description:
      "Ramzan mein neighborhood level par mustahiq afrad tak madad tez raftari se pohanchti hai.",
    icon: HandHeart,
    image: "https://picsum.photos/seed/community-support/420/280",
  },
  {
    title: "Family Empowerment",
    description:
      "Madad ke sath guidance aur bunyadi support se families ko mazboot banaya jata hai.",
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/family-empowerment/420/280",
  },
]

const ramzanImpactStats = [
  { label: "RATION PACKS", value: "67,000", note: "Mustahiq gharon tak pohanchay" },
  { label: "SEHRI & IFTAR SERVED", value: "7.5M", note: "Rozadaron ke liye khanay" },
  { label: "PEOPLE SUPPORTED", value: "320,000", note: "Medical, ration aur support" },
  { label: "LOCATIONS COVERED", value: "1100+", note: "Pakistan ke shehron mein" },
]

const ramadanGlimpsesImages = [
  "https://picsum.photos/seed/ramadan-glimpse-1/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-2/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-3/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-4/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-5/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-6/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-7/520/340",
  "https://picsum.photos/seed/ramadan-glimpse-8/520/340",
]

const cities = [
  { name: "Karachi", centers: "80+ Centers" },
  { name: "Lahore", centers: "20+ Centers" },
  { name: "Islamabad", centers: "20+ Centers" },
  { name: "Rawalpindi", centers: "20+ Centers" },
  { name: "Faisalabad", centers: "20+ Centers" },
  { name: "Hyderabad", centers: "30+ Centers" },
  { name: "Quetta", centers: "10+ Centers" },
  { name: "Thatta", centers: "10+ Centers" },
]

const ramzanSupportBgImage =
  "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1800&q=80"

const ramzanMobileHandImage =
  "/images/mobile-app-img.png"

function StatItem({
  icon: Icon,
  value,
  label,
  sublabel,
}: {
  icon: typeof HandHeart
  value: string
  label: string
  sublabel: string
}) {
  return (
    <div className="space-y-1">
      <Icon className="h-4 w-4 text-green-deep" />
      <p className="text-xl font-extrabold leading-none text-foreground">{value}</p>
      <p className="text-[10px] font-semibold leading-none text-foreground">{label}</p>
      <p className="text-[10px] leading-none text-muted-foreground">{sublabel}</p>
    </div>
  )
}

export function RamzanPage() {
  return (
    <section className="bg-white">
      <div className="bg-[hsl(120,35%,93%)] py-8 md:py-10">
        <div className="w-[90%] mx-auto grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-green-deep/10 px-3 py-1 text-[10px] font-semibold text-green-deep">
              Ramzan 2026
            </span>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.02] text-foreground md:text-5xl">
              Is Ramzan, <span className="text-green-deep">Jari Rakhen</span> Duaon Ka Silsila.
            </h1>
            <p className="mt-3 max-w-md text-sm leading-snug text-muted-foreground">
              Ramzan rehmat ka maheena hai - aur is mubarak maheene mein kisi ki qubool hoti dua ka
              zariya banein.
            </p>

            <Button className="mt-6 h-10 rounded-full bg-green-deep px-6 text-xs font-bold tracking-wide text-white hover:bg-green-deep/90">
              DONATE NOW
            </Button>

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <StatItem icon={HandHeart} value="250,000" label="Daily Meals" sublabel="Daily Meals" />
              <StatItem icon={Users} value="27" label="Years Serving" sublabel="Years Serving" />
              <StatItem icon={Users} value="1.5 Million" label="Lives Served" sublabel="Every Year" />
              <StatItem icon={MapPin} value="1,138" label="Locations" sublabel="Reached" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_45px_rgba(5,12,35,0.22)]">
            <img
              src="https://picsum.photos/seed/ramzan-dates-bowl/1000/780"
              alt="Dates being shared for iftar"
              className="h-full min-h-[250px] w-full object-cover"
            />
            <Card className="absolute bottom-4 left-4 right-4 border-0 bg-white/95">
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <p className="text-4xl font-extrabold leading-none text-green-deep">67,250</p>
                  <p className="mt-1 text-[10px] font-semibold text-foreground">Rations Distributed</p>
                  <p className="text-[10px] text-muted-foreground">7.5 Million Meals Served</p>
                </div>
                <Button
                  size="icon"
                  className="h-9 w-9 rounded-lg bg-green-deep text-white hover:bg-green-deep/90"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="w-[90%] mx-auto">
          <div className="text-center">
            <span className="inline-flex rounded-full border border-green-deep/20 bg-green-deep/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-green-deep">
              Sponsor Programs
            </span>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground">
              Aap Kis Neki Mein <span className="text-green-deep">Hissa Lena Chahte Hain?</span>
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">
              Har donation, kisi family ki dua aur har roze ki barkat hai.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon
              return (
                <Card key={program.title} className="overflow-hidden border border-green-deep/15 bg-white">
                  <div className="h-1.5 bg-[hsl(120,35%,82%)]" />
                  <CardContent className="p-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(120,35%,88%)] text-green-deep">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-center text-lg font-extrabold text-foreground">{program.title}</h3>
                    <p className="mt-2 min-h-[48px] text-center text-[11px] text-muted-foreground">
                      {program.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      {program.amounts.map((amount) => (
                        <span
                          key={amount}
                          className="rounded-full border border-green-deep/20 bg-[hsl(120,35%,95%)] px-3 py-1 text-[10px] font-semibold text-green-deep"
                        >
                          {amount}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between rounded-full border bg-[hsl(120,35%,95%)] px-3 py-1.5">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 rounded-full border-green-deep/20 p-0 text-green-deep"
                          aria-label="decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-bold text-foreground">0</span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 rounded-full border-green-deep/20 p-0 text-green-deep"
                          aria-label="increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="rounded-full border bg-[hsl(120,35%,95%)] px-3 py-1.5 text-center text-[10px] text-muted-foreground">
                        Enter amount
                      </div>
                    </div>

                    <Button className="mt-4 w-full rounded-full bg-green-deep text-xs font-semibold text-white hover:bg-green-deep/90">
                      {program.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-green-deep/20 bg-[hsl(120,35%,93%)] p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3">
                <ShieldCheck className="h-6 w-6 text-green-deep" />
                <div>
                  <p className="font-extrabold text-foreground">100% Secure</p>
                  <p className="text-xs text-muted-foreground">Verified by Sharia Board</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3">
                <Lock className="h-6 w-6 text-green-deep" />
                <div>
                  <p className="font-extrabold text-foreground">Safe Payment</p>
                  <p className="text-xs text-muted-foreground">SSL Encrypted</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3">
                <Receipt className="h-6 w-6 text-green-deep" />
                <div>
                  <p className="font-extrabold text-foreground">Instant Receipt</p>
                  <p className="text-xs text-muted-foreground">Tax Exemption</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-14">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full border border-green-deep/20 bg-green-deep/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-green-deep">
                Our Initiatives
              </span>
              <h3 className="mt-3 text-4xl font-extrabold leading-tight text-foreground">
                Hiba welfare Ramzan Mein <span className="text-green-deep">Kya Kar Raha Hai?</span>
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                Ramzan ke mubarak maheene mein Hiba welfare, mustahiq families ki liye madad aur sahara
                pohancha raha hai - izzat, ehtram aur khidmat ke sath.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {initiatives.map((initiative) => {
                const Icon = initiative.icon
                return (
                  <Card
                    key={initiative.title}
                    className="overflow-hidden rounded-2xl border border-green-deep/20 bg-white"
                  >
                    <div className="relative">
                      <img
                        src={initiative.image}
                        alt={initiative.title}
                        className="h-28 w-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-lg bg-green-deep text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <p className="text-lg font-extrabold leading-tight text-foreground">
                        {initiative.title}
                      </p>
                      <p className="mt-2 text-[11px] leading-snug text-muted-foreground">
                        {initiative.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <p className="mt-6 text-center text-xs italic text-muted-foreground">
              "Is Ramzan, har support ke sath, duaon ka silsila mazid mazboot ho raha hai."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-deep py-14">
        <div className="w-[90%] mx-auto">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
              Impact Report
            </span>
            <h3 className="mt-3 text-4xl font-extrabold text-white">Our Impact - Last Ramzan</h3>
            <p className="mt-2 text-xs text-[hsl(120,35%,89%)]">
              Aap jaise logon ki barakaty se, pichlay Ramzan Hiba welfare ne lakho zindagiyan behtar
              banain.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ramzanImpactStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/45 bg-[hsl(214.5,45%,28%)] p-4 text-white"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/40 bg-white/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-4xl font-extrabold leading-none">{item.value}</p>
                <p className="mt-2 text-[11px] font-bold tracking-wide">{item.label}</p>
                <p className="mt-1 text-[11px] text-[hsl(120,35%,89%)]">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-[hsl(120,35%,90%)] px-5 py-4 text-foreground">
            <p className="text-sm font-semibold">
              "Har donation ne ek family ke chehre par muskurahat layi."
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-white bg-green-deep/80" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-green-deep/60" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-green-deep/40" />
              </div>
              <p className="text-xs">
                <span className="font-bold">1M+</span> donors jaise aap - jinhon ne is silsile ko
                mumkin banaya
              </p>
            </div>
          </div>

          <p className="mt-5 text-center text-xs italic text-[hsl(120,35%,89%)]">
            Is Ramzan bhi, aap ke sath mil kar, duaon ka silsila jari rakhen.
          </p>
        </div>
      </div>

      <div className="py-14">
        <div className="w-[90%] mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-green-deep/20 bg-green-deep/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-green-deep">
              Ramadan Glimpses
            </span>
            <h3 className="mt-3 text-4xl font-extrabold leading-tight text-foreground">
              Jahan Aap Ne Bharosa Kiya, <span className="text-green-deep">Wahan Zindagiyan Badlein</span>
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Pichlay Ramzan, aap ke diya gaya har hissa ne sirf imdaad nahi di balkay logon ko
              tanha honay ka ehsas bhi khatam kiya.
            </p>

            <div className="mt-5 inline-flex rounded-full bg-[hsl(120,35%,95%)] p-1">
              <Button
                type="button"
                size="sm"
                className="rounded-full bg-green-deep px-6 py-1.5 text-xs font-semibold text-white hover:bg-green-deep/90"
              >
                Images
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="rounded-full px-6 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-transparent"
              >
                Videos
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {ramadanGlimpsesImages.map((image, index) => (
              <div key={image} className="relative overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={`Ramadan glimpse ${index + 1}`}
                  className="h-28 w-full object-cover sm:h-32"
                />
                <span className="absolute right-2 top-2 rounded-full bg-green-deep px-2 py-0.5 text-[9px] font-semibold text-white">
                  2026
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-16">
        <div className="w-[90%] mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-green-deep/20 bg-green-deep/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-green-deep">
              Nationwide Coverage
            </span>
            <h3 className="mt-3 text-4xl font-extrabold leading-tight text-foreground">
              Jahan Zarurat Ho, <span className="text-green-deep">Wahan Hiba welfare</span>
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
              Hiba welfare ka kaam sirf imdaad dena nahi, balkay zarurat ke waqt wahan maujood hona hai.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.05fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-green-deep/20 bg-white">
              <img
                src="https://picsum.photos/seed/saylani-centers-map/800/560"
                alt="Ramzan support across Pakistan"
                className="h-64 w-full object-cover"
              />
              <div className="bg-green-deep p-4 text-center text-white">
                <p className="text-4xl font-extrabold leading-none">1100+</p>
                <p className="text-[11px] font-semibold tracking-wide">DISTRIBUTION CENTERS NATIONWIDE</p>
                <p className="mt-1 text-[11px] text-[hsl(120,35%,89%)]">
                  Yahan se humaari madad, mulk ke har kone tak rozon ke daur me pohanchti hai.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-3xl font-extrabold leading-tight text-foreground">
                Pakistan Bhar Mein Hiba welfare Centers
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Har center ek nishani hai is baat ki ke imdaad sirf plan nahi, zamumeri poori niyat
                hai.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="flex items-center gap-3 rounded-xl border border-green-deep/20 bg-[hsl(120,35%,95%)] px-3 py-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-deep" />
                    <div>
                      <p className="text-sm font-bold text-foreground">{city.name}</p>
                      <p className="text-[11px] text-muted-foreground">{city.centers}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-green-deep/20 bg-[hsl(120,35%,94%)] p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-deep text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-extrabold leading-none text-foreground">International Presence</p>
                <p className="mt-2 max-w-4xl text-xs text-muted-foreground">
                  Hiba welfare ka silsila sarhadon par khatam nahi hota. Bahar mulk rehne walay log bhi
                  madad bhejty hain, to yehi niyat Pakistan ke gharon tak mohbatt aur asar pohanchati
                  hai.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["United Kingdom", "United States", "Canada", "Italy"].map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-green-deep/25 bg-white px-3 py-1 text-[10px] font-semibold text-green-deep"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <img
          src={ramzanSupportBgImage}
          alt="Support section background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative w-[90%] mx-auto py-16 text-center text-white md:py-20">
          <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-deep">
            Support Us
          </span>
          <h3 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Har Ramzan, kai zindagiyan <span className="text-green-deep">khamoshi se badal jati hain</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
            Farq sirf itna hota hai ke koi aage barh kar madad karta hai. Is Ramzan, kisi ka
            dastarkhwan khali na rehne dein.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button className="rounded-full bg-white px-6 text-sm font-semibold text-foreground hover:bg-white/90">
              Learn More About Us
            </Button>
            <Button className="rounded-full bg-green-deep px-6 text-sm font-semibold text-white hover:bg-green-deep/90">
              Donate Now
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-white">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-deep" />
              100% Shariah Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-deep" />
              Verified Beneficiaries
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-deep" />
              Instant Receipt
            </span>
          </div>

          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-white/50 bg-white/10 px-5 py-4 backdrop-blur-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-deep text-white">
              <HandHeart className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-lg font-extrabold leading-none text-white">Real-time Impact</p>
              <p className="mt-1 text-xs text-white/85">Join 50,000+ donors this Ramzan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="w-[90%] mx-auto grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-green-deep/20 bg-green-deep/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-deep">
              Ramzan 2026
            </span>
            <h3 className="mt-4 max-w-xl text-5xl font-extrabold leading-tight text-foreground">
              You can <span className="text-green-deep">donate</span> easily & quickly with our{" "}
              <span className="text-green-deep">Mobile App.</span>
            </h3>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              Ramzan rehmat ka maheena hai - aur is mubarak maheene mein kisi ki qubool hoti dua ka
              zariya banein.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="rounded-xl border bg-white px-4 py-2 shadow-sm">
                <p className="text-xs text-muted-foreground">Available on the</p>
                <p className="text-2xl font-extrabold leading-none">Google Play</p>
              </div>
              <div className="rounded-xl border bg-white px-4 py-2 shadow-sm">
                <p className="text-xs text-muted-foreground">Available on the</p>
                <p className="text-2xl font-extrabold leading-none">App Store</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <img
              src={ramzanMobileHandImage}
              alt="Ramzan mobile app preview"
              className="relative z-10 w-full object-contain"
            />
            <div className="absolute left-2 top-16 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-deep text-white animate-float-slow">
              <Package className="h-5 w-5" />
            </div>
            <div className="absolute right-5 top-10 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-support-blue text-white animate-float-medium">
              <WhatsAppIcon className="h-7 w-7 text-white" />
            </div>
            <div className="absolute left-0 top-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-deep text-white animate-float-fast">
              <HandHeart className="h-5 w-5" />
            </div>
            <div className="absolute right-3 top-[42%] z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-deep text-white animate-float-slow">
              <Receipt className="h-5 w-5" />
            </div>
            <div className="absolute right-0 bottom-20 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-support-blue text-white animate-float-medium">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

