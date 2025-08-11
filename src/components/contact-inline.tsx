'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Reveal, RevealContainer } from './reveal'
import { useTheme } from '@/contexts/theme-context'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactInline() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const { theme } = useTheme()

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="container-px mx-auto max-w-7xl pb-24">
      <Reveal>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Book a discovery call</h1>
      </Reveal>
      <Reveal>
        <p className={`mt-4 ${
          theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
        }`}>Tell us about your goals and current stack. We&apos;ll reply within 24 hours.</p>
      </Reveal>

      <RevealContainer className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
        <Reveal>
        <div className="card p-6">
          <form action={onSubmit} className="space-y-5">
            <div>
              <label className={`block text-sm ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}>Name</label>
              <input name="name" required className={`mt-2 w-full rounded-xl px-3 py-2 ${
                theme === 'dark'
                  ? 'bg-neutral-900 border border-neutral-800 text-white'
                  : 'bg-white border border-neutral-300 text-neutral-900'
              }`} />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={`block text-sm ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>Email</label>
                <input type="email" name="email" required className={`mt-2 w-full rounded-xl px-3 py-2 ${
                  theme === 'dark'
                    ? 'bg-neutral-900 border border-neutral-800 text-white'
                    : 'bg-white border border-neutral-300 text-neutral-900'
                }`} />
              </div>
              <div>
                <label className={`block text-sm ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>Company</label>
                <input name="company" className={`mt-2 w-full rounded-xl px-3 py-2 ${
                  theme === 'dark'
                    ? 'bg-neutral-900 border border-neutral-800 text-white'
                    : 'bg-white border border-neutral-300 text-neutral-900'
                }`} />
              </div>
            </div>
            <div>
              <label className={`block text-sm ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
              }`}>What do you want to build?</label>
              <textarea name="message" rows={6} className={`mt-2 w-full rounded-xl px-3 py-2 ${
                theme === 'dark'
                  ? 'bg-neutral-900 border border-neutral-800 text-white'
                  : 'bg-white border border-neutral-300 text-neutral-900'
              }`} placeholder="Cold outreach system, lead nurturing, CRM enrichment, etc." />
            </div>
            <button disabled={status==='loading'} className="btn btn-brand">{status==='loading' ? 'Sending…' : 'Send message'}</button>
            {status==='success' && <p className="text-emerald-400">Thanks! We&apos;ll get back to you soon.</p>}
            {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
        </Reveal>

        <Reveal>
        <div className="card p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Schedule a Call</h3>
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>Book a 15-minute discovery call to discuss your outreach goals.</p>
          <Link href="https://calendly.com/xbond" target="_blank" className="btn btn-brand">
            Open Calendar
          </Link>
        </div>
        </Reveal>
      </RevealContainer>
    </section>
  )
}

