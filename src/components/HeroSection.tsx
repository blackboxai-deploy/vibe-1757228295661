import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Expert Legal Guidance
              <span className="block text-blue-200">When You Need It Most</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100 sm:text-2xl">
              Comprehensive legal advisory services across all practice areas. 
              Get professional answers to your legal questions from experienced attorneys.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-blue-900 border-white bg-white hover:bg-blue-50 text-lg px-8 py-4">
              <Link href="/legal-qa">Browse Legal Q&A</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-200">8+</div>
              <div className="text-lg">Practice Areas</div>
              <p className="text-blue-200 text-sm">Comprehensive legal coverage</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-200">24/7</div>
              <div className="text-lg">Legal Resources</div>
              <p className="text-blue-200 text-sm">Always available guidance</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-200">100+</div>
              <div className="text-lg">Legal Questions</div>
              <p className="text-blue-200 text-sm">Answered and explained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}