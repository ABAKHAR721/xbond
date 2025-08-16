'use client'
import { Sparkles, Workflow, BarChart3, Users } from 'lucide-react'
import { Reveal, RevealContainer } from './reveal'
import { useTheme } from '@/contexts/theme-context'

const services = [
  {
    icon: Sparkles,
    title: 'AI Chatbots & Assistants',
    desc: 'Handle customer inquiries, inbound & outbound calls with KPIs and call logs.',
    bullets: ['Website chat & lead capture','Knowledge‑base grounding','Escalations to human']
  },
  {
    icon: Workflow,
    title: 'Outreach & Nurture Automations',
    desc: 'Multichannel cold outreach with safety guardrails and CRM enrichment.',
    bullets: ['Sequencing & A/B testing','Warmup & deliverability','Auto‑qualification']
  },
  {
    icon: Users,
    title: 'Lead Qualification Systems',
    desc: 'Score, route, and follow‑up automatically so reps focus on best fits.',
    bullets: ['Firmographic enrichment','Rules + AI scoring','Calendar handoffs']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Dashboards that show reply rates, pipeline velocity, and ROI.',
    bullets: ['Weekly optimization','Attribution','Data exports']
  },
  {
    icon: Workflow,
    title: 'Data & Systems Integration',
    desc: 'Glue your tools together so data flows reliably between them.',
    bullets: ['CRM + warehouse sync','Webhook & API connectors','Error monitoring']
  },
]

export function ServiceCards(){
  const { theme } = useTheme()
  
  return (
    <RevealContainer className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {services.map(({icon:Icon, title, desc, bullets}, idx)=> (
        <Reveal key={title}>
          <article className={`relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 group cursor-pointer transition-all duration-500 md:hover:scale-105 ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-neutral-800/50 hover:border-brand/30' 
              : 'bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 hover:border-brand/30 shadow-sm hover:shadow-xl'
          }`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className={`h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 md:group-hover:scale-110 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-brand/20 to-orange-500/20 group-hover:from-brand/30 group-hover:to-orange-500/30'
                    : 'bg-gradient-to-br from-brand/10 to-orange-500/10 group-hover:from-brand/20 group-hover:to-orange-500/20'
                }`}>
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-brand md:group-hover:text-orange-500 transition-colors"/>
                </div>
                <div className={`text-xs font-medium px-3 py-1 rounded-full ${
                  theme === 'dark' ? 'bg-brand/10 text-brand' : 'bg-brand/10 text-brand'
                }`}>
                  0{idx + 1}
                </div>
              </div>
              
              <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 md:group-hover:text-brand transition-colors duration-300">
                {title}
              </h3>
              
              <p className={`text-base md:text-lg mb-6 md:mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                {desc}
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <div className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Key Features
                </div>
                <div className="grid gap-2 md:gap-3">
                  {bullets.map((bullet, bulletIdx)=> (
                    <div key={bullet} className={`flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-300 md:hover:translate-x-2 ${
                      theme === 'dark' 
                        ? 'bg-neutral-800/30 hover:bg-brand/10' 
                        : 'bg-neutral-100/50 hover:bg-brand/5'
                    }`}>
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                        bulletIdx === 0 ? 'bg-blue-500' : bulletIdx === 1 ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {bulletIdx + 1}
                      </div>
                      <span className={`text-sm md:text-base font-medium ${
                        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
                      }`}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-neutral-200/20">
                <div className={`text-xs md:text-sm font-medium md:group-hover:text-brand transition-colors ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Learn more about {title.toLowerCase()}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </RevealContainer>
  )
}
