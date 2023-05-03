import fetcher from '@/lib/fetcher';
import { IBlog } from '@/types/blog.type'
import useSWR from 'swr'

const usePosts = (posts: IBlog, page: number, category?: string, keyword?: string) => {
  const POST_URI = '/posts?populate=kategori,thumbnail&sort=tanggal:desc&pagination[pageSize]=6'
  let query;
  if (category && keyword) {
    query = `filters[judul][$contains]=${keyword}&filters[kategori][slug][$eq]=${category}`
  } else if (category) {
    query = `filters[kategori][slug][$eq]=${category}`
  } else if (keyword) {
    query = `filters[judul][$contains]=${keyword}`
  } else {
    query = ''
  }

  const { data, isLoading, error } = useSWR(`${POST_URI}&pagination[page]=${page}&${query}`, fetcher, {
    fallbackData: posts
  })
  return { data, isLoading, error }
}

export default usePosts