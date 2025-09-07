import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const practiceAreas = [
    { title: 'Criminal Law', href: '/practice-areas/criminal-law' },
    { title: 'Civil Law', href: '/practice-areas/civil-law' },
    { title: 'Family Law', href: '/practice-areas/family-law' },
    { title: 'Corporate Law', href: '/practice-areas/corporate-law' },
  ]

  const moreAreas = [
    { title: 'Real Estate', href: '/practice-areas/real-estate' },
    { title: 'Employment Law', href: '/practice-areas/employment-law' },
    { title: 'Immigration Law', href: '/practice-areas/immigration-law' },
    { title: 'Constitutional Law', href: '/practice-areas/constitutional-law' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LA</span>
              </div>
              <span className="font-bold text-xl">Legal Advisory</span>
            </div>
            <p className="text-gray-300 text-sm">
              Providing comprehensive legal guidance and professional consultation across all areas of law. 
              Protecting your rights and interests with experienced legal representation.
            </p>
            <div className="space-y-1 text-sm text-gray-300">
              <p>📍 123 Legal Street, Suite 100</p>
              <p>📞 (555) 123-LEGAL</p>
              <p>✉️ info@legaladvisory.com</p>
            </div>
          </div>

          {/* Practice Areas 1 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.href}>
                  <Link 
                    href={area.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas 2 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">More Areas</h3>
            <ul className="space-y-2">
              {moreAreas.map((area) => (
                <li key={area.href}>
                  <Link 
                    href={area.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/legal-qa" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Legal Q&A
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Legal Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Legal Advisory Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-blue-400 transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Legal Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              No attorney-client relationship is formed by accessing this website or contacting our office. 
              Consult with a qualified attorney for advice regarding your specific legal situation. 
              Results from past cases do not guarantee similar outcomes in future cases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}