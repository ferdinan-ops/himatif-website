import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

import { IBlogMeta } from '@/types/blog.type'

interface LayoutProps {
  children: React.ReactNode
  title: string
  variant?: 'home' | '404'
  meta?: IBlogMeta
}

const Layout: React.FC<LayoutProps> = ({ children, title, meta, variant }) => {
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
      <Header isHome={variant === 'home'} />
      <main>{children}</main>
      {variant !== '404' && <Footer />}
    </>
  )
}

export default Layout
