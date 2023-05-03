import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useMembers = (year: string) => {
  const { data, error, isLoading } = useSWR(`/members?populate=photo&filters[tahun_bergabung][$eq]=${year}`, fetcher)
  return { data, error, isLoading }
}

export default useMembers