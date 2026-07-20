import { Calculator, BookOpen } from 'lucide-react'
import { withBasePath } from '@/lib/utils'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <img
        src={withBasePath('/images/hero-piscina.png')}
        alt="Residential pool with crystal-clear water in a sunny garden"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/25">
            Trustworthy pool maintenance guides
          </span>
          <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl">
            Keep your pool crystal clear all year, without the hassle
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Water chemistry, cleaning, equipment, and troubleshooting
            explained simply and backed by concrete data. Learn to care for
            your pool like a pro and save on maintenance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#calculadora"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Calculator className="size-5" aria-hidden="true" />
              Free chlorine calculator
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground/10 px-6 py-3 font-semibold text-primary-foreground ring-1 ring-primary-foreground/30 backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              <BookOpen className="size-5" aria-hidden="true" />
              Browse guides
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
