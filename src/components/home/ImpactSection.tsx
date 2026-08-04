import { ArrowRight, Stethoscope, Users, Heart, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    icon: Stethoscope,
    value: "1,500,000",
    label: "Lives served every year across Pakistan",
  },
  {
    icon: Users,
    value: "250,000",
    label: "People Fed Daily",
  },
  {
    icon: Heart,
    value: "12,000",
    label: "Family Adoptions every Month",
  },
  {
    icon: GraduationCap,
    value: "400,000",
    label: "Students taught annually",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-primary py-12 sm:py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Our Impact In Numbers
          </h2>
          <p className="mt-3 text-white/90">
            Real-time data showing our commitment to serving humanity
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
            <div
              key={stat.label}
              className="rounded-xl bg-[hsl(120,35%,88%)] p-4 text-center sm:p-6"
            >
              <Icon className="mx-auto h-10 w-10 text-primary" strokeWidth={1.5} />
              <p className="mt-4 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary/90">{stat.label}</p>
            </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-white">
            Join us in serving nearly 450,000 underprivileged people daily
          </p>
          <Button
            size="lg"
            className="mt-6 rounded-full bg-[hsl(120,35%,88%)] text-primary hover:bg-[hsl(120,35%,82%)] border-0"
            asChild
          >
            <a href="#join">
              Be Part of Change
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
