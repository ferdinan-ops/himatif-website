import Lottie from 'react-lottie'
import { GetServerSideProps } from 'next'
import { MdEmail, MdPhone } from 'react-icons/md'

import { getContact } from '@/lib/api'
import { Container, Layout } from '@/components'
import { IContactData } from '@/types/himatif.type'
import animationData from '@/assets/lotties/contact-mail.json'

interface ContactProps {
  contacts: IContactData
}

export default function Contact({ contacts }: ContactProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Layout title="Hubungi Kami ~ Himpunan Mahasiswa Teknik Informatika">
      <Container className="my-[96px] py-5 pb-14 font-sans text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center gap-8 pb-0 md:w-8/12 xl:w-6/12 xl:pb-14">
          <h1 className="text-center text-lg font-bold xl:pb-10 xl:text-3xl">Hubungi Kami melalui Kontak Ini</h1>
          <Lottie options={defaultOptions} height={250} width={250} />
          <div className="flex flex-col gap-5 md:flex-row">
            <article className="flex items-center gap-5 rounded-md px-4 py-2 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#61C0BF]">
                <MdPhone className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-primary">Telephone</span>
                <span className="text-sm">{contacts.data.attributes.kontak.no_telp}</span>
              </div>
            </article>
            <article className="flex items-center gap-5 rounded-md px-4 py-2 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB6B9]">
                <MdEmail className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-primary">E-mail</span>
                <span className="text-sm">{contacts.data.attributes.kontak.email}</span>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getContact()
  return { props: { contacts: data } }
}
