'use client'
import { Sparkles, Workflow, BarChart3, Users } from 'lucide-react'
import { Reveal, RevealContainer } from './reveal'
import { useTheme } from '@/contexts/theme-context'

const services = [
  {
    icon: Sparkles,
    title: 'AI Chatbots & Assistants',
    desc: 'Handle customer inquiries, intake, and routing with measurable SLAs.',
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
    <RevealContainer className="mt-10 grid md:grid-cols-2 gap-6">
      {services.map(({icon:Icon, title, desc, bullets})=> (
        <Reveal key={title}>
          <article className="card p-6">
            <div className="h-10 w-10 rounded-xl bg-brand/20 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-brand"/></div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className={`text-sm mt-1 ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>{desc}</p>
            <ul className={`mt-4 space-y-1.5 text-sm ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              {bullets.map(bullet=> <li key={bullet}>• {bullet}</li>)}
            </ul>
          </article>
        </Reveal>
      ))}
    </RevealContainer>
  )
}
