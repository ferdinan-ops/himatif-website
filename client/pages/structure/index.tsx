import * as React from 'react'
import Image from 'next/image'
import { GetServerSideProps } from 'next/types'

import { Container, Layout } from '../../components'
import { IMember } from '../../types/member.type'
import { OrgChartImg } from '../../assets'
import { getMembers } from '../../lib/api'

interface StructureProps {
  members: IMember[]
}

export default function Structure({ members }: StructureProps) {

  return (
    <Layout title='Blogs ~ Himpunan Mahasiswa Teknik Informatika' isHome={false}>
      <Container className='mt-24 py-5 xl:py-10 font-sans text-font-black'>
        <div className='flex pb-10 xl:pb-14 flex-col md:flex-row'>
          <h1 className='text-lg xl:text-[27px] font-bold'>Struktur Organisasi Himpunan Mahasiswa Teknik Informatika (HIMATIF)</h1>
          <select className='bg-primary font-semibold text-white text-sm xl:text-base rounded-md px-3 py-1.5 xl:px-4 xl:py-2 shadow-2xl shadow-primary/70 outline-none cursor-pointer w-fit mt-5 xl:mt-0 ml-auto'>
            <option value="2022" className='cursor-pointer'>2022</option>
          </select>
        </div>
        <div className='relative w-full xl:w-10/12 h-auto rounded-xl overflow-hidden mx-auto border'>
          <Image src={OrgChartImg} alt='struktur organisasi HIMATIF' />
        </div>
        <div>

        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: members } = await getMembers('2022')
  return { props: { members: members.data } }
}