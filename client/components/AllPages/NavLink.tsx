import { useRouter } from 'next/router'
import * as React from 'react'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isTop: boolean
  isHome: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isTop, isHome }) => {
  const router = useRouter()

  const activeClass =
    router.pathname === href
      ? ''
      : isTop
      ? `text-font-black/60 hover:text-font-black ${isHome && 'xl:text-white/60 xl:hover:text-white'}`
      : 'text-font-black/60 hover:text-font-black'

  return (
    <Link href={href} className={`font-semibold tracking-wide ${activeClass}`}>
      {children}
    </Link>
  )
}

export default NavLink
