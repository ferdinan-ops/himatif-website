import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const useCategories = () => {
  const { data, error, isLoading } = useSWR('/categories?sort=nama:asc', fetcher)
  return { data, error, isLoading }
}

export default useCategories
