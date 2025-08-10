'use client'
import { useState, useMemo } from 'react'
import { PlanModal, type PlanName } from './plan-modal'
import { Reveal, RevealContainer } from './reveal'

const tiers = [
  {
    name: 'Basic',
    monthly: 99,
    bullets: ['AI chatbot for customer inquiries','Basic workflow automation (email, CRM, data entry)','AI‑powered analytics dashboard','Email support'],
  },
  {
    name: 'Growth',
    monthly: 299,
    bullets: ['Advanced AI chatbots with custom responses','AI‑driven lead qualification & follow‑up','Automated reporting & insights','Priority support'],
    popular: true
  },
  {
    name: 'Bespoke',
    monthly: 0,
    bullets: ['Custom AI integrations','Decision‑making models','Multi‑department automations','Dedicated consultant & 24/7 priority support'],
  },
]

function getTierDescription(tierName: string): string {
  switch(tierName) {
    case 'Basic': return 'Perfect for small businesses'
    case 'Growth': return 'Perfect for growing teams'
    case 'Bespoke': return 'Perfect for large businesses'
    default: return ''
  }
}

export function Pricing(){
  const [billing, setBilling] = useState<'monthly'|'yearly'>('monthly')
  const [openPlan, setOpenPlan] = useState<PlanName|null>(null)
  
  const price = useMemo(() => {
    return (m: number) => billing === 'monthly' ? m : Math.round(m * 12 * 0.85) // 15% off yearly
  }, [billing])

  return (
    <div>
      <div className="flex items-center gap-2 text-sm">
        <span className={billing==='monthly'? 'font-medium':'text-neutral-400'}>Monthly</span>
        <button onClick={()=> setBilling(billing==='monthly'?'yearly':'monthly')} className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-800">
          <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${billing==='monthly'?'translate-x-1':'translate-x-5'}`} />
        </button>
        <span className={billing==='yearly'? 'font-medium':'text-neutral-400'}>Yearly <span className="ml-1 rounded bg-emerald-600/20 text-emerald-300 px-1.5 py-0.5">-15%</span></span>
      </div>

      <RevealContainer className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
        {tiers.map((t)=> (
          <Reveal key={t.name}>
          <div className={`relative card p-6 h-full flex flex-col ${t.popular ? 'border-brand/60 bg-brand/5' : ''}`}>
            {t.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-brand text-neutral-900 text-xs font-semibold px-2 py-1">Popular</span>
            )}
            <h3 className="text-lg font-medium">{t.name}</h3>
            <p className="text-sm text-neutral-300">{getTierDescription(t.name)}</p>
            <div className="mt-4 text-3xl font-semibold">{t.name==='Bespoke'? 'Let\'s talk' : `$${price(t.monthly)}`}<span className="text-base font-normal text-neutral-400">{t.name==='Bespoke'?'':'/'+ (billing==='monthly'?'mo':'yr')}</span></div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-300">
              {t.bullets.map((b)=> <li key={b}>• {b}</li>)}
            </ul>
            <div className="mt-auto">
              {t.name === 'Bespoke' ? (
                <a href="/contact" className="btn mt-6 w-full btn-ghost">Contact sales</a>
              ) : (
                <button onClick={()=> setOpenPlan(t.name as PlanName)} className={`btn mt-6 w-full ${t.popular? 'btn-primary text-neutral-900':'btn-ghost'}`}>Choose {t.name}</button>
              )}
              {t.name!=='Bespoke' && <p className="mt-2 text-xs text-neutral-400">+ one‑time setup from $290</p>}
            </div>
          </div>
          </Reveal>
        ))}
      </RevealContainer>

      <PlanModal open={!!openPlan} plan={openPlan} onClose={()=> setOpenPlan(null)} />
    </div>
  )
}