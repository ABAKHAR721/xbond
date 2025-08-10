import { ServiceCards } from '@/components/service-cards'


export default function ServicesPage(){
  return (
    <div className="container-px mx-auto max-w-7xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Services</h1>
      <p className="mt-4 text-neutral-300 max-w-prose">We help startups and service businesses get more clients through AI‑powered outreach and lead systems. Choose what you need, or bundle into a pilot.</p>
      <ServiceCards />
    </div>
  )
}