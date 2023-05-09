import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'

import NavLink from './NavLink'
import { menu } from '../../lib/data'

const Logo: React.FC<{ isTop: boolean; home: string }> = ({ isTop, home }) => {
  return (
    <Link className="flex items-center gap-4" href="/">
      <div className="relative h-7 w-7 overflow-hidden rounded-full md:h-9 md:w-9">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
      <h1 className={`logo ${isTop ? home : 'text-font-black'}`}>HIMATIF</h1>
    </Link>
  )
}

const Header: React.FC<{ isHome: boolean }> = ({ isHome }) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [isTop, setIsTop] = useState<boolean>(true)

  const scrollHandler = () => setIsTop(window.pageYOffset <= 20)

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const home = isHome ? 'text-white' : 'text-font-black'
  const topClass = !isTop
    ? 'bg-white text-primary shadow'
    : `${!isHome ? 'bg-white text-primary' : 'bg-transparent text-primary xl:text-white'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex h-24 items-center px-6 transition-all xl:px-0 ${topClass}`}>
      <div className="container mx-auto flex items-center justify-between font-sans">
        <Logo isTop={isTop} home={home} />
        <nav className={`nav xl:translate-x-0 ${isShow ? 'translate-x-0' : '-translate-x-full'}`}>
          <HiXMark className="w-fit self-end pt-4 text-5xl xl:hidden" onClick={() => setIsShow(false)} />
          {menu.map((item, index) => (
            <NavLink href={item.href} isTop={isTop} key={index} isHome={isHome}>
              {item.title}
            </NavLink>
          ))}
        </nav>
        <HiBars3 className={`text-3xl xl:hidden ${isTop ? home : 'text-font-black'}`} onClick={() => setIsShow(true)} />
      </div>
    </header>
  )
}

export default Header
