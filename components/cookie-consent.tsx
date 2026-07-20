'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, ShieldCheck, BarChart3, Megaphone, Settings2 } from 'lucide-react'

const STORAGE_KEY = 'cookie-consent'

type ConsentChoices = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

type ConsentState = 'unknown' | 'pending' | 'decided'

export function CookieConsent() {
  const [state, setState] = useState<ConsentState>('pending')
  const [showCustomize, setShowCustomize] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      setState(saved ? 'decided' : 'pending')
    } catch {
      // If storage isn't available, fail safe by still asking for consent.
      setState('pending')
    }
  }, [])

  useEffect(() => {
    if (state === 'pending') {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [state])

  function saveConsent(choices: ConsentChoices) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ ...choices, decidedAt: new Date().toISOString() }),
      )
    } catch {
      // Ignore storage errors; the choice still applies for this visit.
    }
    setState('decided')
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  function rejectAll() {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  function savePreferences() {
    saveConsent({ necessary: true, analytics, marketing })
  }

  if (state !== 'pending') return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/60 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Cookie className="size-6" aria-hidden="true" />
        </span>

        <h2
          id="cookie-consent-title"
          className="mt-4 text-balance font-serif text-xl font-semibold text-foreground"
        >
          We value your privacy
        </h2>
        <p
          id="cookie-consent-description"
          className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground"
        >
          We use cookies to run this site, understand how it's used, and, if
          you allow it, personalize content. You can accept all cookies,
          reject the optional ones, or customize your preferences. You won't
          be able to browse the site until you make a choice. Read more in
          our{' '}
          <Link
            href="/cookie-policy"
            className="font-medium text-primary underline underline-offset-2"
          >
            Cookie Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy-policy"
            className="font-medium text-primary underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {showCustomize && (
          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    Necessary
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    Always on
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Required for the site to function properly. They cannot be
                  disabled.
                </p>
              </div>
            </div>

            <label className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BarChart3 className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    Analytics
                  </span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="size-4 accent-primary"
                    aria-label="Allow analytics cookies"
                  />
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  Help us understand how visitors use the site so we can
                  improve it.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Megaphone className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    Marketing
                  </span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="size-4 accent-primary"
                    aria-label="Allow marketing cookies"
                  />
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  Used to show you more relevant ads on other sites.
                </span>
              </span>
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          {showCustomize ? (
            <button
              type="button"
              onClick={savePreferences}
              className="order-first inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:order-none"
            >
              Save preferences
            </button>
          ) : (
            <button
              type="button"
              onClick={acceptAll}
              className="order-first inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:order-none"
            >
              Accept all
            </button>
          )}
          <button
            type="button"
            onClick={rejectAll}
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => setShowCustomize((v) => !v)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Settings2 className="size-4" aria-hidden="true" />
            {showCustomize ? 'Hide options' : 'Customize'}
          </button>
        </div>
      </div>
    </div>
  )
}
