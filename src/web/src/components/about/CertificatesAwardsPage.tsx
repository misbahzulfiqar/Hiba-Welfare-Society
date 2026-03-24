import { Award, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type CertificateItem = {
  id: string
  title: string
  image: string
  isLatest?: boolean
}

const certificates: CertificateItem[] = [
  {
    id: "pcp-certificate",
    title: "PCP Certificate",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=700&q=80",
    isLatest: true,
  },
]

export function CertificatesAwardsPage() {
  return (
    <section className="bg-[hsl(120,18%,96%)] py-12 md:py-16">
      <div className="w-[90%] mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-deep/25 bg-green-deep/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-deep">
            Recognition
          </span>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-foreground">
            Certificates &amp; Awards
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            View our official certificates, awards, and recognitions that validate our commitment to
            excellence, transparency, and impactful humanitarian work across Pakistan.
          </p>
        </div>

        <Card className="mx-auto mt-10 overflow-hidden rounded-3xl border bg-white">
          <div className="border-b p-6">
            <h2 className="text-4xl font-extrabold text-foreground">Our Certificates</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Browse through our collection of official certificates and recognitions.
            </p>
          </div>

          <CardContent className="p-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <Card key={certificate.id} className="overflow-hidden rounded-2xl border bg-white">
                  <CardContent className="p-4">
                    <div className="relative overflow-hidden rounded-xl border bg-muted/30">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="h-56 w-full object-cover"
                      />
                      {certificate.isLatest ? (
                        <Badge className="absolute right-2 top-2 rounded-full bg-green-deep text-white">
                          Latest
                        </Badge>
                      ) : null}
                    </div>

                    <p className="mt-4 text-base font-bold text-foreground">{certificate.title}</p>
                    <Button className="mt-3 w-full rounded bg-green-deep text-white hover:bg-green-deep/90">
                      <Eye className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-[hsl(120,18%,94%)] p-6 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-green-deep/10 text-green-deep">
            <Award className="h-5 w-5" />
          </div>
          <p className="mt-3 text-2xl font-extrabold text-foreground">Need More Information?</p>
          <p className="mt-1 text-xs text-muted-foreground">
            If you have any questions about our certifications or require additional documentation,
            please reach out to us.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span className="rounded-full border bg-white px-3 py-1.5">Email: info@saylaniwelfare.com</span>
            <span className="rounded-full border bg-white px-3 py-1.5">Phone: +92-21-111-729-526</span>
          </div>
        </div>
      </div>
    </section>
  )
}
