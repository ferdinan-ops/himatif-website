import { IThumbnail } from './blog.type'

export interface ITujuan {
  id: number
  judul: string
  deskripsi: string
  gambar: {
    data: IThumbnail
  }
}

export interface IContact {
  id: number
  email: string
  facebook_link: string
  instagram_link: string
  twitter_link: string
  youtube_link: string
  no_telp: string
}

export interface IContactData {
  data: {
    attributes: {
      kontak: IContact
    }
  }
}

export interface IMisi {
  id: number
  deskripsi_misi: string
}

export interface IHimatif {
  visi: string
  tentang: string
  misi: IMisi[]
  tujuan: ITujuan[]
  kontak: IContact
}
