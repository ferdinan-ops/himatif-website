import Image from "next/image";
import React from "react";
import { MisiImg } from "../../assets";

const Misi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto md:py-14 px-6 xl:px-0 xl:py-28">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 xl:gap-[100px]">
               <Image
                  src={MisiImg}
                  alt=""
                  className="w-full flex-1 overflow-hidden rounded-lg object-cover md:w-[600px]"
               />
               <div className="flex flex-1 flex-col gap-6 md:gap-8 xl:gap-[52px]">
                  <h1
                     className="
                     relative z-10 w-fit font-logo text-4xl font-bold 
                     after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-3 after:w-full after:bg-primary/20 after:content-[''] 
                     md:text-4xl 
                     xl:text-6xl xl:leading-[72px] xl:after:bottom-1 xl:after:h-5
                     "
                  >
                     Misi HIMATIF
                  </h1>
                  <ul className="ml-5 list-disc text-sm leading-6 marker:text-primary xl:text-lg xl:leading-9">
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
