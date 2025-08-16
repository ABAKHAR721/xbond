'use client'
import Link from "next/link"
import Image from "next/image"
import { useTheme } from '@/contexts/theme-context'
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react'

export function Footer(){
  const { theme } = useTheme()
  
  return (
    <footer className={`border-t transition-colors ${
      theme === 'dark' ? 'border-neutral-800 bg-neutral-950/50' : 'border-neutral-200 bg-neutral-50'
    }`}>
      <div className="container-px mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image 
                src={theme === 'dark' ? '/6.svg' : '/5.svg'} 
                alt="xBond" 
                width={48} 
                height={48} 
                className="h-20 w-20"
              />
            </Link>
            <p className={`text-base leading-relaxed mb-6 max-w-md ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              We help startups and service businesses get more clients through AI-powered outreach and lead systems. 
              Predictable client acquisition that actually works.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="mailto:hello@xbond.io" 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white' 
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900'
                }`}
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">hello@xbond.io</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                { label: 'AI Outreach Systems', href: '/services' },
                { label: 'Lead Nurturing', href: '/services' },
                { label: 'CRM Integration', href: '/services' },
                { label: 'Analytics & Reporting', href: '/services' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className={`text-sm transition-colors flex items-center gap-1 group ${
                      theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className={`text-sm transition-colors flex items-center gap-1 group ${
                      theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`py-12 border-t ${
          theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Client Acquisition?
            </h3>
            <p className={`text-base mb-6 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Book a 15-minute strategy call and discover how we can 3x your reply rates in under 14 days.
            </p>
            <Link 
              href="https://calendly.com/xbond" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Schedule Free Strategy Call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          <div className={`flex flex-col md:flex-row items-center gap-4 text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            <p>© {new Date().getFullYear()} xBond. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className={`transition-colors ${
                theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'
              }`}>Privacy Policy</Link>
              <Link href="/terms" className={`transition-colors ${
                theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'
              }`}>Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className={`text-sm ${
              theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
            }`}>Connect with our founders:</span>
            <div className="flex items-center gap-3">
              <Link 
                href="https://www.linkedin.com/in/abakhar-abdessamad/" 
                target="_blank" 
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-neutral-800 hover:bg-neutral-700' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`} 
                title="Abakhar Abdessamad - Co-Founder"
              >
                <svg className="h-4 w-4" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/aymanbaki/" 
                target="_blank" 
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-neutral-800 hover:bg-neutral-700' 
                    : 'bg-neutral-100 hover:bg-neutral-200'
                }`} 
                title="Ayman Baki - Co-Founder"
              >
                <svg className="h-4 w-4" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}