import React from "react";
import Image from "next/image";
import { tujuan } from "../../utils/data";

const Tujuan = () => {
   return (
      <section className="bg-white">
         <div className="container mx-auto py-16 text-font-black md:py-28">
            <div className="flex flex-col items-center ">
               <h1 className="relative z-10 mx-auto w-fit font-logo text-lg font-bold after:absolute after:bottom-1 after:left-0 after:-z-10 after:h-2 after:w-full after:bg-primary/20 after:content-['']">
                  Tujuan HIMATIF
               </h1>
               <span className="mt-4 max-w-4xl text-center text-lg text-font-gray">
                  Organisasi Himpunan Mahasiswa Teknik Informatika (HIMATIF)
                  dibentuk untuk mencapai tujuan berikut
               </span>
            </div>
            <div className="mt-[104px] flex justify-between gap-20">
               {tujuan.map((item, index) => (
                  <div className="flex-1" key={index}>
                     <div className="relative h-[265px] w-full overflow-hidden rounded-lg">
                        <Image
                           src={item.image}
                           alt=""
                           fill="fill"
                           className="object-cover"
                        />
                     </div>
                     <div className="mt-6 flex flex-col gap-2">
                        <h2 className="font-logo text-3xl font-bold text-font-black">
                           {item.title}
                        </h2>
                        <p className="text-font-gray">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="radial-gradient relative h-28 overflow-hidden text-[#060919]">
            <span className="animation-1 absolute w-max font-logo text-5xl font-bold">
               HIMPUNAN MAHASISWA TEKNIK INFORMATIKA{" "}
               <span className="text-red-500">♥️</span> HIMPUNAN MAHASISWA
               TEKNIK INFORMATIKA
            </span>
         </div>
      </section>
   );
};

export default Tujuan;
