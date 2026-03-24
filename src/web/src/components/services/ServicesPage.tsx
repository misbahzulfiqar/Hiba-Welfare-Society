import { Heart } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

type ServiceKey =
  | "mother-child-care"
  | "blood-bank-thalassemia"
  | "medical-equipment"
  | "hijama"
  | "laboratory"
  | "x-ray-ultrasound"
  | "mobile-clinic"
  | "schooling-system"
  | "smit"
  | "piaic"
  | "online-quran-academy"
  | "sbil"
  | "motorbike-mechanic"
  | "mobile-repairing"
  | "ration-support"
  | "saylani-dastarkhwan"
  | "saylani-breakfast"
  | "meat-distribution"
  | "mobile-dastarkhwan"
  | "mezban-saylani"
  | "roti-bank"
  | "kafalat-program"
  | "wedding-support"
  | "apna-karobaar"
  | "job-bank"
  | "laptop-financing"
  | "housing"
  | "construction-of-masajid"
  | "clean-drinking-water"
  | "plantation"
  | "corona-relief"
  | "rain-relief"
  | "fire-fighting-rescue"
  | "langar-khana"
  | "panah-gaah"
  | "koi-bhooka-na-soyega"

type ServiceContent = {
  key: ServiceKey
  title: string
  description: string
  image: string
  trail: string[]
}

const servicesData: ServiceContent[] = [
  {
    key: "blood-bank-thalassemia",
    title: "Blood Bank & Thalassemia Center",
    description:
      "Hiba welfare Blood Bank and Thalassemia Center provides free blood transfusions and treatment for children suffering from Thalassemia. Our center maintains a well-equipped blood bank with proper storage facilities and screening procedures to ensure safe blood for patients in need. We also offer regular check-ups and ongoing treatment support for Thalassemia patients.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80",
    trail: ["Health", "Blood Bank & Thalassemia Center"],
  },
  {
    key: "mobile-clinic",
    title: "Mobile Healthcare Clinic",
    description:
      "Hiba welfare operates mobile healthcare vans equipped with medical facilities providing door-step treatment in remote areas. These mobile clinics bring healthcare services directly to underserved communities, offering basic medical consultations, medications, and health screenings. Our mobile units help bridge the healthcare gap for those who cannot easily access medical facilities.",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&q=80",
    trail: ["Health", "Mobile Healthcare Clinic"],
  },
  {
    key: "medical-equipment",
    title: "Medical Equipment",
    description:
      "Hiba welfare Welfare provides free distribution of oxygen cylinders, wheelchairs, beds, and other medical aids to the needy. Our medical equipment program helps patients who cannot afford essential healthcare equipment, enabling them to receive proper care at home. We maintain a stock of various medical devices and aids to support those in need.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&q=80",
    trail: ["Health", "Medical Equipment"],
  },
  {
    key: "hijama",
    title: "Hijama (Cupping Therapy)",
    description:
      "Hiba welfare offers prophetic medical cupping therapy (Hijama) clinics providing spiritual and physical healing. Hijama is a Sunnah practice that involves the application of suction cups to specific points on the body, followed by small incisions to draw out impure blood. Our trained practitioners provide this traditional therapy in a hygienic and professional environment.",
    image: "https://picsum.photos/seed/hijama-clinic/1200/760",
    trail: ["Health", "Hijama"],
  },
  {
    key: "laboratory",
    title: "Laboratory Facility",
    description:
      "Hiba welfare operates a modern diagnostic laboratory performing high-end tests at subsidized or free rates for the poor. Our laboratory is equipped with state-of-the-art equipment and staffed by qualified professionals to ensure accurate and timely test results. We offer a wide range of diagnostic tests including blood tests, urine analysis, and other essential medical investigations.",
    image: "https://picsum.photos/seed/laboratory-facility/1200/760",
    trail: ["Health", "Laboratory Facility"],
  },
  {
    key: "x-ray-ultrasound",
    title: "X-Rays and Ultrasound",
    description:
      "Our radiology department is equipped with digital X-ray and ultrasound machines to provide accurate diagnostic imaging services. Hiba welfare offers these essential diagnostic services at subsidized or free rates for those who cannot afford them. Our trained radiologists and technicians ensure high-quality imaging and accurate interpretations for proper diagnosis.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80",
    trail: ["Health", "X-Rays and Ultrasound"],
  },
  {
    key: "mother-child-care",
    title: "Mother & Child Care Center",
    description:
      "Dedicated treatment centers for women and children with expert doctors and educated staff. Our Mother & Child Care Center provides comprehensive healthcare services including prenatal care, postnatal care, pediatric consultations, vaccinations, and specialized treatments for both mothers and children in a caring and supportive environment.",
    image: "https://picsum.photos/seed/mother-child-care-center/1200/760",
    trail: ["Health", "Mother & Child Care Center"],
  },
  {
    key: "schooling-system",
    title: "Hiba welfare Schooling System",
    description:
      "Hiba welfare provides quality primary and secondary education for underprivileged children across Pakistan. Our schooling system offers a comprehensive curriculum that combines modern education with Islamic values. We provide free education, books, uniforms, and stationery to ensure that financial constraints do not prevent any child from receiving quality education.",
    image: "https://picsum.photos/seed/schooling-system/1200/760",
    trail: ["Education", "Schooling System"],
  },
  {
    key: "smit",
    title: "Hiba welfare Mass IT Training (SMIT)",
    description:
      "SMIT is a large-scale IT training program teaching Web Development, Mobile App Development, and AI to thousands of students. This flagship program provides free, industry-relevant technical education to empower youth with digital skills. Graduates are prepared for careers in software development, freelancing, and the tech industry, contributing to Pakistan's growing digital economy.",
    image: "https://picsum.photos/seed/smit-program/1200/760",
    trail: ["Education", "Technical Education", "SMIT"],
  },
  {
    key: "piaic",
    title: "PIAIC",
    description:
      "The Presidential Initiative for Artificial Intelligence and Computing (PIAIC) partners with Hiba welfare to provide high-end tech education. This program offers specialized courses in Artificial Intelligence, Cloud Computing, Blockchain, and Internet of Things (IoT). Students receive world-class training to become leaders in emerging technology fields.",
    image: "https://picsum.photos/seed/piaic-program/1200/760",
    trail: ["Education", "Technical Education", "PIAIC"],
  },
  {
    key: "online-quran-academy",
    title: "Online Quran Academy",
    description:
      "Hiba welfare Online Quran Academy provides distance learning for Quranic teachings and Tajweed for global students. Our qualified teachers offer one-on-one and group sessions to help students learn proper Quran recitation, memorization (Hifz), and understanding of Islamic principles. The academy serves students worldwide, making Quranic education accessible to all.",
    image: "https://picsum.photos/seed/online-quran-academy/1200/760",
    trail: ["Education", "Islamic Education", "Online Quran Academy"],
  },
  {
    key: "sbil",
    title: "SBIL - School of Business & Islamic Leadership",
    description:
      "The School of Business & Islamic Leadership (SBIL) provides professional accounting and finance courses. Our program combines modern business education with Islamic financial principles, preparing graduates for careers in banking, finance, and corporate sectors. Students receive practical training and industry-recognized certifications.",
    image: "https://picsum.photos/seed/sbil-program/1200/760",
    trail: ["Education", "Accounting & Finance", "SBIL"],
  },
  {
    key: "motorbike-mechanic",
    title: "Motorbike Mechanic Training",
    description:
      "Hiba welfare provides technical training for youth to enable self-employment as motorbike mechanics. This vocational program teaches practical skills in motorcycle repair, maintenance, and diagnostics. Graduates are equipped with the knowledge and skills to start their own repair workshops or find employment in the automotive service industry.",
    image: "https://picsum.photos/seed/motorbike-mechanic-training/1200/760",
    trail: ["Education", "Vocational Training", "Motorbike Mechanic Training"],
  },
  {
    key: "mobile-repairing",
    title: "Mobile Repairing Course",
    description:
      "Hiba welfare offers a comprehensive vocational course teaching hardware and software mobile repairing skills. Students learn to diagnose and fix common smartphone issues, from screen replacements to software troubleshooting. This program prepares graduates for careers in the growing mobile repair industry or to start their own repair businesses.",
    image: "https://picsum.photos/seed/mobile-repairing-course/1200/760",
    trail: ["Education", "Vocational Training", "Mobile Repairing"],
  },
  {
    key: "saylani-dastarkhwan",
    title: "Hiba welfare Dastarkhwan",
    description:
      "Hiba welfare Dastarkhwan operates large-scale free meal centers providing lunch and dinner to thousands of people daily. Our dastarkhwans are strategically located across major cities to serve laborers, travelers, and the underprivileged. We prepare fresh, nutritious meals in hygienic kitchens and serve with dignity to all who come.",
    image: "https://picsum.photos/seed/saylani-dastarkhwan/1200/760",
    trail: ["Food", "Hiba welfare Dastarkhwan"],
  },
  {
    key: "mobile-dastarkhwan",
    title: "Mobile Dastarkhwan",
    description:
      "Hiba welfare Mobile Dastarkhwan operates vans carrying prepared meals to serve food at various hospitals and orphanages. Our mobile food service reaches those who cannot come to our fixed locations, including patients, caretakers at hospitals, and children in orphanages. We bring hot, nutritious meals directly to those in need.",
    image: "https://picsum.photos/seed/mobile-dastarkhwan/1200/760",
    trail: ["Food", "Mobile Dastarkhwan"],
  },
  {
    key: "roti-bank",
    title: "Hiba welfare Roti Bank",
    description:
      "Hiba welfare Roti Bank provides 24/7 availability of free bread (roti) for those who cannot afford basic meals. Our roti banks are located at strategic points across cities, ensuring that no one goes hungry at any time of day or night. Fresh roti is prepared continuously and distributed to anyone in need without any questions asked.",
    image: "https://picsum.photos/seed/saylani-roti-bank/1200/760",
    trail: ["Food", "Hiba welfare Roti Bank"],
  },
  {
    key: "ration-support",
    title: "Ration Support",
    description:
      "Hiba welfare provides monthly distribution of basic food supplies including flour, oil, pulses, and other essentials to registered poor families. Our ration support program ensures that vulnerable families have access to nutritious food throughout the month. We carefully verify and register beneficiaries to ensure aid reaches those who need it most.",
    image: "https://picsum.photos/seed/ration-support/1200/760",
    trail: ["Food", "Ration Support"],
  },
  {
    key: "saylani-breakfast",
    title: "Hiba welfare Breakfast",
    description:
      "Hiba welfare Breakfast program provides morning meals for laborers and travelers at designated spots across cities. We understand that a nutritious breakfast is essential for a productive day, especially for daily wage workers. Our breakfast stations serve hot, fresh meals early in the morning to those starting their workday.",
    image: "https://picsum.photos/seed/saylani-breakfast/1200/760",
    trail: ["Food", "Hiba welfare Breakfast"],
  },
  {
    key: "meat-distribution",
    title: "Sadqa Meat Distribution",
    description:
      "Hiba welfare facilitates daily distribution of meat to the needy from Sadqa and Aqeeqa donations. Our meat distribution program allows donors to fulfill their religious obligations while providing protein-rich food to those who cannot afford it. We ensure proper handling and distribution of fresh meat to registered beneficiaries.",
    image: "https://picsum.photos/seed/sadqa-meat-distribution/1200/760",
    trail: ["Food", "Sadqa Meat Distribution"],
  },
  {
    key: "mezban-saylani",
    title: "Mezban Hiba welfare",
    description:
      "Mezban Hiba welfare provides special guest hosting and meal service during religious festivals and events. During occasions like Eid, Ramadan, and other Islamic celebrations, we organize large-scale community meals. Our Mezban service brings people together and ensures that everyone, regardless of their financial situation, can celebrate these blessed occasions.",
    image: "https://picsum.photos/seed/mezban-saylani/1200/760",
    trail: ["Food", "Mezban Hiba welfare"],
  },
  {
    key: "apna-karobaar",
    title: "Apna Karobaar",
    description:
      "Hiba welfare Apna Karobaar program provides interest-free small loans and assets like rickshaws to help people start their own businesses. This microfinance initiative empowers individuals to become self-sufficient by providing them with the means to earn a livelihood. We support entrepreneurs with equipment, training, and ongoing guidance to ensure business success.",
    image: "https://picsum.photos/seed/apna-karobaar/1200/760",
    trail: ["Social Welfare", "Apna Karobaar"],
  },
  {
    key: "kafalat-program",
    title: "Kafalat Program",
    description:
      "Hiba welfare Kafalat Program provides financial sponsorship for orphans, widows, and people with disabilities. Through this program, donors can sponsor individuals or families on a monthly basis, providing them with regular financial support. The Kafalat program ensures dignified assistance that helps beneficiaries meet their basic needs and maintain their livelihood.",
    image: "https://picsum.photos/seed/kafalat-program/1200/760",
    trail: ["Social Welfare", "Kafalat Program"],
  },
  {
    key: "job-bank",
    title: "Hiba welfare Job Bank",
    description:
      "Hiba welfare Job Bank matches skilled individuals with potential employers to reduce unemployment. Our employment service helps job seekers find suitable positions by connecting them with companies looking for workers. We provide job placement assistance, career counseling, and skills assessment to help individuals find meaningful employment.",
    image: "https://picsum.photos/seed/saylani-job-bank/1200/760",
    trail: ["Social Welfare", "Hiba welfare Job Bank"],
  },
  {
    key: "laptop-financing",
    title: "Laptop Financing Scheme",
    description:
      "Hiba welfare Laptop Financing Scheme helps students acquire laptops for educational and freelance work through easy payment plans. This program enables students from IT and technical programs to own laptops essential for their studies. We offer interest-free financing with affordable monthly installments to make technology accessible to all students.",
    image: "https://picsum.photos/seed/laptop-financing-scheme/1200/760",
    trail: ["Social Welfare", "Laptop Financing Scheme"],
  },
  {
    key: "housing",
    title: "Housing Support",
    description:
      "Hiba welfare Housing program provides shelter and low-cost housing units for the homeless and those living in substandard conditions. We renovate and construct homes for families who cannot afford proper housing. Our housing initiative ensures that vulnerable families have safe, secure, and dignified places to live.",
    image: "https://picsum.photos/seed/housing-support/1200/760",
    trail: ["Social Welfare", "Housing"],
  },
  {
    key: "wedding-support",
    title: "Wedding Support Program",
    description:
      "Hiba welfare Wedding Support Program provides assistance with wedding expenses and household items for daughters of poor families. We help families who cannot afford wedding expenses by providing essential items like furniture, utensils, and clothing. This program ensures that financial constraints do not prevent families from celebrating their daughters' marriages with dignity.",
    image: "https://picsum.photos/seed/wedding-support-program/1200/760",
    trail: ["Social Welfare", "Wedding Support Program"],
  },
  {
    key: "construction-of-masajid",
    title: "Construction of Masajid",
    description:
      "Hiba welfare is dedicated to building and maintaining mosques in underprivileged areas where resources are sparse. Our masjid construction program ensures that communities have proper places of worship with essential facilities. Each mosque is built with quality materials and includes ablution areas, prayer halls, and other necessary amenities for the congregation.",
    image: "https://picsum.photos/seed/construction-of-masajid/1200/760",
    trail: ["Sadiqah Jariah", "Construction of Masajid"],
  },
  {
    key: "clean-drinking-water",
    title: "Clean Drinking Water",
    description:
      "Hiba welfare installs RO plants and water filtration systems in areas suffering from water scarcity. Our clean water initiative provides safe drinking water to communities that lack access to clean water sources. We install and maintain water filtration units, hand pumps, and water coolers to ensure sustainable access to clean drinking water.",
    image: "https://picsum.photos/seed/clean-drinking-water/1200/760",
    trail: ["Sadiqah Jariah", "Clean Drinking Water"],
  },
  {
    key: "plantation",
    title: "Plantation Drive",
    description:
      "Hiba welfare contributes to environmental conservation through large-scale tree planting drives across Pakistan. Our plantation program plants thousands of trees annually to combat deforestation and climate change. We organize community plantation events and maintain nurseries to support Pakistan's green initiative and provide Sadiqah Jariah opportunities.",
    image: "https://picsum.photos/seed/plantation-drive/1200/760",
    trail: ["Sadiqah Jariah", "Plantation"],
  },
  {
    key: "rain-relief",
    title: "Rain Relief Program",
    description:
      "Hiba welfare Rain Relief Program provides support systems for victims of heavy rains and urban flooding in Pakistan. We mobilize quickly during monsoon emergencies to provide food, shelter, and medical assistance to affected families. Our teams work to rescue stranded individuals, distribute essential supplies, and help communities recover from flood damage.",
    image: "https://picsum.photos/seed/rain-relief-program/1200/760",
    trail: ["Disaster Aid", "Rain Relief Program"],
  },
  {
    key: "corona-relief",
    title: "Corona Relief Program",
    description:
      "During the COVID-19 pandemic, Hiba welfare initiated emergency food and medical support to help affected communities. Our Corona Relief Program distributed ration packages, provided medical supplies, and supported daily wage workers who lost their livelihoods during lockdowns. We continue to support communities recovering from the pandemic's impact.",
    image: "https://picsum.photos/seed/corona-relief-program/1200/760",
    trail: ["Disaster Aid", "Corona Relief Program"],
  },
  {
    key: "fire-fighting-rescue",
    title: "Fire Fighting and Rescue Services",
    description:
      "Hiba welfare provides emergency rescue services and volunteer fire-fighting support in high-risk areas. Our trained volunteers respond to fire emergencies, helping to evacuate residents and contain fires until professional services arrive. We also provide post-fire relief to affected families, including temporary shelter, food, and essential supplies.",
    image: "https://picsum.photos/seed/fire-fighting-rescue-services/1200/760",
    trail: ["Disaster Aid", "Fire Fighting and Rescue Services"],
  },
  {
    key: "langar-khana",
    title: "Langar Khana",
    description:
      "Hiba welfare Langar Khana partners with the government's Ehsaas program to provide daily free meals to the public. Our Langar Khanas serve hot, nutritious meals to anyone who needs them, with no questions asked. We operate multiple Langar Khana locations across major cities, ensuring that no one goes hungry.",
    image: "https://picsum.photos/seed/langar-khana/1200/760",
    trail: ["Hiba welfare Ehsaas", "Langar Khana"],
  },
  {
    key: "panah-gaah",
    title: "Panah Gaah (Shelter Homes)",
    description:
      "Hiba welfare Panah Gaah provides shelter homes for travelers and daily wagers with free meals and bedding. Our shelter homes offer safe, clean accommodation for those who have nowhere to stay. We provide comfortable beds, nutritious meals, and basic amenities to ensure that no one has to sleep on the streets.",
    image: "https://picsum.photos/seed/panah-gaah/1200/760",
    trail: ["Hiba welfare Ehsaas", "Panah Gaah"],
  },
  {
    key: "koi-bhooka-na-soyega",
    title: "Koi Bhooka Na Soyega",
    description:
      "The Koi Bhooka Na Soyega (No One Sleeps Hungry) initiative operates mobile food trucks reaching various parts of the city to provide dinner. Our food trucks travel to areas where the homeless and poor gather at night, ensuring that everyone gets a warm meal before sleeping. This program embodies our commitment that no one in our community should go to bed hungry.",
    image: "https://picsum.photos/seed/koi-bhooka-na-soyega/1200/760",
    trail: ["Hiba welfare Ehsaas", "Koi Bhooka Na Soyega"],
  },
]

const fallbackService: ServiceContent = servicesData[0]

function parseHashToServiceKey(hashValue: string): ServiceKey | null {
  const normalized = hashValue.replace(/^#/, "").trim()
  const match = servicesData.find((service) => service.key === normalized)
  return match ? match.key : null
}

export function ServicesPage() {
  const [selectedKey, setSelectedKey] = useState<ServiceKey>(() => {
    const parsed = parseHashToServiceKey(window.location.hash)
    return parsed ?? fallbackService.key
  })

  useEffect(() => {
    const onHashChange = () => {
      const parsed = parseHashToServiceKey(window.location.hash)
      setSelectedKey(parsed ?? fallbackService.key)
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const selectedService = useMemo(
    () => servicesData.find((service) => service.key === selectedKey) ?? fallbackService,
    [selectedKey]
  )

  return (
    <section className="bg-[hsl(120,18%,96%)] py-8 md:py-10">
      <div className="w-[94%] mx-auto">
        <Breadcrumb>
          <BreadcrumbList className="text-xs">
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{selectedService.trail[0]}</BreadcrumbPage>
            </BreadcrumbItem>
            {selectedService.trail.slice(1).map((crumb) => (
              <div key={crumb} className="contents">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{crumb}</BreadcrumbPage>
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-tight text-foreground">{selectedService.title}</h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {selectedService.description}
            </p>
            <Button className="mt-6 rounded-full bg-green-deep px-6 text-white hover:bg-green-deep/90">
              <Heart className="h-4 w-4" />
              Donate Now
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-lg">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="h-[320px] w-full object-cover md:h-[370px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
