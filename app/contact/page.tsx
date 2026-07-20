import type { Metadata } from 'next'
import { Mail, Clock } from 'lucide-react'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { SITE_NAME } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with the ${SITE_NAME} team.`,
}

export default function ContactPage() {
  return (
    <LegalPageLayout title="Contact Us">
      <section>
        <p>
          Have a question about pool maintenance, spotted an error in one of
          our guides, or want to suggest a topic? We'd love to hear from
          you.
        </p>
      </section>

      <div className="not-prose grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Mail className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
            Email us
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            <a
              href="mailto:hello@poolcarehq.com"
              className="text-primary underline underline-offset-2"
            >
              hello@poolcarehq.com
            </a>
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Clock className="size-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
            Response time
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We typically reply within 2–3 business days.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <h2>Press &amp; partnerships</h2>
        <p>
          For collaborations, sponsorships, or product review requests,
          please include as much detail as possible in your email so we can
          get back to you faster.
        </p>
      </section>
    </LegalPageLayout>
  )
}
