'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const practiceAreas = [
    { title: 'Criminal Law', href: '/practice-areas/criminal-law' },
    { title: 'Civil Law', href: '/practice-areas/civil-law' },
    { title: 'Family Law', href: '/practice-areas/family-law' },
    { title: 'Corporate Law', href: '/practice-areas/corporate-law' },
    { title: 'Real Estate', href: '/practice-areas/real-estate' },
    { title: 'Employment Law', href: '/practice-areas/employment-law' },
    { title: 'Immigration Law', href: '/practice-areas/immigration-law' },
    { title: 'Constitutional Law', href: '/practice-areas/constitutional-law' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">LA</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Legal Advisory</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                Practice Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  {practiceAreas.map((area) => (
                    <NavigationMenuLink
                      key={area.href}
                      href={area.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{area.title}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/legal-qa" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Legal Q&A
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Resources
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-4 py-2">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Free Consultation</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Practice Areas</p>
                  {practiceAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:text-blue-600 py-1"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
                <Link href="/legal-qa" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Legal Q&A
                </Link>
                <Link href="/resources" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Resources
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
                <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}