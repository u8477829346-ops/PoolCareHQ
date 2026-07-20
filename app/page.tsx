import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CategoryGrid } from '@/components/category-grid'
import { ChlorineCalculator } from '@/components/chlorine-calculator'
import { FeaturedArticles } from '@/components/featured-articles'
import { LatestArticles } from '@/components/latest-articles'
import { AboutSection } from '@/components/about-section'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedArticles />
        <ChlorineCalculator />
        <LatestArticles />
        <AboutSection />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
