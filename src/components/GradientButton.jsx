import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

export function GradientButton({
    className,
    href,
    gradient= false,
    ...props
  }) {
    className = clsx(
      `relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-semibold text-black rounded-full group bg-gradient-to-br from-violet to-orange ${gradient ? "" : 'group-hover:from-white group-hover:to-white'}  focus:ring-8 hover:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`,
      className
    )
  
    return href ? (
      <Link href={href} className={className}  ><span className={`relative py-2 px-4 transition-all ease-in duration-75 ${gradient ? "text-white" : "bg-white"}  dark:bg-gray-900 rounded-full group-hover:bg-opacity-0`} {...props} /></Link>
    ) : (
      <button className={className}><span className={`relative px-2 py-5 transition-all ease-in duration-75 ${gradient ? "text-white" : "bg-white"} dark:bg-gray-900 rounded-full group-hover:bg-opacity-0`} {...props} /></button>
    )
  }


