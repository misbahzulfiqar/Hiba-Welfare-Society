export function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="w-[90%] mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Effective Date: April 04, 2025</p>

        <p className="mt-5 text-sm leading-relaxed text-foreground">
          At Hiba welfare Welfare PK, your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and protect your information.
        </p>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-foreground">
          <div>
            <h2 className="text-lg font-extrabold">1. Information We Collect</h2>
            <p className="mt-1">
              We may collect personal information, such as your name, email address, mailing address,
              phone number, and payment details when you make a donation or fill out a form on our
              website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">2. How We Use Your Information</h2>
            <p className="mt-1">We use your information to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Process donations and provide receipts</li>
              <li>Respond to inquiries and support requests</li>
              <li>Improve our services and website functionality</li>
              <li>Send updates and newsletters if opted-in</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">3. Cookies</h2>
            <p className="mt-1">
              Our website may use cookies to enhance user experience. You can set your browser to
              refuse cookies or alert you when cookies are being sent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">4. Data Protection</h2>
            <p className="mt-1">
              We implement industry-standard security measures to protect your personal data. However,
              no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">5. Sharing of Information</h2>
            <p className="mt-1">We do not sell or trade your personal information. We may share your data only with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Trusted payment processors to handle donations</li>
              <li>Website developers for functionality and security enhancements</li>
              <li>Government or law enforcement agencies as required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">6. Your Rights</h2>
            <p className="mt-1">
              You have the right to request access, correction, or deletion of your personal
              information. You may also opt-out of receiving future communications.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">7. Changes to This Policy</h2>
            <p className="mt-1">
              We reserve the right to change this policy at any time. Updates will be posted on this
              page with a revised date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-extrabold">8. Contact Us</h2>
            <p className="mt-1">
              For questions or concerns regarding this policy, contact us at:{" "}
              <a href="mailto:webmaster@saylaniwelfare.com" className="text-green-deep underline">
                webmaster@saylaniwelfare.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
