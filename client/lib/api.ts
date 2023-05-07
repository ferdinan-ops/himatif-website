import axios from 'axios'

export const axiosPublic = axios.create({
  baseURL: process.env.API_URI
})

const POST_URI = '/posts?populate=kategori,thumbnail&sort=tanggal:desc'
const blogPagination = 'pagination[page]=1&pagination[pageSize]=6'

export const getCategories = () => axiosPublic.get('/categories?sort=nama:asc')
export const getContact = () => axiosPublic.get('/himatif-infos/1?populate[0]=kontak&fields[1]=id')

export const getBlogsFeatures = () => axiosPublic.get(`${POST_URI}&filters[featured][$eq]=true&pagination[pageSize]=3`)

export const getHimatifInfos = () =>
  axiosPublic.get('/himatif-infos/1?populate[0]=misi&populate[1]=kontak&populate[2]=tujuan.gambar')

export const getBlogs = (page: number) => axiosPublic.get(`${POST_URI}&pagination[page]=${page}&pagination[pageSize]=6`)

export const getBlog = (slug: string) =>
  axiosPublic.get(`/posts?filters[slug][$eq]=${slug}&populate=kategori,thumbnail`)

export const getBlogByCategories = (category: string) =>
  axiosPublic.get(`${POST_URI}&filters[kategori][slug][$eq]=${category}&${blogPagination}`)

export const getBlogByKeyword = (keyword: string) =>
  axiosPublic.get(`${POST_URI}&filters[judul][$contains]=${keyword}&${blogPagination}`)

export const getBlogByCategoryAndKeyword = (category: string, keyword: string) =>
  axiosPublic.get(
    `${POST_URI}&filters[judul][$contains]=${keyword}&filters[kategori][slug][$eq]=${category}&${blogPagination}`
  )

export const getMembers = (year: string) =>
  axiosPublic.get(`/members?populate=foto&filters[tahun_bergabung][$eq]=${year}`)

export const getYears = () => axiosPublic.get('/members?fields=tahun_bergabung')
export const getMemberDivisi = (year:string) => axiosPublic.get(`/members?filters[tahun_bergabung][$eq]=${year}&fields=divisi`)