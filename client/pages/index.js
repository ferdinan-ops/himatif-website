import { About, Hero, Layout, Misi, Tujuan, Visi } from '../components'
import { hero } from '../utils/data'
import * as API from '../utils/api'

export const getServerSideProps = async () => {
  const himatif = await API.getHimatifInfos()
  const blogs = await API.getBlogsFeatures()
  return { props: { himatif: himatif.data.data.attributes, blogs: blogs.data.data } }
}

export default function Home({ himatif, blogs }) {
  console.log(blogs)
  return (
    <Layout title="Himpunan Mahasiswa Teknik Informatika" isHome>
      <Hero blogs={blogs} />
      <About desc={himatif.tentang} />
      <Visi desc={himatif.visi} />
      <Misi missions={himatif.misi} />
      <Tujuan tujuanLists={himatif.tujuan} />
    </Layout>
  )
}
