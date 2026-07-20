import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string
  lastUpdated?: string
  children: ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-3xl px-4 py-14 md:py-16">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>
            <h1 className="mt-6 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              {title}
            </h1>
            {lastUpdated && (
              <p className="mt-3 text-sm text-muted-foreground">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <div className="space-y-8 text-pretty leading-relaxed text-muted-foreground [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-foreground">
            {children}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
