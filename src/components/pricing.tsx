'use client'
import { useState, useMemo } from 'react'
import { PlanModal, type PlanName } from './plan-modal'
import { Reveal, RevealContainer } from './reveal'
import { useTheme } from '@/contexts/theme-context'

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
  const { theme } = useTheme()
  
  const getPrice = useMemo(() => {
    return (monthly: number) => {
      if (billing === 'monthly') return monthly
      return Math.round(monthly * 0.8) // 20% discount for yearly
    }
  }, [billing])
  
  const getYearlyTotal = useMemo(() => {
    return (monthly: number) => {
      return getPrice(monthly) * 12
    }
  }, [getPrice])

  return (
    <div>
      <div className="flex items-center justify-end gap-4 mb-8">
        <div className="flex items-center gap-3 p-1 rounded-2xl border transition-colors" style={{
          borderColor: theme === 'dark' ? '#262626' : '#e5e5e5',
          backgroundColor: theme === 'dark' ? 'rgba(23, 23, 23, 0.4)' : 'rgba(255, 255, 255, 0.8)'
        }}>
          <button 
            onClick={() => setBilling('monthly')}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all ${
              billing === 'monthly' 
                ? 'bg-brand text-white shadow-lg' 
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setBilling('yearly')}
            className={`px-6 py-2 rounded-xl text-sm font-medium transition-all relative ${
              billing === 'yearly' 
                ? 'bg-brand text-white shadow-lg' 
                : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Yearly
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
              -20%
            </span>
          </button>
        </div>
      </div>

      <RevealContainer className="grid md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((t)=> (
          <Reveal key={t.name}>
          <div className={`relative card p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
            t.popular 
              ? 'border-brand/60 shadow-soft' + (theme === 'dark' ? ' bg-brand/5' : ' bg-brand/10') 
              : ''
          }`}>
            {t.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand to-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  🔥 Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{t.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {getTierDescription(t.name)}
              </p>
            </div>
            
            <div className="text-center mb-8">
              {t.name === 'Bespoke' ? (
                <div className="text-4xl font-bold text-brand mb-2">Custom</div>
              ) : (
                <>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold">${getPrice(t.monthly)}</span>
                    <span className={`text-lg ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>/mo</span>
                  </div>
                  {billing === 'yearly' && (
                    <div className={`text-sm ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                      <span className="line-through">${t.monthly}/mo</span>
                      <span className="ml-2 text-emerald-500 font-semibold">Save ${(t.monthly - getPrice(t.monthly)) * 12}/year</span>
                    </div>
                  )}
                  {billing === 'yearly' && (
                    <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'}`}>
                      Billed annually: ${getYearlyTotal(t.monthly)}
                    </div>
                  )}
                </>
              )}
            </div>
            
            <ul className={`space-y-3 text-sm mb-8 flex-1 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {t.bullets.map((b)=> (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-brand font-bold mt-0.5">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              {t.name === 'Bespoke' ? (
                <a href="/contact" className="btn w-full btn-ghost text-center block py-3">
                  Contact Sales
                </a>
              ) : (
                <button 
                  onClick={() => setOpenPlan(t.name as PlanName)} 
                  className={`btn w-full py-3 text-center ${
                    t.popular ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  Get Started
                </button>
              )}
              {t.name === 'Basic' && (
                <p className={`mt-3 text-xs text-center ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                  + One-time setup starting from $290
                </p>
              )}
              {t.name === 'Growth' && (
                <p className={`mt-3 text-xs text-center ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'}`}>
                  + One-time setup starting from $590
                </p>
              )}
            </div>
          </div>
          </Reveal>
        ))}
      </RevealContainer>

      <PlanModal open={!!openPlan} plan={openPlan} onClose={()=> setOpenPlan(null)} billing={billing} />
    </div>
  )
}