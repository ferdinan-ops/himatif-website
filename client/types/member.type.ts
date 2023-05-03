import { IThumbnail } from "./blog.type"

export interface IMember {
  id: number,
  attributes: {
    nama: string
    npm: string
    divisi: string
    jabatan: string
    tahun_bergabung: string
    photo: IThumbnail
  }
}