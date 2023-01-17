import Image from "next/image";
import React from "react";
import { Banner } from "../../assets";

const Hero = () => {
   return (
      <section className="min-h-screen bg-black relative font-sans">
         <div className="flex w-full h-full z-0 absolute bg-[#343A40]">
            <div className="relative w-full h-full">
               <Image
                  src={Banner}
                  alt=""
                  fill="fill"
                  className="object-cover"
               />
            </div>
         </div>
         <div className="container mx-auto relative pt-20 w-full h-full flex">
            <div className="flex flex-col">
               <button className="uppercase font-bold text-xs">
                  pertemuan
               </button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
