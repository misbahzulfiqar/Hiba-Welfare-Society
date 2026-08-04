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
import { DonationItemPage } from "@/components/donate/DonationItemPage"
import { DonateTopBanner } from "@/components/donate/DonateTopBanner"
import { PaymentDetailsPage } from "@/components/donate/PaymentDetailsPage"
import { DonationSuccessPage } from "@/components/donate/DonationSuccessPage"
import { DonationFailPage } from "@/components/donate/DonationFailPage"
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
import { DonorAccountDashboard } from "@/components/donor/DonorAccountDashboard"
import { DonorDashboardPage } from "@/components/donor/DonorDashboardPage"
import { useEffect, useState } from "react"

function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname)
    window.addEventListener("popstate", syncPath)
    window.addEventListener("hfw:navigate", syncPath)
    return () => {
      window.removeEventListener("popstate", syncPath)
      window.removeEventListener("hfw:navigate", syncPath)
    }
  }, [])

  const donateSubMatch = path.match(/^\/donate\/([^/]+)\/?$/)
  const donationItemSlug = donateSubMatch?.[1]
  const isDonatePage = path === "/donate" || path === "/donate/"
  const isDonateItemPage = Boolean(donationItemSlug)
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
  const isDonorAccountPage = path === "/donor-account"
  const isPaymentDetailsPage = path === "/payment-details" || path === "/payment-details/"
  const isDonationSuccessPage = path === "/donation-success" || path === "/donation-success/"
  const isDonationFailPage = path === "/donation-fail" || path === "/donation-fail/"
  const isMinimalPaymentChrome =
    isPaymentDetailsPage || isDonationSuccessPage || isDonationFailPage

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Toaster />
      {isDonateItemPage || !isMinimalPaymentChrome ? <TopBar /> : null}
      {!isDonateItemPage && !isMinimalPaymentChrome ? <MainNav /> : null}
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
        ) : isDonorAccountPage ? (
          <>
            <DonorAccountDashboard />
            <NewsletterSection />
          </>
        ) : isDonationSuccessPage ? (
          <DonationSuccessPage />
        ) : isDonationFailPage ? (
          <DonationFailPage />
        ) : isPaymentDetailsPage ? (
          <PaymentDetailsPage />
        ) : isDonateItemPage && donationItemSlug ? (
          <DonationItemPage slug={donationItemSlug} />
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
      {!isMinimalPaymentChrome ? (
        <>
          <Footer />
          <WhatsAppChatButton />
          <StickyBottomBar />
        </>
      ) : null}
    </div>
  )
}

export default App
