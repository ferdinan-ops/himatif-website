import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'

import { Container, Layout } from '@/components'
import { IBlogData, IBlogMeta } from '@/types/blog.type'
import { formatDate } from '@/lib/formatDate'
import { getBlog } from '@/lib/api'

interface BlogProps {
  blog: IBlogData
}

export default function Blog({ blog }: BlogProps) {
  const { attributes } = blog
  const BLOG_URI = `${process.env.NEXT_PUBLIC_BLOG_URI}/${attributes.slug}`

  const meta: IBlogMeta = {
    title: attributes.judul,
    description: attributes.deskripsi,
    image: attributes.thumbnail.data.attributes.url
  }

  return (
    <Layout title={attributes.judul} isHome={false} meta={meta}>
      <Container className="my-[96px] pb-14 text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center md:w-8/12 xl:w-6/12">
          <div className="flex items-center gap-2 text-xs font-semibold text-font-gray md:text-base">
            <span className="font-bold uppercase text-primary">{attributes.kategori.data.attributes.nama}</span> &bull;{' '}
            <span>{formatDate(attributes.tanggal)}</span>
          </div>

          <h1 className="my-2 text-center text-xl font-bold md:my-4 md:text-3xl">{attributes.judul}</h1>

          <div className="mt-4 flex items-center gap-4 rounded-full px-2 py-1 shadow-lg md:mt-6 md:gap-5 md:px-4 md:py-2">
            <div className="rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
              <FacebookShareButton url={BLOG_URI} className='flex'>
                <FaFacebookF className="text-base md:text-lg" />
              </FacebookShareButton>
            </div>

            <div className="rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
              <TwitterShareButton url={BLOG_URI} className='flex'>
                <FaTwitter className="text-base md:text-lg" />
              </TwitterShareButton>
            </div>

            <div className="rounded-full bg-white p-1.5 text-sm hover:bg-slate-300 md:p-2 md:text-base">
              <WhatsappShareButton url={BLOG_URI} className='flex'>
                <RiWhatsappFill className="text-base md:text-xl" />
              </WhatsappShareButton>
            </div>
          </div>
        </div>

        <div className="relative mx-auto my-6 h-80 w-full overflow-hidden rounded-lg border md:my-10 md:h-[450px] xl:h-[600px] xl:w-10/12">
          <Image src={attributes.thumbnail.data.attributes.url} alt={attributes.judul} fill className="object-cover" />
        </div>

        <div className="mx-auto w-full text-font-black md:w-10/12 xl:w-8/12">
          <ReactMarkdown
            className="
            prose 
            max-w-none 
            prose-sm lg:prose-xl 
            prose-headings:text-primary 
            prose-headings:pt-5 lg:prose-headings:pt-10 
            prose-h1:text-2xl lg:prose-h1:text-[28px] 
            prose-h2:text-xl lg:prose-h2:text-[22px]
            prose-h3:text-[19px] lg:prose-h3:text-xl
            prose-h4:text-lg lg:prose-h4:text-lg
            prose-h5:text-[17px] lg:prose-h5:text-base
            prose-h6:text-xs lg:prose-h6:text-sm
            prose-a:text-primary
            prose-img:rounded-[20px]">
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