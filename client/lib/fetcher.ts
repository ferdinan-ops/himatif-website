import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI
})

const fetcher = (url: string) => api.get(url).then((res) => res.data)
export default fetcher
