import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { donationItems, type DonationCategoryId } from "@/data/donationItems"
import { navigateTo } from "@/lib/navigation"

type CategoryId = "all" | DonationCategoryId

const categories: Array<{ id: CategoryId; label: string }> = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "online-sadqa", label: "Online Sadqa" },
  { id: "welfare", label: "Welfare" },
  { id: "medical", label: "Medical" },
  { id: "education", label: "Education" },
]

export function DonationCategorySection() {
  const [active, setActive] = useState<CategoryId>("all")

  const filtered = useMemo(() => {
    if (active === "all") return donationItems
    return donationItems.filter((c) => c.category === active)
  }, [active])

  return (
    <section className="py-10">
      <div className="mx-auto w-[90%]">
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
              key={card.slug}
              href={`/donate/${card.slug}`}
              className="group cursor-pointer text-left"
              aria-label={card.title}
              onClick={(e) => {
                e.preventDefault()
                navigateTo(`/donate/${card.slug}`)
              }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-white">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-foreground">{card.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
