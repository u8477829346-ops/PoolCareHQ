import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowUpRight, Clock, ArrowLeft, FileText } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { withBasePath } from '@/lib/utils'
import {
  categories,
  getCategoryBySlug,
  getArticlesByCategory,
  SITE_NAME,
} from '@/lib/site-data'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: 'Category not found' }
  return {
    title: `${category.title} | ${SITE_NAME}`,
    description: category.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const articles = getArticlesByCategory(slug)
  const Icon = category.icon

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero with image */}
        <section className="relative overflow-hidden border-b border-border">
          <img
            src={withBasePath(category.image || '/placeholder.svg')}
            alt={category.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/55" />
          <div className="relative mx-auto max-w-5xl px-4 py-14 md:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>
            <div className="mt-6 flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground backdrop-blur-sm">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                  <FileText className="size-3.5" aria-hidden="true" />
                  {articles.length} articles
                </span>
                <h1 className="mt-3 text-balance font-serif text-3xl font-semibold text-primary-foreground md:text-5xl">
                  {category.title}
                </h1>
                <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid with image */}
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
          {articles.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/articulo/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={withBasePath(article.image || '/placeholder.svg')}
                        alt={article.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                        {article.type}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-pretty font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                        {article.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {article.readingTime} min read
                        <ArrowUpRight className="ml-auto size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-card p-10 text-center">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                We're preparing new articles for this category. Check back
                soon!
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
