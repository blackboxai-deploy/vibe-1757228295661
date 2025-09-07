import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { practiceAreas } from '@/lib/legal-data'

export default function RealEstatePage() {
  const area = practiceAreas.find(area => area.slug === 'real-estate')!

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{area.icon}</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{area.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{area.description}</p>
        </div>

        <Card className="mb-8">
          <CardHeader><CardTitle className="text-2xl text-gray-900">Overview</CardTitle></CardHeader>
          <CardContent><p className="text-gray-700 leading-relaxed">{area.overview}</p></CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="text-2xl text-gray-900">Real Estate Legal Services</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {area.commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="text-2xl text-gray-900">Real Estate Transaction Process</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {area.procedures.map((procedure, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border-l-4 border-blue-500 bg-blue-50">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{procedure}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader><CardTitle className="text-2xl text-gray-900">Frequently Asked Questions</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-6">
              {area.faqs.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200">{faq.answer}</p>
                  {index < area.faqs.length - 1 && <hr className="border-gray-200" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Real Estate Legal Assistance</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Real estate transactions involve significant investments and complex legal requirements. Our experienced real estate attorneys ensure your interests are protected throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Real Estate Legal Help</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/legal-qa">Property Law Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}