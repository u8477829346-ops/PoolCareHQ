import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { latestArticles } from '@/lib/site-data'

export function LatestArticles() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Latest Posts
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            New content every week on maintenance, chemistry, and equipment.
          </p>
        </div>
        <Link
          href="/#categorias"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View all categories
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {latestArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articulo/${article.slug}`}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <span>{article.category}</span>
                </div>
                <h3 className="mt-2 text-pretty font-serif text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {article.readingTime} min
                </span>
              </div>
              <ArrowUpRight
                className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
