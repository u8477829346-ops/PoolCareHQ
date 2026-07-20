import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Clock, ArrowLeft, Lightbulb } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { withBasePath } from '@/lib/utils'
import {
  allArticles,
  getArticleBySlug,
  getArticlesByCategory,
  SITE_NAME,
} from '@/lib/site-data'

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article not found' }
  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const related = getArticlesByCategory(article.categorySlug).filter(
    (a) => a.slug !== article.slug,
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
          <Link
            href={`/categoria/${article.categorySlug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {article.category}
          </Link>

          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
            <span>{article.type}</span>
            <span className="text-muted-foreground">·</span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              {article.readingTime} min read
            </span>
          </div>

          <h1 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>

          {article.image && (
            <img
              src={withBasePath(article.image || '/placeholder.svg')}
              alt={article.title}
              className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
            />
          )}

          <div className="mt-8 flex flex-col gap-5">
            {article.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-4 text-balance font-serif text-2xl font-semibold text-foreground"
                  >
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'p') {
                return (
                  <p key={i} className="text-pretty leading-relaxed text-foreground/90">
                    {block.text}
                  </p>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i} className="flex flex-col gap-2.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-foreground/90">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              if (block.type === 'tip') {
                return (
                  <div
                    key={i}
                    className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4"
                  >
                    <Lightbulb className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    <p className="text-pretty text-sm leading-relaxed text-foreground/90">
                      {block.text}
                    </p>
                  </div>
                )
              }
              return null
            })}
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-border bg-secondary/40 py-12">
            <div className="mx-auto max-w-3xl px-4">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Keep reading in {article.category}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/articulo/${r.slug}`}
                      className="block rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <span className="text-pretty font-serif font-semibold leading-snug">
                        {r.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  )
}
