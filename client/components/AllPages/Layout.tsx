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
  console.log({ meta });

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
        {meta && (
          <>
            <meta property="og:title" content={meta?.title} />
            <meta property="og:type" content="website" />
            <meta name="description" content={meta?.description} />
            <meta property="og:description" content={meta?.description} />
            <meta property="og:image" content={meta?.image} />
            <meta name="og:url" content={process.env.NEXT_PUBLIC_BLOG_URI + window.location.pathname + window.location.search} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={meta?.title} />
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
