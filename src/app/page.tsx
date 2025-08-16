'use client'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { ProofBar } from '@/components/proof-bar'
import { CTABanner } from '@/components/cta-banner'
import { ContactInline } from '@/components/contact-inline'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { ServiceCards } from '@/components/service-cards'
import { Reveal, RevealContainer } from '@/components/reveal'
import { useTheme } from '@/contexts/theme-context'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function HomePage() {
  const { theme } = useTheme()
  
  useEffect(() => {
    const nav = document.querySelector('header')
    if (!nav) return
    
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.9
      const shouldShow = window.scrollY > heroHeight
      nav.style.display = shouldShow ? 'block' : 'none'
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      nav.style.display = 'block' // Reset when leaving page
    }
  }, [])
  
  return (
    <div>
      {/* Hero */}
      <section className={`relative overflow-hidden border-b transition-colors min-h-screen flex items-center ${
        theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
      }`}>
        <div className="absolute inset-0 bg-[radial-gradient(60rem_30rem_at_50%_-20%,rgba(244,116,0,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="container-px mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <span className="text-brand font-semibold text-sm">🚀 Trusted by 50+ Growing Companies</span>
            </motion.div>
            
            <motion.h1 {...fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight px-4 mb-6">
              <span className="bg-gradient-to-r from-brand to-orange-600 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span>Client Acquisition That</span>
              <br />
              <span className="bg-gradient-to-r from-brand to-orange-600 bg-clip-text text-transparent">
                Actually Works
              </span>
            </motion.h1>
            
            <motion.p {...fadeInUp} transition={{...fadeInUp.transition, delay:0.1}} className={`text-lg md:text-xl max-w-2xl mx-auto px-4 mb-8 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              We build done-for-you client acquisition systems that generate qualified leads while you focus on closing deals.
              <span className="text-brand font-semibold">  Average +32% reply rates</span> in under 14 days.
            </motion.p>
            
            <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay:0.2}} className="flex flex-col sm:flex-row items-center gap-4 justify-center px-4 mb-12">
              <Link href="/pricing" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                🎯 See Our Pricing
              </Link>
              <Link href="/contact" className="btn btn-ghost text-lg px-8 py-4 w-full sm:w-auto">
                📞 Book Free Strategy Call
              </Link>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{...fadeInUp.transition, delay:0.3}} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-2">50+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-2">+32%</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Avg Reply Rate Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand mb-2">&lt;14</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>Days to First Results</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-20 border-t ${
        theme === 'dark' ? 'border-neutral-800 bg-gradient-to-b from-neutral-950/50 to-transparent' : 'border-neutral-200 bg-gradient-to-b from-neutral-50 to-transparent'
      }`} id="services">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Systems That <span className="bg-gradient-to-r from-brand to-orange-600 bg-clip-text text-transparent">Ship Pipeline</span>
            </motion.h2>
            <motion.p {...fadeInUp} transition={{...fadeInUp.transition, delay:0.1}} className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              Done-for-you strategy, build, and implementation tailored to your goals. Start small, scale what works.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-16">
            <Reveal>
              <div className="space-y-6 lg:space-y-8">
                {[
                  { title: 'AI-Assisted Cold Outreach', desc: 'Multichannel email/LinkedIn systems with smart personalization', color: 'from-blue-500 to-cyan-500' },
                  { title: 'Lead Nurturing Automations', desc: 'CRM enrichment and intelligent follow-up sequences', color: 'from-green-500 to-emerald-500' },
                  { title: 'Acquisition Workflows', desc: 'Human-in-the-loop approvals with automated handoffs', color: 'from-purple-500 to-violet-500' },
                  { title: 'Analytics & Reporting', desc: 'Real-time dashboards for measurable ROI tracking', color: 'from-orange-500 to-red-500' }
                ].map((service, idx) => (
                  <div key={idx} className="group flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl lg:rounded-2xl hover:bg-brand/5 transition-all cursor-pointer">
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center lg:group-hover:scale-110 transition-transform`}>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base lg:text-lg mb-1 lg:mb-2 lg:group-hover:text-brand transition-colors">{service.title}</h3>
                      <p className={`text-sm lg:text-base ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative card p-8 bg-gradient-to-br from-brand/10 to-orange-500/5">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Outreach?</h3>
                    <p className={`mb-6 ${
                      theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      See how our AI-powered systems can 3x your reply rates in just 14 days.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 rounded-xl bg-brand/10">
                      <div className="text-2xl font-bold text-brand">3x</div>
                      <div className="text-xs text-neutral-500">Reply Rates</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-brand/10">
                      <div className="text-2xl font-bold text-brand">14</div>
                      <div className="text-xs text-neutral-500">Days Setup</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link href="/services" className="btn btn-brand w-full">
                      Explore All Services
                    </Link>
                    <Link href="/contact" className="btn btn-ghost w-full">
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className={`border-t transition-colors ${
        theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
      }`}>
        <div className="container-px mx-auto max-w-7xl py-12">
          <p className={`text-center text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>Trusted by teams who value speed & quality</p>
          <RevealContainer className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 opacity-80">
            {['Acme','Nimbus','Voyage','Octagon','Northstar','Marble'].map((l)=>(
              <Reveal key={l}>
                <div className="flex items-center justify-center">
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-neutral-400/80' : 'text-neutral-500/80'
                  }`}>{l}</span>
                </div>
              </Reveal>
            ))}
          </RevealContainer>
        </div>
      </section>

      <ProofBar />

      {/* How It Works */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            How We <span className="text-brand">Transform</span> Your Outreach
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            Our proven 4-step process that turns cold prospects into qualified leads
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Strategy & Setup', desc: 'We analyze your ICP and build custom outreach sequences', icon: '🎯' },
            { step: '02', title: 'AI Implementation', desc: 'Deploy smart automation with safety guardrails', icon: '🤖' },
            { step: '03', title: 'Launch & Monitor', desc: 'Go live with real-time performance tracking', icon: '🚀' },
            { step: '04', title: 'Optimize & Scale', desc: 'Continuous improvement for maximum ROI', icon: '📈' }
          ].map((item, idx) => (
            <Reveal key={idx}>
              <div className="text-center group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-brand font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing section */}
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20" id="pricing">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight">Pricing</h2>
        </div>
        <div className="mt-8">
          <Pricing />
        </div>
      </section>


      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <CTABanner
          title="Ready to make clients acquisition predictable?"
          subtitle={
        <>
          Book a 15‑minute discovery. We’ll map one high‑impact workflow and outline an{' '}
          <span className="text-orange-500 font-semibold">Automation / AI Agent</span>
          {' '}you can ship in days.
        </>
          }
          primary={{ href: 'https://calendly.com/xbond', label: 'Book a call' }}
          secondary={{ href: '/services', label: 'See services' }}
        />
      </section>

      {/* Results Showcase */}
      <section className={`py-20 border-t ${
        theme === 'dark' ? 'border-neutral-800 bg-neutral-950/50' : 'border-neutral-200 bg-neutral-50'
      }`}>
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Real Results from Real Clients
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              See how we have transformed outreach for companies just like yours
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: '+284%', label: 'Reply Rate Increase', company: 'SaaS Startup', industry: 'B2B Software' },
              { metric: '47%', label: 'Meeting Book Rate', company: 'Marketing Agency', industry: 'Digital Marketing' },
              { metric: '$2.3M', label: 'Pipeline Generated', company: 'Consulting Firm', industry: 'Business Consulting' }
            ].map((result, idx) => (
              <Reveal key={idx}>
                <div className="card p-8 text-center hover:scale-105 transition-all">
                  <div className="text-4xl font-bold text-brand mb-4">{result.metric}</div>
                  <div className="font-semibold text-lg mb-2">{result.label}</div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {result.company} • {result.industry}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services cards */}
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20" id="services-cards">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight">Services</h2>
        <p className={`mt-4 max-w-prose ${
          theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600 neutral-600'
        }`}>We help startups and service businesses get more clients through AI‑powered client acquisition systems. Choose what you need, or bundle into a pilot.</p>
        <ServiceCards />
      </section>

      {/* Testimonials */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "xBond transformed our outreach completely. We went from 8% to 35% reply rates in just 3 weeks. The ROI is incredible.",
              name: "Sarah Chen",
              title: "VP of Sales",
              company: "TechFlow Solutions"
            },
            {
              quote: "Finally, outreach that actually works. Their AI system books more qualified meetings than our entire sales team used to.",
              name: "Marcus Rodriguez",
              title: "Founder",
              company: "GrowthLab Agency"
            }
          ].map((testimonial, idx) => (
            <Reveal key={idx}>
              <div className="card p-8">
                <div className="text-4xl text-brand mb-4">“</div>
                <p className={`text-lg mb-6 italic ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className={`text-sm ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Choose xBond */}
      <section className={`py-20 border-t ${
        theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
      }`}>
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Why Choose <span className="text-brand">xBond</span>?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: '⚡', title: 'Lightning Fast Setup', desc: 'Get your first campaign running in under 48 hours' },
                    { icon: '🎯', title: 'Laser-Focused Targeting', desc: 'AI-powered prospect identification and personalization' },
                    { icon: '📈', title: 'Real-Time Analytics', desc: 'Track every metric that matters with live dashboards' },
                    { icon: '🛡️', title: 'Compliance & Safety', desc: 'Built-in safeguards to protect your domain reputation' }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="relative">
                <div className="card p-8 bg-gradient-to-br from-brand/10 to-orange-500/10">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-4">Ready to 10x Your Outreach?</h3>
                    <p className={`mb-6 ${
                      theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      Join 500+ companies already using xBond to generate qualified leads on autopilot.
                    </p>
                    <Link href="/contact" className="btn btn-primary w-full">
                      Start Your Free Strategy Session
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
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
