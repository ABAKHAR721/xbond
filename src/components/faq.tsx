'use client'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Reveal, RevealContainer } from './reveal'

export type FAQItem = { q: string; a: string }

export function FAQ({
  items,
  title = 'FAQ',
  intro = 'Answers to common questions about our AI-powered outreach & lead systems.'
}: { items: FAQItem[]; title?: string; intro?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="container-px mx-auto max-w-7xl py-20">
      <RevealContainer className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-neutral-300 max-w-prose">{intro}</p>
        </Reveal>
        <div className="space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <Reveal key={item.q}>
                <button
                  className={`w-full text-left rounded-2xl border border-neutral-800/80 bg-neutral-950/40 px-5 py-4 flex items-center justify-between ${
                    isOpen ? 'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]' : ''
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="font-medium">{item.q}</span>
                  <span className="text-neutral-400">
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="-mt-2 mb-2 rounded-b-2xl border border-t-0 border-neutral-800/80 bg-neutral-950/60 px-5 py-4 text-neutral-300">
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


