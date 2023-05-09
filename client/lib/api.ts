import axios from 'axios'

export const axiosPublic = axios.create({
  baseURL: process.env.API_URI
})

const POST_URI = '/posts?populate=kategori,thumbnail&sort=tanggal:desc'
const blogPagination = 'pagination[page]=1&pagination[pageSize]=6'

/* CATEGORIES */
export const getCategories = () => {
  const query = '/categories?sort=nama:asc'
  return axiosPublic.get(query)
}

/* CONTACT */
export const getContact = () => {
  const query = '/himatif-infos/1?populate[0]=kontak&fields[1]=id'
  return axiosPublic.get(query)
}

/* HIMATIF */
export const getBlogsFeatures = () => {
  const query = `${POST_URI}&filters[featured][$eq]=true&pagination[pageSize]=3`
  return axiosPublic.get(query)
}

export const getHimatifInfos = () => {
  const query = '/himatif-infos/1?populate[0]=misi&populate[1]=kontak&populate[2]=tujuan.gambar'
  return axiosPublic.get(query)
}

/* BLOGS */
export const getBlogs = (page: number) => {
  const query = `${POST_URI}&pagination[page]=${page}&pagination[pageSize]=6`
  return axiosPublic.get(query)
}

export const getBlog = (slug: string) => {
  const query = `/posts?filters[slug][$eq]=${slug}&populate=kategori,thumbnail`
  return axiosPublic.get(query)
}

export const getBlogByCategories = (category: string) => {
  const query = `${POST_URI}&filters[kategori][slug][$eq]=${category}&${blogPagination}`
  return axiosPublic.get(query)
}

export const getBlogByKeyword = (keyword: string) => {
  const query = `${POST_URI}&filters[judul][$contains]=${keyword}&${blogPagination}`
  return axiosPublic.get(query)
}

export const getBlogByCategoryAndKeyword = (category: string, keyword: string) => {
  const query = `${POST_URI}&filters[judul][$contains]=${keyword}&filters[kategori][slug][$eq]=${category}&${blogPagination}`
  return axiosPublic.get(query)
}

/* MEMBERS */
export const getMembers = (year: string) => {
  const query = `/members?populate=photo,divisi&filters[tahun_bergabung][tahun_angkatan][$eq]=${year}`
  return axiosPublic.get(query)
}

export const getDivisi = () => {
  return axiosPublic.get('/divisions?sort[0]=createdAt:desc')
}

export const getYears = () => {
  return axiosPublic.get('/years')
}