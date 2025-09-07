import HeroSection from '@/components/HeroSection'
import PracticeAreaCard from '@/components/PracticeAreaCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { practiceAreas } from '@/lib/legal-data'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Practice Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Legal Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced legal team provides expert guidance across all major areas of law. 
              Find the specialized legal assistance you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {practiceAreas.map((area) => (
              <PracticeAreaCard
                key={area.id}
                title={area.title}
                description={area.description}
                icon={area.icon}
                href={`/practice-areas/${area.slug}`}
                commonIssues={area.commonIssues}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link href="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Legal Advisory Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional legal expertise backed by years of experience and a commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Extensive Experience</h3>
                <p className="text-gray-600">
                  Years of legal practice across multiple areas of law, providing comprehensive knowledge and proven strategies for your case.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Client-Focused Approach</h3>
                <p className="text-gray-600">
                  Personalized attention to every case, ensuring your unique situation receives the dedicated focus it deserves.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Responsive Service</h3>
                <p className="text-gray-600">
                  Quick response times and accessible communication, keeping you informed throughout your legal journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Q&A Preview Section */}
      <section className="py-16 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Legal Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get immediate answers to frequently asked legal questions across all practice areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">What should I do if I'm arrested?</h3>
                <p className="text-gray-600 text-sm">
                  Remain calm and exercise your right to remain silent. Do not resist arrest. Ask for an attorney immediately and do not answer questions without legal representation present...
                </p>
                <Link href="/legal-qa" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read full answer →
                </Link>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">How is child custody determined?</h3>
                <p className="text-gray-600 text-sm">
                  Courts determine custody based on the "best interests of the child" standard, considering factors like parental fitness, stability of home environment...
                </p>
                <Link href="/legal-qa" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read full answer →
                </Link>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/legal-qa">Browse All Q&A</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Legal Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't wait - protect your rights and interests with professional legal guidance. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/legal-qa">Ask a Legal Question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}