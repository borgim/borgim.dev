'use client'

import { useSelectedLayoutSegment } from "next/navigation"
import Link from "next/link"
interface INavLinkProps {
  name: string
  href: string
  icon: React.ReactNode
  targetSegment: string | null
}

export const NavLinks = ({ name, href, icon, targetSegment }: INavLinkProps) => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <>
      {
        <Link href={href} key={name} className={`relative flex flex-col flex-1 items-center p-2 text-white ${activeSegment === targetSegment ? 'bg-slate-900 rounded-lg' : ''}`}>
          {icon}
          {name}
        </Link>
      }
    </>
  )
}