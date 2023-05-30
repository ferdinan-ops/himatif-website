import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

import { IBlogMeta } from '@/types/blog.type'

interface LayoutProps {
  children: React.ReactNode
  title: string
  variant?: 'home' | '404'
}

const Layout: React.FC<LayoutProps> = ({ children, title, variant }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header isHome={variant === 'home'} />
      <main>{children}</main>
      {variant !== '404' && <Footer />}
    </>
  )
}

export default Layout
