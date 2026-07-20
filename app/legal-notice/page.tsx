import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { SITE_NAME } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: `Legal notice and terms of use for ${SITE_NAME}.`,
}

export default function LegalNoticePage() {
  return (
    <LegalPageLayout title="Legal Notice" lastUpdated="July 2026">
      <section>
        <h2>1. Site identification</h2>
        <p>
          {SITE_NAME} ("the site", "we", "us") is an independent
          informational website dedicated to residential pool maintenance,
          water chemistry, and equipment guides. For any legal inquiry, you
          can contact us through our{' '}
          <Link href="/contact">contact page</Link>.
        </p>
      </section>

      <section>
        <h2>2. Purpose of the site</h2>
        <p>
          {SITE_NAME} publishes educational and informational content about
          pool care, cleaning routines, water chemistry, and equipment. The
          content is provided for general informational purposes only and
          does not replace the advice of a qualified pool maintenance
          professional.
        </p>
      </section>

      <section>
        <h2>3. Intellectual property</h2>
        <p>
          Unless otherwise stated, the text, images, graphics, logos, and
          overall design of {SITE_NAME} are the property of the site or are
          used under license. Reproduction, distribution, or public
          communication of all or part of the content of this site, for
          commercial purposes, in any medium and through any technical means,
          without the authorization of {SITE_NAME}, is prohibited.
        </p>
      </section>

      <section>
        <h2>4. Affiliate disclosure</h2>
        <p>
          Some links on {SITE_NAME} are affiliate links. This means that, at
          no extra cost to you, we may earn a small commission if you
          purchase a product through one of these links. This does not
          influence which products or brands we recommend; our
          recommendations are based on our own criteria and research.
        </p>
      </section>

      <section>
        <h2>5. Limitation of liability</h2>
        <p>
          While we make every effort to keep the information on this site
          accurate and up to date, {SITE_NAME} does not guarantee the
          completeness, accuracy, or timeliness of the content. Any action
          you take based on the information found on this site is strictly at
          your own risk. We recommend consulting the manufacturer's
          instructions and, where necessary, a qualified professional before
          handling pool chemicals or equipment.
        </p>
      </section>

      <section>
        <h2>6. External links</h2>
        <p>
          This site may contain links to third-party websites. We are not
          responsible for the content, privacy policies, or practices of any
          third-party sites.
        </p>
      </section>

      <section>
        <h2>7. Applicable law</h2>
        <p>
          These terms are governed by the laws applicable to the site owner's
          jurisdiction. Any dispute arising from the use of this site will be
          subject to the competent courts, without prejudice to any
          mandatory consumer protection rules that may apply to you.
        </p>
      </section>
    </LegalPageLayout>
  )
}
