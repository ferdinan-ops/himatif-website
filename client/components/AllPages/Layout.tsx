import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
  title: string
  isHome: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, title, isHome }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
