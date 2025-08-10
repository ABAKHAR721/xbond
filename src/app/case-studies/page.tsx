import Link from 'next/link'

export const metadata = { title: 'Case Studies — xBond' }

export default function CaseStudiesIndex() {
  const cases = [
    { slug: 'saas-replies', title: 'SaaS: +38% replies in 4 weeks', kpis: ['+38% replies','-46% manual work'] },
    { slug: 'agency-pipeline', title: 'Agency: predictable pipeline from cold', kpis: ['12 calls/mo','<14 days to first ROI'] },
  ]

  return (
    <div className="container-px mx-auto max-w-6xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Case Studies</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {cases.map(cs => (
          <article key={cs.slug} className="card p-6">
            <h2 className="text-lg font-medium"><Link href={`/case-studies/${cs.slug}`}>{cs.title}</Link></h2>
            <div className="mt-3 flex gap-2 flex-wrap text-xs">
              {cs.kpis.map(k => (<span key={k} className="rounded-full border border-neutral-800 px-2 py-1 text-neutral-300">{k}</span>))}
            </div>
            <Link href={`/case-studies/${cs.slug}`} className="btn btn-ghost mt-4">Read</Link>
          </article>
        ))}
      </div>
    </div>
  )
}


