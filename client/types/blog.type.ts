import { ICategory } from './category.type'

export interface IThumbnail {
  id: number
  attributes: {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    hash: string
    ext: string
    mime: string
    size: string
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: {
      public_id: string
      resource_type: string
    }
  }
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface IBlogMeta {
  description?: string
  category?: string
  title?: string
  image?: string
}

export interface IBlogData {
  id: number
  attributes: {
    judul: string
    slug: string
    konten: string
    deskripsi: string
    tanggal: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    featured: boolean
    kategori: {
      data: ICategory
    }
    thumbnail: {
      data: IThumbnail
    }
  }
}

export interface IBlog {
  data: IBlogData[]
  meta: {
    pagination: Pagination
  }
}
