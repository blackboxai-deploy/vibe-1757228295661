import PracticeAreaCard from '@/components/PracticeAreaCard'
import { practiceAreas } from '@/lib/legal-data'

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Practice Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive legal services across all major areas of law. 
            Our experienced attorneys are ready to help you navigate complex legal challenges 
            and protect your rights and interests.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
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

        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Comprehensive Legal Representation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Our Approach</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Thorough case evaluation and strategic planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Clear communication throughout the legal process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Aggressive representation when needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Cost-effective solutions for complex legal issues</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Experienced attorneys in multiple practice areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Track record of successful case outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Personalized attention to every client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>24/7 availability for urgent legal matters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Call-to-Action */}
        <div className="text-center mt-12 p-8 bg-blue-600 text-white rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't navigate complex legal issues alone. Our experienced attorneys are here to help you understand your options and protect your interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/legal-qa"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Browse Legal Q&A
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}