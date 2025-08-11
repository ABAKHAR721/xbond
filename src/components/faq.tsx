'use client'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Reveal, RevealContainer } from './reveal'
import { useTheme } from '@/contexts/theme-context'

export type FAQItem = { q: string; a: string }

export function FAQ({
  items,
  title = 'FAQ',
  intro = 'Answers to common questions about our AI-powered outreach & lead systems.'
}: { items: FAQItem[]; title?: string; intro?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { theme } = useTheme()

  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <RevealContainer className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent'
              : 'text-neutral-900'
          }`}>
            {title}
          </h2>
          <p className={`mt-4 max-w-prose ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>{intro}</p>
        </Reveal>
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={item.q}>
                <button
                  className={`w-full text-left rounded-2xl border px-5 py-4 flex items-center justify-between transition-all ${
                    theme === 'dark'
                      ? `border-neutral-800/80 bg-neutral-950/40 ${
                          isOpen ? 'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]' : ''
                        }`
                      : `border-neutral-200 bg-white/80 ${
                          isOpen ? 'shadow-sm' : ''
                        }`
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className={`-mt-2 mb-2 rounded-b-2xl border border-t-0 px-5 py-4 ${
                    theme === 'dark'
                      ? 'border-neutral-800/80 bg-neutral-950/60 text-neutral-300'
                      : 'border-neutral-200 bg-white/80 text-neutral-700'
                  }`}>
                    {item.a}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </RevealContainer>
    </section>
  )
}


