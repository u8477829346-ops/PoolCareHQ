'use client'

import { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-border bg-card p-8 text-center md:p-12">
        <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Mail className="size-6" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-balance font-serif text-2xl font-semibold text-foreground md:text-3xl">
          Seasonal reminders in your inbox
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          We'll let you know when to open your pool in spring and how to get
          it ready for winter, plus new guides every month. No spam.
        </p>

        {sent ? (
          <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 font-medium text-primary">
            <CheckCircle2 className="size-5" aria-hidden="true" />
            All set! Check your inbox to confirm your subscription.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
