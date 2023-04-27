interface ICategory {
  id: number
  attributes: {
    nama: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

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
    // formats: {
    //   thumbnail: {
    //     name: string
    //     hash: string
    //     ext: string
    //     mime: string
    //     path: string | null
    //     width: number
    //     height: number
    //     size: number
    //     url:string
    //     providerMetadata:{
    //       public_id: string
    //       resource_type: string
    //     }
    //   }
    // }
  }
}

export interface IBlog {
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
