import { Pricing } from '@/components/pricing'

export const metadata = { title: 'Pricing — xBond' }

export default function PricingPage(){
  return (
    <div className="container-px mx-auto max-w-7xl py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-4">
          Choose the perfect plan for your business growth. All plans include our proven AI-powered outreach systems.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
          <span className="text-brand font-semibold">💡</span>
          <span className="text-sm font-medium">One-time setup from $290 — final cost depends on complexity</span>
        </div>
      </div>
      <Pricing />
      
      <div className="mt-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose xBond?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold mb-2">Fast Implementation</h3>
              <p className="text-sm text-neutral-400">Get your first automated outreach running in under 14 days</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-neutral-400">Average +32% reply rate improvement across all clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">Done-For-You</h3>
              <p className="text-sm text-neutral-400">We handle strategy, build, and implementation — you focus on closing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}