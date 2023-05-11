import { getBlogByCategories, getBlogByCategoryAndKeyword, getBlogByKeyword, getBlogs } from '@/lib/api'
import { BlogSearch, Categories, Container, Layout, NoPost, Pagination, Posts } from '@/components'
import { GetServerSideProps } from 'next'
import { HiArrowLeft } from 'react-icons/hi2'

import { IBlog } from '@/types/blog.type'
import Link from 'next/link'

interface BlogsProps {
  posts: IBlog
  category?: string
  search?: string
}

export default function Blogs({ posts, category, search }: BlogsProps) {
  const backButton = (
    <Link
      href="/blogs"
      className="mx-auto mb-20 flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-white hover:bg-primary-dark"
    >
      <HiArrowLeft />
      Kembali ke semua blog
    </Link>
  )

  return (
    <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika">
      <Container className="mt-24">
        <BlogSearch search={search as string} />
        <Categories slug={category} search={search} />
        {posts.data.length === 0 ? <NoPost category={category} keyword={search} /> : <Posts posts={posts.data} />}
        {search && backButton}
        {posts.meta.pagination.total > 6 && <Pagination totalPages={posts.meta.pagination.total / 6} />}
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let posts
  let currentPage = 1
  const { search, category, page } = context.query

  if (page) currentPage = parseInt(page as string)

  if (search && category) {
    posts = await getBlogByCategoryAndKeyword(category as string, search as string, currentPage)
  } else if (search) {
    posts = await getBlogByKeyword(search as string, currentPage)
  } else if (category) {
    posts = await getBlogByCategories(category as string, currentPage)
  } else {
    posts = await getBlogs(currentPage)
  }

  return {
    props: {
      posts: posts.data,
      search: search ? search : '',
      category: category ? category : ''
    }
  }
}
