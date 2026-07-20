import Link from 'next/link'
import { Clock } from 'lucide-react'
import { featuredArticles } from '@/lib/site-data'
import { withBasePath } from '@/lib/utils'

export function FeaturedArticles() {
  return (
    <section className="bg-secondary/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Featured Guides
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            The most useful articles for solving your pool's most common
            problems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-md"
            >
              <Link href={`/articulo/${article.slug}`} className="block overflow-hidden">
                <img
                  src={withBasePath(article.image || '/placeholder.svg')}
                  alt={article.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  <span>{article.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{article.type}</span>
                </div>
                <h3 className="mt-3 text-balance font-serif text-lg font-semibold leading-snug text-foreground">
                  <Link href={`/articulo/${article.slug}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {article.readingTime} min read
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
