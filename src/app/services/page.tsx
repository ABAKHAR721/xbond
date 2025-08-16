'use client'
import { ServiceCards } from '@/components/service-cards'
import { useTheme } from '@/contexts/theme-context'

export default function ServicesPage(){
  const { theme } = useTheme()
  
  return (
    <div className="container-px mx-auto max-w-7xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Services</h1>
      <p className={`mt-4 max-w-prose ${
        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
      }`}>We help startups and service businesses get more clients through AI‑powered client acquisition systems. Choose what you need, or bundle into a pilot.</p>
      <ServiceCards />
    </div>
  )
}