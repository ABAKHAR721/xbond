'use client'
import { useTheme } from '@/contexts/theme-context'
import { useEffect } from 'react'

export function DynamicFavicon() {
  const { theme } = useTheme()

  useEffect(() => {
    // Remove existing favicon
    const existingFavicon = document.querySelector('link[rel="icon"]')
    if (existingFavicon) {
      existingFavicon.remove()
    }
    
    // Create new favicon
    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.href = `${theme === 'dark' ? '/4.png' : '/3.png'}?v=${Date.now()}`
    document.head.appendChild(favicon)
  }, [theme])

  return null
}