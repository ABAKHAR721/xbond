'use client'
import { useState, useEffect, useCallback } from 'react'
import { throttle } from '@/lib/utils'
import { Nav } from './nav'

export function ConditionalNav() {
  const [showNav, setShowNav] = useState(false)
  
  const onScroll = useCallback(() => {
    const throttledScroll = throttle(() => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.9
      setShowNav(scrollY > heroHeight)
    }, 16)
    throttledScroll()
  }, [])
  
  useEffect(() => {
    const scrollY = window.scrollY
    const heroHeight = window.innerHeight * 0.9
    setShowNav(scrollY > heroHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return showNav ? <Nav /> : null
}