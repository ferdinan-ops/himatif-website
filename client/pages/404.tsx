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
    <Layout title='Halaman tidak ditemukan' variant='404'>
      <Container className='flex flex-col md:flex-col-reverse xl:flex-row-reverse mt-24 font-sans text-font-black min-h-[calc(100vh-96px)] items-center'>
        <div className='md:flex-1 flex xl:justify-center xl:items-center md:-mt-[300px] xl:mt-0'>
          <div className='text-center xl:text-left'>
            <h1 className='xl:text-8xl text-6xl font-bold text-primary'>404</h1>
            <h3 className='text-xl md:text-3xl font-semibold xl:mt-5 mt-3'>Ooops!</h3>
            <h3 className='text-lg md:text-2xl font-semibold xl:mt-1'>Halaman tidak ditemukan</h3>
            <div className='mt-2 text-slate-500 flex flex-col text-sm xl:text-base xl:mb-8 mb-6'>
              <span>Halaman ini tidak ada atau telah dihapus!</span>
              <span>kami sarankan Anda kembali ke beranda</span>
            </div>
            <Link
              href='/'
              className='bg-primary px-6 py-3 text-white rounded-lg font-semibold flex items-center gap-3 shadow-2xl shadow-primary/60 w-fit hover:bg-primary-dark mx-auto xl:mx-0 xl:text-base text-sm'
            >
              <HiArrowLeft className='text-base xl:text-lg' />
              Kembali ke beranda
            </Link>
          </div>
        </div>
        <div className='md:flex-1 h-72 md:h-auto'>
          <Lottie options={defaultOptions} style={{ height: '100%', width: '100%' }} />
        </div>
      </Container>
    </Layout>
  )
}
