import Link from "next/link";
import React from "react";
import { sosialMedia } from "../../utils/data";

const About = () => {
   return (
      <section className="bg-white pt-16 md:pt-28">
         <div className="container mx-auto text-font-black">
            <h1 className="relative z-10 mx-auto w-fit font-logo text-lg font-bold after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-['']">
               Tentang HIMATIF
            </h1>
            <p className="mx-auto mt-[32px] max-w-[90%] text-center text-xl leading-9 text-font-gray">
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
            <span className="mx-auto my-5 block h-3 w-3 rounded-full bg-slate-200" />
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
            <div className="radial-gradient absolute left-0 right-0 top-0 h-28 w-[105%] origin-top-left rotate-3 overflow-hidden text-[#060919]">
               <span className="absolute top-1/2 w-max -translate-y-1/2 font-logo text-5xl font-bold">
                  HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
                  <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA
                  TEKNIK INFORMATIKA
               </span>
            </div>
            <div className="radial-gradient absolute -left-3 top-0 z-10 h-28 w-[105%] origin-top-right -rotate-3 overflow-hidden text-[#060919] shadow-2xl">
               <span className="absolute top-1/2 w-max -translate-y-1/2 font-logo text-5xl font-bold">
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
