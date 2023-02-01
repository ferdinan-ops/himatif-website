import Link from "next/link";
import React from "react";
import { sosialMedia } from "../../utils/data";

const About = () => {
   return (
      <section className="bg-white pt-14 md:pt-28">
         <div className="container mx-auto px-6 text-font-black md:px-0">
            <h1 className="relative z-10 mx-auto w-fit font-logo text-sm font-bold after:absolute after:left-0 after:bottom-[2px] after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-[''] md:text-lg md:after:bottom-1">
               Tentang HIMATIF
            </h1>
            <p className="mx-auto mt-[32px] text-justify leading-8 text-font-gray md:max-w-[90%] md:text-center md:text-xl md:leading-10">
               " Himpunan Mahasiswa Teknik Informatika (HIMATIF) dibentuk
               berdasarkan ide dan pemikiran Mahasiswa dan Dosen dengan
               mempertimbangkan aspek, yaitu menjadi salah satu organisasi resmi
               di Fakultas Ilmu Komputer Unika Santo Thomas SU, Mendukung Visi
               dan Misi Fakultas dan Universitas, Untuk kepentingan belajar
               Mahasiswa diluar Jam Kuliah, Dibentuk struktur organisasi, dengan
               elemen minimal : Ketua, Sekretaris Jendral, Bendahara, Divisi
               Kemahasiswaan, Divisi Akademik, Divisi HRD, Divisi Lomba, Divisi
               Humas, Divisi Informasi dan Teknologi, Divisi Promosi dan
               Dokumentasi, Divisi Kewirausahaan, Divisi Minat dan Bakat, Divisi
               Kreasi Mahasiswa, Divisi Seni dan Olah Raga, Pemilihan pengurus,
               periode kepengurusan ditentukan dan menurut suara terbanyak dari
               anggota, Pengurus harus berasal dari anggota Organisasi,
               Dilakukan rapat evaluasi. "
            </p>
            <span className="mx-auto my-5 block h-2 w-2 rounded-full bg-slate-200 md:h-3 md:w-3" />
            <div className="flex items-center justify-center gap-8 text-font-black">
               {sosialMedia.map((item, index) => (
                  <Link
                     key={index}
                     href={item.href}
                     className="rounded-full p-2 transition-all hover:bg-primary hover:text-white"
                  >
                     {item.icon}
                  </Link>
               ))}
            </div>
         </div>
         <div className="relative mt-20 h-64 overflow-x-hidden">
            <div className="radial-gradient absolute inset-x-0 top-0 h-20 w-[105%] origin-top-left rotate-6 overflow-hidden text-[#060919] md:rotate-[4deg] xl:h-28 xl:rotate-3">
               <span className="absolute top-1/2 w-max -translate-y-1/2 font-logo text-3xl font-bold xl:text-5xl">
                  HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
                  <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA
                  TEKNIK INFORMATIKA
               </span>
            </div>
            <div className="radial-gradient absolute -left-3 top-0 z-10 h-20 w-[105%] origin-top-right -rotate-6 overflow-hidden text-[#060919] shadow-2xl md:-rotate-[4deg] xl:h-28 xl:-rotate-3">
               <span className="absolute top-1/2 w-max -translate-y-1/2 font-logo text-3xl font-bold xl:text-5xl">
                  HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
                  <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA
                  TEKNIK INFORMATIKA
               </span>
            </div>
         </div>
      </section>
   );
};

export default About;
