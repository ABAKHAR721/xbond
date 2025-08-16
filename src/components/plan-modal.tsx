'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/contexts/theme-context'

export type PlanName = 'Basic' | 'Growth'

type PlanDetails = {
  name: PlanName
  headline: string
  price: string
  summary: string
  highlights: string[]
  whatYouGet: string[]
  timeline: string
  ctaHref: string
  ctaLabel: string
}

const DETAILS: Record<PlanName, PlanDetails> = {
  Basic: {
    name: 'Basic',
    headline: 'Foundations to optimize clients acquisition fast',
    price: '$99/mo + setup',
    summary:
      'Perfect for small teams getting their first predictable outreach system in place. We set up an AI‑assisted flow that reliably books first conversations.',
    highlights: [
      'AI chatbot to capture/qualify inbound leads',
      'Single-channel outreach sequence with inbox safety',
      'Light CRM enrichment and activity logging',
      'Weekly performance snapshot (open/reply/meet)',
    ],
    whatYouGet: [
      'Discovery & system design workshop',
      'Copy & targeting playbook (v1)',
      'Mailbox setup, warmup & safeguard rules',
      'Lead capture chatbot with basic grounding',
      'Reporting dashboard (starter)',
    ],
    timeline: 'Typical pilot ships in 7–10 business days.',
    ctaHref: '/contact?plan=basic',
    ctaLabel: 'Start Basic pilot',
  },
  Growth: {
    name: 'Growth',
    headline: 'Scale what works with advanced automation Systems',
    price: '$299/mo + setup',
    summary:
      'For teams ready to scale outreach and qualification. We add multichannel, deeper enrichment, analytics, and a faster feedback loop for iteration.',
    highlights: [
      'Advanced chatbots with custom responses',
      'Multichannel outreach (email + LinkedIn) with A/B tests',
      'Lead qualification & follow‑up automations',
      'Analytics with cohort trends and insights',
    ],
    whatYouGet: [
      'Strategy workshop + pilot roadmap',
      'Copy & persona variants with testing plan',
      'Inbox rotation, warmup, health monitoring',
      'CRM enrichment & routing rules',
      'Analytics dashboard (growth)',
    ],
    timeline: 'Typical rollout ships in 10–14 business days.',
    ctaHref: '/contact?plan=growth',
    ctaLabel: 'Start Growth pilot',
  },
}

function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <motion.button
      aria-label="Close"
      className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )
}

export function PlanModal({
  open,
  plan,
  onClose,
  billing = 'monthly'
}: {
  open: boolean
  plan: PlanName | null
  onClose: () => void
  billing?: 'monthly' | 'yearly'
}) {
  const data = plan ? DETAILS[plan] : null
  const { theme } = useTheme()
  
  const getPrice = (planName: PlanName) => {
    const monthlyPrices = { Basic: 99, Growth: 299 }
    const monthly = monthlyPrices[planName]
    if (billing === 'monthly') return `$${monthly}/mo + setup`
    const yearly = Math.round(monthly * 0.8)
    return `$${yearly}/mo + setup (billed annually: $${yearly * 12})`
  }

  return (
    <AnimatePresence>
      {open && data && (
        <>
          <Backdrop onClose={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
          >
            <div className={`w-full max-w-3xl rounded-2xl border p-6 md:p-8 relative ${
              theme === 'dark'
                ? 'border-neutral-800 bg-neutral-950 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]'
                : 'border-neutral-200 bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.1)]'
            }`}>
              <button
                onClick={onClose}
                className={`absolute right-3 top-3 rounded-lg transition-colors ${
                  theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-sm text-brand mb-1">{data.name} Plan</div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{data.headline}</h3>
              <p className={`mt-1 ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>{data.summary}</p>
              <div className={`mt-2 ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
              }`}>{data.timeline}</div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium">Highlights</h4>
                  <ul className={`mt-2 space-y-2 text-sm ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {data.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">What you get</h4>
                  <ul className={`mt-2 space-y-2 text-sm ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {data.whatYouGet.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between flex-wrap gap-3">
                <div className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                  <span className="text-lg font-semibold">{getPrice(data.name)}</span>
                </div>
                <div className="flex gap-3">
                  <Link href={data.ctaHref} className="btn btn-brand">{data.ctaLabel}</Link>
                  <button onClick={onClose} className="btn btn-ghost">Close</button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


