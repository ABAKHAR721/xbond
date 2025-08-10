import { Pricing } from '@/components/pricing'

export const metadata = { title: 'Pricing — xBond' }

export default function PricingPage(){
  return (
    <div className="container-px mx-auto max-w-7xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Pricing</h1>
      <p className="mt-4 text-neutral-300 max-w-prose">One‑time setup from $290 based on complexity. Then pick a plan.</p>
      <div className="mt-10">
        <Pricing />
      </div>
    </div>
  )
}