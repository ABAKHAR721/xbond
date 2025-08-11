'use client'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'
import { throttle } from '@/lib/utils'
import { useTheme } from '@/contexts/theme-context'
import { Home, Briefcase, DollarSign, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Nav(){
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  const onScroll = useCallback(() => {
    const throttledScroll = throttle(() => {
      setScrolled(window.scrollY > 8)
    }, 16)
    throttledScroll()
  }, [])
  
  useEffect(()=>{
    setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  },[onScroll])

  const headerClasses = `sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur border-b' : ''} ${scrolled && theme === 'dark' ? 'bg-neutral-950/60 border-neutral-900' : ''} ${scrolled && theme === 'light' ? 'bg-white/60 border-neutral-200' : ''}`

  return (
    <header className={headerClasses}>
      <div className="container-px mx-auto max-w-7xl py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-brand" />
          <span className="font-semibold tracking-tight">xBond</span>
        </Link>
        <nav className={`hidden md:flex items-center gap-6 text-sm transition-colors ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
          <Link href="/" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Home</Link>
          <Link href="/services" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Services</Link>
          <Link href="/pricing" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Pricing</Link>
          <Link href="/contact" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Contact</Link>
          <Link href="/terms" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Terms</Link>
          <Link href="/privacy" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-neutral-900'}`}>Privacy</Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-neutral-100'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link href="https://calendly.com/xbond" className="btn btn-primary">Get started</Link>
        </div>
      </div>
    </header>
  )
}

export function MobileBottomNav() {
  const { theme } = useTheme()
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/services', icon: Briefcase, label: 'Services' },
    { href: '/pricing', icon: DollarSign, label: 'Pricing' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ]
  
  return (
    <nav className={`md:hidden fixed bottom-0 left-0 right-0 z-50 border-t ${
      theme === 'dark' ? 'bg-neutral-950/95 border-neutral-800' : 'bg-white/95 border-neutral-200'
    } backdrop-blur-sm`}>
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-brand'
                  : theme === 'dark'
                  ? 'text-neutral-400 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
