'use client'
import Link from "next/link"
import { useTheme } from '@/contexts/theme-context'
import { Linkedin } from 'lucide-react'


export function Footer(){
  const { theme } = useTheme()
  
  return (
    <footer className={`border-t transition-colors ${
      theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
    }`}>
      <div className={`container-px mx-auto max-w-7xl py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4 ${
        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
      }`}>
        <p>© {new Date().getUTCFullYear()} xBond. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className={`transition-colors ${
            theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Privacy</Link>
          <Link href="/terms" className={`transition-colors ${
            theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>Terms</Link>
          <Link href="mailto:hello@xbond.io" className={`transition-colors ${
            theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'
          }`}>hello@xbond.io</Link>
          <div className="flex items-center gap-3 ml-4 border-l pl-4 border-neutral-700">
            <Link href="https://www.linkedin.com/in/abakhar-abdessamad/" target="_blank" className={`p-1 rounded transition-colors ${
              theme === 'dark' ? 'text-neutral-400 hover:text-brand' : 'text-neutral-600 hover:text-brand'
            }`} title="Abakhar Abdessamad">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/aymanbaki/" target="_blank" className={`p-1 rounded transition-colors ${
              theme === 'dark' ? 'text-neutral-400 hover:text-brand' : 'text-neutral-600 hover:text-brand'
            }`} title="Ayman Baki">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}