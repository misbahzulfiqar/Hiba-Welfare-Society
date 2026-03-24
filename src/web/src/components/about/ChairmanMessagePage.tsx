import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ChairmanMessagePage() {
  return (
    <section className="bg-[hsl(120,18%,96%)] py-12 md:py-16">
      <div className="w-[90%] mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-green-deep">About Us</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-foreground">Chairman&apos;s Message</h1>
        <div className="mt-3 h-1 w-14 rounded-full bg-green-deep" />

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <Card className="rounded-2xl border">
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=420&q=80"
                  alt="Chairman portrait"
                  className="mx-auto h-32 w-32 rounded-full object-cover shadow-md"
                />
                <p className="mt-4 text-2xl font-semibold text-foreground">Muhammad Bashir Farooqi</p>
                <p className="mt-1 text-sm font-medium text-green-deep">Chairman, Hiba welfare Welfare</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border bg-green-deep text-white">
              <CardContent className="p-5">
                <p className="text-2xl leading-relaxed">
                  "مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً"
                </p>
                <Separator className="my-4 bg-white/30" />
                <p className="text-sm italic text-white/95">
                  "Who is it that would loan Allah a goodly loan so He may multiply it for him many
                  times over."
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
                  Surah Baqara, Verse 245
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border bg-white">
            <CardContent className="p-6 md:p-7">
              <h2 className="text-3xl font-extrabold text-foreground">Assalam-o-Alaikum,</h2>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                It should be noted that Allah, who is in need of no one and nothing, instills upon
                His men to give Qarz-e-Hasana because it is in man&apos;s nature to be frugal while
                spending his wealth. Allah speaks about qarz because it is returned and Allah
                promises that He will return the goodly loan by 70 folds.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Allah conveys this message to the Muslim ummah through the Holy Prophet Muhammad
                (PBUH) imploring Muslims to spend their wealth in a certain way.
              </p>

              <div className="mt-4 rounded-lg bg-muted p-4 text-sm italic text-foreground">
                "O children of Adam! Trust me with your wealth. If you do so, no fire, flood or
                thieves will be able to rob you of your money. Instead, you will be endowed with your
                wealth when you need it."
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                He further says that the poor and weak will not remain hungry and naked except due to
                the negligence of the rich, who should not be stingy in spending their money on those
                worse off than themselves. Allah will not only take strict accountability from those
                people but He will also punish them accordingly.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                On the Day Of Judgement, the rich will be humiliated because they did not help the
                needy. The needy will complain to Allah and say that all those men on whom you
                graciously bestowed the rights of wealth showed negligence in its proper use; they
                were busy spending on themselves and forgot about us, the ones who needed it.
              </p>

              <p className="mt-4 text-sm font-semibold text-foreground">
                Alhamdolillah, Allah has accorded Hiba welfare Welfare with the highest favor by sending
                those people our way who follow the teachings of the Holy Quran and Hadith.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                They give zakat, fidyah, fitrah, khairat and other donations to help us help those in
                need. The purpose of sending this message to you is so that you not only spread this
                message to others but also play your part in helping us to continue serving and helping
                the needy till the Day of Judgment.
              </p>

              <Separator className="my-5" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Kind Regards,</p>
                  <p className="text-sm font-semibold text-foreground">Muhammad Bashir Farooqi</p>
                </div>
                <Button className="rounded-full bg-green-deep px-6 text-white hover:bg-green-deep/90">
                  Support Our Mission
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
