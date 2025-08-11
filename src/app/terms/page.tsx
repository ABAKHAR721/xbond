'use client'
import { useTheme } from '@/contexts/theme-context'

export default function TermsPage() {
  const { theme } = useTheme()
  return (
    <div className="container-px mx-auto max-w-4xl py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Terms of Service</h1>
      <p className={`mt-4 ${
        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
      }`}>Last updated: 2025-01-01</p>
      
      <div className={`mt-8 space-y-8 ${
        theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'
      }`}>
        <section>
          <h2 className="text-xl font-medium mb-4">Acceptance of Terms</h2>
          <p>By accessing and using xBond&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Use License</h2>
          <p>Permission is granted to temporarily use xBond&apos;s services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Service Availability</h2>
          <p>We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We reserve the right to modify or discontinue services with reasonable notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">User Responsibilities</h2>
          <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Limitation of Liability</h2>
          <p>In no event shall xBond be liable for any damages arising out of the use or inability to use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-4">Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us at <a href="mailto:hello@xbond.io" className="text-brand hover:underline">hello@xbond.io</a>.</p>
        </section>
      </div>
    </div>
  )
}