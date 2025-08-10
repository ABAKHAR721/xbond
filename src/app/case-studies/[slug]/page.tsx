type Params = { params: Promise<{ slug: string }> }

const CASES: Record<string, { title: string; body: string; date: string; kpis: string[] }> = {
  'saas-replies': {
    title: 'SaaS: +38% replies in 4 weeks',
    date: '2025-01-02',
    kpis: ['+38% replies','-46% manual work'],
    body:
      'We reworked targeting, added inbox safety and testing cadence. Weekly reviews produced clear improvements and more booked calls.',
  },
  'agency-pipeline': {
    title: 'Agency: predictable pipeline from cold',
    date: '2025-01-04',
    kpis: ['12 calls/mo','<14 days to first ROI'],
    body:
      'Multichannel outreach with qualification and handoff automations produced consistent conversations for the team.',
  },
}

export default async function CaseStudy({ params }: Params) {
  const { slug } = await params
  const cs = CASES[slug]
  if (!cs) return null
  return (
    <div className="container-px mx-auto max-w-3xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">{cs.title}</h1>
      <p className="mt-2 text-neutral-400 text-sm">{cs.date}</p>
      <div className="mt-3 flex gap-2 flex-wrap text-xs">
        {cs.kpis.map(k => (<span key={k} className="rounded-full border border-neutral-800 px-2 py-1 text-neutral-300">{k}</span>))}
      </div>
      <div className="mt-6 text-neutral-200 leading-relaxed">{cs.body}</div>
    </div>
  )
}


