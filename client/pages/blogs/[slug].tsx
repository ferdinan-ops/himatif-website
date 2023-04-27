import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { formatDate } from '../../lib/formatDate'
import { IBlog } from '../../types/blog.type'
import { sosialMedia } from '../../lib/data'
import { GetServerSideProps } from 'next'
import { Layout } from '../../components'
import * as API from '../../lib/api'
import Image from 'next/image'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await API.getBlog(context.query.slug as string)
  if (data.data.length === 0) return { notFound: true }
  return { props: { blog: data.data[0] } }
}

interface BlogProps {
  blog: IBlog
}

export default function Blog({ blog }: BlogProps) {
  const { attributes } = blog

  return (
    <Layout title={attributes.judul} isHome={false}>
      <section className="container mx-auto my-[96px] px-6 pb-14 text-font-black xl:px-0 xl:py-20">
        <div className="mx-auto flex flex-col items-center md:w-8/12 xl:w-6/12">
          <div className="flex items-center gap-2 text-xs font-semibold text-font-gray md:text-base">
            <span className="font-bold uppercase text-primary">{attributes.kategori.data.attributes.nama}</span> &bull;{' '}
            <span>{formatDate(attributes.tanggal)}</span>
          </div>
          <h1 className="my-2 text-center text-xl font-bold md:my-4 md:text-3xl">{attributes.judul}</h1>
          <div className="mt-4 flex items-center gap-4 rounded-full px-2 py-1 shadow-lg md:mt-6 md:gap-5 md:px-4 md:py-2">
            {sosialMedia.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative mx-auto my-6 h-80 w-full overflow-hidden rounded-lg md:my-10 md:h-[450px] xl:h-[600px] xl:w-10/12">
          <Image src={attributes.thumbnail.data.attributes.url} alt={attributes.judul} fill className="object-cover" />
        </div>
        <div className="mx-auto w-full text-font-black md:w-10/12 xl:w-8/12">
          <ReactMarkdown className="prose prose-sm max-w-none lg:prose-xl prose-headings:pt-5 prose-headings:text-2xl prose-headings:text-primary prose-img:rounded-[20px] lg:prose-headings:pt-10 lg:prose-headings:text-3xl">
            {attributes.konten}
          </ReactMarkdown>
        </div>
      </section>
    </Layout>
  )
}
