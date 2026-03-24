import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type CategoryId = "all" | "food" | "online-sadqa" | "welfare" | "medical" | "education"

type DonationCard = {
  title: string
  category: Exclude<CategoryId, "all">
  image: string
}

const categories: Array<{ id: CategoryId; label: string }> = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "online-sadqa", label: "Online Sadqa" },
  { id: "welfare", label: "Welfare" },
  { id: "medical", label: "Medical" },
  { id: "education", label: "Education" },
]

const cards: DonationCard[] = [
  {
    title: "Ramzan Donation 2026",
    category: "food",
    image: "https://picsum.photos/seed/ramzan-donation-2026/600/600",
  },
  {
    title: "Fitra, Fidya, Kaffara",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/fitra-fidya-kaffara/600/600",
  },
  {
    title: "Zakat Support Fund",
    category: "welfare",
    image: "https://picsum.photos/seed/zakat-support-fund/600/600",
  },
  {
    title: "Sadqa & Zakat",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqa-zakat/600/600",
  },
  {
    title: "Sadqah / Aqiqah Animal",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqah-aqiqah-animal/600/600",
  },
  {
    title: "Medical",
    category: "medical",
    image: "https://picsum.photos/seed/medical/600/600",
  },
  {
    title: "Welfare",
    category: "welfare",
    image: "https://picsum.photos/seed/welfare/600/600",
  },
  {
    title: "Online Quran Academy",
    category: "education",
    image: "https://picsum.photos/seed/online-quran-academy/600/600",
  },
  {
    title: "IT Education",
    category: "education",
    image: "https://picsum.photos/seed/it-education/600/600",
  },
  {
    title: "Food",
    category: "food",
    image: "https://picsum.photos/seed/food/600/600",
  },
  {
    title: "Children's Education",
    category: "education",
    image: "https://picsum.photos/seed/children-education/600/600",
  },
  {
    title: "Education",
    category: "education",
    image: "https://picsum.photos/seed/education/600/600",
  },
  {
    title: "Children's Hospital",
    category: "medical",
    image: "https://picsum.photos/seed/children-hospital/600/600",
  },
  {
    title: "Sadqa Jariah",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqa-jariah/600/600",
  },
  {
    title: "Old Age Home",
    category: "welfare",
    image: "https://picsum.photos/seed/old-age-home/600/600",
  },
  {
    title: "Flood Relief Campaign",
    category: "welfare",
    image: "https://picsum.photos/seed/flood-relief/600/600",
  },
]

export function DonationCategorySection() {
  const [active, setActive] = useState<CategoryId>("all")

  const filtered = useMemo(() => {
    if (active === "all") return cards
    return cards.filter((c) => c.category === active)
  }, [active])

  return (
    <section className="py-10">
      <div className="w-[90%] mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-deep">Donation Category</h2>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => {
            const isActive = c.id === active
            return (
              <Button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-green-deep text-white"
                    : "bg-muted text-green-deep hover:bg-green-deep/10"
                }`}
              >
                {c.label}
              </Button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((card) => (
            <a
              key={card.title}
              href="#donate"
              className="group"
              aria-label={card.title}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-white">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-foreground">
                {card.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

