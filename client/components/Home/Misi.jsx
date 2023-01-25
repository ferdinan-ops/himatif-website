import Image from "next/image";
import React from "react";

const Misi = () => {
   const test = async () => {
      const res = await fetch("http://localhost:3000/api/hello");
      const data = await res.json();
      console.log(data);
   };

   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto py-16 md:py-20">
            <div className="flex flex-row-reverse items-center gap-[100px]">
               <div className="relative h-[600px] w-[600px] flex-1 overflow-hidden rounded-lg">
                  <Image
                     src="https://source.unsplash.com/random/500×500/?purpose"
                     alt=""
                     fill="fill"
                     className="object-cover"
                  />
               </div>
               <div className="flex flex-1 flex-col gap-[52px]">
                  <h1 className="relative z-10 w-fit font-logo text-6xl font-bold leading-[72px] after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-5 after:w-full after:bg-primary/20 after:content-['']">
                     Misi HIMATIF
                  </h1>
                  <ul className="ml-5 list-disc marker:text-primary">
                     <li className="text-lg leading-9 text-font-gray">
                        Ikut dalam menyelenggarakan maupun mengikuti
                        penyelenggaraan kegiatan berhubungan dalam bidang IT
                     </li>
                     <li className="text-lg leading-9 text-font-gray">
                        Menghimpun mahasiswa/i agar dapat mengembangkan potensi
                        sesuai bidang keilmuannya
                     </li>
                     <li className="text-lg leading-9 text-font-gray">
                        Menjalin relasi antara HIMATIF terhadap sesama anggota
                        dan pengurus maupun terhapap mahasiswa/i teknik
                        informatika agar dapat menciptakan karya inovatif
                     </li>
                     <li className="text-lg leading-9 text-font-gray">
                        Meningkatkan dan menjaga mutu kerja HIMATIF yang
                        berkualitas
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Misi;
