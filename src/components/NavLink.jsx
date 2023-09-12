import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-md text-slate-300 hover:bg-violet hover:text-slate-100"
    >
      {children}
    </Link>
  )
}
