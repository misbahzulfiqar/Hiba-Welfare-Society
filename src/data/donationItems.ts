export type DonationCategoryId = "food" | "online-sadqa" | "welfare" | "medical" | "education"

export type DonationFormVariant = "fitra" | "generic"

export type DonationItem = {
  slug: string
  title: string
  category: DonationCategoryId
  image: string
  formVariant: DonationFormVariant
  heroKicker?: string
  heroSubline?: string
}

export const donationItems: DonationItem[] = [
  {
    slug: "ramzan-donation-2026",
    title: "Ramzan Donation 2026",
    category: "food",
    image: "https://picsum.photos/seed/ramzan-donation-2026/1200/900",
    formVariant: "generic",
  },
  {
    slug: "fitra-fidya-kaffara",
    title: "Fitra, Fidya, Kaffara",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/fitra-fidya-kaffara/1200/900",
    formVariant: "fitra",
    heroKicker: "Your support",
    heroSubline: "is a hope for those who need it most",
  },
  {
    slug: "zakat-support-fund",
    title: "Zakat Support Fund",
    category: "welfare",
    image: "https://picsum.photos/seed/zakat-support-fund/1200/900",
    formVariant: "generic",
  },
  {
    slug: "sadqa-and-zakat",
    title: "Sadqa & Zakat",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqa-zakat/1200/900",
    formVariant: "generic",
  },
  {
    slug: "sadqah-aqiqah-animal",
    title: "Sadqah / Aqiqah Animal",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqah-aqiqah-animal/1200/900",
    formVariant: "generic",
  },
  {
    slug: "medical-program",
    title: "Medical",
    category: "medical",
    image: "https://picsum.photos/seed/medical/1200/900",
    formVariant: "generic",
  },
  {
    slug: "welfare-program",
    title: "Welfare",
    category: "welfare",
    image: "https://picsum.photos/seed/welfare/1200/900",
    formVariant: "generic",
  },
  {
    slug: "online-quran-academy",
    title: "Online Quran Academy",
    category: "education",
    image: "https://picsum.photos/seed/online-quran-academy/1200/900",
    formVariant: "generic",
  },
  {
    slug: "it-education",
    title: "IT Education",
    category: "education",
    image: "https://picsum.photos/seed/it-education/1200/900",
    formVariant: "generic",
  },
  {
    slug: "food-assistance",
    title: "Food",
    category: "food",
    image: "https://picsum.photos/seed/food/1200/900",
    formVariant: "generic",
  },
  {
    slug: "childrens-education",
    title: "Children's Education",
    category: "education",
    image: "https://picsum.photos/seed/children-education/1200/900",
    formVariant: "generic",
  },
  {
    slug: "education-fund",
    title: "Education",
    category: "education",
    image: "https://picsum.photos/seed/education/1200/900",
    formVariant: "generic",
  },
  {
    slug: "childrens-hospital",
    title: "Children's Hospital",
    category: "medical",
    image: "https://picsum.photos/seed/children-hospital/1200/900",
    formVariant: "generic",
  },
  {
    slug: "sadqa-jariah",
    title: "Sadqa Jariah",
    category: "online-sadqa",
    image: "https://picsum.photos/seed/sadqa-jariah/1200/900",
    formVariant: "generic",
  },
  {
    slug: "old-age-home",
    title: "Old Age Home",
    category: "welfare",
    image: "https://picsum.photos/seed/old-age-home/1200/900",
    formVariant: "generic",
  },
  {
    slug: "flood-relief-campaign",
    title: "Flood Relief Campaign",
    category: "welfare",
    image: "https://picsum.photos/seed/flood-relief/1200/900",
    formVariant: "generic",
  },
]

export function getDonationItemBySlug(slug: string): DonationItem | undefined {
  return donationItems.find((item) => item.slug === slug)
}

export const fitraFormOptions = {
  useBadge: "Wajib",
  causes: [
    { value: "wheat", label: "Wheat (Gandhum)" },
    { value: "barley", label: "Barley (Jo)" },
    { value: "dates", label: "Dates (Khajoor)" },
  ],
  types: [
    { value: "sadqa-fitr-person", label: "Sadqa Fitr Per Person" },
    { value: "fidya-day", label: "Fidya (Per Day)" },
    { value: "kaffara", label: "Kaffara" },
  ],
  amounts: [
    { value: "300", label: "PKR 300.00" },
    { value: "600", label: "PKR 600.00" },
    { value: "900", label: "PKR 900.00" },
    { value: "1500", label: "PKR 1,500.00" },
    { value: "10", label: "PKR 10.00" },
    { value: "custom", label: "My amount" },
  ],
}

export const genericFormOptions = {
  causes: [
    { value: "general", label: "General Fund" },
    { value: "food", label: "Food & Ration" },
    { value: "medical", label: "Medical Support" },
    { value: "education", label: "Education" },
  ],
  types: [
    { value: "once", label: "One-Time Donation" },
    { value: "monthly", label: "Monthly Support" },
  ],
  amounts: [
    { value: "500", label: "PKR 500.00" },
    { value: "1000", label: "PKR 1,000.00" },
    { value: "2500", label: "PKR 2,500.00" },
    { value: "5000", label: "PKR 5,000.00" },
    { value: "10000", label: "PKR 10,000.00" },
    { value: "10", label: "PKR 10.00" },
    { value: "custom", label: "My amount" },
  ],
}
