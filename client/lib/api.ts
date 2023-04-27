import axios from 'axios'
const axiosPublic = axios.create({
  baseURL: process.env.API_URI,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getBlogsFeatures = () =>
  axiosPublic.get('/posts?populate=kategori,thumbnail&sort=tanggal:desc&filters[featured][$eq]=true')

export const getHimatifInfos = () =>
  axiosPublic.get('/himatif-infos/1?populate[0]=misi&populate[1]=tujuan.gambar&populate[2]=kontak&')

export const getBlogs = () => axiosPublic.get('/posts?populate=kategori,thumbnail&sort=tanggal:desc')
export const getCategories = () => axiosPublic.get('/categories?sort=nama:asc')
export const getBlog = (slug: string) =>
  axiosPublic.get(`/posts?filters[slug][$eq]=${slug}&populate=kategori,thumbnail`)
