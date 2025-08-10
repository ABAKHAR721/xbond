import Link from "next/link"


export function Footer(){
  return (
    <footer className="border-t border-neutral-900">
      <div className="container-px mx-auto max-w-7xl py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getUTCFullYear()} xBond. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="mailto:hello@xbond.io" className="hover:text-white">hello@xbond.io</Link>
        </div>
      </div>
    </footer>
  )
}