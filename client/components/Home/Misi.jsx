import Image from "next/image";
import React from "react";
import { MisiImg } from "../../assets";

const Misi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto py-14 px-6 md:py-28 md:px-0">
            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-[100px]">
               <Image
                  src={MisiImg}
                  alt=""
                  className="w-full flex-1 overflow-hidden rounded-lg object-cover md:w-[600px]"
               />
               <div className="flex flex-1 flex-col gap-6 md:gap-[52px]">
                  <h1 className="relative z-10 w-fit font-logo text-4xl font-bold after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-3 after:w-full after:bg-primary/20 after:content-[''] md:text-6xl md:leading-[72px] md:after:bottom-1 md:after:h-5">
                     Misi HIMATIF
                  </h1>
                  <ul className="ml-5 list-disc text-base leading-7 marker:text-primary md:text-lg md:leading-9">
                     <li className="text-font-gray">
                        Ikut dalam menyelenggarakan maupun mengikuti
                        penyelenggaraan kegiatan berhubungan dalam bidang IT
                     </li>
                     <li className="text-font-gray">
                        Menghimpun mahasiswa/i agar dapat mengembangkan potensi
                        sesuai bidang keilmuannya
                     </li>
                     <li className="text-font-gray">
                        Menjalin relasi antara HIMATIF terhadap sesama anggota
                        dan pengurus maupun terhapap mahasiswa/i teknik
                        informatika agar dapat menciptakan karya inovatif
                     </li>
                     <li className="text-font-gray">
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
