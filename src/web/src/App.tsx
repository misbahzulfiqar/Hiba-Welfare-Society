import { Toaster } from "@/components/ui/sonner"
import { TopBar } from "@/components/layout/TopBar"
import { MainNav } from "@/components/layout/MainNav"
import { Hero } from "@/components/home/Hero"
import { LiveAppeals } from "@/components/home/LiveAppeals"
import { QuickDonate } from "@/components/home/QuickDonate"
import { ImpactSection } from "@/components/home/ImpactSection"
import { WhatWeAreDoing } from "@/components/home/WhatWeAreDoing"
import { Testimonials } from "@/components/home/Testimonials"
import { OurBlogs } from "@/components/home/OurBlogs"
import { MediaUpdates } from "@/components/home/MediaUpdates"
import { LatestNews } from "@/components/home/LatestNews"
import { NewsletterSection } from "@/components/layout/NewsletterSection"
import { Footer } from "@/components/layout/Footer"
import { StickyBottomBar } from "@/components/layout/StickyBottomBar"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Toaster />
      <TopBar />
      <MainNav />
      <main className="pb-16">
        <Hero />
        <LiveAppeals />
        <QuickDonate />
        <ImpactSection />
        <WhatWeAreDoing />
        <Testimonials />
        <OurBlogs />
        <MediaUpdates />
        <LatestNews />
        <NewsletterSection />
        <Footer />
      </main>
      <StickyBottomBar />
    </div>
  )
}

export default App
