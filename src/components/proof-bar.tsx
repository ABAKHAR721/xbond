import { Reveal, RevealContainer } from './reveal'

type Metric = {
  value: string
  label: string
}

export function ProofBar({ metrics }: { metrics?: Metric[] }) {
  const items: Metric[] = metrics ?? [
    { value: '5,000+', label: 'automations managed' },
    { value: '+32%', label: 'avg. reply rate lift' },
    { value: '<14 days', label: 'to first ROI' },
  ]

  return (
    <div className="border-t border-neutral-900">
      <RevealContainer className="container-px mx-auto max-w-7xl py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {items.map((m) => (
          <Reveal key={m.label}>
            <div>
              <div className="text-2xl md:text-3xl font-semibold">{m.value}</div>
              <div className="mt-1 text-sm text-neutral-400">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </RevealContainer>
    </div>
  )
}


