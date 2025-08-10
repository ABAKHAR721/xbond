'use client'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'
import { throttle } from '@/lib/utils'

export function Nav(){
  const [scrolled, setScrolled] = useState(false)
  
  const onScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 8)
    }, 16), // ~60fps
    []
  )
  
  useEffect(()=>{
    setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  },[onScroll])

  const headerClasses = `sticky top-0 z-50 ${scrolled ? 'backdrop-blur bg-neutral-950/60 border-b border-neutral-900' : ''}`

  return (
    <header className={headerClasses}>
      <div className="container-px mx-auto max-w-7xl py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-brand" />
          <span className="font-semibold tracking-tight">xBond</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="https://calendly.com/xbond" className="btn btn-primary">Get started</Link>
        </div>
      </div>
    </header>
  )
}
