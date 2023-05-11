import { formatDate } from '@/lib/formatDate'
import { IBlogData } from '@/types/blog.type'
import { IoIosSend } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

interface PostProps {
  post: IBlogData
}

const Post: React.FC<PostProps> = ({ post }) => {
  const postData = post.attributes

  return (
    <div className="mt-auto flex w-full flex-col gap-3 md:max-h-[400px] md:min-h-[400px] md:max-w-[336px] xl:max-h-[500px] xl:min-h-[500px] xl:max-w-[396px]">
      <div className="group relative h-44 w-full cursor-pointer overflow-hidden rounded-2xl md:h-48 xl:h-[240px]">
        <Image
          src={postData.thumbnail.data.attributes.url}
          alt={postData.judul}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex cursor-default bg-slate-900/50 opacity-0 transition-all group-hover:opacity-100">
          <Link
            href={`/blogs/${postData.slug}`}
            className="m-auto flex h-12 w-12 cursor-pointer rounded-full bg-primary md:h-14 md:w-14 xl:h-[72px] xl:w-[72px]"
          >
            <IoIosSend className="m-auto text-2xl text-white md:text-3xl xl:text-4xl" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-1 md:gap-2 md:px-2 xl:gap-4 xl:p-4">
        <div className="flex items-center gap-2 text-xs md:text-sm xl:text-base">
          <span className="font-semibold text-primary">{postData.kategori.data.attributes.nama}</span> &bull;
          <span className="text-slate-500">{formatDate(postData.tanggal)}</span>
        </div>
        <Link href={`/blogs/${postData.slug}`}>
          <h1 className="cursor-pointer text-base font-bold text-font-black hover:text-primary md:text-lg xl:text-xl">
            {postData.judul}
          </h1>
        </Link>
        <p className="truncate-lines text-xs text-slate-500 md:text-sm xl:text-base">{postData.deskripsi}</p>
      </div>
    </div>
  )
}

export default Post
