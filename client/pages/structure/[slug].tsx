import { GetServerSideProps } from 'next/types'

import { Divisi, Container, Dropdown, Layout } from '../../components'
import { IMember } from '../../types/member.type'
import { getMemberDivisi, getYears } from '../../lib/api'

interface StructureDetailProps {
  thisYear: string
  years: IMember[]
  divisi: IMember[]
}

export default function StructureDetail({ years, divisi, thisYear }: StructureDetailProps) {
  return (
    <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika" isHome={false}>
      <Container className="my-[96px] py-5 pb-14 font-sans text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center gap-8 pb-10 md:w-8/12 xl:w-6/12 xl:pb-14">
          <h1 className="text-center text-lg font-bold xl:text-3xl">
            Struktur Organisasi Himpunan Mahasiswa Teknik Informatika (HIMATIF)
          </h1>
          <Dropdown years={years} />
        </div>
        <img src="/structure-3.png" alt="struktur organisasi HIMATIF" className='w-full xl:w-10/12 mx-auto rounded-lg' />
        <div className='flex flex-col gap-20 xl:gap-28 md:mt-20 mt-14'>
          {divisi.map((item) => (
            <Divisi year={thisYear} title={item.attributes.divisi} />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query
  const { data: years } = await getYears()

  const tahun: IMember[] = [];
  years.data.forEach((item: IMember) => {
    if (!tahun.find((uniqueItem) => uniqueItem.attributes.tahun_bergabung === item.attributes.tahun_bergabung)) {
      tahun.push(item);
    }
  });

  const { data } = await getMemberDivisi(slug as string)
  if (data.data.length === 0) return { notFound: true }

  const divisi: IMember[] = [];
  data.data.forEach((item: IMember) => {
    if (!divisi.find((uniqueItem) => uniqueItem.attributes.divisi === item.attributes.divisi)) {
      divisi.push(item);
    }
  });

  return {
    props: {
      years: tahun,
      thisYear: slug?.toString(),
      divisi,
    }
  }
}
