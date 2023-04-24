import axios from 'axios'

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  withCredentials: true,
  headers: { 'Content-Type': 'Application/json' }
})

export const getBlogs = () => API.get('/posts?populate=kategori,thumbnail&sort=tanggal:desc')
export const getHimatifInfos = () => API.get('/himatif-infos/2?populate[tujuan][populate][0]=gambar&populate=misi')
export const getBlogsFeatures = () =>
  API.get('/posts?populate=kategori,thumbnail&sort=tanggal:desc&filters[featured][$eq]=true')
