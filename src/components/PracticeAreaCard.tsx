import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PracticeAreaCardProps {
  title: string
  description: string
  icon: string
  href: string
  commonIssues: string[]
}

export default function PracticeAreaCard({ 
  title, 
  description, 
  icon, 
  href, 
  commonIssues 
}: PracticeAreaCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="text-3xl">{icon}</div>
          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm text-gray-700 mb-2 uppercase tracking-wide">
            Common Issues:
          </h4>
          <ul className="space-y-1">
            {commonIssues.slice(0, 3).map((issue, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="text-blue-500 mr-2 mt-1.5">•</span>
                <span>{issue}</span>
              </li>
            ))}
            {commonIssues.length > 3 && (
              <li className="text-sm text-gray-500 italic">
                +{commonIssues.length - 3} more areas covered
              </li>
            )}
          </ul>
        </div>
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
          <Link href={href}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}