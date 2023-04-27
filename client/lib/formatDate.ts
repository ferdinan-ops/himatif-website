export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('En-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
}

export const formatDateHero = (dateStr: string) => {
  // Buat objek Date dari string
  const date: Date = new Date(dateStr)

  // Ambil nilai tanggal, bulan, dan tahun
  const day: number = date.getDate()
  const month: number = date.getMonth() + 1
  const year: number = date.getFullYear()

  // Tambahkan "0" pada angka bulan dan tanggal jika nilainya kurang dari 10
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`

  // Gabungkan tanggal, bulan, dan tahun dengan format "DD.MM.YYYY"
  const formattedDate: string = `${formattedDay}.${formattedMonth}.${year}`

  return formattedDate
}
