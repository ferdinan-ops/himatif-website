import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { IBlogData, IBlogMeta } from '@/types/blog.type'
import { Container, Layout, Share } from '@/components'
import { formatDate } from '@/lib/formatDate'
import { getBlog } from '@/lib/api'

interface BlogProps {
  blog: IBlogData
}

export default function Blog({ blog }: BlogProps) {
  const { attributes } = blog

  const meta: IBlogMeta = {
    title: attributes.judul,
    description: attributes.deskripsi,
    image: attributes.thumbnail.data.attributes.url
  }

  return (
    <Layout title={attributes.judul} meta={meta}>
      <Container className="my-[96px] pb-14 text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center md:w-8/12 xl:w-6/12">
          <div className="flex items-center gap-2 text-xs font-semibold text-font-gray md:text-base">
            <span className="font-bold uppercase text-primary">{attributes.kategori.data.attributes.nama}</span> &bull;{' '}
            <span>{formatDate(attributes.tanggal)}</span>
          </div>
          <h1 className="my-2 text-center text-xl font-bold md:my-4 md:text-3xl">{attributes.judul}</h1>
          <Share url={`${process.env.NEXT_PUBLIC_BLOG_URI}/${attributes.slug}`} />
        </div>

        <div className="relative mx-auto mt-6 mb-10 h-80 w-full overflow-hidden rounded-lg border md:mt-10 md:mb-20 md:h-[450px] xl:h-[600px] xl:w-10/12">
          <Image src={attributes.thumbnail.data.attributes.url} alt={attributes.judul} fill className="object-cover" />
        </div>

        <div className="mx-auto w-full text-font-black md:w-10/12 xl:w-8/12">
          <ReactMarkdown
            className="
            prose 
            prose-sm 
            max-w-none md:prose-lg xl:prose-xl 
            prose-headings:pt-5 
            prose-headings:text-primary prose-h1:text-2xl 
            prose-h2:text-xl prose-h3:text-[19px] 
            prose-h4:text-lg prose-h5:text-[17px]
            prose-h6:text-xs prose-a:text-primary
            prose-img:rounded-[20px] lg:prose-headings:pt-10
            lg:prose-h1:text-[28px] lg:prose-h2:text-[22px]
            lg:prose-h3:text-xl lg:prose-h4:text-lg
            lg:prose-h5:text-base
            lg:prose-h6:text-sm"
          >
            {attributes.konten}
          </ReactMarkdown>
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getBlog(context.query.slug as string)
  if (data.data.length === 0) return { notFound: true }
  return { props: { blog: data.data[0] } }
}
