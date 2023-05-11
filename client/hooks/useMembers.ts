import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useMembers = (latestYear: string, divisiSlug: string) => {
  const { data, error, isLoading } = useSWR(
    `/members?populate=photo,divisi&filters[tahun_bergabung][tahun_angkatan][$eq]=${latestYear}&filters[divisi][slug][$eq]=${divisiSlug}`,
    fetcher
  )
  return { data, error, isLoading }
}

export default useMembers
