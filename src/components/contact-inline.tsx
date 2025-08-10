'use client'
import { useState } from 'react'
import { Reveal, RevealContainer } from './reveal'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactInline() {
  const [status, setStatus] = useState<FormStatus>('idle')

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
        <p className="mt-4 text-neutral-300">Tell us about your goals and current stack. We’ll reply within 24 hours.</p>
      </Reveal>

      <RevealContainer className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
        <Reveal>
        <div className="card p-6">
          <form action={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-neutral-300">Name</label>
              <input name="name" required className="mt-2 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-neutral-300">Email</label>
                <input type="email" name="email" required className="mt-2 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-neutral-300">Company</label>
                <input name="company" className="mt-2 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-300">What do you want to build?</label>
              <textarea name="message" rows={6} className="mt-2 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" placeholder="Cold outreach system, lead nurturing, CRM enrichment, etc." />
            </div>
            <button disabled={status==='loading'} className="btn btn-brand">{status==='loading' ? 'Sending…' : 'Send message'}</button>
            {status==='success' && <p className="text-emerald-400">Thanks! We’ll get back to you soon.</p>}
            {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
        </Reveal>

        <Reveal>
        <div className="card p-2 lg:p-4">
          <iframe
            title="Calendly — xBond"
            className="w-full h-[720px] lg:h-[760px] rounded-xl border border-neutral-800"
            src="https://calendly.com/xbond"
          />
        </div>
        </Reveal>
      </RevealContainer>
    </section>
  )
}


