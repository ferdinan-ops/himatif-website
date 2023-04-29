import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import { IContact } from '@/types/himatif.type'

interface LayoutProps {
  children: React.ReactNode
  title: string
  isHome: boolean
  contact: IContact
}

const Layout: React.FC<LayoutProps> = ({ children, title, isHome, contact }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer contact={contact} />
    </>
  )
}

export default Layout
