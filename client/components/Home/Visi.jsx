import Image from "next/image";
import React from "react";
import { VisiImg } from "../../assets";

const Visi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto py-16 md:py-28">
            <div className="flex items-center gap-[100px]">
               <Image
                  src={VisiImg}
                  alt=""
                  className="w-[600px] flex-1 overflow-hidden rounded-lg object-cover"
               />
               <div className="flex flex-1 flex-col gap-[52px]">
                  <h1 className="relative z-10 w-fit font-logo text-6xl font-bold leading-[72px] after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-5 after:w-full after:bg-primary/20 after:content-['']">
                     Visi HIMATIF
                  </h1>
                  <p className="text-xl leading-9 text-font-gray">
                     Menjadi sebuah organisasi untuk menghimpun para mahasiswa/i
                     yang berperan aktif dalam pengembangan kreativitas dan
                     produktivitas dalam berkarya, terkhusus nya dalam bidang
                     teknik informatika baik dalam lingkup kampus maupun diluar
                     kampus.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Visi;
