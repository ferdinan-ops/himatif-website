import React from "react";

const About = () => {
   const test = async () => {
      const res = await fetch("http://localhost:3000/api/hello");
      const data = await res.json();
      console.log(data);
   };

   return (
      <section className="bg-white">
         <div className="container mx-auto py-16 text-font-black md:py-20">
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
         </div>
      </section>
   );
};

export default About;
