import Link from 'next/link'
import { Reveal } from './reveal'

type Props = {
  title: string
  subtitle?: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
}

export function CTABanner({ title, subtitle, primary, secondary }: Props) {
  return (
    <Reveal>
      <div className="card p-8 md:p-12 text-center bg-gradient-to-br from-neutral-900 to-neutral-950">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
        {subtitle && (
          <p className="mt-2 text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>
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


