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
import { WhatsAppChatButton } from "@/components/layout/WhatsAppChatButton"
import { DonationCategorySection } from "@/components/donate/DonationCategorySection"
import { DonateTopBanner } from "@/components/donate/DonateTopBanner"
import { RamzanPage } from "@/components/ramzan/RamzanPage"
import { AuditReportsPage } from "@/components/about/AuditReportsPage"
import { TaxExemptionPage } from "@/components/about/TaxExemptionPage"
import { EbookPage } from "@/components/about/EbookPage"
import { PrivacyPolicyPage } from "@/components/about/PrivacyPolicyPage"
import { ChairmanMessagePage } from "@/components/about/ChairmanMessagePage"
import { CertificatesAwardsPage } from "@/components/about/CertificatesAwardsPage"
import { AnnualNewsletterPage } from "@/components/about/AnnualNewsletterPage"
import { TermsConditionsPage } from "@/components/about/TermsConditionsPage"
import { ServicesPage } from "@/components/services/ServicesPage"
import { MediaPage } from "@/components/media/MediaPage"
import { ContactPage } from "@/components/contact/ContactPage"
import { BankDetailsPage } from "@/components/bank/BankDetailsPage"
import { DonorDashboardPage } from "@/components/donor/DonorDashboardPage"
import { useEffect, useState } from "react"

function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [])

  const isDonatePage = path === "/donate"
  const isRamzanPage = path === "/ramzan"
  const isAuditReportsPage = path === "/about" || path === "/about/audit-reports"
  const isTaxExemptionPage = path === "/about/tax-exemption"
  const isEbookPage = path === "/about/ebook"
  const isPrivacyPolicyPage = path === "/privacy" || path === "/about/privacy-policy"
  const isChairmanMessagePage = path === "/about/chairman-message"
  const isCertificatesPage = path === "/about/certificates"
  const isAnnualNewsletterPage = path === "/about/newsletter"
  const isTermsPage = path === "/terms" || path === "/about/terms"
  const isServicesPage = path === "/services"
  const isMediaPage = path === "/media"
  const isContactPage = path === "/contact"
  const isBankDetailsPage = path === "/bank-details"
  const isDonorLoginPage = path === "/donor-login"
  const isDonorSignupPage = path === "/donor-signup"
  const isDonorForgotPasswordPage = path === "/donor-forgot-password"

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Toaster />
      <TopBar />
      <MainNav />
      <main>
        {isRamzanPage ? (
          <>
            <RamzanPage />
            <NewsletterSection />
          </>
        ) : isAuditReportsPage ? (
          <>
            <AuditReportsPage />
            <NewsletterSection />
          </>
        ) : isTaxExemptionPage ? (
          <>
            <TaxExemptionPage />
            <NewsletterSection />
          </>
        ) : isEbookPage ? (
          <>
            <EbookPage />
            <NewsletterSection />
          </>
        ) : isPrivacyPolicyPage ? (
          <>
            <PrivacyPolicyPage />
            <NewsletterSection />
          </>
        ) : isChairmanMessagePage ? (
          <>
            <ChairmanMessagePage />
            <NewsletterSection />
          </>
        ) : isCertificatesPage ? (
          <>
            <CertificatesAwardsPage />
            <NewsletterSection />
          </>
        ) : isAnnualNewsletterPage ? (
          <>
            <AnnualNewsletterPage />
            <NewsletterSection />
          </>
        ) : isTermsPage ? (
          <>
            <TermsConditionsPage />
            <NewsletterSection />
          </>
        ) : isServicesPage ? (
          <>
            <ServicesPage />
            <NewsletterSection />
          </>
        ) : isMediaPage ? (
          <>
            <MediaPage />
            <NewsletterSection />
          </>
        ) : isContactPage ? (
          <>
            <ContactPage />
            <NewsletterSection />
          </>
        ) : isBankDetailsPage ? (
          <>
            <BankDetailsPage />
            <NewsletterSection />
          </>
        ) : isDonorLoginPage ? (
          <>
            <DonorDashboardPage defaultTab="login" />
            <NewsletterSection />
          </>
        ) : isDonorSignupPage ? (
          <>
            <DonorDashboardPage defaultTab="register" />
            <NewsletterSection />
          </>
        ) : isDonorForgotPasswordPage ? (
          <>
            <DonorDashboardPage defaultTab="forgot-password" />
            <NewsletterSection />
          </>
        ) : isDonatePage ? (
          <>
            <DonateTopBanner />
            <DonationCategorySection />
            <NewsletterSection />
          </>
        ) : (
          <>
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
          </>
        )}
      </main>
      <Footer />
      <WhatsAppChatButton />
      <StickyBottomBar />
    </div>
  )
}

export default App
