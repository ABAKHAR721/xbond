'use client'
import Link from 'next/link'
import { Reveal } from './reveal'
import { useTheme } from '@/contexts/theme-context'

type Props = {
  title: string
  subtitle?: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
}

export function CTABanner({ title, subtitle, primary, secondary }: Props) {
  const { theme } = useTheme()
  
  return (
    <Reveal>
      <div className={`card p-8 md:p-12 text-center ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-neutral-900 to-neutral-950' 
          : 'bg-gradient-to-br from-neutral-50 to-neutral-100'
      }`}>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
        {subtitle && (
          <p className={`mt-2 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>{subtitle}</p>
        )}
        {(primary || secondary) && (
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
            {primary && (
              <Link href={primary.href} className="btn btn-brand">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="btn btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </Reveal>
  )}


