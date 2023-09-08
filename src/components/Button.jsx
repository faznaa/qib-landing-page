import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-black text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    orange: 'bg-orange text-white hover:text-slate-100 hover:bg-amber-700 active:bg-blue-800 active:text-blue-100 focus-visible:outline-black',
    gradient: 'bg-orange text-white hover:text-slate-100 hover:bg-amber-700 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',

    },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
    orange:'outline-gradient-to-r from-orange to-violet',
    gradient:"before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35]  before:absolute before:top-[50%] before:left-[50%] before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] before:from-rose-500 before:to-yellow-500 before:bg-gradient-to-br before:rounded-md hover:bg-gray-600 transition-all duration-300"
  },
}

export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
