import { IThumbnail } from './blog.type'

export  interface IMemberAttributeWithoutDivisi {
  nama: string
  npm: string
  jabatan: string
  tahun_bergabung: string
  photo?: {
    data: IThumbnail
  }
}

interface IMemberAttribute {
  nama: string
  npm: string
  divisi: string
  jabatan: string
  tahun_bergabung: string
  photo?: {
    data: IThumbnail
  }
}

export interface IMember {
  id: number
  attributes: IMemberAttribute
}

export interface IMemberByDivisi {
  [divisi: string]: IMemberAttributeWithoutDivisi[]
}
