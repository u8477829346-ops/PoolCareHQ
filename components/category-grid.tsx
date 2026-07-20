import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/site-data'

export function CategoryGrid() {
  return (
    <section id="categorias" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
          Explore by category
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Everything you need to know about your pool, organized into
          easy-to-follow topic guides.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {cat.articleCount} articles
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
