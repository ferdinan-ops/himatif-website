import { Container, Layout } from '@/components'
import { HiArrowLeft } from 'react-icons/hi2'
import Lottie, { Options } from 'react-lottie'

import animationData from '../assets/lotties/page-not-found.json'
import Link from 'next/link'

export default function _404() {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Layout title="Halaman tidak ditemukan" variant="404">
      <Container className="mt-24 flex min-h-[calc(100vh-96px)] flex-col items-center font-sans text-font-black md:flex-col-reverse xl:flex-row-reverse">
        <div className="flex md:-mt-[300px] md:flex-1 xl:mt-0 xl:items-center xl:justify-center">
          <div className="text-center xl:text-left">
            <h1 className="text-6xl font-bold text-primary xl:text-8xl">404</h1>
            <h3 className="mt-3 text-xl font-semibold md:text-3xl xl:mt-5">Ooops!</h3>
            <h3 className="text-lg font-semibold md:text-2xl xl:mt-1">Halaman tidak ditemukan</h3>
            <div className="mb-6 mt-2 flex flex-col text-sm text-slate-500 xl:mb-8 xl:text-base">
              <span>Halaman ini tidak ada atau telah dihapus!</span>
              <span>kami sarankan Anda kembali ke beranda</span>
            </div>
            <Link
              href="/"
              className="mx-auto flex w-fit items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-primary/60 hover:bg-primary-dark xl:mx-0 xl:text-base"
            >
              <HiArrowLeft className="text-base xl:text-lg" />
              Kembali ke beranda
            </Link>
          </div>
        </div>
        <div className="h-72 md:h-auto md:flex-1">
          <Lottie options={defaultOptions} style={{ height: '100%', width: '100%' }} />
        </div>
      </Container>
    </Layout>
  )
}
