import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { SITE_NAME } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie policy explaining how ${SITE_NAME} uses cookies.`,
}

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="July 2026">
      <section>
        <h2>1. What are cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device when
          you visit a website. They are widely used to make websites work,
          work more efficiently, and to provide information to the site
          owners.
        </p>
      </section>

      <section>
        <h2>2. How we use cookies</h2>
        <p>
          When you first visit {SITE_NAME}, you are shown a cookie consent
          banner where you can accept all cookies, reject the optional ones,
          or customize your preferences. We use the following categories of
          cookies:
        </p>
        <ul>
          <li>
            <strong>Essential cookies:</strong> necessary for the site to
            function properly, such as remembering your cookie preferences.
            These cannot be disabled.
          </li>
          <li>
            <strong>Analytics cookies:</strong> help us understand how
            visitors interact with the site so we can improve our content
            and guides.
          </li>
          <li>
            <strong>Advertising cookies:</strong> used by Google AdSense and
            similar services to show ads that may be relevant to you, and to
            measure ad performance. These are only set if you accept
            optional cookies.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Managing your preferences</h2>
        <p>
          You can change or withdraw your cookie consent at any time by
          clearing your browser's site data for {SITE_NAME} and reloading
          the page, which will bring up the consent banner again. You can
          also manage or block cookies directly through your browser
          settings; most browsers let you refuse cookies or alert you when
          they are being sent.
        </p>
      </section>

      <section>
        <h2>4. Third-party cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our
          pages, such as Google AdSense (advertising) and Vercel Analytics
          (site usage). We do not control these cookies; please refer to the
          respective third party's own policy for more details.
        </p>
      </section>

      <section>
        <h2>5. More information</h2>
        <p>
          For details on how we handle personal data more broadly, see our{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>. If you have any
          questions about our use of cookies, please visit our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </LegalPageLayout>
  )
}
