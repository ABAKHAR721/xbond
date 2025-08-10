'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { ProofBar } from '@/components/proof-bar'
import { CTABanner } from '@/components/cta-banner'
import { ContactInline } from '@/components/contact-inline'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { ServiceCards } from '@/components/service-cards'
import { Reveal, RevealContainer } from '@/components/reveal'

const pricingTiers = [
  {
    name: 'Basic',
    price: '$99/mo',
    bullets: ['AI chatbot', 'Basic workflows', 'Analytics dashboard', 'Email support']
  },
  {
    name: 'Growth',
    price: '$299/mo',
    bullets: ['Advanced chatbots', 'Lead qualification & follow‑up', 'Automated reporting', 'Priority support']
  },
  {
    name: 'Bespoke',
    price: 'Custom',
    bullets: ['Custom integrations', 'Decision models', 'Multi‑dept automation', 'Dedicated consultant']
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-20%,rgba(244,116,0,0.18),transparent_60%)]" />
        <div className="container-px mx-auto max-w-7xl pt-20 pb-24">
          <motion.h1 {...fadeInUp} className="text-4xl md:text-6xl font-semibold tracking-tight text-center">
            AI‑Powered Outreach & Lead Systems
          </motion.h1>
          <motion.p {...fadeInUp} transition={{...fadeInUp.transition, delay:0.1}} className="mt-5 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto text-center">
            We design and run cold outreach pipelines, lead nurturing automations, and custom acquisition workflows so qualified clients come to you.
          </motion.p>
          <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay:0.2}} className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link href="/pricing" className="btn btn-primary">See pricing</Link>
            <Link href="/contact" className="btn btn-ghost">Book a discovery call</Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="container-px mx-auto max-w-7xl py-20" id="services">
        <RevealContainer className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Services that ship pipeline</h2>
            <p className="mt-4 text-neutral-300 max-w-prose">Done‑for‑you strategy, build, and implementation tailored to your goals. Start small, scale what works.</p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-200">
              {[
                'AI‑assisted cold outreach systems (multichannel email/LinkedIn)',
                'Lead nurturing automations and CRM enrichment',
                'Acquisition workflows with human‑in‑the‑loop approvals',
                'Analytics & reporting for measurable ROI',
              ].map((item)=> (
                <li key={item} className="flex items-start gap-2"><Check className="h-5 w-5 text-brand mt-0.5"/><span>{item}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/services" className="btn btn-brand">Explore services</Link>
              <Link href="/contact" className="btn btn-ghost">Talk to an expert</Link>
            </div>
          </Reveal>
          <Reveal>
          <div className="relative card p-6">
            <div className="aspect-[4/3] w-full rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
              <span className="text-sm">Demo screenshot / product shot</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              <li>• Outreach → Qualification → Handoffs</li>
              <li>• Auto‑enrichment (firmographics & intent)</li>
              <li>• Inbox rotation, warmup, safety checks</li>
              <li>• Weekly optimization reviews</li>
            </ul>
          </div>
          </Reveal>
        </RevealContainer>
      </section>

      {/* Logos */}
      <section className="border-t border-neutral-900">
        <div className="container-px mx-auto max-w-7xl py-12">
          <p className="text-center text-sm text-neutral-400">Trusted by teams who value speed & quality</p>
          <RevealContainer className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
            {['Acme','Nimbus','Voyage','Octagon','Northstar','Marble'].map((l)=>(
              <Reveal key={l}>
                <div className="flex items-center justify-center">
                  <span className="text-neutral-400/80 text-sm">{l}</span>
                </div>
              </Reveal>
            ))}
          </RevealContainer>
        </div>
      </section>

      <ProofBar />

      {/* Pricing section */}
      <section className="container-px mx-auto max-w-7xl py-20" id="pricing">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Pricing</h2>
        </div>
        <div className="mt-8">
          <Pricing />
        </div>
      </section>


      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <CTABanner
          title="Ready to make pipeline predictable?"
          subtitle="Book a 20‑minute discovery. We’ll map one high‑impact workflow and outline a pilot you can ship in days."
          primary={{ href: '/contact', label: 'Book a call' }}
          secondary={{ href: '/services', label: 'See services' }}
        />
      </section>

      {/* Services cards (full section from Services page) */}
      <section className="container-px mx-auto max-w-7xl py-20" id="services-cards">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Services</h2>
        <p className="mt-4 text-neutral-300 max-w-prose">We help startups and service businesses get more clients through AI‑powered outreach and lead systems. Choose what you need, or bundle into a pilot.</p>
        <ServiceCards />
      </section>

      {/* Case studies preview */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Case studies</h2>
          <Link className="btn btn-ghost" href="/case-studies">See all</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[{slug:'saas-replies',title:'+38% replies in 4 weeks'},{slug:'agency-pipeline',title:'Predictable pipeline from cold'}].map(c=> (
            <div key={c.slug} className="card p-6">
              <h3 className="text-lg font-medium">{c.title}</h3>
              <Link href={`/case-studies/${c.slug}`} className="btn btn-ghost mt-4">Read</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Latest posts</h2>
          <Link className="btn btn-ghost" href="/blog">Visit blog</Link>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[{slug:'predictable-outreach',title:'Designing predictable outreach systems'},{slug:'qualification-loops',title:'Qualification loops that don’t leak'}].map(p=> (
            <div key={p.slug} className="card p-6">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <Link href={`/blog/${p.slug}`} className="btn btn-ghost mt-4">Read</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={[
          { q: 'How can AI automation help my business?', a: 'We design outreach and lead workflows that reduce manual work and increase reply rates, so your team focuses on qualified conversations.' },
          { q: 'Is AI difficult to integrate into my current system?', a: 'We integrate with your CRM and email stack. Start small with a pilot; expand as we prove ROI.' },
          { q: 'What industries can benefit?', a: 'Any B2B team that depends on pipeline: agencies, SaaS, consultancies, and startups.' },
          { q: 'What’s the difference between your pricing plans?', a: 'Basic covers foundations; Growth adds advanced automation and reporting; Bespoke is custom with a dedicated consultant.' },
          { q: 'How long does setup take?', a: 'Most pilots go live within two weeks, with measurable results in the first month.' },
          { q: 'Can I request a custom AI solution?', a: 'Yes. Bespoke is designed for complex stacks and multi‑department automation.' },
        ]}
      />

      {/* Inline contact + calendar at bottom */}
      <ContactInline />
    </div>
  )
}
