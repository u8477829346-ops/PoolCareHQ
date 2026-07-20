import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { SITE_NAME } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy explaining how ${SITE_NAME} collects and uses data.`,
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="July 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          At {SITE_NAME}, we respect your privacy and are committed to
          protecting your personal data. This policy explains what
          information we collect when you visit our site, how we use it, and
          the choices you have.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <p>Depending on how you use the site, we may collect:</p>
        <ul>
          <li>
            <strong>Usage data:</strong> pages visited, time on site,
            device and browser type, collected automatically through
            analytics tools.
          </li>
          <li>
            <strong>Newsletter data:</strong> your email address, if you
            voluntarily subscribe to our newsletter.
          </li>
          <li>
            <strong>Cookies:</strong> small files stored on your device, as
            described in our{' '}
            <Link href="/cookie-policy">Cookie Policy</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Operate, maintain, and improve the site and its content.</li>
          <li>
            Understand how visitors use the site so we can create better
            guides.
          </li>
          <li>
            Send seasonal reminders and new guide notifications, only if you
            subscribed to our newsletter.
          </li>
          <li>Show relevant advertising, where consent has been given.</li>
        </ul>
      </section>

      <section>
        <h2>4. Third-party services</h2>
        <p>
          We work with third-party providers that may collect information
          through cookies or similar technologies when you use this site,
          including:
        </p>
        <ul>
          <li>
            <strong>Google AdSense:</strong> to display advertising. Google
            may use cookies to serve ads based on your prior visits to this
            or other websites. You can opt out of personalized advertising by
            visiting{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            <strong>Vercel Analytics:</strong> a privacy-focused analytics
            tool used to understand aggregate site traffic.
          </li>
        </ul>
        <p>
          These third parties have their own privacy policies governing how
          they use your information.
        </p>
      </section>

      <section>
        <h2>5. Your rights</h2>
        <p>
          Depending on your location, you may have the right to access,
          correct, delete, or restrict the use of your personal data, and to
          withdraw your consent to cookies at any time. To exercise any of
          these rights, please reach out through our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>

      <section>
        <h2>6. Data retention</h2>
        <p>
          We retain personal data, such as your email address for the
          newsletter, only for as long as necessary to provide the service
          you requested, or until you ask us to delete it.
        </p>
      </section>

      <section>
        <h2>7. Changes to this policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes
          will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>
          If you have questions about this privacy policy, please visit our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </LegalPageLayout>
  )
}
