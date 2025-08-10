export const metadata = { title: 'Privacy Policy — xBond' }

export default function PrivacyPage() {
  return (
    <div className="container-px mx-auto max-w-4xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-neutral-300">Last updated: 2025-01-01</p>
      
      <div className="mt-8 space-y-8 text-neutral-200">
        <section>
          <h2 className="text-xl font-medium mb-4">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@xbond.io" className="text-brand hover:underline">hello@xbond.io</a>.</p>
        </section>
      </div>
    </div>
  )
}