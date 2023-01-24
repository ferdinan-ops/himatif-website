import Image from "next/image";
import React from "react";

const Visi = () => {
   return (
      <section className="bg-white text-font-black">
         <div className="container mx-auto py-16 md:py-20">
            <div className="flex items-center gap-[100px]">
               <div className="relative h-[600px] w-[600px] flex-1 overflow-hidden rounded-lg">
                  <Image
                     src="https://source.unsplash.com/random/500×500/?university"
                     alt=""
                     fill="fill"
                     className="object-cover"
                  />
               </div>
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
