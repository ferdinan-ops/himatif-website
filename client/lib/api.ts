import axios from 'axios'

const axiosPublic = axios.create({
  baseURL: process.env.API_URI,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getCategories = () => axiosPublic.get('/categories?sort=nama:asc')
export const getContact = () => axiosPublic.get('/himatif-infos/1?populate[0]=kontak&fields[1]=id')

export const getBlogsFeatures = () =>
  axiosPublic.get('/posts?populate=kategori,thumbnail&sort=tanggal:desc&filters[featured][$eq]=true&pagination[pageSize]=3')

export const getHimatifInfos = () =>
  axiosPublic.get('/himatif-infos/1?populate[0]=misi&populate[1]=kontak&populate[2]=tujuan.gambar')

export const getBlogs = (page: number) =>
  axiosPublic.get(`/posts?populate=kategori,thumbnail&sort=tanggal:desc&pagination[page]=${page}&pagination[pageSize]=6`)

export const getBlog = (slug: string) =>
  axiosPublic.get(`/posts?filters[slug][$eq]=${slug}&populate=kategori,thumbnail`)
