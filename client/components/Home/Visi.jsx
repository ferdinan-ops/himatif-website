import Image from "next/image";
import React from "react";
import { VisiImg } from "../../assets";

const Visi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto -mt-10 px-6 pb-14 md:mt-4 md:px-0 xl:mt-0 xl:py-28">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 xl:gap-[100px]">
               <Image
                  src={VisiImg}
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
                     Visi HIMATIF
                  </h1>
                  <p className="text-base leading-7 text-font-gray xl:text-xl xl:leading-9">
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
