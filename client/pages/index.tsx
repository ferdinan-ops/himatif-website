import { Layout, Hero, Visi, Misi, Tujuan, About } from '../components'
import { IHimatif } from '../types/himatif.type'
import { IBlog } from '../types/blog.type'
import { getBlogsFeatures, getHimatifInfos } from '../lib/api'

interface HomeProps {
  blogs: IBlog[]
  himatif: IHimatif
}

export default function Home({ blogs, himatif }: HomeProps) {
  return (
    <Layout title="Himpunan Mahasiswa Teknik Informatika" isHome>
      <Hero blogs={blogs} />
      <About desc={himatif.tentang} contact={himatif.kontak} />
      <Visi desc={himatif.visi} />
      <Misi missions={himatif.misi} />
      <Tujuan tujuanLists={himatif.tujuan} />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const { data: blogs } = await getBlogsFeatures()
  const { data: himatif } = await getHimatifInfos()

  return {
    props: { blogs: blogs.data, himatif: himatif.data.attributes }
  }
}