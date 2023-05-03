import fetcher from '@/lib/fetcher'
import useSWR from 'swr'

const useContact = () => {
  const { data, error, isLoading } = useSWR('/himatif-infos/1?populate[0]=kontak&fields[1]=id', fetcher)
  return { data, error, isLoading }
}

export default useContact