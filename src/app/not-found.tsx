import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-px mx-auto max-w-2xl py-20 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-neutral-300">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
        <Link href="/contact" className="btn btn-ghost">
          Contact Support
        </Link>
      </div>
    </div>
  )
}