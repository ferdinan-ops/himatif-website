import { getBlogByCategories, getBlogByCategoryAndKeyword, getBlogByKeyword, getBlogs } from '@/lib/api'
import { BlogSearch, Categories, Layout, NoPost, Pagination, Posts } from '@/components'
import { GetServerSideProps } from 'next'
import { useState } from 'react'

import { IBlog } from '@/types/blog.type'
import usePosts from '@/hooks/usePosts'

interface BlogsProps {
  posts: IBlog
  category?: string
  search?: string
}

export default function Blogs({ posts, category, search }: BlogsProps) {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: blogs }: { data: IBlog } = usePosts(posts, currentPage, category, search)

  return (
    <Layout title="Blogs ~ Himpunan Mahasiswa Teknik Informatika" isHome={false}>
      <BlogSearch />
      <Categories slug={category} />
      {blogs.data.length === 0 ? (
        <NoPost search={search} category={category} />
      ) : (
        <Posts posts={blogs.data} />
      )}
      {blogs.meta.pagination.total > 6 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={blogs.meta.pagination.total / 6}
        />
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let posts
  const { search, category } = context.query

  if (search && category) {
    posts = await getBlogByCategoryAndKeyword(category as string, search as string)
  } else if (search) {
    posts = await getBlogByKeyword(search as string)
  } else if (category) {
    posts = await getBlogByCategories(category as string)
  } else {
    posts = await getBlogs(1)
  }

  return {
    props: {
      posts: posts.data,
      search: search ? search : '',
      category: category ? category : '',
    }
  }
}