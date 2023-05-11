import { GetServerSideProps } from 'next/types'

import { Divisi, Container, Dropdown, Layout } from '@/components'
import { IDivisi, IYearMember } from '@/types/member.type'
import { getDivisi, getStructureOrganization, getYears } from '@/lib/api'
import { IOrganizationStructure } from '@/types/himatif.type'

interface StructureProps {
  latestYear: string
  allYears: [string]
  divisi: IDivisi[]
  organizationStructure: string
}

export default function Structure({ allYears, divisi, latestYear, organizationStructure }: StructureProps) {
  return (
    <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika">
      <Container className="my-[96px] py-5 pb-14 font-sans text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center gap-8 pb-10 md:w-8/12 xl:w-6/12 xl:pb-14">
          <h1 className="text-center text-lg font-bold xl:text-3xl">
            Struktur Organisasi Himpunan Mahasiswa Teknik Informatika (HIMATIF)
          </h1>
          <Dropdown years={allYears} />
        </div>
        <img
          src={organizationStructure}
          alt="struktur organisasi HIMATIF"
          className="mx-auto w-full rounded-lg xl:w-10/12"
        />
        <div className="mt-14 flex flex-col gap-20 md:mt-20 xl:gap-28">
          {divisi.map((item) => (
            <Divisi
              key={item.id}
              latestYear={latestYear}
              slug={item.attributes.slug}
              title={item.attributes.nama_divisi}
            />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: divisi } = await getDivisi()
  const { data: years } = await getYears()
  const { data: organizationStructure } = await getStructureOrganization()

  const data: IOrganizationStructure = organizationStructure.data[0]

  const allYears = years.data.map((year: IYearMember) => year.attributes.tahun_angkatan)
  const latestYear = Math.max(...allYears)

  return {
    props: {
      allYears,
      latestYear,
      divisi: divisi.data,
      organizationStructure: data.attributes.gambar_struktur.data.attributes.url
    }
  }
}
