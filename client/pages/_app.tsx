import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'

import '@/styles/globals.css'
import 'nprogress/nprogress.css'

export default function App({ Component, pageProps }: AppProps) {
  nProgress.configure({ showSpinner: false })
  const start = () => nProgress.start()
  const end = () => nProgress.done()

  useEffect(() => {
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  return <Component {...pageProps} />
}
