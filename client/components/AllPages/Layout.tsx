import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

import { IBlogMeta } from '@/types/blog.type'

interface LayoutProps {
  children: React.ReactNode
  title: string
  isHome: boolean
  meta?: IBlogMeta
}

const Layout: React.FC<LayoutProps> = ({ children, title, isHome, meta }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
        {meta && (
          <>
            <meta name="description" content={meta?.description} />
            <meta property="og:title" content={meta?.title} />
            <meta property="og:description" content={meta?.description} />
            <meta property="og:image" content={meta?.image} />
          </>
        )}
      </Head>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
