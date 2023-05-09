import { IThumbnail } from './blog.type'

interface IMemberAttribute {
  nama: string
  npm: string
  divisi: string
  jabatan: string
  photo?: {
    data: IThumbnail
  }
}

export interface IDivisi {
  id: number
  attributes: {
    nama_divisi: string
    slug: string
  }
}

export interface IYearMember {
  id: number
  attributes: {
    tahun_angkatan: string
  }
}

export interface IMember {
  id: number
  attributes: IMemberAttribute
}
