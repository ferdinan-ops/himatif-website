import React from "react";
import Image from "next/image";
import { tujuan } from "../../utils/data";

const Tujuan = () => {
   return (
      <section className="bg-white">
         <div className="container mx-auto py-14 px-6 text-font-black md:py-28 xl:px-0">
            <div className="flex flex-col items-center ">
               <h1 className="relative z-10 mx-auto w-fit font-logo text-sm font-bold after:absolute after:left-0 after:bottom-[2px] after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-[''] md:text-lg md:after:bottom-1">
                  Tujuan HIMATIF
               </h1>
               <span className="mt-4 text-center text-base text-font-gray md:max-w-[90%] xl:max-w-4xl xl:text-xl">
                  Organisasi Himpunan Mahasiswa Teknik Informatika (HIMATIF)
                  dibentuk untuk mencapai tujuan berikut
               </span>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-10 md:mt-20 md:flex-row md:flex-wrap md:justify-start md:gap-20 xl:mt-[104px] xl:flex-nowrap xl:gap-20">
               {tujuan.map((item, index) => (
                  <div className="flex-1" key={index}>
                     <div className="relative h-[200px] w-full overflow-hidden rounded-lg md:h-[265px]">
                        <Image
                           src={item.image}
                           alt=""
                           fill="fill"
                           className="object-cover"
                        />
                     </div>
                     <div className="mt-6 flex flex-col gap-2">
                        <h2 className="font-logo text-xl font-bold text-font-black md:text-3xl">
                           {item.title}
                        </h2>
                        <p className="text-sm text-font-gray md:text-base">
                           {item.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="radial-gradient relative h-20 overflow-hidden text-[#060919] xl:h-28">
            <span className="animation-1 absolute w-max font-logo text-3xl font-bold xl:text-5xl">
               HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
               <span className="text-red-500">??????</span> HIMPUNAN MAHASISWA
               TEKNIK INFORMATIKA
            </span>
         </div>
      </section>
   );
};

export default Tujuan;
