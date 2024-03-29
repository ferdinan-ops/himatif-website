import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

import { IContactData } from '@/types/himatif.type'
import useContact from '@/hooks/useContact'
import { menu } from '@/lib/data'

const Footer = () => {
  const { data: contacts }: { data: IContactData } = useContact()

  return (
    <footer className="bg-primary">
      <Container className="py-14 md:py-[72px]">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="flex max-w-sm flex-col md:max-w-md">
            <div className="flex items-center gap-4 font-bold text-white ">
              <div className="relative h-9 w-9 md:h-11 md:w-11">
                <Image src="/logo.svg" alt="logo" fill />
              </div>
              <h2 className="text-2xl md:text-3xl">HIMATIF</h2>
            </div>
            <p className="mt-4 text-sm text-white/80 md:text-base">
              Himpunan Mahasiswa Teknik Informatika merupakan organisasi mahasiswa yang berada di bawah naungan Fakultas
              Ilmu Komputer, Universitas Katolik Santo Thomas, Medan
            </p>
            <div className="mt-6 flex items-center gap-5 text-font-black md:mt-8 md:gap-8">
              <Link
                href={contacts ? contacts.data.attributes.kontak.facebook_link : '/'}
                className="rounded-full bg-white p-1.5 hover:bg-slate-300 md:p-2"
              >
                <FaFacebookF className="text-base md:text-lg" />
              </Link>
              <Link
                href={contacts ? contacts.data.attributes.kontak.twitter_link : '/'}
                className="rounded-full bg-white p-1.5 hover:bg-slate-300 md:p-2"
              >
                <FaTwitter className="text-base md:text-lg" />
              </Link>
              <Link
                href={contacts ? contacts.data.attributes.kontak.instagram_link : '/'}
                className="rounded-full bg-white p-1.5 hover:bg-slate-300 md:p-2"
              >
                <FaInstagram className="text-base md:text-lg" />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-8 md:mt-10 md:flex-row md:justify-start md:gap-16 xl:mt-0 xl:justify-between">
            <div className="flex min-w-[280px] flex-col text-white">
              <h3 className="border-b-2 border-white pb-3 text-sm font-semibold md:text-lg">Halaman</h3>
              <ul className="mt-4 flex flex-col gap-4 text-xs font-[300] text-white/80 md:text-base">
                {menu.map((item, index) => (
                  <li key={index} className="w-fit hover:text-white">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-[280px] flex-col text-white">
              <h3 className="border-b-2 border-white pb-3 text-sm font-semibold md:text-lg">Kontak</h3>
              <ul className="mt-4 flex flex-col gap-4 text-xs font-[300] text-white/80 md:text-base">
                <li className="flex items-center gap-4 font-[300]">
                  <FiMail className="text-lg" />
                  <span>{contacts && contacts.data.attributes.kontak.email}</span>
                </li>
                <li className="flex items-center gap-4 font-[300]">
                  <BsTelephone className="text-lg" />
                  <span>{contacts && contacts.data.attributes.kontak.no_telp}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
