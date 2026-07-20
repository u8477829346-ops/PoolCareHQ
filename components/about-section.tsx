import { ShieldCheck, Award, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Practical focus',
    text: 'Guides written around real, everyday pool maintenance situations.',
  },
  {
    icon: ShieldCheck,
    title: 'Concrete data',
    text: 'Dosing tables, real comparisons, and verifiable tips, no filler.',
  },
  {
    icon: HeartHandshake,
    title: 'No jargon',
    text: 'We explain water chemistry and breakdowns in a way anyone can understand.',
  },
]

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium ring-1 ring-primary-foreground/25">
              About Us
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold md:text-4xl">
              Your pool in the best hands
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
              At PoolCareHQ we bring together practical guides for
              residential pool owners. Our goal is to help you save time and
              money caring for your own pool, with clear, well-organized
              information based on real maintenance experience.
            </p>
          </div>

          <div className="grid gap-4">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="flex items-start gap-4 rounded-2xl bg-primary-foreground/10 p-5 ring-1 ring-primary-foreground/15"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-foreground/85">
                      {v.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
