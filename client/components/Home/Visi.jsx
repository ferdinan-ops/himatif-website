import Image from "next/image";
import React from "react";
import { VisiImg } from "../../assets";

const Visi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto py-14 px-6 md:px-0 md:py-28">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-[100px]">
               <Image
                  src={VisiImg}
                  alt=""
                  className="w-full flex-1 overflow-hidden rounded-lg object-cover md:w-[600px]"
               />
               <div className="flex flex-1 flex-col gap-6 md:gap-[52px]">
                  <h1 className="relative z-10 w-fit font-logo text-4xl font-bold after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-3 after:w-full after:bg-primary/20 after:content-[''] md:text-6xl md:leading-[72px] md:after:bottom-1 md:after:h-5">
                     Visi HIMATIF
                  </h1>
                  <p className="text-base leading-7 text-font-gray md:text-xl md:leading-9">
                     "Menjadi sebuah organisasi untuk menghimpun para
                     mahasiswa/i yang berperan aktif dalam pengembangan
                     kreativitas dan produktivitas dalam berkarya, terkhusus nya
                     dalam bidang teknik informatika baik dalam lingkup kampus
                     maupun diluar kampus."
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Visi;
